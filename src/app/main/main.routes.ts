import { Routes } from '@angular/router'
import { MainLayoutComponent } from "./MainLayoutComponent/MainLayoutComponent";
import { DashboardComponent } from './DashboardComponent/DashboardComponent';

export const mainRoutes : Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'alunos',
        component: DashboardComponent,
      },
      {
        path: 'treinos',
        component: DashboardComponent,
      },
      {
        path: 'financeiro',
        component: DashboardComponent,
      },
      {
        path: 'exercicio',
        component: DashboardComponent,
      },
      {
        path: 'perfil',
        component: DashboardComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
]

export default mainRoutes;
