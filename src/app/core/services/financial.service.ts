import { Injectable } from '@angular/core';
import { Financial } from '../../types/financial';

@Injectable({ providedIn: 'root' })
export class FinancialService {
  private financial: Financial[] = [
    {
      id: 1,
      student: 'Carlos Almeida',
      plan: 'Mensal',
      modality: 'Presencial',
      amount: 350,
      dueDate: '01/06/2025',
      status: 'Pago',
    },
    {
      id: 2,
      student: 'Fernanda Lima',
      plan: 'Trimestral',
      modality: 'Online',
      amount: 780,
      dueDate: '15/06/2025',
      status: 'Pago',
    },
    {
      id: 3,
      student: 'Rodrigo Costa',
      plan: 'Mensal',
      modality: 'Presencial',
      amount: 350,
      dueDate: '20/06/2025',
      status: 'Vencendo',
    },
    {
      id: 4,
      student: 'Marcos Nunes',
      plan: 'Mensal',
      modality: 'Online',
      amount: 280,
      dueDate: '01/06/2025',
      status: 'Atrasado',
    },
    {
      id: 5,
      student: 'Juliana Souza',
      plan: 'Semestral',
      modality: 'Híbrido',
      amount: 1800,
      dueDate: '10/06/2025',
      status: 'Pago',
    },
    {
      id: 6,
      student: 'Andre Torres',
      plan: 'Mensal',
      modality: 'Online',
      amount: 280,
      dueDate: '25/06/2025',
      status: 'Vencendo',
    },
    {
      id: 7,
      student: 'Patricia Oliveira',
      plan: 'Anual',
      modality: 'Presencial',
      amount: 3200,
      dueDate: '01/01/2025',
      status: 'Pago',
    },
  ];

  public getFinancial(): Financial[] {
    return this.financial;
  }
}
