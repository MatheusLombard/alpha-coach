import { Component, computed, HostListener, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../../../../types/aluno';

@Component({
  selector: 'app-table-students',
  imports: [],
  templateUrl: './TableStudents.html',
  styleUrl: './TableStudents.css',
})
export class TableStudents {
  private router = inject(Router);

  valueSearched = input<string | undefined>();
  items = input<Aluno[]>([]);

  public chosenStudent = output<Aluno>();

  public openMenuId = signal<number | null>(null);

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-cell')) {
      this.openMenuId.set(null);
    }
  }

  public toggleMenu(id: number) {
    this.openMenuId.set(this.openMenuId() === id ? null : id);
  }

  public editar(item: Aluno) {
    this.openMenuId.set(null);
    this.chosenStudent.emit(item);
  }

  public matricular(item: Aluno) {
    this.openMenuId.set(null);
    this.router.navigate(['/home/matriculas'], { queryParams: { alunoNome: item.nome } });
  }

  public searchStudents = computed(() => {
    const search = (this.valueSearched() ?? '').toLowerCase();
    const items = this.items();
    if (search === '') return items;
    return items.filter((item) => item.nome.toLowerCase().includes(search));
  });
}
