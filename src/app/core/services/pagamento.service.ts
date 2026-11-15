import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagamentoRequest } from '../../types/pagamento';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

const url = `${API_BASE_URL}/pagamento`;

@Injectable({ providedIn: 'root' })
export class PagamentoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public registrarPagamento(request: PagamentoRequest): Observable<unknown> {
    return this.http.post(url, request, { headers: this.auth.getAuthHeaders() });
  }
}
