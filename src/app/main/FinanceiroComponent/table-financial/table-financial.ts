import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-financial',
  imports: [],
  templateUrl: './table-financial.html',
  styleUrl: './table-financial.css',
})
export class TableFinancial {

  listFinancial =[
  {
    "id": 1,
    "aluno": "Carlos Almeida",
    "plano": "Mensal",
    "modalidade": "Presencial",
    "valor": 350,
    "vencimento": "01/06/2025",
    "status": "Pago"
  },
  {
    "id": 2,
    "aluno": "Fernanda Lima",
    "plano": "Trimestral",
    "modalidade": "Online",
    "valor": 780,
    "vencimento": "15/06/2025",
    "status": "Pago"
  },
  {
    "id": 3,
    "aluno": "Rodrigo Costa",
    "plano": "Mensal",
    "modalidade": "Presencial",
    "valor": 350,
    "vencimento": "20/06/2025",
    "status": "Vencendo"
  },
  {
    "id": 4,
    "aluno": "Marcos Nunes",
    "plano": "Mensal",
    "modalidade": "Online",
    "valor": 280,
    "vencimento": "01/06/2025",
    "status": "Atrasado"
  },
  {
    "id": 5,
    "aluno": "Juliana Souza",
    "plano": "Semestral",
    "modalidade": "Híbrido",
    "valor": 1800,
    "vencimento": "10/06/2025",
    "status": "Pago"
  },
  {
    "id": 6,
    "aluno": "Andre Torres",
    "plano": "Mensal",
    "modalidade": "Online",
    "valor": 280,
    "vencimento": "25/06/2025",
    "status": "Vencendo"
  },
  {
    "id": 7,
    "aluno": "Patricia Oliveira",
    "plano": "Anual",
    "modalidade": "Presencial",
    "valor": 3200,
    "vencimento": "01/01/2025",
    "status": "Pago"
  }
]

}
