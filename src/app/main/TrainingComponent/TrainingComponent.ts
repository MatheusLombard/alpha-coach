import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { ExercisesList } from '../ExerciseComponent/ExercisesList/ExercisesList';
import { StudentsList } from './components/StudentsList/StudentsList';
import { InputText } from '../../shared/components/InputText/InputText';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { Exercise } from '../../types/exercise';
import { Aluno } from '../../types/aluno';
import { LinkedExercise, Treino } from '../../types/training';
import { ExerciseService } from '../../core/services/exercise.service';
import { TreinoService } from '../../core/services/treino.service';

@Component({
  selector: 'app-training-component',
  imports: [Panel, InputSearch, ExercisesList, StudentsList, InputText, Buttons],
  templateUrl: './TrainingComponent.html',
  styleUrl: './TrainingComponent.css',
})
export class TrainingComponent {
  private exerciseService = inject(ExerciseService);
  private treinoService = inject(TreinoService);

  public dragged = signal<Exercise | null>(null);
  public linkedExercises = signal<LinkedExercise[]>([]);
  public studentSelected = signal<boolean>(false);
  public studentId = signal<number>(0);
  public studentName = signal<string>('');
  public studentEmail = signal<string>('');
  public nomeTreino = signal<string>('');
  public mensagemErro = signal<string>('');
  public mensagemSucesso = signal<string>('');

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined) {
    this.valueSearch.set(value);
  }

  public valueSearchExercise = signal<string | undefined>('');
  public valueSearchedExercise(value: string | undefined) {
    this.valueSearchExercise.set(value);
  }

  private exercisesResource = rxResource({ stream: () => this.exerciseService.findExercises() });
  public exercises = computed(() => this.exercisesResource.value() ?? []);

  private treinosResource = rxResource({ stream: () => this.treinoService.findTreinos() });
  public treinosDoAluno = computed(
    () => this.treinosResource.value()?.filter((treino) => treino.alunoId === this.studentId()) ?? [],
  );

  public initials(name: string) {
    return name.slice(0, 2).toUpperCase();
  }

  public studentChosen(aluno: Aluno) {
    this.studentId.set(aluno.id);
    this.studentName.set(aluno.nome);
    this.studentEmail.set(aluno.email);
    this.studentSelected.set(true);
    this.linkedExercises.set([]);
    this.nomeTreino.set('');
    this.mensagemErro.set('');
    this.mensagemSucesso.set('');
  }

  public voltarParaLista() {
    this.studentSelected.set(false);
  }

  public startDrag(exercise: Exercise) {
    this.dragged.set(exercise);
  }

  public allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  public dropExercise(event: DragEvent) {
    event.preventDefault();
    const exercise = this.dragged();
    if (!exercise) return;

    this.linkedExercises.update((list) => [
      ...list,
      { exercise, sets: '', reps: '', load: '', rest: '', notes: '' },
    ]);
    this.dragged.set(null);
  }

  public removeLinkedExercise(index: number) {
    this.linkedExercises.update((list) => list.filter((_, i) => i !== index));
  }

  public salvarTreino() {
    const exercicios = this.linkedExercises();
    if (!this.nomeTreino() || exercicios.length === 0) {
      this.mensagemErro.set('Dê um nome ao treino e arraste ao menos um exercício.');
      return;
    }

    this.treinoService
      .createTreino({
        nome: this.nomeTreino(),
        alunoId: this.studentId(),
        exercicios: exercicios.map((item) => ({
          exercicioId: item.exercise.id,
          series: Number(item.sets),
          repeticoes: Number(item.reps),
          carga: item.load,
          tempoDescanso: item.rest ? Number(item.rest) : undefined,
          observacao: item.notes || undefined,
        })),
      })
      .subscribe({
        next: () => {
          this.mensagemErro.set('');
          this.mensagemSucesso.set('Treino salvo com sucesso.');
          this.linkedExercises.set([]);
          this.nomeTreino.set('');
          this.treinosResource.reload();
        },
        error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível salvar o treino.'),
      });
  }

  public alternarStatusTreino(treino: Treino) {
    const request = treino.ativo
      ? this.treinoService.desativarTreino(treino.id)
      : this.treinoService.ativarTreino(treino.id);

    request.subscribe(() => this.treinosResource.reload());
  }

  public baixarFicha(treinoId: number) {
    this.treinoService.downloadFicha(treinoId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `treino-${treinoId}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
