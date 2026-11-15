export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Exercise {
  id: number;
  nome: string;
  descricao: string;
  linkVideo?: string;
  ativo: boolean;
}

export interface ExerciseRequest {
  nome: string;
  descricao: string;
  linkVideo?: string;
}
