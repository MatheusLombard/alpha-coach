import { Component, input, model, output } from '@angular/core';
import { Panel } from '../../../../shared/components/Panel/Panel';
import { InputText } from '../../../../shared/components/InputText/InputText';
import { InputArea } from '../../../../shared/components/InputArea/InputArea';
import { InputSelect, SelectOption } from '../../../../shared/components/InputSelect/InputSelect';
import { Buttons } from '../../../../shared/components/Buttons/Buttons';

const TIPO_ALUNO_OPTIONS: SelectOption[] = [
  { value: 'PRESENCIAL', label: 'Presencial' },
  { value: 'ONLINE', label: 'Online' },
];

@Component({
  selector: 'app-register-students',
  imports: [Panel, InputText, InputArea, InputSelect, Buttons],
  templateUrl: './RegisterStudents.html',
  styleUrl: './RegisterStudents.css',
})
export class RegisterStudents {
  public nome = model<string>('');
  public email = model<string>('');
  public cpf = model<string>('');
  public dataNascimento = model<string>('');
  public telefone = model<string>('');
  public tipoAluno = model<string>('');
  public endereco = model<string>('');
  public objetivo = model<string>('');
  public anamnese = model<string>('');

  public ativo = input<boolean>(true);
  public action = input<string>('create');
  public mensagemErro = input<string>('');

  public tipoAlunoOptions = TIPO_ALUNO_OPTIONS;

  public salvar = output<void>();
  public alternarStatus = output<void>();
}
