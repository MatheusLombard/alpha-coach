import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputSearch } from './components/input-search/input-search';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { Students, TableStudents } from './components/table-students/table-students';
import { Modal } from '../../shared/components/modal/modal';
import { RegisterStudents } from './components/register-students/register-students';

// id: 1,
      // nome: 'Fernanda Lima',
      // email: 'fernanda@email.com',
      // avatar: 'https://i.pravatar.cc/150?img=47',
      // tipo: 'Online',
      // plano: 'Trimestral',
      // desde: 'Mar 2024',
      // status: 'em-dia',

@Component({
  selector: 'app-student-component',
  imports: [Panel, InputSearch, Buttons, TableStudents, Modal, RegisterStudents],
  templateUrl: './StudentComponent.html',
  styleUrl: './StudentComponent.css',
})
export class StudentComponent {
  public nome = signal<string>('')
  public email = signal<string>('')
  public avatar = signal<string>('')
  public tipo = signal<'Online' | 'Presencial'>('Online')
  public plano = signal<string>('')
  public desde = signal<string>('')
  public status = signal<string>('')

  public modal = signal<boolean>(false)
  public action = signal<string>('create')

  public chosedStudent(student: Students) {
    this.nome.set(student.nome);
    this.email.set(student.email);
    this.avatar.set(student.avatar);
    this.tipo.set(student.tipo);
    this.plano.set(student.plano);
    this.desde.set(student.desde);
    this.status.set(student.status);

    this.modal.set(true)
    this.action.set('update')
  }
}
