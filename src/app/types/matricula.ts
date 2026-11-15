export type StatusMatricula = 'ATIVO' | 'CANCELADO' | 'VENCIDO';

export interface MatriculaRequest {
  alunoId: number;
  planoId: number;
}

export interface Matricula {
  id: number;
  alunoId: number;
  alunoNome?: string;
  planoId: number;
  planoDescricao?: string;
  planoTipo?: string;
  status: StatusMatricula;
  dataInicio: string;
  totalParcelas?: number;
}
