import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { Radio } from '../../shared/components/Radio/Radio';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';

@Component({
  selector: 'app-exercise-component',
  imports: [Panel, InputText, Radio, InputArea, Buttons],
  templateUrl: './ExerciseComponent.html',
  styleUrl: './ExerciseComponent.css',
})
export class ExerciseComponent {}
