import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InputSearch } from '../StudentComponent/components/input-search/input-search';
import { Panel } from '../../shared/components/panel/panel'
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableStudents } from '../StudentComponent/components/table-students/table-students';
import { Financial, TableFinancial } from './table-financial/table-financial';
import { Card } from '../DashboardComponent/components/card/card';
import { CardFinancial } from './card-financial/card-financial';
import { Modal } from '../../shared/components/modal/modal';
import { RegisterFinancial } from './register-financial/register-financial';

@Component({
  selector: 'app-financeiro-component',
  imports: [InputSearch, Panel, Buttons, TableStudents, TableFinancial, Card, CardFinancial, Modal, RegisterFinancial],
  templateUrl: './FinanceiroComponent.html',
  styleUrl: './FinanceiroComponent.css',
})
export class FinanceiroComponent {
  public aluno = signal<string>('')
  public plano = signal<string>('')
  public modalidade = signal<string>('')
  public valor = signal<string>('')
  public vencimento = signal<string>('')
  public status = signal<string>('')

  public modal = signal<boolean>(false)
  public action = signal<string>('create')

  public chosedFinancial(financial: Financial) {
    this.aluno.set(financial.aluno);
    this.plano.set(financial.plano);
    this.modalidade.set(financial.modalidade);
    this.valor.set(String(financial.valor));
    // input type="date" so aceita o formato aaaa-mm-dd
    this.vencimento.set(financial.vencimento.split('/').reverse().join('-'));
    this.status.set(financial.status);

    this.modal.set(true)
    this.action.set('update')
  }

  public newFinancial() {
    this.aluno.set('');
    this.plano.set('');
    this.modalidade.set('');
    this.valor.set('');
    this.vencimento.set('');
    this.status.set('');

    this.modal.set(true)
    this.action.set('create')
  }
}
