import { Component, inject } from '@angular/core';
import { Card } from "./components/Card/Card";
import { Panel } from "../../shared/components/Panel/Panel";
import { DashboardActivities } from "./components/DashboardActivities/DashboardActivities";
import { DashboardDistribution } from "./components/DashboardDistribution/DashboardDistribution";
import { DashboardPaymentsWarning } from './components/DashboardPaymentsWarning/DashboardPaymentsWarning';
import { DashboardCard } from '../../types/dashboard';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-component',
  imports: [Card, Panel, DashboardActivities, DashboardDistribution, DashboardPaymentsWarning],
  templateUrl: './DashboardComponent.html',
  styleUrl: './DashboardComponent.css',
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);

  dashboardCards: DashboardCard[] = this.dashboardService.getCards();
}
