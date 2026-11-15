import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableStudents } from './components/TableStudents/TableStudents';
import { Modal } from '../../shared/components/Modal/Modal';
import { RegisterStudents } from './components/RegisterStudents/RegisterStudents';
import { Aluno } from '../../types/aluno';
import { AlunoService } from '../../core/services/aluno.service';
import { toBackendDate, toInputDate } from '../../shared/utils/date.util';

@Component({
  selector: 'app-student-component',
  imports: [Panel, InputSearch, Buttons, TableStudents, Modal, RegisterStudents],
  templateUrl: './StudentComponent.html',
  styleUrl: './StudentComponent.css',
})
export class StudentComponent {
  private alunoService = inject(AlunoService);

  public id = signal<number | null>(null);
  public nome = signal<string>('');
  public email = signal<string>('');
  public cpf = signal<string>('');
  public dataNascimento = signal<string>('');
  public telefone = signal<string>('');
  public tipoAluno = signal<string>('');
  public endereco = signal<string>('');
  public objetivo = signal<string>('');
  public anamnese = signal<string>('');
  public ativo = signal<boolean>(true);
  public mensagemErro = signal<string>('');

  public modal = signal<boolean>(false);
  public action = computed(() => (this.id() ? 'update' : 'create'));

  private alunosResource = rxResource({ stream: () => this.alunoService.findAlunosTodos() });
  public alunos = computed(() => this.alunosResource.value() ?? []);

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined) {
    this.valueSearch.set(value);
  }

  public novoAluno() {
    this.limparFormulario();
    this.modal.set(true);
  }

  public chosenStudent(aluno: Aluno) {
    this.id.set(aluno.id);
    this.nome.set(aluno.nome);
    this.email.set(aluno.email);
    this.cpf.set(aluno.cpf ?? '');
    this.dataNascimento.set(toInputDate(aluno.dataNascimento));
    this.telefone.set(aluno.telefone ?? '');
    this.tipoAluno.set(aluno.tipoAluno);
    this.endereco.set(aluno.endereco ?? '');
    this.objetivo.set(aluno.objetivo ?? '');
    this.anamnese.set(aluno.anamnese ?? '');
    this.ativo.set(aluno.ativo);
    this.mensagemErro.set('');

    this.modal.set(true);
  }

  public salvar() {
    if (!this.nome() || !this.email()) {
      this.mensagemErro.set('Preencha ao menos nome e email.');
      return;
    }

    const payload = {
      nome: this.nome(),
      email: this.email(),
      cpf: this.cpf(),
      dataNascimento: toBackendDate(this.dataNascimento()),
      telefone: this.telefone(),
      tipoAluno: (this.tipoAluno() || 'PRESENCIAL') as Aluno['tipoAluno'],
      endereco: this.endereco(),
      objetivo: this.objetivo(),
      anamnese: this.anamnese(),
    };

    const idAtual = this.id();
    const request = idAtual ? this.alunoService.updateAluno(idAtual, payload) : this.alunoService.createAluno(payload);

    request.subscribe({
      next: () => this.aoSalvarComSucesso(),
      error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível salvar o aluno.'),
    });
  }

  public alternarStatus() {
    const idAtual = this.id();
    if (!idAtual) return;

    const request = this.ativo() ? this.alunoService.inativarAluno(idAtual) : this.alunoService.recuperarAluno(idAtual);

    request.subscribe({
      next: () => this.aoSalvarComSucesso(),
      error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível alterar o status do aluno.'),
    });
  }

  private aoSalvarComSucesso() {
    this.mensagemErro.set('');
    this.modal.set(false);
    this.limparFormulario();
    this.alunosResource.reload();
  }

  private limparFormulario() {
    this.id.set(null);
    this.nome.set('');
    this.email.set('');
    this.cpf.set('');
    this.dataNascimento.set('');
    this.telefone.set('');
    this.tipoAluno.set('');
    this.endereco.set('');
    this.objetivo.set('');
    this.anamnese.set('');
    this.ativo.set(true);
    this.mensagemErro.set('');
  }
}
