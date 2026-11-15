import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { AlunoService } from './aluno.service';
import { MatriculaService } from './matricula.service';
import { ParcelaService } from './parcela.service';
import { Customer, DashboardSnapshot, PlanDistribution, RecentActivity } from '../../types/dashboard';
import { toInputDate } from '../../shared/utils/date.util';

// O backend não tem um endpoint de dashboard/resumo, então montamos o
// snapshot aqui juntando Alunos + Matrículas + Parcelas (via /matricula/todos).
// Não há timestamp de criação em nenhuma entidade, então "Atividades
// Recentes" usa a ordem decrescente de id das matrículas como aproximação.
const DISTRIBUTION_COLORS = ['info', 'success', 'warning', 'danger'];

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private alunoService = inject(AlunoService);
  private matriculaService = inject(MatriculaService);
  private parcelaService = inject(ParcelaService);

  public getSnapshot(): Observable<DashboardSnapshot> {
    return forkJoin({
      alunos: this.alunoService.findAlunosAtivos(),
      matriculas: this.matriculaService.findMatriculas(),
      parcelas: this.parcelaService.findParcelas(),
    }).pipe(
      map(({ alunos, matriculas, parcelas }) => {
        const matriculasAtivas = matriculas.filter((m) => m.status === 'ATIVO');
        const parcelasPagas = parcelas.filter((p) => p.status === 'PAGA');
        const parcelasAtrasadas = parcelas.filter((p) => p.status === 'ATRASADA');
        const receitaRecebida = parcelasPagas.reduce((acc, p) => acc + p.valor, 0);

        const cards = [
          { label: 'Alunos Ativos', value: String(alunos.length), type: 'up' as const },
          { label: 'Matrículas Ativas', value: String(matriculasAtivas.length), type: 'up' as const },
          { label: 'Receita Recebida', value: `R$ ${receitaRecebida.toFixed(2)}`, type: 'up' as const },
          { label: 'Parcelas em Atraso', value: String(parcelasAtrasadas.length), type: 'down' as const },
        ];

        const recentActivities: RecentActivity[] = [...matriculas]
          .sort((a, b) => b.id - a.id)
          .slice(0, 6)
          .map((matricula) => ({
            id: matricula.id,
            name: matricula.alunoNome ?? `Aluno #${matricula.alunoId}`,
            description: `Matriculado em ${matricula.planoDescricao ?? 'plano #' + matricula.planoId}`,
            time: matricula.status,
            status:
              matricula.status === 'ATIVO' ? 'success' : matricula.status === 'VENCIDO' ? 'warning' : 'danger',
          }));

        const porTipoPlano = new Map<string, number>();
        matriculasAtivas.forEach((matricula) => {
          const tipo = matricula.planoTipo ?? 'OUTROS';
          porTipoPlano.set(tipo, (porTipoPlano.get(tipo) ?? 0) + 1);
        });
        const plansDistribution: PlanDistribution[] = Array.from(porTipoPlano.entries()).map(
          ([label, value], index) => ({
            label,
            value,
            color: DISTRIBUTION_COLORS[index % DISTRIBUTION_COLORS.length],
          }),
        );

        const paymentsWarning: Customer[] = [...parcelas]
          .filter((p) => p.status === 'EM_DIA')
          .sort((a, b) => toInputDate(a.vencimento).localeCompare(toInputDate(b.vencimento)))
          .slice(0, 5)
          .map((p) => ({ name: p.alunoNome, time: toInputDate(p.vencimento) }));

        return { cards, recentActivities, plansDistribution, paymentsWarning };
      }),
    );
  }
}
