import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { Brand } from '../../shared/components/Brand/Brand';
import { Buttons } from "../../shared/components/Buttons/Buttons";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main-layout-component',
  imports: [RouterOutlet, Brand, Buttons],
  templateUrl: './MainLayoutComponent.html',
  styleUrl: './MainLayoutComponent.css',
})
export class MainLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public currentUser = this.authService.getCurrentUser();

  public sair() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
