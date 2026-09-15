import { Component, computed, signal } from '@angular/core';

interface Custumers {
  custumer: string;
  time: string;
}
@Component({
  selector: 'app-dashboard-payments-warning',
  imports: [],
  templateUrl: './dashboard-payments-warning.html',
  styleUrl: './dashboard-payments-warning.css',
})
export class DashboardPaymentsWarning {
  custumersWarning = signal<Custumers[]>([
    {
      custumer: 'Rodrigo Costa',
      time: '2026-09-15',
    },
    {
      custumer: 'Ana Paula',
      time: '2026-09-13',
    },
    {
      custumer: 'Bruno Leal',
      time: '2026-09-19',
    },
  ]);

  dataCostumers = computed(() => {
    return this.custumersWarning().map((item) => ({
      ...item,
      dataFormat: this.formatDate(this.date(item.time)),
      classColor: this.classFormat(this.date(item.time)),
    }));
  });

  private date = (time: string): number => {
    const paymentDate = new Date(time);
    const actualDate = new Date();

    console.log(paymentDate);

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
// possiveis caminhos para a pessoa comprar meu software
// qual percurso o cliente precisa percorrer
// o que no meu sistema gerar

// aquisição é dinheiro
// ativação, retenção, receita e referencia é software bom

// FUNIL AARRR
