import { Exercise } from './exercise';

export interface LinkedExercise {
  exercise: Exercise;
  sets: string;
  reps: string;
  load: string;
  rest: string;
}
