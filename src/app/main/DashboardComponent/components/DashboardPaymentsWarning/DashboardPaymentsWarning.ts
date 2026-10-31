import { Component, computed, inject, signal } from '@angular/core';
import { Customer } from '../../../../types/dashboard';
import { DashboardService } from '../../../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-payments-warning',
  imports: [],
  templateUrl: './DashboardPaymentsWarning.html',
  styleUrl: './DashboardPaymentsWarning.css',
})
export class DashboardPaymentsWarning {
  private dashboardService = inject(DashboardService);

  customersWarning = signal<Customer[]>(this.dashboardService.getPaymentsWarning());

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

    const actualDay = actualDate.getDate();
    const paymentDay = paymentDate.getUTCDate();

    const diffDays = paymentDay - actualDay;

    return diffDays;
  };

  private formatDate = (diffDays: number): string => {
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Amanhã';
    if (diffDays > 1) return `Em ${diffDays} dias`;
    if (diffDays <= -1) return `Vencido`;

    return 'Não encontrado dias para formatar';
  };

  private classFormat = (diffDays: number): string => {
    if (diffDays <= 0) return 'danger';
    if (diffDays === 1) return 'warning';
    if (diffDays > 1) return `info`;

    return 'Não encontrado dias para classe de cor';
  };
}
