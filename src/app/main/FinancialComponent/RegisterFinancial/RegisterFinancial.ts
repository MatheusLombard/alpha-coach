import { Component, input } from '@angular/core';
import { Panel } from '../../../shared/components/Panel/Panel';
import { InputText } from '../../../shared/components/InputText/InputText';
import { InputArea } from '../../../shared/components/InputArea/InputArea';
import { Buttons } from '../../../shared/components/Buttons/Buttons';

@Component({
  selector: 'app-register-financial',
  imports: [Panel, InputText, InputArea, Buttons],
  templateUrl: './RegisterFinancial.html',
  styleUrl: './RegisterFinancial.css',
})
export class RegisterFinancial {
  public student = input<string>('');
  public plan = input<string>('');
  public modality = input<string>('');
  public amount = input<string>('');
  public discount = input<string>('');
  public dueDate = input<string>('');
  public paymentDate = input<string>('');
  public paymentMethod = input<string>('');
  public status = input<string>('');
  public notes = input<string>('');

  public action = input<string>('');
}
