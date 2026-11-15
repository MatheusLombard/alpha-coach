import { Component, computed, inject, signal } from '@angular/core';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { ExercisesList } from './ExercisesList/ExercisesList';
import { Exercise } from '../../types/exercise';
import { ExerciseService } from '../../core/services/exercise.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-exercise-component',
  imports: [Panel, InputText, InputArea, Buttons, InputSearch, ExercisesList],
  templateUrl: './ExerciseComponent.html',
  styleUrl: './ExerciseComponent.css',
})
export class ExerciseComponent {
  exerciseService = inject(ExerciseService);

  id = signal<number | null>(null);
  name = signal<string>('');
  notes = signal<string>('');
  linkVideo = signal<string>('');
  mensagemErro = signal<string>('');

  public action = computed(() => (this.id() ? 'update' : 'create'));

  private exerciseResource = rxResource({
    stream: () => this.exerciseService.findExercises(),
  });

  public exercises = computed(() => this.exerciseResource.value() ?? []);

  public saveExercise() {
    if (!this.name()) {
      this.mensagemErro.set('Informe o nome do exercício.');
      return;
    }

    const payload = {
      nome: this.name(),
      descricao: this.notes(),
      linkVideo: this.linkVideo() || undefined,
    };

    const idAtual = this.id();
    const request = idAtual
      ? this.exerciseService.updateExercise(idAtual, payload)
      : this.exerciseService.createExercise(payload);

    request.subscribe({
      next: () => {
        this.mensagemErro.set('');
        this.limparFormulario();
        this.exerciseResource.reload();
      },
      error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível salvar o exercício.'),
    });
  }

  public valueExercise(value: Exercise) {
    this.id.set(value.id);
    this.name.set(value.nome);
    this.notes.set(value.descricao);
    this.linkVideo.set(value.linkVideo ?? '');
  }

  public alternarStatus(value: Exercise) {
    const request = value.ativo
      ? this.exerciseService.desativarExercise(value.id)
      : this.exerciseService.recuperarExercise(value.id);

    request.subscribe({
      next: () => this.exerciseResource.reload(),
      error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível alterar o status do exercício.'),
    });
  }

  public limparFormulario() {
    this.id.set(null);
    this.name.set('');
    this.notes.set('');
    this.linkVideo.set('');
    this.mensagemErro.set('');
  }

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined) {
    this.valueSearch.set(value);
  }
}
