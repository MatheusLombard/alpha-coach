import { Injectable } from '@angular/core';
import { Customer, DashboardCard, PlanDistribution, RecentActivity } from '../../types/dashboard';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private cards: DashboardCard[] = [
    {
      label: 'Alunos Ativos',
      value: '34',
      type: 'up',
    },
    {
      label: 'Treinos Este Mês',
      value: '128',
      type: 'up',
    },
    {
      label: 'Receita mensal',
      value: '8.400',
      type: 'down',
    },
    {
      label: 'Vencendo(7 dias)',
      value: '6',
      type: 'down',
    },
  ];

  private recentActivities: RecentActivity[] = [
    {
      id: 1,
      name: 'Carlos Almeida',
      description: 'Treino realizado',
      time: 'há 20 min',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      status: 'success',
    },
    {
      id: 2,
      name: 'Fernanda Lima',
      description: 'Pagamento recebido',
      time: 'há 1h',
      avatarUrl: 'https://i.pravatar.cc/150?img=45',
      status: 'warning',
    },
    {
      id: 3,
      name: 'Rodrigo Costa',
      description: 'Plano vencendo amanhã',
      time: 'hoje',
      avatarUrl: 'https://i.pravatar.cc/150?img=33',
      status: 'warning',
    },
    {
      id: 4,
      name: 'Juliana Souza',
      description: 'Novo treino montado',
      time: 'há 3h',
      avatarUrl: 'https://i.pravatar.cc/150?img=47',
      status: 'info',
    },
    {
      id: 5,
      name: 'Marcos Nunes',
      description: 'Pagamento em atraso',
      time: '3 dias',
      avatarUrl: 'https://i.pravatar.cc/150?img=14',
      status: 'danger',
    },
    {
      id: 6,
      name: 'Patricia Oliveira',
      description: 'Treino realizado',
      time: 'há 5h',
      avatarUrl: 'https://i.pravatar.cc/150?img=48',
      status: 'success',
    },
  ];

  private plansDistribution: PlanDistribution[] = [
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

  private paymentsWarning: Customer[] = [
    {
      name: 'Rodrigo Costa',
      time: '2026-09-15',
    },
    {
      name: 'Ana Paula',
      time: '2026-09-13',
    },
    {
      name: 'Bruno Leal',
      time: '2026-09-19',
    },
  ];

  public getCards(): DashboardCard[] {
    return this.cards;
  }

  public getRecentActivities(): RecentActivity[] {
    return this.recentActivities;
  }

  public getPlansDistribution(): PlanDistribution[] {
    return this.plansDistribution;
  }

  public getPaymentsWarning(): Customer[] {
    return this.paymentsWarning;
  }
}
