import { Routes } from '@angular/router';
import { LoginPage } from './authentication/pages/login/LoginPage/LoginPage';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
 {
    path: 'home',
    loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

