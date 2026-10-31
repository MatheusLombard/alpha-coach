import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  imports: [],
  templateUrl: './InputText.html',
  styleUrl: './InputText.css',
})
export class InputText {
  public id = input.required<string>();
  public type = input.required<string>();
  public value= input<string>();

}
