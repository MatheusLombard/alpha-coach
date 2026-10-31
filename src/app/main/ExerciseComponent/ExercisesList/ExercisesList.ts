import { Component, computed, inject, input, output } from '@angular/core';
import { Exercise } from '../../../types/exercise';
import { ExerciseService } from '../../../core/services/exercise.service';

@Component({
  selector: 'app-exercises-list',
  imports: [],
  templateUrl: './ExercisesList.html',
  styleUrl: './ExercisesList.css',
})
export class ExercisesList {
  private exerciseService = inject(ExerciseService);

  valueSearched = input<string | undefined>();

  items: Exercise[] = this.exerciseService.getExercises();

  abbreviation(group: string): string {
    return group.substring(0, 2).toUpperCase();
  }

  public chosenExercise = output<Exercise>()
  public dragExercise = output<Exercise>()

  public searchExercises = computed(() => {
    const search = this.valueSearched() ?? '';
    if (search === '') {
      return this.items;
    } else {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(search);
      });
    }
  });
}
