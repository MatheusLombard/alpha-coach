import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { InputSearch } from '../StudentComponent/components/InputSearch/InputSearch';
import { Panel } from '../../shared/components/Panel/Panel'
import { TableFinancial } from './TableFinancial/TableFinancial';
import { ParcelaFinanceira } from '../../types/parcela';
import { CardFinancial } from './CardFinancial/CardFinancial';
import { Modal } from '../../shared/components/Modal/Modal';
import { RegisterFinancial } from './RegisterFinancial/RegisterFinancial';
import { ParcelaService } from '../../core/services/parcela.service';
import { PagamentoService } from '../../core/services/pagamento.service';
import { FormaPagamento } from '../../types/pagamento';
import { formatDateBR, hojeBR } from '../../shared/utils/date.util';

@Component({
  selector: 'app-financial-component',
  imports: [InputSearch, Panel, TableFinancial, CardFinancial, Modal, RegisterFinancial],
  templateUrl: './FinancialComponent.html',
  styleUrl: './FinancialComponent.css',
})
export class FinancialComponent {
  private parcelaService = inject(ParcelaService);
  private pagamentoService = inject(PagamentoService);

  public formatDateBR = formatDateBR;

  public parcelaSelecionada = signal<ParcelaFinanceira | null>(null);
  public formaPagamento = signal<string>('');
  public mensagemErro = signal<string>('');
  public modal = signal<boolean>(false);

  private parcelasResource = rxResource({ stream: () => this.parcelaService.findParcelas() });
  public parcelas = computed(() => this.parcelasResource.value() ?? []);

  public resumo = computed(() => {
    const lista = this.parcelas();
    const soma = (status: string) => lista.filter((p) => p.status === status).reduce((acc, p) => acc + p.valor, 0);
    const conta = (status: string) => lista.filter((p) => p.status === status).length;
    return {
      recebido: soma('PAGA'),
      recebidoQtd: conta('PAGA'),
      aVencer: soma('EM_DIA'),
      aVencerQtd: conta('EM_DIA'),
      atrasado: soma('ATRASADA'),
      atrasadoQtd: conta('ATRASADA'),
    };
  });

  public valueSearch = signal<string | undefined>('');
  public valueSearched(value: string | undefined) {
    this.valueSearch.set(value);
  }

  public chosenFinancial(parcela: ParcelaFinanceira) {
    this.parcelaSelecionada.set(parcela);
    this.formaPagamento.set('');
    this.mensagemErro.set('');
    this.modal.set(true);
  }

  public confirmarPagamento() {
    const parcela = this.parcelaSelecionada();
    if (!parcela) return;
    if (!this.formaPagamento()) {
      this.mensagemErro.set('Selecione a forma de pagamento.');
      return;
    }

    this.pagamentoService
      .registrarPagamento({
        alunoId: parcela.alunoId,
        dataPagamento: hojeBR(),
        valorPago: parcela.valor,
        formaPagamento: this.formaPagamento() as FormaPagamento,
        parcelaId: parcela.id,
      })
      .subscribe({
        next: () => {
          this.modal.set(false);
          this.parcelasResource.reload();
        },
        error: (err) => this.mensagemErro.set(err?.error?.message ?? 'Não foi possível registrar o pagamento.'),
      });
  }
}
