import { Component, input, output } from '@angular/core';
import { Plano } from '../../../../types/plano';

@Component({
  selector: 'app-table-planos',
  imports: [],
  templateUrl: './TablePlanos.html',
  styleUrl: './TablePlanos.css',
})
export class TablePlanos {
  items = input<Plano[]>([]);

  public chosenPlano = output<Plano>();
  public toggleStatus = output<Plano>();
}
