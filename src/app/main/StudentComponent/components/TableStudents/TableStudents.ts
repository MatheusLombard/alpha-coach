import { Component, computed, inject, input, output } from '@angular/core';
import { Student } from '../../../../types/student';
import { StudentService } from '../../../../core/services/student.service';

@Component({
  selector: 'app-table-students',
  imports: [],
  templateUrl: './TableStudents.html',
  styleUrl: './TableStudents.css',
})
export class TableStudents {
  private studentService = inject(StudentService);

  valueSearched = input<string | undefined>();

  listStudents: Student[] = this.studentService.getStudents();
  public chosenStudent = output<Student>()

  public searchStudents = computed(() => {
    const search = this.valueSearched() ?? '';
    if (search === '') {
      return this.listStudents;
    } else {
      return this.listStudents.filter((item) => {
        return item.name.toLowerCase().includes(search);
      });
    }
  });
}
