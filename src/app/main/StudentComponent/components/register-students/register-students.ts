import { Component, input } from '@angular/core';
import { Panel } from '../../../../shared/components/panel/panel';
import { InputText } from '../../../../shared/components/InputText/InputText';
import { InputArea } from '../../../../shared/components/InputArea/InputArea';
import { Buttons } from '../../../../shared/components/Buttons/Buttons';

@Component({
  selector: 'app-register-students',
  imports: [Panel, InputText, InputArea, Buttons],
  templateUrl: './register-students.html',
  styleUrl: './register-students.css',
})
export class RegisterStudents {
  public avatar = input<string>('');
  public nome = input<string>('');
  public email = input<string>('');
  public telefone = input<string>('');
  public cpf = input<string>('');
  public dt_nasc = input<string>('');
  public tipo = input<string>('');
  public plano = input<string>('');
  public dt_inc = input<string>('');
  public valor = input<string>('');
  public peso = input<string>('');
  public altura = input<string>('');
  public objetivo = input<string>('');
  public observacao = input<string>('');

  public action = input<string>('');
}
