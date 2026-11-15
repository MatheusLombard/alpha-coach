import { Component, computed, input, output } from '@angular/core';
import { Exercise } from '../../../types/exercise';

@Component({
  selector: 'app-exercises-list',
  imports: [],
  templateUrl: './ExercisesList.html',
  styleUrl: './ExercisesList.css',
})
export class ExercisesList {
  valueSearched = input<string | undefined>();

  items = input<Exercise[]>([]);

  abbreviation(group: string): string {
    return group.substring(0, 2).toUpperCase();
  }

  public chosenExercise = output<Exercise>()
  public dragExercise = output<Exercise>()
  public toggleStatus = output<Exercise>()

  public searchExercises = computed(() => {
    const search = this.valueSearched() ?? '';
    const items = this.items();
    if (search === '') {
      return items;
    } else {
      return items.filter((item) => {
        return item.nome.toLowerCase().includes(search);
      });
    }
  });
}
