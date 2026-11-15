import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { InputText } from "../../../../shared/components/InputText/InputText";
import { Buttons } from "../../../../shared/components/Buttons/Buttons";
import { Brand } from "../../../../shared/components/Brand/Brand";
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [InputText, Buttons, Brand],
  templateUrl: './LoginPage.html',
})
export class LoginPage {
  private authService = inject(AuthService);
  private router = inject(Router);

  public email = signal<string>('');
  public password = signal<string>('');
  public mensagemErro = signal<string>('');
  public carregando = signal<boolean>(false);

  constructor() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home/dashboard']);
    }
  }

  public entrar() {
    if (!this.email() || !this.password()) {
      this.mensagemErro.set('Informe email e senha.');
      return;
    }

    this.carregando.set(true);
    this.mensagemErro.set('');

    this.authService.login(this.email(), this.password()).subscribe({
      next: () => {
        this.carregando.set(false);
        this.router.navigate(['/home/dashboard']);
      },
      error: (err) => {
        this.carregando.set(false);
        this.mensagemErro.set(
          err?.status === 401 || err?.status === 403
            ? 'Email ou senha incorretos.'
            : (err?.error?.message ?? 'Não foi possível entrar. Tente novamente.'),
        );
      },
    });
  }
}
