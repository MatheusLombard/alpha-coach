import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { InputArea } from '../../shared/components/InputArea/InputArea';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { Switch } from '../../shared/components/Switch/Switch';
import { AuthService } from '../../core/services/auth.service';
import { AlunoService } from '../../core/services/aluno.service';

@Component({
  selector: 'app-profile-component',
  imports: [Panel, InputText, InputArea, Buttons, Switch],
  templateUrl: './ProfileComponent.html',
  styleUrl: './ProfileComponent.css',
})
export class ProfileComponent {
  private authService = inject(AuthService);
  private alunoService = inject(AlunoService);

  public currentUser = this.authService.getCurrentUser();

  private alunosResource = rxResource({ stream: () => this.alunoService.findAlunosAtivos() });
  public alunosAtivos = computed(() => this.alunosResource.value()?.length ?? 0);
}
