// O backend devolve datas em dois formatos diferentes dependendo do campo:
// alguns (ex.: Aluno.dataNascimento) vêm "dd/MM/yyyy" porque têm @JsonFormat
// explícito; outros (ex.: Parcela.vencimentoParcela, Matricula.dataInicio)
// não têm a anotação e saem no padrão ISO do Jackson ("yyyy-MM-dd"). Essas
// funções lidam com os dois formatos sem precisar saber qual veio.

export function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}/.test(value);
}

export function isBrDate(value: string): boolean {
  return /^\d{2}\/\d{2}\/\d{4}/.test(value);
}

// yyyy-MM-dd -> dd/MM/yyyy (pra exibir); deixa como está se já vier nesse formato.
export function formatDateBR(value: string | undefined | null): string {
  if (!value) return '';
  if (isIsoDate(value)) {
    const [ano, mes, dia] = value.slice(0, 10).split('-');
    return `${dia}/${mes}/${ano}`;
  }
  return value;
}

// dd/MM/yyyy -> yyyy-MM-dd (pro <input type="date">); deixa como está se já vier em ISO.
export function toInputDate(value: string | undefined | null): string {
  if (!value) return '';
  if (isBrDate(value)) {
    const [dia, mes, ano] = value.slice(0, 10).split('/');
    return `${ano}-${mes}-${dia}`;
  }
  return value.slice(0, 10);
}

// yyyy-MM-dd (o que o <input type="date"> devolve) -> dd/MM/yyyy (o que o backend espera).
export function toBackendDate(value: string | undefined | null): string {
  if (!value) return '';
  if (isIsoDate(value)) {
    const [ano, mes, dia] = value.slice(0, 10).split('-');
    return `${dia}/${mes}/${ano}`;
  }
  return value;
}

export function hojeBR(): string {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  return `${dia}/${mes}/${hoje.getFullYear()}`;
}
