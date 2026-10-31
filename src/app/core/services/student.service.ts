import { Injectable } from '@angular/core';
import { Student } from '../../types/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      name: 'Fernanda Lima',
      email: 'fernanda@email.com',
      avatar: 'https://i.pravatar.cc/150?img=47',
      type: 'Online',
      plan: 'Trimestral',
      since: 'Mar 2024',
      status: 'em-dia',
    },
    {
      id: 2,
      name: 'Marcos Nunes',
      email: 'marcos@email.com',
      avatar: 'https://i.pravatar.cc/150?img=13',
      type: 'Online',
      plan: 'Mensal',
      since: 'Abr 2024',
      status: 'atrasado',
    },
    {
      id: 3,
      name: 'Andre Torres',
      email: 'andre@email.com',
      avatar: 'https://i.pravatar.cc/150?img=33',
      type: 'Online',
      plan: 'Mensal',
      since: 'Mai 2024',
      status: 'vencendo',
    },
    {
      id: 4,
      name: 'Camila Souza',
      email: 'camila@email.com',
      avatar: 'https://i.pravatar.cc/150?img=45',
      type: 'Presencial',
      plan: 'Anual',
      since: 'Jan 2024',
      status: 'em-dia',
    },
    {
      id: 5,
      name: 'Rafael Costa',
      email: 'rafael@email.com',
      avatar: 'https://i.pravatar.cc/150?img=15',
      type: 'Presencial',
      plan: 'Mensal',
      since: 'Jun 2024',
      status: 'atrasado',
    },
    {
      id: 6,
      name: 'Juliana Alves',
      email: 'juliana@email.com',
      avatar: 'https://i.pravatar.cc/150?img=32',
      type: 'Online',
      plan: 'Trimestral',
      since: 'Fev 2024',
      status: 'em-dia',
    },
    {
      id: 7,
      name: 'Pedro Martins',
      email: 'pedro@email.com',
      avatar: 'https://i.pravatar.cc/150?img=11',
      type: 'Presencial',
      plan: 'Mensal',
      since: 'Jul 2024',
      status: 'vencendo',
    },
  ];

  public getStudents(): Student[] {
    return this.students;
  }
}
