import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-area',
  imports: [],
  templateUrl: './InputArea.html',
  styleUrl: './InputArea.css',
})
export class InputArea {
  public id = input.required<string>()
  public value = input.required<string>()
}
