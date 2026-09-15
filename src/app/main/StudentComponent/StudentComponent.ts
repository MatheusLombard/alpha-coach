import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputSearch } from './components/input-search/input-search';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableStudents } from './components/table-students/table-students';

@Component({
  selector: 'app-student-component',
  imports: [Panel, InputSearch, Buttons, TableStudents],
  templateUrl: './StudentComponent.html',
  styleUrl: './StudentComponent.css',
})
export class StudentComponent {

}
