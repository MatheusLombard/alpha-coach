export type StatusParcela = 'EM_DIA' | 'ATRASADA' | 'PAGA' | 'CANCELADA';

// Linha "achatada" de parcela com os dados de aluno/plano já embutidos, pra
// telas de Financeiro e Dashboard não precisarem fazer o join na mão.
export interface ParcelaFinanceira {
  id: number;
  matriculaId: number;
  alunoId: number;
  alunoNome: string;
  tipoAluno?: string;
  planoId: number;
  planoDescricao: string;
  numeroParcela: number;
  valor: number;
  vencimento: string;
  competencia: string;
  status: StatusParcela;
}
