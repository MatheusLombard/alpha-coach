import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ParcelaFinanceira } from '../../types/parcela';
import { AuthService } from './auth.service';
import { API_BASE_URL } from '../constants/api.constant';

// Não existe endpoint pra listar parcelas direto - /parcela só tem rotas de
// alterar/estornar/cancelar um id específico. Pra listar tudo, buscamos
// GET /matricula/todos (que já traz a lista de parcelas de cada matrícula,
// com aluno/plano aninhados) e achatamos num array só.
const url = `${API_BASE_URL}/matricula/todos`;

interface ParcelaRaw {
  id: number;
  statusParcela: ParcelaFinanceira['status'];
  competencia: string;
  numeroParcela: number;
  vencimentoParcela: string;
  valorParcela: number;
}

interface MatriculaComParcelasRaw {
  id: number;
  aluno?: { id: number; nome: string; tipoAluno?: string };
  plano?: { id: number; descricao: string };
  parcelas?: ParcelaRaw[];
}

function flatten(matriculas: MatriculaComParcelasRaw[]): ParcelaFinanceira[] {
  return matriculas.flatMap((matricula) =>
    (matricula.parcelas ?? []).map((parcela) => ({
      id: parcela.id,
      matriculaId: matricula.id,
      alunoId: matricula.aluno?.id ?? 0,
      alunoNome: matricula.aluno?.nome ?? 'Aluno desconhecido',
      tipoAluno: matricula.aluno?.tipoAluno,
      planoId: matricula.plano?.id ?? 0,
      planoDescricao: matricula.plano?.descricao ?? 'Plano desconhecido',
      numeroParcela: parcela.numeroParcela,
      valor: parcela.valorParcela,
      vencimento: parcela.vencimentoParcela,
      competencia: parcela.competencia,
      status: parcela.statusParcela,
    })),
  );
}

@Injectable({ providedIn: 'root' })
export class ParcelaService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  public findParcelas(): Observable<ParcelaFinanceira[]> {
    return this.http
      .get<MatriculaComParcelasRaw[]>(url, { headers: this.auth.getAuthHeaders() })
      .pipe(map((lista) => flatten(lista ?? [])));
  }
}
