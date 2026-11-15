import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Treino, TreinoRequest } from '../../types/training';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/treinos`;

// GET /treinos devolve a entidade crua (aluno/exercicios aninhados); POST,
// PATCH, ativar e desativar devolvem { treino: {...mesma entidade...} },
// mesmo padrão de envelope usado em Planos e Parcela.
interface ExercicioTreinoRaw {
  id: number;
  exercicio?: { id: number; nome: string; linkVideo?: string };
  series: number;
  repeticoes: number;
  carga: string;
  tempoDescanso?: number;
  observacao?: string;
}

interface TreinoRaw {
  id: number;
  nome: string;
  aluno?: { id: number; nome: string };
  alunoId?: number;
  dataCriacao?: string;
  status?: boolean;
  exercicios?: ExercicioTreinoRaw[];
}

function normalize(raw: TreinoRaw): Treino {
  return {
    id: raw.id,
    nome: raw.nome,
    alunoId: raw.aluno?.id ?? raw.alunoId!,
    alunoNome: raw.aluno?.nome,
    dataCriacao: raw.dataCriacao,
    ativo: raw.status ?? true,
    exercicios: (raw.exercicios ?? []).map((item) => ({
      id: item.id,
      exercicioId: item.exercicio?.id ?? 0,
      exercicioNome: item.exercicio?.nome ?? 'Exercício',
      series: item.series,
      repeticoes: item.repeticoes,
      carga: item.carga,
      tempoDescanso: item.tempoDescanso,
      observacao: item.observacao,
    })),
  };
}

@Injectable({ providedIn: 'root' })
export class TreinoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findTreinos(): Observable<Treino[]> {
    return this.http
      .get<TreinoRaw[]>(url, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => (lista ?? []).map(normalize)));
  }

  public createTreino(treino: TreinoRequest): Observable<Treino> {
    return this.http
      .post<{ treino: TreinoRaw }>(url, treino, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => normalize(res.treino)));
  }

  public ativarTreino(id: number): Observable<Treino> {
    return this.http
      .patch<{ treino: TreinoRaw }>(`${url}/${id}/ativar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => normalize(res.treino)));
  }

  public desativarTreino(id: number): Observable<Treino> {
    return this.http
      .patch<{ treino: TreinoRaw }>(`${url}/${id}/desativar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => normalize(res.treino)));
  }

  public downloadFicha(id: number): Observable<Blob> {
    return this.http.get(`${url}/${id}/relatorio/download`, {
      headers: this.auth.getAuthHeaders(),
      responseType: 'blob',
    });
  }
}
