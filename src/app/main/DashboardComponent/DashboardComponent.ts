import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from "./components/Card/Card";
import { Panel } from "../../shared/components/Panel/Panel";
import { DashboardActivities } from "./components/DashboardActivities/DashboardActivities";
import { DashboardDistribution } from "./components/DashboardDistribution/DashboardDistribution";
import { DashboardPaymentsWarning } from './components/DashboardPaymentsWarning/DashboardPaymentsWarning';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-component',
  imports: [Card, Panel, DashboardActivities, DashboardDistribution, DashboardPaymentsWarning],
  templateUrl: './DashboardComponent.html',
  styleUrl: './DashboardComponent.css',
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);

  private snapshotResource = rxResource({ stream: () => this.dashboardService.getSnapshot() });

  public dashboardCards = computed(() => this.snapshotResource.value()?.cards ?? []);
  public recentActivities = computed(() => this.snapshotResource.value()?.recentActivities ?? []);
  public plansDistribution = computed(() => this.snapshotResource.value()?.plansDistribution ?? []);
  public paymentsWarning = computed(() => this.snapshotResource.value()?.paymentsWarning ?? []);
}
