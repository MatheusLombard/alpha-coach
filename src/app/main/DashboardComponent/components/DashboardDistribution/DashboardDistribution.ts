import { Component, computed, input } from '@angular/core';
import { PlanDistribution } from '../../../../types/dashboard';

@Component({
  selector: 'app-dashboard-distribution',
  imports: [],
  templateUrl: './DashboardDistribution.html',
  styleUrl: './DashboardDistribution.css',
})
export class DashboardDistribution {
  plans = input<PlanDistribution[]>([]);

  private total = computed(() => this.plans().reduce((acc, item) => acc + item.value, 0));

  public percentage(value: number) {
    const total = this.total();
    return total === 0 ? 0 : (value / total) * 100;
  }
}
