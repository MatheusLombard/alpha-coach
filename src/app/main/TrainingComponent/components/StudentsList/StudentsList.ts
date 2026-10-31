import { Component, computed, inject, input, output } from '@angular/core';
import { Student, SelectedStudent } from '../../../../types/student';
import { StudentService } from '../../../../core/services/student.service';

@Component({
  selector: 'app-students-list',
  imports: [],
  templateUrl: './StudentsList.html',
  styleUrl: './StudentsList.css',
})
export class StudentsList {
  private studentService = inject(StudentService);

  studentChosen = output<SelectedStudent>();
  valueSearched = input<string | undefined>();

  listStudents: Student[] = this.studentService.getStudents();

  public initials(name: string) {
    return name.slice(0, 2);
  }

  public searchStudents = computed(() => {
    const search = this.valueSearched() ?? '';
    if(search === ''){
      return this.listStudents
    }else{
      return this.listStudents.filter((student) => {
        return student.name.toLowerCase().includes(search);
      });
    }
  });
}
