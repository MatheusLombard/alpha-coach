import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { API_BASE_URL } from '../constants/api.constant';

const TOKEN_STORAGE_KEY = 'alphacoach_token';
const url = `${API_BASE_URL}/auth`;

export interface CurrentUser {
  userId: number;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  private token = signal<string | null>(localStorage.getItem(TOKEN_STORAGE_KEY));

  public isAuthenticated = computed(() => !!this.token());

  public login(email: string, password: string): Observable<void> {
    return this.http.post<{ token: string }>(`${url}/login`, { email, password }).pipe(
      tap((res) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, res.token);
        this.token.set(res.token);
      }),
      map(() => void 0),
    );
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    this.token.set(null);
  }

  public getAuthHeaders(): HttpHeaders {
    const token = this.token();
    return token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
  }

  // O backend não devolve dados do usuário em lugar nenhum (nem no login,
  // nem num /auth/me) — o JWT (ver TokenConfig.java) só carrega "userId" e
  // "sub" (email). Isso só decodifica o payload pra exibir quem está
  // logado, não valida a assinatura (quem faz isso é o backend).
  public getCurrentUser(): CurrentUser | null {
    const token = this.token();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      const claims = JSON.parse(json);
      return { userId: claims.userId, email: claims.sub };
    } catch {
      return null;
    }
  }
}
