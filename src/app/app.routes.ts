import { Routes } from '@angular/router';
import { LoginPage } from './authentication/pages/login/LoginPage/LoginPage';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
 {
    path: 'home',
    canActivate: [authGuard],
    loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

