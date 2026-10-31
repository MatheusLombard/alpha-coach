export interface Student {
  id: number;
  name: string;
  email: string;
  avatar: string;
  type: 'Online' | 'Presencial';
  plan: string;
  since: string;
  status: string;
}

export interface SelectedStudent {
  id: number;
  name: string;
  email: string;
  avatar: string;
}
