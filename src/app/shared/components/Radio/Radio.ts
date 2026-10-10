import { ChangeDetectionStrategy, Component, input, linkedSignal, signal } from '@angular/core';
import { Dificuldade } from '../../../main/ExerciseComponent/exercises-list/exercises-list';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './Radio.html',
  styleUrl: './Radio.css',
})
export class Radio {
  public id = input.required<string>();
  public options = input.required<Dificuldade[]>();
  public optionChoosed = input<Dificuldade>()
  public choosed= linkedSignal<Dificuldade>(() => this.optionChoosed() ?? 'Intermediario');

   print(){
  }
  public optionSelected(option: Dificuldade) {
    console.log({teste: this.optionChoosed()})
    this.choosed.set(option)
  }
}
