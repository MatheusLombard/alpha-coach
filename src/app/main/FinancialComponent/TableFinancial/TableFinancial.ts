import { Component, computed, inject, input, output } from '@angular/core';
import { Financial } from '../../../types/financial';
import { FinancialService } from '../../../core/services/financial.service';

@Component({
  selector: 'app-table-financial',
  imports: [],
  templateUrl: './TableFinancial.html',
  styleUrl: './TableFinancial.css',
})
export class TableFinancial {
  private financialService = inject(FinancialService);

  valueSearched = input<string | undefined>();

  public chosenFinancial = output<Financial>()

  listFinancial: Financial[] = this.financialService.getFinancial();

  public searchFinancial = computed(() => {
    const search = this.valueSearched() ?? '';
    if (search === '') {
      return this.listFinancial;
    } else {
      return this.listFinancial.filter((item) => {
        return item.student.toLowerCase().includes(search);
      });
    }
  });
}
