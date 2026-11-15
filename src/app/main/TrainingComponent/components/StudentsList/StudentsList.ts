import { Component, computed, inject, input, output } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Aluno } from '../../../../types/aluno';
import { AlunoService } from '../../../../core/services/aluno.service';

@Component({
  selector: 'app-students-list',
  imports: [],
  templateUrl: './StudentsList.html',
  styleUrl: './StudentsList.css',
})
export class StudentsList {
  private alunoService = inject(AlunoService);

  studentChosen = output<Aluno>();
  valueSearched = input<string | undefined>();

  private alunosResource = rxResource({ stream: () => this.alunoService.findAlunosAtivos() });
  private listStudents = computed(() => this.alunosResource.value() ?? []);

  public initials(name: string) {
    return name.slice(0, 2).toUpperCase();
  }

  public searchStudents = computed(() => {
    const search = (this.valueSearched() ?? '').toLowerCase();
    const items = this.listStudents();
    if (search === '') return items;
    return items.filter((aluno) => aluno.nome.toLowerCase().includes(search));
  });
}
