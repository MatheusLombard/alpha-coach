import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-financial',
  imports: [],
  templateUrl: './CardFinancial.html',
  styleUrl: './CardFinancial.css',
})
export class CardFinancial {
  public icon = input<string>('arrow-up-right-circle');
  public label = input<string>('');
  public value = input<string>('');
  public sublabel = input<string>('');
}
