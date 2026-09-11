import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  selector: 'app-dashboard-distribution',
  imports: [],
  templateUrl: './dashboard-distribution.html',
  styleUrl: './dashboard-distribution.css',
})
export class DashboardDistribution {
  qtdTotalAlunos = 30
  plans = [
    {
      label: 'Presencial',
      value: 21,
      color: 'info',
    },
    {
      label: 'Online',
      value: 9,
      color: 'success',
    },
    {
      label: 'Híbrido',
      value: 4,
      color: 'warning',
    },
  ];

  percentage(value: number) {
    return (value/this.qtdTotalAlunos)*100;
  }
}
