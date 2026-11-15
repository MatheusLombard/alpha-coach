import { Exercise } from './exercise';

export interface LinkedExercise {
  exercise: Exercise;
  sets: string;
  reps: string;
  load: string;
  rest: string;
  notes: string;
}

export interface ExercicioTreinoRequest {
  exercicioId: number;
  series: number;
  repeticoes: number;
  carga: string;
  tempoDescanso?: number;
  observacao?: string;
}

export interface TreinoRequest {
  nome: string;
  alunoId: number;
  exercicios: ExercicioTreinoRequest[];
}

export interface TreinoExercicio {
  id: number;
  exercicioId: number;
  exercicioNome: string;
  series: number;
  repeticoes: number;
  carga: string;
  tempoDescanso?: number;
  observacao?: string;
}

export interface Treino {
  id: number;
  nome: string;
  alunoId: number;
  alunoNome?: string;
  dataCriacao?: string;
  ativo: boolean;
  exercicios: TreinoExercicio[];
}
