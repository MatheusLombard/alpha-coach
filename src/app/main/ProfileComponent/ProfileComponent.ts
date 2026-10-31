import { Component } from '@angular/core';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { Switch } from '../../shared/components/Switch/Switch';

@Component({
  selector: 'app-profile-component',
  imports: [Panel, InputText, InputArea, Buttons, Switch],
  templateUrl: './ProfileComponent.html',
  styleUrl: './ProfileComponent.css',
})
export class ProfileComponent {}
