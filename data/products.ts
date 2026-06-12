/**
 * Produtos extraídos de CATALOGO_2026_-_elevar.xlsx (planilha + fotos embutidas).
 * Regra do projeto: nenhuma especificação inventada. Campos ausentes ficam
 * vazios e são tratados visualmente na interface.
 */

export type SpecTable = {
  /** Cabeçalhos das colunas, na ordem em que aparecem no catálogo. */
  columns: string[];
  /** Linhas de especificação, alinhadas às colunas. */
  rows: string[][];
  /** Observação honesta sobre dados condensados ou variações. */
  note?: string;
};

export type Product = {
  id: string;
  index: string;
  name: string;
  series: string;
  category: string;
  shortDescription: string;
  application: string;
  capacity: string;
  refCode: string;
  specHighlights: { label: string; value: string }[];
  specTable: SpecTable;
  image?: { src: string; width: number; height: number; alt: string; transparent: boolean };
  source: string;
};

export const products: Product[] = [
  {
    id: "talha-manual-es",
    index: "01",
    name: "Talha manual de corrente",
    series: "Elevar Compacta — ES",
    category: "Elevação manual",
    shortDescription:
      "Elevação por corrente de carga com acionamento manual. Compacta, sem dependência de energia elétrica.",
    application:
      "Içamento em indústria, manutenção e construção, em pontos fixos ou acoplada a trole sobre viga.",
    capacity: "0,5 – 10 t",
    refCode: "TAL.MAN",
    specHighlights: [
      { label: "Capacidade", value: "0,5 a 10 t" },
      { label: "Elevação", value: "3 e 5 m" },
      { label: "Esforço de operação", value: "21 a 40,5 kg" },
      { label: "Peso líquido", value: "9 a 97 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Esforço (kg)", "Peso (kg)"],
      rows: [
        ["0,5", "TAL.MAN-0,5tx3", "21", "9"],
        ["1", "TAL.MAN-1tx3", "26", "11"],
        ["2", "TAL.MAN-2tx3", "34", "16"],
        ["3", "TAL.MAN-3tx3", "37", "27"],
        ["5", "TAL.MAN-5tx3", "40,5", "39"],
        ["10", "TAL.MAN-10tx3", "40,5", "75"],
      ],
      note:
        "Valores para elevação de 3 m. Versões de 5 m (sufixo x5) e peso adicional por metro conforme catálogo.",
    },
    image: {
      src: "/products/talha-manual-es.webp",
      width: 462,
      height: 1600,
      alt: "Talha manual de corrente Elevar Compacta ES de 5 toneladas, corpo amarelo com corrente de carga preta",
      transparent: true,
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-eletrica-tm",
    index: "02",
    name: "Talha elétrica de corrente",
    series: "Série TM — 1 e 2 velocidades",
    category: "Elevação elétrica",
    shortDescription:
      "Talha elétrica de corrente para regime industrial, disponível em uma ou duas velocidades de elevação.",
    application:
      "Ciclos de içamento contínuos em linhas de produção, montagem e manutenção industrial.",
    capacity: "0,5 – 5 t",
    refCode: "TAL.ELE",
    specHighlights: [
      { label: "Capacidade", value: "0,5 a 5 t" },
      { label: "Elevação", value: "6 m" },
      { label: "Potência", value: "1,1 a 3 kW" },
      { label: "Velocidade", value: "3,3 a 7,2 m/min" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Potência (kW)", "Veloc. (m/min)", "Peso (kg)"],
      rows: [
        ["0,5", "TAL.ELE-0,5x6", "1,1", "7,2", "50"],
        ["1", "TAL.ELE-1x6", "1,5", "6,8", "56"],
        ["2", "TAL.ELE-2x6", "1,5", "3,4", "66"],
        ["3", "TAL.ELE-3x6", "3", "5,6", "105"],
        ["5", "TAL.ELE-5x6", "3", "3,3", "137"],
      ],
      note:
        "Tabela da versão 1 velocidade. Versão 2 velocidades: potências de 0,37/1,1 a 3/1,1 kW e elevação de 0,9 a 7,2 m/min.",
    },
    image: {
      src: "/products/talha-eletrica-tm.webp",
      width: 616,
      height: 1544,
      alt: "Talha elétrica de corrente Elevar série TM de 1 tonelada com botoeira pendente",
      transparent: false,
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-eletrica-trole",
    index: "03",
    name: "Talha elétrica com trole elétrico",
    series: "Série TM + translação motorizada",
    category: "Elevação + translação",
    shortDescription:
      "Conjunto talha e trole motorizados: eleva e translada a carga ao longo da viga com um único comando.",
    application:
      "Movimentação horizontal sobre viga I em monovias e pontes rolantes, com translação de 11 a 12 m/min.",
    capacity: "0,5 – 5 t",
    refCode: "TAL.ELE + TROLE",
    specHighlights: [
      { label: "Capacidade", value: "0,5 a 5 t" },
      { label: "Translação", value: "11 a 12 m/min" },
      { label: "Motor do trole", value: "0,42 a 0,75 kW" },
      { label: "Aba da viga", value: "75 a 178 mm" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Trole (kW)", "Translação (m/min)", "Aba da viga (mm)", "Peso (kg)"],
      rows: [
        ["0,5", "0,42", "12", "75 a 125", "82"],
        ["1", "0,48", "11", "75 a 178", "86"],
        ["2", "0,48", "11", "82 a 178", "97"],
        ["3", "0,75", "11", "100 a 178", "170"],
        ["5", "0,75", "11", "112 a 178", "192"],
      ],
      note: "Elevação de 6 m. Potência de elevação conforme tabela da série TM.",
    },
    image: {
      src: "/products/talha-eletrica-trole.webp",
      width: 368,
      height: 618,
      alt: "Talha elétrica Elevar com trole elétrico acoplado para translação sobre viga",
      transparent: false,
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-eletrica-dhy",
    index: "04",
    name: "Talha elétrica de corrente",
    series: "Série DHY — 1 velocidade",
    category: "Elevação elétrica",
    shortDescription:
      "Talha elétrica de corrente de corpo circular, com alturas de elevação de até 15 m na versão de 1 t.",
    application:
      "Içamento elétrico em capacidades de 1 a 5 t, com opções de maior altura de elevação.",
    capacity: "1 – 5 t",
    refCode: "TAL.DHY",
    specHighlights: [
      { label: "Capacidade", value: "1 a 5 t" },
      { label: "Elevação", value: "6, 10 e 15 m" },
      { label: "Potência", value: "0,5 a 0,75 kW" },
      { label: "Velocidade", value: "1 a 2,5 m/min" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Elevação (m)", "Potência (kW)", "Peso (kg)"],
      rows: [
        ["1", "TAL.DHY-1x6", "6 / 10 / 15", "0,5", "40 a 50"],
        ["2", "TAL.DHY-2x6", "6", "0,5", "45"],
        ["3", "TAL.DHY-3x6", "6", "0,75", "50"],
        ["5", "TAL.DHY-5x6", "6", "0,75", "70"],
      ],
      note: "Velocidades de elevação de 1 a 2,5 m/min conforme capacidade.",
    },
    image: {
      src: "/products/talha-eletrica-dhy.webp",
      width: 1024,
      height: 1536,
      alt: "Talha elétrica de corrente Elevar série DHY com corpo circular amarelo e gancho giratório",
      transparent: false,
    },
    source: "CATALOGO_2026",
  },
  {
    id: "patesca-europeia",
    index: "05",
    name: "Patesca",
    series: "Modelo europeia",
    category: "Acessórios de içamento",
    shortDescription:
      "Roldana de desvio para cabo de aço, com abertura lateral para passagem do cabo e olhal giratório.",
    application:
      "Desvio e direcionamento de cabo de aço em sistemas de içamento, arraste e estaiamento.",
    capacity: "2 – 15 t",
    refCode: "PAT",
    specHighlights: [
      { label: "Capacidade", value: "2.000 a 15.000 kg" },
      { label: "Roldana", value: '3" a 12" (76–300 mm)' },
      { label: "Cabo de aço", value: "Ø 7 a 28 mm" },
    ],
    specTable: {
      columns: ["Roldana (pol)", "Roldana (mm)", "Cabo (mm)", "Cap. (kg)"],
      rows: [
        ['3"', "76", "7 a 9", "2.000"],
        ['6"', "150", "16 a 18", "4.000"],
        ['6"', "150", "20 a 22", "8.000"],
        ['10"', "250", "24 a 26", "12.000"],
        ['12"', "300", "26 a 28", "15.000"],
      ],
    },
    image: {
      src: "/products/patesca-europeia.webp",
      width: 491,
      height: 1600,
      alt: "Patesca modelo europeia Elevar de 4 toneladas em aço pintado de amarelo, com olhal giratório",
      transparent: true,
    },
    source: "CATALOGO_2026",
  },
];

/**
 * Linha completa — categorias confirmadas no site institucional atual.
 * Fichas técnicas completas sob consulta; sem specs no catálogo recebido.
 */
export const catalogIndex = [
  { code: "A1", name: "Guinchos de alavanca", note: "Tração e arraste de cargas" },
  { code: "A2", name: "Talhas de alavanca", note: "Série TAE — ensaio a 1,5× a capacidade" },
  { code: "A3", name: "Troles manuais", note: "Abertura ajustável à aba da viga" },
  { code: "A4", name: "Ganchos", note: "Suspensão e carga" },
  { code: "A5", name: "Moitões e cadernais", note: "Multiplicação de força com roldanas" },
] as const;
