import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Plano, PlanoRequest } from '../../types/plano';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/planos`;

@Injectable({ providedIn: 'root' })
export class PlanoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>(url, { headers: this.auth.getAuthHeaders() });
  }

  public createPlano(plano: PlanoRequest): Observable<Plano> {
    return this.http
      .post<{ plano: Plano }>(url, plano, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => res.plano));
  }

  public updatePlano(id: number, plano: Partial<PlanoRequest>): Observable<Plano> {
    return this.http
      .patch<{ plano: Plano }>(`${url}/${id}`, plano, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => res.plano));
  }

  public ativarPlano(id: number): Observable<Plano> {
    return this.http
      .patch<{ plano: Plano }>(`${url}/${id}/ativar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => res.plano));
  }

  public desativarPlano(id: number): Observable<Plano> {
    return this.http
      .patch<{ plano: Plano }>(`${url}/${id}/desativar`, {}, { headers: this.auth.getAuthHeaders() })
      .pipe(map((res) => res.plano));
  }
}
