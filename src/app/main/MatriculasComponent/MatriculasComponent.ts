import { Component, computed, effect, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputSelect } from '../../shared/components/InputSelect/InputSelect';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TableMatriculas } from './components/TableMatriculas/TableMatriculas';
import { MatriculaService } from '../../core/services/matricula.service';
import { AlunoService } from '../../core/services/aluno.service';
import { PlanoService } from '../../core/services/plano.service';
import { Matricula } from '../../types/matricula';

@Component({
  selector: 'app-matriculas-component',
  imports: [Panel, InputSelect, Buttons, TableMatriculas],
  templateUrl: './MatriculasComponent.html',
  styleUrl: './MatriculasComponent.css',
})
export class MatriculasComponent {
  private matriculaService = inject(MatriculaService);
  private alunoService = inject(AlunoService);
  private planoService = inject(PlanoService);
  private route = inject(ActivatedRoute);

  public alunoId = signal<string>('');
  public planoId = signal<string>('');
  public mensagemErro = signal<string>('');

  private alunosResource = rxResource({ stream: () => this.alunoService.findAlunosAtivos() });
  private planosResource = rxResource({ stream: () => this.planoService.findPlanos() });
  private matriculasResource = rxResource({ stream: () => this.matriculaService.findMatriculas() });

  public alunoOptions = computed(() =>
    (this.alunosResource.value() ?? []).map((aluno) => ({ value: String(aluno.id), label: aluno.nome })),
  );

  public planoOptions = computed(() =>
    (this.planosResource.value() ?? [])
      .filter((plano) => plano.ativo)
      .map((plano) => ({ value: String(plano.id), label: `${plano.descricao} (${plano.tipoPlano})` })),
  );

  public matriculas = computed(() => this.matriculasResource.value() ?? []);

  constructor() {
    // Veio do botão "Matricular" na tela de Alunos: tenta pré-selecionar o
    // aluno pelo nome assim que a lista real de alunos carregar.
    const alunoNomeParam = this.route.snapshot.queryParamMap.get('alunoNome');
    if (alunoNomeParam) {
      effect(() => {
        if (this.alunoId()) return;
        const match = this.alunoOptions().find(
          (opcao) => opcao.label.toLowerCase() === alunoNomeParam.toLowerCase(),
        );
        if (match) {
          this.alunoId.set(match.value);
        }
      });
    }
  }

  public matricular() {
    if (!this.alunoId() || !this.planoId()) {
      this.mensagemErro.set('Selecione um aluno e um plano.');
      return;
    }

    this.matriculaService
      .createMatricula({ alunoId: Number(this.alunoId()), planoId: Number(this.planoId()) })
      .subscribe({
        next: () => {
          this.mensagemErro.set('');
          this.alunoId.set('');
          this.planoId.set('');
          this.matriculasResource.reload();
        },
        error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível criar a matrícula.'),
      });
  }

  public cancelarMatricula(matricula: Matricula) {
    this.matriculaService.cancelarMatricula(matricula.id).subscribe(() => this.matriculasResource.reload());
  }
}
