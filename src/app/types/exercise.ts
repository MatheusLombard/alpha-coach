export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Exercise {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  difficulty: Difficulty;
  notes: string;
}
