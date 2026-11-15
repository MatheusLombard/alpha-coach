import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Panel } from '../../shared/components/Panel/Panel';
import { InputText } from '../../shared/components/InputText/InputText';
import { InputSelect, SelectOption } from '../../shared/components/InputSelect/InputSelect';
import { Buttons } from '../../shared/components/Buttons/Buttons';
import { TablePlanos } from './components/TablePlanos/TablePlanos';
import { Plano, TipoPlano } from '../../types/plano';
import { PlanoService } from '../../core/services/plano.service';

const TIPO_PLANO_OPTIONS: SelectOption[] = [
  { value: 'MENSAL', label: 'Mensal' },
  { value: 'TRIMESTRAL', label: 'Trimestral' },
  { value: 'SEMESTRAL', label: 'Semestral' },
  { value: 'ANUAL', label: 'Anual' },
  { value: 'PERSONALIZADO', label: 'Personalizado' },
];

@Component({
  selector: 'app-planos-component',
  imports: [Panel, InputText, InputSelect, Buttons, TablePlanos],
  templateUrl: './PlanosComponent.html',
  styleUrl: './PlanosComponent.css',
})
export class PlanosComponent {
  private planoService = inject(PlanoService);

  public tipoPlanoOptions = TIPO_PLANO_OPTIONS;

  public id = signal<number | null>(null);
  public descricao = signal<string>('');
  public valor = signal<string>('');
  public duracaoMeses = signal<string>('');
  public tipoPlano = signal<string>('');
  public mensagemErro = signal<string>('');

  public action = computed(() => (this.id() ? 'update' : 'create'));

  private planosResource = rxResource({
    stream: () => this.planoService.findPlanos(),
  });

  public planos = computed(() => this.planosResource.value() ?? []);

  public salvar() {
    if (!this.descricao() || !this.valor() || !this.duracaoMeses() || !this.tipoPlano()) {
      this.mensagemErro.set('Preencha todos os campos do plano.');
      return;
    }

    const payload: Omit<Plano, 'id' | 'ativo'> = {
      descricao: this.descricao(),
      valor: Number(this.valor()),
      duracaoMeses: Number(this.duracaoMeses()),
      tipoPlano: this.tipoPlano() as TipoPlano,
    };

    const idAtual = this.id();
    const request = idAtual ? this.planoService.updatePlano(idAtual, payload) : this.planoService.createPlano(payload);

    request.subscribe({
      next: () => {
        this.mensagemErro.set('');
        this.limparFormulario();
        this.planosResource.reload();
      },
      error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível salvar o plano.'),
    });
  }

  public selecionarPlano(plano: Plano) {
    this.id.set(plano.id);
    this.descricao.set(plano.descricao);
    this.valor.set(String(plano.valor));
    this.duracaoMeses.set(String(plano.duracaoMeses));
    this.tipoPlano.set(plano.tipoPlano);
  }

  public alternarStatus(plano: Plano) {
    const request = plano.ativo ? this.planoService.desativarPlano(plano.id) : this.planoService.ativarPlano(plano.id);
    request.subscribe(() => this.planosResource.reload());
  }

  public limparFormulario() {
    this.id.set(null);
    this.descricao.set('');
    this.valor.set('');
    this.duracaoMeses.set('');
    this.tipoPlano.set('');
    this.mensagemErro.set('');
  }
}
