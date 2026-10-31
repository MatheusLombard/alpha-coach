import { Routes } from '@angular/router'
import { MainLayoutComponent } from "./MainLayoutComponent/MainLayoutComponent";
import { DashboardComponent } from './DashboardComponent/DashboardComponent';
import { StudentComponent } from './StudentComponent/StudentComponent';
import { FinancialComponent } from './FinancialComponent/FinancialComponent';
import { ExerciseComponent } from './ExerciseComponent/ExerciseComponent';
import { ProfileComponent } from './ProfileComponent/ProfileComponent';
import { TrainingComponent } from './TrainingComponent/TrainingComponent';

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
        component: StudentComponent,
      },
      {
        path: 'treinos',
        component: TrainingComponent,
      },
      {
        path: 'financeiro',
        component: FinancialComponent,
      },
      {
        path: 'exercicio',
        component: ExerciseComponent,
      },
      {
        path: 'perfil',
        component: ProfileComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
]

export default mainRoutes;
