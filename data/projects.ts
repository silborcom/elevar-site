/**
 * Acervo de projetos entregues.
 *
 * Os textos deste arquivo vêm do cliente e não devem ser reescritos.
 * `location` e `year` são opcionais de propósito: quando vazios, a interface
 * simplesmente não renderiza o metadado (nada de rótulo órfão na foto).
 *
 * Fotos ficam em `/public/projects/`. Cada item precisa de `width`/`height`
 * reais do arquivo: o trilho usa essa proporção para dar ao card a largura
 * correta mantendo a altura fixa — é assim que retrato e paisagem convivem
 * na mesma faixa sem corte.
 */
export type Project = {
  id: string;
  /** Nome da obra/cliente, exibido em caixa alta sobre a foto. */
  name: string;
  /** Equipamento aplicado (ex.: "Talha elétrica de corrente"). */
  equipment?: string;
  /** Capacidade nominal (ex.: "5 t"). */
  capacity?: string;
  /** Cidade/UF. Vazio = não renderizado. */
  location?: string;
  /** Ano de entrega. Vazio = não renderizado. */
  year?: string;
  /**
   * Agrupa fotos da mesma obra. Duas fotos com o mesmo `obraId` recebem o
   * mesmo rótulo "OBRA nn" na linha mono, sinalizando que são o mesmo projeto.
   */
  obraId?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const projects: Project[] = [];

export const projectsTotal = projects.length;

/**
 * Rótulos "OBRA nn" apenas para os `obraId` que aparecem em mais de uma foto.
 * Uma obra com foto única não precisa do rótulo — ele existe para conectar
 * imagens irmãs, não para numerar tudo.
 */
export function buildObraLabels(list: Project[] = projects): Record<string, string> {
  const counts = new Map<string, number>();
  for (const project of list) {
    if (!project.obraId) continue;
    counts.set(project.obraId, (counts.get(project.obraId) ?? 0) + 1);
  }

  const labels: Record<string, string> = {};
  let index = 0;
  for (const [obraId, count] of counts) {
    if (count < 2) continue;
    index += 1;
    labels[obraId] = `OBRA ${String(index).padStart(2, "0")}`;
  }
  return labels;
}
