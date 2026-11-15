import { Component, input, model, output } from '@angular/core';
import { Panel } from '../../../shared/components/Panel/Panel';
import { InputSelect, SelectOption } from '../../../shared/components/InputSelect/InputSelect';
import { Buttons } from '../../../shared/components/Buttons/Buttons';

const FORMA_PAGAMENTO_OPTIONS: SelectOption[] = [
  { value: 'DINHEIRO', label: 'Dinheiro' },
  { value: 'CREDITO', label: 'Cartão de Crédito' },
  { value: 'DEBITO', label: 'Cartão de Débito' },
  { value: 'PIX', label: 'PIX' },
  { value: 'BOLETO', label: 'Boleto' },
];

@Component({
  selector: 'app-register-financial',
  imports: [Panel, InputSelect, Buttons],
  templateUrl: './RegisterFinancial.html',
  styleUrl: './RegisterFinancial.css',
})
export class RegisterFinancial {
  public aluno = input<string>('');
  public plano = input<string>('');
  public valor = input<number>(0);
  public vencimento = input<string>('');
  public status = input<string>('');

  public formaPagamento = model<string>('');
  public mensagemErro = input<string>('');

  public formaPagamentoOptions = FORMA_PAGAMENTO_OPTIONS;

  public confirmar = output<void>();
}
