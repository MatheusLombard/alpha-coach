import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-input-text',
  imports: [],
  templateUrl: './InputText.html',
  styleUrl: './InputText.css',
})
export class InputText {
  public id = input.required<string>();
  public type = input.required<string>();

}
