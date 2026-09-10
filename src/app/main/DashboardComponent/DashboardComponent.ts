import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from "./components/card/card";
import { FormField } from "@angular/forms/signals";
import { Panel } from "./components/panel/panel";
import { DashboardActivities } from "./components/dashboard-activities/dashboard-activities";

@Component({
  selector: 'app-dashboard-component',
  imports: [Card, FormField, Panel, DashboardActivities],
  templateUrl: './DashboardComponent.html',
  styleUrl: './DashboardComponent.css',
})
export class DashboardComponent {

  dashboardCards = [
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
