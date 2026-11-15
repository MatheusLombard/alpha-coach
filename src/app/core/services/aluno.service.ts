import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AlterAlunoRequest, Aluno, AlunoRequest } from '../../types/aluno';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/alunos`;

interface AlunoRaw {
  id: number;
  nome: string;
  email: string;
  cpf?: string;
  dataNascimento?: string;
  telefone?: string;
  objetivo?: string;
  anamnese?: string;
  tipoAluno: Aluno['tipoAluno'];
  endereco?: string;
  ativo?: boolean;
}

function normalize(raw: AlunoRaw): Aluno {
  return {
    id: raw.id,
    nome: raw.nome,
    email: raw.email,
    cpf: raw.cpf,
    dataNascimento: raw.dataNascimento,
    telefone: raw.telefone,
    objetivo: raw.objetivo,
    anamnese: raw.anamnese,
    tipoAluno: raw.tipoAluno,
    endereco: raw.endereco,
    ativo: raw.ativo ?? true,
  };
}

@Injectable({ providedIn: 'root' })
export class AlunoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findAlunosAtivos(): Observable<Aluno[]> {
    return this.http
      .get<AlunoRaw[]>(url, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => (lista ?? []).map(normalize)));
  }

  public findAlunosTodos(): Observable<Aluno[]> {
    return this.http
      .get<AlunoRaw[]>(`${url}/todos`, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => (lista ?? []).map(normalize)));
  }

  public createAluno(aluno: AlunoRequest): Observable<Aluno> {
    return this.http
      .post<AlunoRaw>(url, aluno, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public updateAluno(id: number, aluno: AlterAlunoRequest): Observable<Aluno> {
    return this.http
      .patch<AlunoRaw>(`${url}/${id}`, aluno, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public inativarAluno(id: number): Observable<Aluno> {
    return this.http
      .patch<AlunoRaw>(`${url}/${id}/remover`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public recuperarAluno(id: number): Observable<Aluno> {
    return this.http
      .patch<AlunoRaw>(`${url}/${id}/recuperar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }
}
