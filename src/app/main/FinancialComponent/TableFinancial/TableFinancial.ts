import { Component, computed, input, output } from '@angular/core';
import { ParcelaFinanceira } from '../../../types/parcela';
import { formatDateBR } from '../../../shared/utils/date.util';

@Component({
  selector: 'app-table-financial',
  imports: [],
  templateUrl: './TableFinancial.html',
  styleUrl: './TableFinancial.css',
})
export class TableFinancial {
  valueSearched = input<string | undefined>();
  items = input<ParcelaFinanceira[]>([]);

  public chosenFinancial = output<ParcelaFinanceira>();
  public formatDateBR = formatDateBR;

  public searchFinancial = computed(() => {
    const search = (this.valueSearched() ?? '').toLowerCase();
    const items = this.items();
    if (search === '') return items;
    return items.filter((item) => item.alunoNome.toLowerCase().includes(search));
  });
}
