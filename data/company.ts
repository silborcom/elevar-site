/**
 * Dados institucionais coletados do site atual (elevarcargas.com.br)
 * em 2026-06-12. Validar antes da publicação.
 */
export const company = {
  name: "Elevar Movimentação de Cargas",
  shortName: "ELEVAR",
  tagline: "Engenharia aplicada ao movimento.",
  address: {
    street: "Rua Dom Feliciano, 293",
    district: "Niterói",
    city: "Canoas",
    state: "RS",
    zip: "92120-070",
  },
  /** Coordenadas aproximadas de Canoas/RS — detalhe gráfico do layout */
  coordinates: "29°55′S · 51°10′W",
  phone: "(51) 3060-0991",
  whatsapp: "(51) 98245-3205",
  whatsappHref: "https://wa.me/5551982453205",
  email: "contato@elevarcargas.com.br",
  site: "www.elevarcargas.com.br",
} as const;

/**
 * Indicadores extraídos do conteúdo institucional do site atual.
 * Nenhum número foi inventado — todos precisam de validação final do cliente.
 */
export const trustData = [
  {
    figure: "1,5×",
    label: "Carga de ensaio",
    description:
      "Talhas de alavanca da série TAE são testadas a 1,5 vez a capacidade nominal antes do fornecimento.",
  },
  {
    figure: "+25",
    label: "Anos de engenharia",
    description:
      "Profissionais com mais de 25 anos de experiência em projeto e fabricação de equipamentos de movimentação.",
  },
  {
    figure: "BR · INT",
    label: "Normas de ensaio",
    description:
      "Sistemas de segurança reforçados e ensaios conforme normas brasileiras e internacionais.",
  },
  {
    figure: "BRASIL",
    label: "Assistência técnica",
    description:
      "Rede de assistência em todo o território nacional ou na sede, em Canoas/RS.",
  },
] as const;

/** Detalhes de projeto citados na linha TAE (site institucional). */
export const engineeringDetails = [
  "Ensaio a 1,5× a capacidade nominal",
  "Proteção de sobrecarga reforçada",
  "Corrente de carga zincada · série 100",
  "Chave seletora para operação em modo livre",
] as const;
