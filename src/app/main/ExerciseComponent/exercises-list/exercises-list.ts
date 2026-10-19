import { ChangeDetectionStrategy, Component, output } from '@angular/core';

export type Dificuldade = 'Iniciante' | 'Intermediario' | 'Avançado';

export interface Exercicio {
  id: number;
  nome: string;
  grupoMuscular: string;
  equipamento: string;
  dificuldade: Dificuldade;
  observacoes: string;
}

@Component({
  selector: 'app-exercises-list',
  imports: [],
  templateUrl: './exercises-list.html',
  styleUrl: './exercises-list.css',
})
export class ExercisesList {


  // Mock simulando o retorno da API
  items: Exercicio[] = [
    {
      id: 1,
      nome: 'Supino Reto',
      grupoMuscular: 'Peito',
      equipamento: 'Barra',
      dificuldade: 'Intermediario',
      observacoes: 'Manter as escápulas retraídas e os pés firmes no chão.',
    },
    {
      id: 2,
      nome: 'Agachamento Livre',
      grupoMuscular: 'Pernas',
      equipamento: 'Barra',
      dificuldade: 'Avançado',
      observacoes: 'Joelhos alinhados com a ponta dos pés, descer até 90 graus.',
    },
    {
      id: 3,
      nome: 'Puxada Frontal',
      grupoMuscular: 'Costas',
      equipamento: 'Polia',
      dificuldade: 'Iniciante',
      observacoes: 'Puxar a barra até a altura do peito, sem balançar o tronco.',
    },
    {
      id: 4,
      nome: 'Desenvolvimento',
      grupoMuscular: 'Ombros',
      equipamento: 'Halteres',
      dificuldade: 'Intermediario',
      observacoes: 'Evitar arquear a lombar durante a subida.',
    },
    {
      id: 5,
      nome: 'Rosca Direta',
      grupoMuscular: 'Bíceps',
      equipamento: 'Barra W',
      dificuldade: 'Iniciante',
      observacoes: 'Cotovelos fixos ao lado do corpo.',
    },
    {
      id: 6,
      nome: 'Tríceps Corda',
      grupoMuscular: 'Tríceps',
      equipamento: 'Polia',
      dificuldade: 'Iniciante',
      observacoes: 'Abrir a corda no final do movimento.',
    },
  ];

  sigla(grupo: string): string {
    return grupo.substring(0, 2).toUpperCase();
  }

  public chosedExercise = output<Exercicio>()
  public dragExercise = output<Exercicio>()
}
