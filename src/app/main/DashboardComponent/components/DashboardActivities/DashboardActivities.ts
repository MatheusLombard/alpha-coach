import { Component, input } from '@angular/core';
import { RecentActivity } from '../../../../types/dashboard';

@Component({
  selector: 'app-dashboard-activities',
  imports: [],
  templateUrl: './DashboardActivities.html',
  styleUrl: './DashboardActivities.css',
})
export class DashboardActivities {
  items = input<RecentActivity[]>([]);

  public initials(name: string): string {
    return name.slice(0, 2).toUpperCase();
  }
}
