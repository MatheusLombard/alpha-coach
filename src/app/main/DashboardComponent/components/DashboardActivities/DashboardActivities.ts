import { Component, inject } from '@angular/core';
import { RecentActivity } from '../../../../types/dashboard';
import { DashboardService } from '../../../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-activities',
  imports: [],
  templateUrl: './DashboardActivities.html',
  styleUrl: './DashboardActivities.css',
})
export class DashboardActivities {
  private dashboardService = inject(DashboardService);

  listRecentActivities: RecentActivity[] = this.dashboardService.getRecentActivities();
}
