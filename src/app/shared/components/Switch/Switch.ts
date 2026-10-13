import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './Switch.html',
  styleUrl: './Switch.css',
})
export class Switch {
  public label = input.required<string>();
  public checked = input<boolean>(false);
  public isChecked = linkedSignal<boolean>(() => this.checked());

  public toggle() {
    this.isChecked.set(!this.isChecked());
  }
}
