import { Component, input, linkedSignal } from '@angular/core';
import { Difficulty } from '../../../types/exercise';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './Radio.html',
  styleUrl: './Radio.css',
})
export class Radio {
  public id = input.required<string>();
  public options = input.required<Difficulty[]>();
  public optionChosen = input<Difficulty>()
  public chosen = linkedSignal<Difficulty>(() => this.optionChosen() ?? 'Intermediário');

  public optionSelected(option: Difficulty) {
    this.chosen.set(option)
  }
}
