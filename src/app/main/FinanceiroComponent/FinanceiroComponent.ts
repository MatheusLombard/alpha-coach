import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputSearch } from '../StudentComponent/components/input-search/input-search';
import { Panel } from '../../shared/components/panel/panel'
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableStudents } from '../StudentComponent/components/table-students/table-students';
import { TableFinancial } from './table-financial/table-financial';
import { Card } from '../DashboardComponent/components/card/card';
import { CardFinancial } from './card-financial/card-financial';

@Component({
  selector: 'app-financeiro-component',
  imports: [InputSearch, Panel, Buttons, TableStudents, TableFinancial, Card, CardFinancial],
  templateUrl: './FinanceiroComponent.html',
  styleUrl: './FinanceiroComponent.css',
})
export class FinanceiroComponent {}
