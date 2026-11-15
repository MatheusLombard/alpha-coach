export type TipoAluno = 'ONLINE' | 'PRESENCIAL';

// Formato normalizado que o resto do app usa. O backend tem dois shapes
// diferentes pro mesmo recurso: GET /alunos e /alunos/todos devolvem a
// entidade completa; POST/PATCH devolvem um AlunoResponse que não traz
// cpf/dataNascimento/telefone/endereco. O AlunoService junta os dois.
export interface Aluno {
  id: number;
  nome: string;
  email: string;
  cpf?: string;
  dataNascimento?: string;
  telefone?: string;
  objetivo?: string;
  anamnese?: string;
  tipoAluno: TipoAluno;
  endereco?: string;
  ativo: boolean;
}

export interface AlunoRequest {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string; // dd/MM/yyyy
  telefone: string;
  objetivo: string;
  anamnese: string;
  tipoAluno: TipoAluno;
  endereco: string;
}

export type AlterAlunoRequest = Partial<AlunoRequest>;
