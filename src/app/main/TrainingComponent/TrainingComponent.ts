import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputSearch } from '../StudentComponent/components/input-search/input-search';
import { Exercicio, ExercisesList } from '../ExerciseComponent/exercises-list/exercises-list';

export interface ExercicioVinculado {
  exercicio: Exercicio;
  series: string;
  repeticoes: string;
  carga: string;
  descanso: string;
}

@Component({
  selector: 'app-training-component',
  imports: [Panel, InputSearch, ExercisesList],
  templateUrl: './TrainingComponent.html',
  styleUrl: './TrainingComponent.css',
})
export class TrainingComponent {
  public dragged = signal<Exercicio | null>(null);
  public vinculados = signal<ExercicioVinculado[]>([]);

  public startDrag(exercicio: Exercicio) {
    this.dragged.set(exercicio);
  }

  public allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  public dropExercise(event: DragEvent) {
    event.preventDefault();
    const exercicio = this.dragged();
    if (!exercicio) return;

    this.vinculados.update((list) => [
      ...list,
      { exercicio, series: '', repeticoes: '', carga: '', descanso: '' },
    ]);
    this.dragged.set(null);
  }

  public removeVinculado(index: number) {
    this.vinculados.update((list) => list.filter((_, i) => i !== index));
  }
}
