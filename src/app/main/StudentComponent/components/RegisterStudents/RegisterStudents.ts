import { Component, input } from '@angular/core';
import { Panel } from '../../../../shared/components/Panel/Panel';
import { InputText } from '../../../../shared/components/InputText/InputText';
import { InputArea } from '../../../../shared/components/InputArea/InputArea';
import { Buttons } from '../../../../shared/components/Buttons/Buttons';

@Component({
  selector: 'app-register-students',
  imports: [Panel, InputText, InputArea, Buttons],
  templateUrl: './RegisterStudents.html',
  styleUrl: './RegisterStudents.css',
})
export class RegisterStudents {
  public avatar = input<string>('');
  public name = input<string>('');
  public email = input<string>('');
  public phone = input<string>('');
  public cpf = input<string>('');
  public birthDate = input<string>('');
  public type = input<string>('');
  public plan = input<string>('');
  public startDate = input<string>('');
  public amount = input<string>('');
  public weight = input<string>('');
  public height = input<string>('');
  public goal = input<string>('');
  public notes = input<string>('');

  public action = input<string>('');
}
