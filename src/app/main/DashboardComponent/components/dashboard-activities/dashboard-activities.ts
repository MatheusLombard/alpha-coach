import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-activities',
  imports: [],
  templateUrl: './dashboard-activities.html',
  styleUrl: './dashboard-activities.css',
})
export class DashboardActivities {
  listRecentActivities = [
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
}
