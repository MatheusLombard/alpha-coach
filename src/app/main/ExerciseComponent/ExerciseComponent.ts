import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { Radio } from '../../shared/components/Radio/Radio';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { InputSearch } from '../StudentComponent/components/input-search/input-search';
import { Dificuldade, Exercicio, ExercisesList } from './exercises-list/exercises-list';

@Component({
  selector: 'app-exercise-component',
  imports: [Panel, InputText, Radio, InputArea, Buttons, InputSearch, ExercisesList],
  templateUrl: './ExerciseComponent.html',
  styleUrl: './ExerciseComponent.css',
})
export class ExerciseComponent {

    id = signal<number>(0);
    nome = signal<string>('');
    grupoMuscular = signal<string>('');
    equipamento = signal<string>('');
    dificuldade = signal<Dificuldade>('Intermediario');
    observacoes = signal<string>('');


  public valueExercise(value:Exercicio){
    // this.id.set(value.id)
    this.nome.set(value.nome)
    this.grupoMuscular.set(value.grupoMuscular)
    this.equipamento.set(value.equipamento)
    this.dificuldade.set(value.dificuldade)
    this.observacoes.set(value.observacoes)
    
  }

}
