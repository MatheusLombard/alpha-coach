export type TipoPlano = 'MENSAL' | 'TRIMESTRAL' | 'SEMESTRAL' | 'ANUAL' | 'PERSONALIZADO';

export interface Plano {
  id: number;
  descricao: string;
  valor: number;
  duracaoMeses: number;
  tipoPlano: TipoPlano;
  ativo: boolean;
}

export type PlanoRequest = Omit<Plano, 'id' | 'ativo'>;
