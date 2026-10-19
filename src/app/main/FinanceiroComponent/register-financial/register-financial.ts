import { Component, input } from '@angular/core';
import { Panel } from '../../../shared/components/panel/panel';
import { InputText } from '../../../shared/components/InputText/InputText';
import { InputArea } from '../../../shared/components/InputArea/InputArea';
import { Buttons } from '../../../shared/components/Buttons/Buttons';

@Component({
  selector: 'app-register-financial',
  imports: [Panel, InputText, InputArea, Buttons],
  templateUrl: './register-financial.html',
  styleUrl: './register-financial.css',
})
export class RegisterFinancial {
  public aluno = input<string>('');
  public plano = input<string>('');
  public modalidade = input<string>('');
  public valor = input<string>('');
  public desconto = input<string>('');
  public vencimento = input<string>('');
  public dt_pagamento = input<string>('');
  public forma_pagamento = input<string>('');
  public status = input<string>('');
  public observacao = input<string>('');

  public action = input<string>('');
}
