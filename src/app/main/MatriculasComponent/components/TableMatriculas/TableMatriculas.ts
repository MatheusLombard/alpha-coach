import { Component, input, output } from '@angular/core';
import { Matricula } from '../../../../types/matricula';

@Component({
  selector: 'app-table-matriculas',
  imports: [],
  templateUrl: './TableMatriculas.html',
  styleUrl: './TableMatriculas.css',
})
export class TableMatriculas {
  items = input<Matricula[]>([]);

  public cancelar = output<Matricula>();
}
