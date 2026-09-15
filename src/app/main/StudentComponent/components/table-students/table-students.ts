import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-students',
  imports: [],
  templateUrl: './table-students.html',
  styleUrl: './table-students.css',
})
export class TableStudents {
  listStudents = [
  {
    "id": 1,
    "nome": "Fernanda Lima",
    "email": "fernanda@email.com",
    "avatar": "https://i.pravatar.cc/150?img=47",
    "tipo": "Online",
    "plano": "Trimestral",
    "desde": "Mar 2024",
    "status": "em-dia"
  },
  {
    "id": 2,
    "nome": "Marcos Nunes",
    "email": "marcos@email.com",
    "avatar": "https://i.pravatar.cc/150?img=13",
    "tipo": "Online",
    "plano": "Mensal",
    "desde": "Abr 2024",
    "status": "atrasado"
  },
  {
    "id": 3,
    "nome": "Andre Torres",
    "email": "andre@email.com",
    "avatar": "https://i.pravatar.cc/150?img=33",
    "tipo": "Online",
    "plano": "Mensal",
    "desde": "Mai 2024",
    "status": "vencendo"
  },
  {
    "id": 4,
    "nome": "Camila Souza",
    "email": "camila@email.com",
    "avatar": "https://i.pravatar.cc/150?img=45",
    "tipo": "Presencial",
    "plano": "Anual",
    "desde": "Jan 2024",
    "status": "em-dia"
  },
  {
    "id": 5,
    "nome": "Rafael Costa",
    "email": "rafael@email.com",
    "avatar": "https://i.pravatar.cc/150?img=15",
    "tipo": "Presencial",
    "plano": "Mensal",
    "desde": "Jun 2024",
    "status": "atrasado"
  },
  {
    "id": 6,
    "nome": "Juliana Alves",
    "email": "juliana@email.com",
    "avatar": "https://i.pravatar.cc/150?img=32",
    "tipo": "Online",
    "plano": "Trimestral",
    "desde": "Fev 2024",
    "status": "em-dia"
  },
  {
    "id": 7,
    "nome": "Pedro Martins",
    "email": "pedro@email.com",
    "avatar": "https://i.pravatar.cc/150?img=11",
    "tipo": "Presencial",
    "plano": "Mensal",
    "desde": "Jul 2024",
    "status": "vencendo"
  }
]
}
