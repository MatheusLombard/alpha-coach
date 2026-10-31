import { Injectable } from '@angular/core';
import { Exercise } from '../../types/exercise';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private exercises: Exercise[] = [
    {
      id: 1,
      name: 'Supino Reto',
      muscleGroup: 'Peito',
      equipment: 'Barra',
      difficulty: 'Intermediário',
      notes: 'Manter as escápulas retraídas e os pés firmes no chão.',
    },
    {
      id: 2,
      name: 'Agachamento Livre',
      muscleGroup: 'Pernas',
      equipment: 'Barra',
      difficulty: 'Avançado',
      notes: 'Joelhos alinhados com a ponta dos pés, descer até 90 graus.',
    },
    {
      id: 3,
      name: 'Puxada Frontal',
      muscleGroup: 'Costas',
      equipment: 'Polia',
      difficulty: 'Iniciante',
      notes: 'Puxar a barra até a altura do peito, sem balançar o tronco.',
    },
    {
      id: 4,
      name: 'Desenvolvimento',
      muscleGroup: 'Ombros',
      equipment: 'Halteres',
      difficulty: 'Intermediário',
      notes: 'Evitar arquear a lombar durante a subida.',
    },
    {
      id: 5,
      name: 'Rosca Direta',
      muscleGroup: 'Bíceps',
      equipment: 'Barra W',
      difficulty: 'Iniciante',
      notes: 'Cotovelos fixos ao lado do corpo.',
    },
    {
      id: 6,
      name: 'Tríceps Corda',
      muscleGroup: 'Tríceps',
      equipment: 'Polia',
      difficulty: 'Iniciante',
      notes: 'Abrir a corda no final do movimento.',
    },
  ];

  public getExercises(): Exercise[] {
    return this.exercises;
  }
}
