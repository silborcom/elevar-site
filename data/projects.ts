/**
 * Acervo de projetos entregues.
 *
 * Os textos deste arquivo vêm das legendas do cliente (WhatsApp, 23/07/2026),
 * normalizadas para o tom técnico do site — não reescrever. `location` e
 * `year` são opcionais de propósito: quando vazios, a interface simplesmente
 * não renderiza o metadado. Preencher com o cliente antes de publicar.
 *
 * Fotos ficam em `/public/projects/`. Cada item traz `width`/`height` reais
 * do arquivo: o trilho usa essa proporção para dar ao card a largura correta
 * mantendo a altura fixa — é assim que retrato e paisagem convivem.
 *
 * Duas mensagens da conversa original não carregaram nos prints (14:51 e
 * 14:57) e podem conter dados extras — conferir antes de publicar.
 */

export type Project = {
  id: string;
  /** Índice sequencial exibido como rótulo técnico (PRJ.01, PRJ.02...). */
  index: string;
  /** Nome da obra/projeto, exibido em caixa alta sobre a foto. */
  name: string;
  /** Tipo de equipamento/fornecimento — metadado curto exibido no card. */
  equipment?: string;
  /** Capacidade informada pelo cliente ou legível na placa. */
  capacity?: string;
  /** Cidade/UF — a confirmar com o cliente. Vazio = não renderizado. */
  location?: string;
  /** Ano de entrega — a confirmar com o cliente. Vazio = não renderizado. */
  year?: string;
  /** Descrição curta — legenda enviada pelo cliente, normalizada. */
  description?: string;
  /** Agrupa fotos da mesma obra (ex.: as duas da planta de fertilizantes). */
  obraId?: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const projects: Project[] = [
  {
    id: "obra-fertilizantes-talhas",
    index: "01",
    name: "Planta de fertilizantes — talhas elétricas",
    equipment: "Talhas elétricas de cabo de aço em monovia",
    capacity: "+40 talhas · diversas capacidades",
    obraId: "fertilizantes",
    description:
      "Uma das maiores obras de fertilizantes do Brasil: mais de 40 talhas elétricas de cabo de aço, em diversas capacidades e alturas de elevação.",
    image: {
      src: "/projects/obra-fertilizantes-planta.webp",
      width: 1600,
      height: 1200,
      alt: "Vista ampla da planta de fertilizantes com torres, escadas e tubulações",
    },
  },
  {
    id: "obra-fertilizantes-planta",
    index: "02",
    name: "Planta de fertilizantes — vista da obra",
    equipment: "Monovias e talhas em estrutura de processo",
    obraId: "fertilizantes",
    description:
      "Vista da mesma obra: monovias integradas à estrutura de concreto da planta, atendendo às torres e tubulações de processo.",
    image: {
      src: "/projects/barra-carga-5t.webp",
      width: 1600,
      height: 1200,
      alt: "Close da monovia com duas talhas elétricas de cabo de aço na estrutura da planta",
    },
  },
  {
    id: "barra-carga-5t",
    index: "03",
    name: "Barra de carga especial",
    equipment: "Viga de içamento com ganchos nas extremidades",
    capacity: "5,0 t",
    description:
      "Barra de carga especial para 5 toneladas, em operação suspensa sobre linha de produção.",
    image: {
      src: "/projects/obra-fertilizantes-talhas.webp",
      width: 1600,
      height: 1200,
      alt: "Barra de carga Elevar amarela de 5 toneladas com ganchos nas extremidades em galpão",
    },
  },
  {
    id: "portico-xaroparia",
    index: "04",
    name: "Pórtico para xaroparia",
    equipment: "Pórtico com duas talhas elétricas",
    capacity: "2 × 3,0 t",
    description:
      "Pórtico Elevar com duas talhas elétricas de 3 toneladas, dimensionado para operação em xaroparia.",
    image: {
      src: "/projects/portico-xaroparia.webp",
      width: 2133,
      height: 1200,
      alt: "Pórtico Elevar amarelo de duas vigas, capacidade 2 vezes 3 toneladas, instalado em área de xaroparia",
    },
  },
  {
    id: "gaiola-icamento",
    index: "05",
    name: "Gaiola de içamento de cargas",
    equipment: "Gaiola com olhal único de suspensão",
    description:
      "Gaiola de içamento de cargas com porta e olhal de suspensão, fabricada sob projeto.",
    image: {
      src: "/projects/gaiola-icamento.webp",
      width: 900,
      height: 1200,
      alt: "Gaiola de içamento Elevar amarela com grade, porta e olhal de suspensão, sobre pallet em galpão",
    },
  },
  {
    id: "ponte-raspadora-lodo",
    index: "06",
    name: "Ponte raspadora de lodo",
    equipment: "Ponte motorizada sobre trilhos · regime contínuo",
    description:
      "Ponte raspadora de lodo para uso contínuo, com translação motorizada sobre trilhos e plataforma com guarda-corpo.",
    image: {
      src: "/projects/ponte-raspadora-lodo.webp",
      width: 2134,
      height: 1200,
      alt: "Ponte raspadora de lodo Elevar amarela sobre tanque de tratamento, com guarda-corpo e motorredutores",
    },
  },
  {
    id: "talha-baixa-altura-especial",
    index: "07",
    name: "Talha manual especial de baixa altura",
    equipment: "Talha manual low headroom · ensaio de carga",
    description:
      "Talha manual especial para baixa altura, registrada durante ensaio de carga com bolsa d'água.",
    image: {
      src: "/projects/talha-baixa-altura-especial.webp",
      width: 900,
      height: 1200,
      alt: "Ensaio de carga com bolsa d'água amarela suspensa por talha manual de baixa altura em viga de galpão",
    },
  },
  {
    id: "cadernal-extra-pesado-35t",
    index: "08",
    name: "Cadernal extra pesado",
    equipment: "Linha CEP · gancho duplo",
    capacity: "35 t · cabo 1.3/8\"",
    description:
      "Cadernal extra pesado de 35 toneladas, fabricado sob especificação e pronto para expedição.",
    image: {
      src: "/projects/cadernal-extra-pesado-35t.webp",
      width: 900,
      height: 1200,
      alt: "Cadernal extra pesado Elevar de 35 toneladas com gancho duplo, pintado de amarelo, embalado em caixa de madeira",
    },
  },
  {
    id: "talha-cabo-transportador",
    index: "09",
    name: "Talha de cabo de aço para transportador",
    equipment: "Talha de cabo de aço em estrutura sobre lâmina d'água",
    description:
      "Talha de cabo de aço aplicada a transportador de cargas, com passarelas e guarda-corpo para acesso e manutenção.",
    image: {
      src: "/projects/talha-cabo-transportador.webp",
      width: 960,
      height: 1200,
      alt: "Estrutura azul e amarela de transportador de cargas sobre a água, com talha de cabo de aço e passarelas com guarda-corpo",
    },
  },
  {
    id: "barra-carga-compacta-3t",
    index: "10",
    name: "Barra de carga compacta",
    equipment: "Viga de içamento com pontos reguláveis",
    capacity: "3,0 t",
    description:
      "Barra de carga compacta para 3 toneladas, com pontos de fixação ajustáveis ao longo do vão.",
    image: {
      src: "/projects/barra-carga-compacta-3t.webp",
      width: 900,
      height: 1200,
      alt: "Barra de carga compacta Elevar amarela de 3 toneladas apoiada em empilhadeira hidráulica no depósito",
    },
  },
  {
    id: "talha-trole-ex",
    index: "11",
    name: "Trole e talha manual EX",
    equipment: "Conjunto anticentelhante · à prova de explosão",
    capacity: "5,0 t",
    description:
      "Trole e talha manual EX anticentelhantes, à prova de explosão, com componentes em bronze para atmosferas classificadas.",
    image: {
      src: "/projects/talha-trole-ex.webp",
      width: 900,
      height: 1200,
      alt: "Talha manual Elevar EX de 5 toneladas com gancho e componentes em bronze anticentelhante, montada em trole sobre viga amarela",
    },
  },
  {
    id: "ponte-rolante-concretos",
    index: "12",
    name: "Ponte rolante para produção de concretos",
    equipment: "Ponte rolante especial a céu aberto",
    description:
      "Ponte rolante especial para produção de concretos, instalada sobre pilares pré-moldados em pátio de fabricação.",
    image: {
      src: "/projects/ponte-rolante-concretos.webp",
      width: 1633,
      height: 1200,
      alt: "Ponte rolante Elevar com viga amarela sobre pilares de concreto pré-moldado em pátio de produção a céu aberto",
    },
  },
];

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
