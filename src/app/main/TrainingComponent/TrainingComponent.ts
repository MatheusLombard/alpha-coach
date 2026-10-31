import { Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { ExercisesList } from '../ExerciseComponent/ExercisesList/ExercisesList';
import { StudentsList } from './components/StudentsList/StudentsList';
import { InputText } from '../../shared/components/InputText/InputText';
import { Exercise } from '../../types/exercise';
import { SelectedStudent } from '../../types/student';
import { LinkedExercise } from '../../types/training';

@Component({
  selector: 'app-training-component',
  imports: [Panel, InputSearch, ExercisesList, StudentsList, InputText],
  templateUrl: './TrainingComponent.html',
  styleUrl: './TrainingComponent.css',
})
export class TrainingComponent {
  public dragged = signal<Exercise | null>(null);
  public linkedExercises = signal<LinkedExercise[]>([]);
  public studentSelected = signal<boolean>(false);
  public studentId = signal<number>(0);
  public studentName = signal<string>('');
  public studentEmail = signal<string>('');
  public studentAvatar = signal<string>('');

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined){
    this.valueSearch.set(value)
  }

  public valueSearchExercise = signal<string | undefined>('');
  public valueSearchedExercise(value: string | undefined){
    this.valueSearchExercise.set(value)
  }

  public studentChosen(student: SelectedStudent) {
   this.studentId.set(student.id);
   this.studentName.set(student.name);
   this.studentEmail.set(student.email);
   this.studentAvatar.set(student.avatar);
   this.studentSelected.set(true)
  }

  public startDrag(exercise: Exercise) {
    this.dragged.set(exercise);
  }

  public allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  public dropExercise(event: DragEvent) {
    event.preventDefault();
    const exercise = this.dragged();
    if (!exercise) return;

    this.linkedExercises.update((list) => [
      ...list,
      { exercise, sets: '', reps: '', load: '', rest: '' },
    ]);
    this.dragged.set(null);
  }

  public removeLinkedExercise(index: number) {
    this.linkedExercises.update((list) => list.filter((_, i) => i !== index));
  }
}
