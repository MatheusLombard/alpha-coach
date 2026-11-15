export type FormaPagamento = 'DINHEIRO' | 'CREDITO' | 'DEBITO' | 'PIX' | 'BOLETO';

export interface PagamentoRequest {
  alunoId: number;
  dataPagamento: string; // dd/MM/yyyy
  valorPago: number;
  formaPagamento: FormaPagamento;
  parcelaId: number;
}
