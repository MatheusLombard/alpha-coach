import { Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { Radio } from '../../shared/components/Radio/Radio';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { ExercisesList } from './ExercisesList/ExercisesList';
import { Difficulty, Exercise } from '../../types/exercise';

@Component({
  selector: 'app-exercise-component',
  imports: [Panel, InputText, Radio, InputArea, Buttons, InputSearch, ExercisesList],
  templateUrl: './ExerciseComponent.html',
  styleUrl: './ExerciseComponent.css',
})
export class ExerciseComponent {

    id = signal<number>(0);
    name = signal<string>('');
    muscleGroup = signal<string>('');
    equipment = signal<string>('');
    difficulty = signal<Difficulty>('Intermediário');
    notes = signal<string>('');

    public valueSearch = signal<string | undefined>('');
    public valueSearched(value: string | undefined){
      this.valueSearch.set(value)
    }

  public valueExercise(value: Exercise){
    this.name.set(value.name)
    this.muscleGroup.set(value.muscleGroup)
    this.equipment.set(value.equipment)
    this.difficulty.set(value.difficulty)
    this.notes.set(value.notes)
  }

}
