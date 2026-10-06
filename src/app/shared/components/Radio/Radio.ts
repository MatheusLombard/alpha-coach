import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './Radio.html',
  styleUrl: './Radio.css',
})
export class Radio {
  public id = input.required<string>();
  public options = input.required<string[]>();
  public choosed= signal<string>('INTERMEDIARIO');

  public optionSelected(option: string) {
    this.choosed.set(option)
  }
}
