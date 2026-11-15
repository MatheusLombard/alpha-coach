import { Component, input, model } from '@angular/core';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-input-select',
  imports: [],
  templateUrl: './InputSelect.html',
  styleUrl: './InputSelect.css',
})
export class InputSelect {
  public id = input.required<string>();
  public options = input.required<SelectOption[]>();
  public placeholder = input<string>('Selecione');
  public value = model<string>('');
}
