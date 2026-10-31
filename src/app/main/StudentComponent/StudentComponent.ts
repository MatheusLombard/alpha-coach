import { Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableStudents } from './components/TableStudents/TableStudents';
import { Student } from '../../types/student';
import { Modal } from '../../shared/components/Modal/Modal';
import { RegisterStudents } from './components/RegisterStudents/RegisterStudents';

@Component({
  selector: 'app-student-component',
  imports: [Panel, InputSearch, Buttons, TableStudents, Modal, RegisterStudents],
  templateUrl: './StudentComponent.html',
  styleUrl: './StudentComponent.css',
})
export class StudentComponent {
  public name = signal<string>('')
  public email = signal<string>('')
  public avatar = signal<string>('')
  public type = signal<'Online' | 'Presencial'>('Online')
  public plan = signal<string>('')
  public since = signal<string>('')
  public status = signal<string>('')

  public modal = signal<boolean>(false)
  public action = signal<string>('create')

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined){
    this.valueSearch.set(value)
  }

  public chosenStudent(student: Student) {
    this.name.set(student.name);
    this.email.set(student.email);
    this.avatar.set(student.avatar);
    this.type.set(student.type);
    this.plan.set(student.plan);
    this.since.set(student.since);
    this.status.set(student.status);

    this.modal.set(true)
    this.action.set('update')
  }
}
