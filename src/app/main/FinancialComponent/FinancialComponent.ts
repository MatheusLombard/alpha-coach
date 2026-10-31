import { Component, signal } from '@angular/core';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { Panel } from '../../shared/components/Panel/Panel'
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableFinancial } from './TableFinancial/TableFinancial';
import { Financial } from '../../types/financial';
import { CardFinancial } from './CardFinancial/CardFinancial';
import { Modal } from '../../shared/components/Modal/Modal';
import { RegisterFinancial } from './RegisterFinancial/RegisterFinancial';

@Component({
  selector: 'app-financial-component',
  imports: [InputSearch, Panel, Buttons, TableFinancial, CardFinancial, Modal, RegisterFinancial],
  templateUrl: './FinancialComponent.html',
  styleUrl: './FinancialComponent.css',
})
export class FinancialComponent {
  public student = signal<string>('')
  public plan = signal<string>('')
  public modality = signal<string>('')
  public amount = signal<string>('')
  public dueDate = signal<string>('')
  public status = signal<string>('')

  public modal = signal<boolean>(false)
  public action = signal<string>('create')

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined){
    this.valueSearch.set(value)
  }

  public chosenFinancial(financial: Financial) {
    this.student.set(financial.student);
    this.plan.set(financial.plan);
    this.modality.set(financial.modality);
    this.amount.set(String(financial.amount));
    // input type="date" so aceita o formato aaaa-mm-dd
    this.dueDate.set(financial.dueDate.split('/').reverse().join('-'));
    this.status.set(financial.status);

    this.modal.set(true)
    this.action.set('update')
  }

  public newFinancial() {
    this.student.set('');
    this.plan.set('');
    this.modality.set('');
    this.amount.set('');
    this.dueDate.set('');
    this.status.set('');

    this.modal.set(true)
    this.action.set('create')
  }
}
