import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Panel } from '../../shared/components/panel/panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { Switch } from '../../shared/components/Switch/Switch';

@Component({
  selector: 'app-perfil-component',
  imports: [Panel, InputText, InputArea, Buttons, Switch],
  templateUrl: './PerfilComponent.html',
  styleUrl: './PerfilComponent.css',
})
export class PerfilComponent {}
