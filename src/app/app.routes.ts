import { Routes } from '@angular/router';
import { LoginPage } from './authentication/pages/login/login-page/login-page';

export const routes: Routes = [
  // {
  //   path: '**',
  //   component: LoginPage
  // },
  {
    path: 'login',
    component: LoginPage,
  },
 {
    path: 'home',
    loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes), //.then(m => m.countryRoutes)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

