import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from "./components/card/card";
import { Panel } from "../../shared/components/panel/panel";
import { DashboardActivities } from "./components/dashboard-activities/dashboard-activities";
import { DashboardDistribution } from "./components/dashboard-distribution/dashboard-distribution";
import { DashboardPaymentsWarning } from './components/dashboard-payments-warning/dashboard-payments-warning';

interface DashboardCards {
  label: string,
  value: string,
  type: 'up' | 'down',
}

@Component({
  selector: 'app-dashboard-component',
  imports: [Card, Panel, DashboardActivities, DashboardDistribution, DashboardPaymentsWarning],
  templateUrl: './DashboardComponent.html',
  styleUrl: './DashboardComponent.css',
})
export class DashboardComponent {

  dashboardCards: DashboardCards[] = [
    {
      label: 'Alunos Ativos',
      value: '34',
      type: 'up'
    },
    {
      label: 'Treinos Este Mês',
      value: '128',
      type: 'up'
    },
    {
      label: 'Receita mensal',
      value: '8.400',
      type: 'down'
    },
    {
      label: 'Vencendo(7 dias)',
      value: '6',
      type: 'down'
    }

  ]
}
