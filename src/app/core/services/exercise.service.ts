import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Exercise, ExerciseRequest } from '../../types/exercise';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/exercicios`;

// GET /exercicios e /exercicios/todos devolvem a entidade (linkVideo/ativo);
// POST, PATCH e as rotas de remover/recuperar devolvem um DTO com nomes
// diferentes (link/status). normalize() junta os dois num shape só.
interface ExercicioRaw {
  id: number;
  nome: string;
  descricao: string;
  linkVideo?: string;
  link?: string;
  ativo?: boolean;
  status?: boolean;
}

function normalize(raw: ExercicioRaw): Exercise {
  return {
    id: raw.id,
    nome: raw.nome,
    descricao: raw.descricao,
    linkVideo: raw.linkVideo ?? raw.link,
    ativo: raw.ativo ?? raw.status ?? true,
  };
}

function toPayload(exercise: Partial<ExerciseRequest>): Record<string, string> {
  const payload: Record<string, string> = {};
  if (exercise.nome !== undefined) payload['nome'] = exercise.nome;
  if (exercise.descricao !== undefined) payload['descricao'] = exercise.descricao;
  if (exercise.linkVideo !== undefined) payload['link'] = exercise.linkVideo;
  return payload;
}

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findExercises(): Observable<Exercise[]> {
    return this.http
      .get<ExercicioRaw[]>(url, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => (lista ?? []).map(normalize)));
  }

  public createExercise(exercise: ExerciseRequest): Observable<Exercise> {
    return this.http
      .post<ExercicioRaw>(url, toPayload(exercise), { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public updateExercise(id: number, exercise: Partial<ExerciseRequest>): Observable<Exercise> {
    return this.http
      .patch<ExercicioRaw>(`${url}/${id}`, toPayload(exercise), { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public desativarExercise(id: number): Observable<Exercise> {
    return this.http
      .patch<ExercicioRaw>(`${url}/${id}/remover`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }

  public recuperarExercise(id: number): Observable<Exercise> {
    return this.http
      .patch<ExercicioRaw>(`${url}/${id}/recuperarExercicio`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map(normalize));
  }
}
