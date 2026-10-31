import { Component, inject } from '@angular/core';
import { PlanDistribution } from '../../../../types/dashboard';
import { DashboardService } from '../../../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-distribution',
  imports: [],
  templateUrl: './DashboardDistribution.html',
  styleUrl: './DashboardDistribution.css',
})
export class DashboardDistribution {
  private dashboardService = inject(DashboardService);

  qtdTotalAlunos = 30
  plans: PlanDistribution[] = this.dashboardService.getPlansDistribution();

  percentage(value: number) {
    return (value/this.qtdTotalAlunos)*100;
  }
}
