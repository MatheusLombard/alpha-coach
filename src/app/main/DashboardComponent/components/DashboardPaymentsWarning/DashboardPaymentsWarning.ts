import { Component, computed, input } from '@angular/core';
import { Customer } from '../../../../types/dashboard';

@Component({
  selector: 'app-dashboard-payments-warning',
  imports: [],
  templateUrl: './DashboardPaymentsWarning.html',
  styleUrl: './DashboardPaymentsWarning.css',
})
export class DashboardPaymentsWarning {
  customersWarning = input<Customer[]>([]);

  customersData = computed(() => {
    return this.customersWarning().map((item) => ({
      ...item,
      dataFormat: this.formatDate(this.date(item.time)),
      classColor: this.classFormat(this.date(item.time)),
    }));
  });

  private date = (time: string): number => {
    const paymentDate = new Date(time);
    const actualDate = new Date();

    const diffMs = paymentDate.setHours(0, 0, 0, 0) - actualDate.setHours(0, 0, 0, 0);

    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  };

  private formatDate = (diffDays: number): string => {
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Amanhã';
    if (diffDays > 1) return `Em ${diffDays} dias`;
    return `Vencido`;
  };

  private classFormat = (diffDays: number): string => {
    if (diffDays <= 0) return 'danger';
    if (diffDays === 1) return 'warning';
    return 'info';
  };
}
