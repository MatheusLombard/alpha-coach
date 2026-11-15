import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Matricula, MatriculaRequest, StatusMatricula } from '../../types/matricula';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/matricula`;

// GET /matricula/todos devolve a entidade (aluno/plano aninhados); POST e
// PATCH devolvem um DTO achatado (alunoId/planoId). normalize() junta os
// dois formatos num único shape pro frontend.
interface MatriculaRaw {
  id: number;
  aluno?: { id: number; nome: string };
  plano?: { id: number; descricao: string; tipoPlano?: string };
  alunoId?: number;
  planoId?: number;
  statusMatricula: StatusMatricula;
  dataInicio: string;
  parcelas?: unknown[];
}

function normalize(raw: MatriculaRaw): Matricula {
  return {
    id: raw.id,
    alunoId: raw.aluno?.id ?? raw.alunoId!,
    alunoNome: raw.aluno?.nome,
    planoId: raw.plano?.id ?? raw.planoId!,
    planoDescricao: raw.plano?.descricao,
    planoTipo: raw.plano?.tipoPlano,
    status: raw.statusMatricula,
    dataInicio: raw.dataInicio,
    totalParcelas: raw.parcelas?.length,
  };
}

@Injectable({ providedIn: 'root' })
export class MatriculaService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findMatriculas(): Observable<Matricula[]> {
    return this.http
      .get<MatriculaRaw[]>(`${url}/todos`, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => (lista ?? []).map(normalize)));
  }

  public createMatricula(request: MatriculaRequest): Observable<Matricula> {
    return this.http
      .post<MatriculaRaw>(url, request, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public cancelarMatricula(id: number): Observable<Matricula> {
    return this.http
      .patch<MatriculaRaw>(`${url}/${id}/desativar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }
}
