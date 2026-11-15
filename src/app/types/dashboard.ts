export interface DashboardCard {
  label: string;
  value: string;
  type: 'up' | 'down';
}

export interface RecentActivity {
  id: number;
  name: string;
  description: string;
  time: string;
  status: string;
}

export interface PlanDistribution {
  label: string;
  value: number;
  color: string;
}

export interface Customer {
  name: string;
  time: string;
}

export interface DashboardSnapshot {
  cards: DashboardCard[];
  recentActivities: RecentActivity[];
  plansDistribution: PlanDistribution[];
  paymentsWarning: Customer[];
}
