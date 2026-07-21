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
      src: "/products/talha-manual-es.png",
      width: 913,
      height: 1722,
      alt: "Talha manual de corrente Elevar Compacta ES de 5 toneladas, corpo amarelo com corrente de carga preta",
      transparent: true,
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-eletrica-tm",
    index: "02",
    name: "Modelo TM",
    series: "Série TM — 1 e 2 velocidades",
    category: "Elevação elétrica",
    shortDescription:
      "Talha elétrica de corrente para regime industrial, disponível em uma ou duas velocidades de elevação. Altura de elevação padrão de 6 metros — fabricamos em qualquer altura de elevação sob consulta.",
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
      src: "/products/talha-eletrica-tm.png",
      width: 1024,
      height: 1536,
      alt: "Talha elétrica de corrente Elevar série TM, corpo amarelo com corrente e botoeira",
      transparent: true,
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
      src: "/products/talha-eletrica-trole.png",
      width: 1024,
      height: 1536,
      alt: "Talha elétrica de corrente Elevar com trole, montada em barra de translação",
      transparent: true,
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
      "Talha elétrica compacta de corrente para uso intermitente.",
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
      src: "/products/talha-eletrica-dhy.png",
      width: 1024,
      height: 1536,
      alt: "Talha elétrica de corrente Elevar série DHY, corpo circular amarelo com corrente de carga",
      transparent: true,
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
 * Catálogo completo — demais itens da linha Elevar extraídos do
 * Catálogo ELEVAR (planilha técnica). Sem fotos no material recebido:
 * tratados com placeholder honesto na interface. Nenhuma spec inventada.
 */
const extraProducts: Product[] = [
  {
    id: "talha-alavanca-tae",
    index: "06",
    name: "Talha manual de alavanca",
    series: "Elevar TAE",
    category: "Elevação manual",
    shortDescription:
      "Talha de alavanca de corrente para tração e elevação em espaços restritos, com catraca de avanço e retorno.",
    application:
      "Içamento, tensionamento e posicionamento de cargas em manutenção e montagem, onde não há ponto para talha vertical de corrente.",
    capacity: "0,75 – 3 t",
    refCode: "TAL.ALA",
    image: {
      src: "/products/talha-alavanca-tae.png",
      width: 1024,
      height: 1536,
      alt: "Talha manual de alavanca Elevar série TAE, corpo amarelo com corrente de carga e gancho com trava",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "0,75 a 3 t" },
      { label: "Elevação", value: "1,5 e 3 m" },
      { label: "Esforço de operação", value: "14 a 32 kg" },
      { label: "Peso líquido", value: "8 a 27,3 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Elevação (m)", "Esforço (kg)", "Peso (kg)"],
      rows: [
        ["0,75", "TAL.ALA-0,75tx1,5", "1,5", "14", "8,3"],
        ["1,5", "TAL.ALA-1,5x1,5", "1,5", "22", "8"],
        ["3", "TAL.ALA-3,0x1,5", "1,5", "32", "18,7"],
      ],
      note:
        "Versões com 3 m de elevação (sufixo x3) sob o mesmo código. Ensaio a 1,5× a capacidade nominal.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-baixa-altura-tba",
    index: "07",
    name: "Talha de baixa altura",
    series: "Elevar TBA — low headroom",
    category: "Elevação manual",
    shortDescription:
      "Talha de baixa altura que aproxima ao máximo o gancho da viga, ganhando altura útil de elevação em ambientes com pé-direito reduzido.",
    application:
      "Locais com pouca distância entre a viga e a carga, onde a altura recolhida do gancho é determinante.",
    capacity: "2 – 10 t",
    refCode: "TBA",
    image: {
      src: "/products/talha-baixa-altura-tba.png",
      width: 1024,
      height: 1536,
      alt: "Talha de baixa altura Elevar série TBA, corpo amarelo de perfil reduzido com corrente de carga",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "2 a 10 t" },
      { label: "Elevação", value: "5 m" },
      { label: "Ramais", value: "2 a 4" },
      { label: "Gancho recolhido", value: "200 a 550 mm" },
    ],
    specTable: {
      columns: ["Modelo", "Cap.", "Ramais", "Elevação", "Gancho recolhido"],
      rows: [
        ["TBA 2", "2 t", "2", "5 m", "200 mm"],
        ["TBA 3", "3 t", "2", "5 m", "200 mm"],
        ["TBA 4", "4 t", "4", "5 m", "250 mm"],
        ["TBA 5", "5 t", "4", "5 m", "275 mm"],
        ["TBA 7,5", "7,5 t", "4", "5 m", "500 mm"],
        ["TBA 10", "10 t", "4", "5 m", "550 mm"],
      ],
      note:
        "Fornecida em qualquer altura de elevação sob consulta. Versão para área classificada disponível.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "talha-eletrica-cabo-tbe",
    index: "08",
    name: "Talha elétrica de cabo de aço",
    series: "Elevar TBE",
    category: "Elevação elétrica",
    shortDescription:
      "Talha elétrica de cabo de aço para capacidades elevadas e regime industrial intenso, com classificação de mecanismo FEM M4.",
    application:
      "Pontes rolantes e pórticos de médio e grande porte, em movimentação contínua de 1 a 20 t.",
    capacity: "1 – 20 t",
    refCode: "TBE",
    image: {
      src: "/products/talha-eletrica-cabo-tbe.png",
      width: 1536,
      height: 1024,
      alt: "Talha elétrica de cabo de aço Elevar série TBE, unidade horizontal com tambor enrolador e moitão inferior",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "1 a 20 t" },
      { label: "Grupo", value: "FEM M4 / 1Am" },
      { label: "Potência", value: "1,8 a 15,6 kW" },
      { label: "Velocidade", value: "3,8 a 10 m/min" },
    ],
    specTable: {
      columns: ["Modelo", "Cap.", "Potência elev.", "Veloc. elev."],
      rows: [
        ["TBE2", "1 t", "1,8 kW", "10 m/min"],
        ["TBE2", "2 t", "3,6 kW", "8,6 m/min"],
        ["TBE3", "3,2 t", "5,4 kW", "8,4 m/min"],
        ["TBE3", "5 t", "9,0 kW", "9,12 m/min"],
        ["TBE4", "6,3 t", "5,4 kW", "4,2 m/min"],
        ["TBE4", "8 t", "15,6 kW", "9,6 m/min"],
        ["TBE5", "10 t", "9,0 kW", "4,56 m/min"],
        ["TBE5", "16 t", "15,6 kW", "4,8 m/min"],
        ["TBE6", "20 t", "15,6 kW", "3,84 m/min"],
      ],
      note: "Velocidade de translação 24 m/min. Grupo de mecanismo M4/1Am.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "trole-mecanico-tme",
    index: "09",
    name: "Trole mecânico",
    series: "Elevar TME",
    category: "Translação",
    shortDescription:
      "Trole de translação acionado por corrente (volante), desloca a talha ao longo da viga com controle preciso do operador.",
    application:
      "Monovias e vigas I em que a carga precisa percorrer o vão com posicionamento exato, sem energia elétrica.",
    capacity: "0,5 – 10 t",
    refCode: "TRO-MEC",
    image: {
      src: "/products/trole-mecanico-tme.png",
      width: 1024,
      height: 1536,
      alt: "Trole mecânico Elevar série TME em viga, corpo amarelo acionado por corrente manual",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "0,5 a 10 t" },
      { label: "Aba da viga", value: "68 a 180 mm" },
      { label: "Peso líquido", value: "10,5 a 87 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Aba da viga (mm)", "Peso (kg)"],
      rows: [
        ["0,5", "TRO-MEC-0,5t", "68–125", "10,5"],
        ["1", "TRO-MEC-1t", "68–125", "14"],
        ["2", "TRO-MEC-2t", "94–150", "18"],
        ["3", "TRO-MEC-3t", "100–150", "30,5"],
        ["5", "TRO-MEC-5t", "125–175", "50"],
        ["10", "TRO-MEC-10t", "125–180", "87"],
      ],
      note:
        "Adequado para abas planas e inclinadas. Altura de elevação padrão 3 m; outras sob consulta.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "trole-manual-te",
    index: "10",
    name: "Trole manual",
    series: "Elevar TE",
    category: "Translação",
    shortDescription:
      "Trole de translação por empurrar, leve e econômico, para deslocamento manual da carga sobre a viga.",
    application:
      "Deslocamento horizontal de cargas em vigas I, em operações pontuais ou de baixo ciclo.",
    capacity: "1 – 5 t",
    refCode: "TRO-MAN",
    image: {
      src: "/products/trole-manual-te.png",
      width: 1024,
      height: 1536,
      alt: "Trole manual Elevar série TE, carro de translação amarelo e preto para viga, sem motor",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "1 a 5 t" },
      { label: "Aba da viga", value: "68 a 175 mm" },
      { label: "Peso líquido", value: "8 a 42 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Aba da viga (mm)", "Peso (kg)"],
      rows: [
        ["1", "TRO-MAN-1t", "68–125", "8"],
        ["2", "TRO-MAN-2t", "88–150", "13"],
        ["3", "TRO-MAN-3t", "100–150", "23"],
        ["5", "TRO-MAN-4t", "125–175", "42"],
      ],
      note: "Adequado para abas planas e inclinadas. Ensaios conforme normas brasileiras.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "trole-eletrico-tee",
    index: "11",
    name: "Trole elétrico",
    series: "Elevar TEE",
    category: "Translação",
    shortDescription:
      "Trole de translação motorizado, comandado por botoeira, para deslocamento contínuo da talha sobre a viga.",
    application:
      "Monovias e pontes com ciclos frequentes de translação, integrável a talhas elétricas.",
    capacity: "1 – 5 t",
    refCode: "TEE",
    image: {
      src: "/products/trole-eletrico-tee.png",
      width: 1536,
      height: 1024,
      alt: "Trole elétrico Elevar série TEE, carro de translação amarelo com motor elétrico",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "1 a 5 t" },
      { label: "Aba da viga", value: "74 a 210 mm" },
      { label: "Peso líquido", value: "36 a 70 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Aba da viga (mm)", "Peso (kg)"],
      rows: [
        ["1", "TEE-1000", "74–140", "36"],
        ["2", "TEE-2000", "74–140", "36"],
        ["3", "TEE-3000", "88–160", "68"],
        ["5", "TEE-5000", "92–210", "70"],
      ],
      note: "Comando por botoeira. Demais dados elétricos sob consulta.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "guincho-alavanca-gae",
    index: "12",
    name: "Guincho de alavanca",
    series: "Elevar GAE",
    category: "Guinchos",
    shortDescription:
      "Guincho de alavanca para tração e arraste de cargas com cabo de aço, acionado por alavanca de avanço e recuo.",
    application:
      "Tração, arraste e tensionamento em campo, montagem de estruturas e resgate de equipamentos.",
    capacity: "0,8 – 5,4 t",
    refCode: "GUI.ALA",
    image: {
      src: "/products/guincho-alavanca-gae.png",
      width: 1536,
      height: 1024,
      alt: "Guincho de alavanca Elevar série GAE, corpo cinza em alumínio acionado por alavanca manual para cabo de aço",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "0,8 a 5,4 t" },
      { label: "Arraste", value: "1,25 a 8,1 t" },
      { label: "Esforço", value: "28 a 85 kg" },
      { label: "Cabo de aço", value: "Ø 8,3 a 20 mm" },
    ],
    specTable: {
      columns: ["Cap.", "Código", "Arraste (t)", "Esforço (kg)", "Cabo (mm)", "Peso (kg)"],
      rows: [
        ["0,8 t", "GUI.ALA-08X20", "1,25", "28", "8,3", "7,55"],
        ["1,6 t", "GUI.ALA-1.6X20", "2,5", "41", "11", "14,9"],
        ["3,2 t", "GUI.ALA-3,2X20", "5", "44", "16", "26"],
        ["5,4 t", "GUI.ALA-5.4X20", "8,1", "85", "20", "61,7"],
      ],
      note: "Cabo padrão de 20 m; outros comprimentos sob consulta.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "guincho-eletrico-gef",
    index: "13",
    name: "Guincho elétrico de cabo de aço",
    series: "Elevar GEF",
    category: "Guinchos",
    shortDescription:
      "Guincho elétrico monofásico de cabo de aço para suspensão de cargas, com comando por botoeira.",
    application:
      "Içamento vertical de cargas leves a médias em oficinas, obras e fachadas; regime moderado S3 20% 10 min.",
    capacity: "100 – 1.000 kg",
    refCode: "GEF",
    image: {
      src: "/products/guincho-eletrico-gef.png",
      width: 1024,
      height: 1536,
      alt: "Guincho elétrico de cabo de aço Elevar série GEF, corpo vermelho com tambor e cabo de aço",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "100 a 1.000 kg" },
      { label: "Elevação", value: "12 / 6 m" },
      { label: "Motor", value: "480 a 1.600 W" },
      { label: "Cabo de aço", value: "Ø 3 a 5,6 mm" },
    ],
    specTable: {
      columns: ["Modelo", "Cap. (kg)", "Elevação (m)", "Veloc. (m/min)", "Motor (W)", "Peso (kg)"],
      rows: [
        ["GEF 100/200", "100 / 200", "12 / 6", "10 / 5", "480", "11"],
        ["GEF 300/600", "300 / 600", "12 / 6", "10 / 5", "1.020", "17"],
        ["GEF 500/1000", "500 / 1000", "12 / 6", "8 / 4", "1.600", "32"],
      ],
      note:
        "Equipamento monofásico (127/220 V). Valores com e sem cadernal de polia. Versão com trole disponível.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "patesca-elevar",
    index: "14",
    name: "Patesca nacional",
    series: "Elevar — gancho ou olhal",
    category: "Acessórios de içamento",
    shortDescription:
      "Roldana de desvio para cabo de aço, disponível com gancho ou olhal, para mudança de direção da tração.",
    application:
      "Desvio de cabo em sistemas de içamento e arraste, ampliando o alcance e o ângulo de trabalho.",
    capacity: "1 – 28 t",
    refCode: "PAT / PATG",
    image: {
      src: "/products/patesca-elevar.png",
      width: 1024,
      height: 1536,
      alt: "Patesca Elevar, roldana simples amarela com gancho para desvio de cabo de aço",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "1 a 28 t" },
      { label: "Roldana", value: "Ø 100 a 610 mm" },
      { label: "Cabo de aço", value: '1/4" a 1.1/2"' },
    ],
    specTable: {
      columns: ["Cap. (t)", "Código", "Roldana (mm)", "Cabo (pol)", "Peso (kg)"],
      rows: [
        ["1", "PAT.1t / PATG.1t", "100", '1/4"–3/8"', "6,8"],
        ["2", "PAT.2t / PATG.2t", "150", '1/2"–5/8"', "14,8"],
        ["4", "PAT.4t / PATG.4t", "205", '1/2"–5/8"', "21"],
        ["7,5", "PAT.7,5t / PATG.7,5t", "255", '5/8"–3/4"', "28,5"],
        ["10", "PAT.10t / PATG.10t", "305", '3/4"–7/8"', "51"],
        ["12", "PAT.12t / PATG.12t", "330", '7/8"–1"', "64,5"],
        ["16", "PAT.16t / PATG.16t", "355", '7/8"–1"', "110"],
        ["20", "PAT.20t / PATG.20t", "410", '1.1/8"', "99"],
        ["25", "PAT.25t / PATG.25t", "520", '1.1/8"–1.3/8"', "210"],
        ["28", "PAT.28t / PATG.28t", "610", '1.3/8"–1.1/2"', "245"],
      ],
      note: "Versão com gancho (PATG) ou olhal (PAT). Maiores capacidades sob consulta.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "moitoes-cadernais",
    index: "15",
    name: "Moitões e cadernais",
    series: "Elevar — par ou avulso",
    category: "Acessórios de içamento",
    shortDescription:
      "Conjuntos de roldanas para multiplicação de força em sistemas de cabo, fornecidos em par ou avulsos.",
    application:
      "Composição de talhas de cabo e sistemas de içamento manuais, multiplicando a capacidade pela quantidade de roldanas.",
    capacity: "250 – 5.000 kg",
    refCode: "MOI / CAD",
    image: {
      src: "/products/moitoes-cadernais.png",
      width: 1024,
      height: 1536,
      alt: "Moitão Elevar de roldana múltipla, corpo amarelo com gancho de segurança",
      transparent: true,
    },
    specHighlights: [
      { label: "Roldana", value: "Ø 45 a 150 mm" },
      { label: "Corda", value: '3/8" a 1.1/8"' },
      { label: "Roldanas", value: "1 a 3" },
      { label: "Capacidade", value: "até 5.000 kg" },
    ],
    specTable: {
      columns: ["Roldana (mm)", "Corda (pol)", "1 roldana (kg)", "2 roldanas (kg)", "3 roldanas (kg)"],
      rows: [
        ["45", '3/8"', "250", "520", "650"],
        ["60", '1/2"', "520", "700", "970"],
        ["80", '5/8"', "650", "800", "1.200"],
        ["100", '3/4"', "900", "1.300", "1.800"],
        ["120", '1"', "1.300", "2.300", "2.800"],
        ["150", '1.1/8"', "1.900", "3.800", "5.000"],
      ],
      note:
        "Roldanas de 45 a 100 mm em poliamida; 120 a 150 mm em aço ou ferro fundido. Gancho com trava de segurança.",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "cadernal-extra-pesado-cep",
    index: "16",
    name: "Cadernal extra pesado",
    series: "Elevar CEP",
    category: "Acessórios de içamento",
    shortDescription:
      "Cadernal extra pesado para içamento de altas cargas com cabo de aço, em configurações de 2 a 4 roldanas.",
    application:
      "Sistemas de içamento de grande porte e tração pesada, com terminação em gancho ou olhal.",
    capacity: "3,5 – 70 t",
    refCode: "CEP",
    image: {
      src: "/products/cadernal-extra-pesado-cep.png",
      width: 1536,
      height: 1024,
      alt: "Cadernal extra pesado Elevar série CEP, par de blocos de roldanas amarelos com gancho",
      transparent: true,
    },
    specHighlights: [
      { label: "Roldana", value: '6" a 20.1/2"' },
      { label: "Cabo de aço", value: '1/2" a 1.3/8"' },
      { label: "Roldanas", value: "2 a 4" },
      { label: "Capacidade", value: "até 70 t" },
    ],
    specTable: {
      columns: ["Roldana", "Cabo (pol)", "2 rold. (t)", "3 rold. (t)", "4 rold. (t)"],
      rows: [
        ['6"', '1/2"–5/8"', "3,5", "5", "6"],
        ['8"', '1/2"–5/8"', "6", "9", "12"],
        ['10"', '5/8"–3/4"', "12", "17", "20"],
        ['12"', '3/4"–7/8"', "15", "22", "28"],
        ['13"', '7/8"–1"', "20", "28", "35"],
        ['14"', '7/8"–1"', "24", "32", "40"],
        ['16"', '1"–1.1/8"', "30", "40", "50"],
        ['20.1/2"', '1.1/8"–1.3/8"', "35", "55", "70"],
      ],
      note: "NCM 84251910 · IPI 0%. Códigos para gancho (CEPG) e olhal (CEOG).",
    },
    source: "CATALOGO_2026",
  },
  {
    id: "gancho-com-olhal",
    index: "17",
    name: "Gancho com olhal",
    series: "Elevar — aço forjado",
    category: "Acessórios de içamento",
    shortDescription:
      "Gancho de aço forjado com olhal para suspensão e composição de conjuntos de içamento.",
    application:
      "Ponto de engate em talhas, patescas e sistemas de cabo, dimensionado pela capacidade nominal.",
    capacity: "0,5 – 15 t",
    refCode: "GAN",
    image: {
      src: "/products/gancho-com-olhal.png",
      width: 1024,
      height: 1536,
      alt: "Gancho com olhal Elevar em aço forjado, com trava de segurança",
      transparent: true,
    },
    specHighlights: [
      { label: "Capacidade", value: "0,5 a 15 t" },
      { label: "Peso", value: "0,2 a 9 kg" },
    ],
    specTable: {
      columns: ["Cap. (t)", "Peso (kg)"],
      rows: [
        ["0,5", "0,2"],
        ["0,75", "0,21"],
        ["1", "0,28"],
        ["1,5", "0,39"],
        ["2", "0,6"],
        ["3", "0,87"],
        ["4,5", "1,7"],
        ["7", "3,1"],
        ["11", "5,9"],
        ["15", "9"],
      ],
      note: "Gancho com trava de segurança. Capacidades intermediárias sob consulta.",
    },
    source: "CATALOGO_2026",
  },
];

/** Lista completa do catálogo (principais + complementares). */
const byId = (id: string): Product => {
  const found = [...products, ...extraProducts].find((product) => product.id === id);
  if (!found) throw new Error(`Produto não encontrado: ${id}`);
  return found;
};

export type CatalogGroup = {
  code: string;
  title: string;
  intro: string;
  items: Product[];
};

/** Catálogo agrupado por família de equipamento, na ordem de apresentação. */
export const catalogGroups: CatalogGroup[] = [
  {
    code: "G1",
    title: "Elevação manual",
    intro:
      "Talhas de corrente e de alavanca para içamento sem dependência de energia elétrica.",
    items: [byId("talha-manual-es"), byId("talha-alavanca-tae"), byId("talha-baixa-altura-tba")],
  },
  {
    code: "G2",
    title: "Elevação elétrica",
    intro:
      "Talhas elétricas de corrente e de cabo de aço para regime industrial contínuo.",
    items: [byId("talha-eletrica-tm"), byId("talha-eletrica-dhy"), byId("talha-eletrica-cabo-tbe")],
  },
  {
    code: "G3",
    title: "Translação e conjuntos",
    intro:
      "Troles e conjuntos motorizados que deslocam a carga ao longo da viga.",
    items: [
      byId("talha-eletrica-trole"),
      byId("trole-mecanico-tme"),
      byId("trole-manual-te"),
      byId("trole-eletrico-tee"),
    ],
  },
  {
    code: "G4",
    title: "Guinchos",
    intro:
      "Guinchos de alavanca e elétricos para tração, arraste e suspensão de cargas com cabo de aço.",
    items: [byId("guincho-alavanca-gae"), byId("guincho-eletrico-gef")],
  },
  {
    code: "G5",
    title: "Acessórios de içamento",
    intro:
      "Patescas, moitões, cadernais e ganchos para compor e direcionar sistemas de içamento.",
    items: [
      byId("patesca-europeia"),
      byId("patesca-elevar"),
      byId("moitoes-cadernais"),
      byId("cadernal-extra-pesado-cep"),
      byId("gancho-com-olhal"),
    ],
  },
];

/** Total de itens do catálogo completo, para numeração das estações. */
export const catalogTotal = catalogGroups.reduce((sum, group) => sum + group.items.length, 0);

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
