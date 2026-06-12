import { Reveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";
import { specialFronts } from "@/data/services";

/** Desenho esquemático de ponte rolante — traço de prancheta, não foto. */
function CraneSchematic() {
  return (
    <svg
      viewBox="0 0 800 300"
      role="img"
      aria-label="Desenho esquemático de uma ponte rolante: viga, trole e gancho"
      className="h-auto w-full max-w-3xl"
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none" className="text-paper/40">
        {/* Vigas principais */}
        <line x1="60" y1="80" x2="740" y2="80" />
        <line x1="60" y1="96" x2="740" y2="96" />
        {/* Cabeceiras */}
        <rect x="40" y="68" width="20" height="40" />
        <rect x="740" y="68" width="20" height="40" />
        {/* Trilhos */}
        <line x1="20" y1="116" x2="120" y2="116" />
        <line x1="680" y1="116" x2="780" y2="116" />
      </g>

      {/* Trole + gancho em amarelo de sinalização */}
      <g stroke="currentColor" strokeWidth="2" fill="none" className="text-signal">
        <rect x="430" y="62" width="56" height="34" />
        <line x1="458" y1="96" x2="458" y2="196" strokeDasharray="5 6" />
        <path d="M458 196 v18 c0 16 -22 16 -22 0 c0 -8 8 -12 14 -8" />
      </g>

      {/* Cota do vão */}
      <g stroke="currentColor" strokeWidth="1" className="text-paper/50">
        <line x1="60" y1="250" x2="740" y2="250" />
        <line x1="60" y1="242" x2="60" y2="258" />
        <line x1="740" y1="242" x2="740" y2="258" />
      </g>
      <text
        x="400"
        y="276"
        textAnchor="middle"
        className="fill-paper/60 font-mono"
        fontSize="13"
        letterSpacing="2"
      >
        VÃO — DIMENSIONADO POR PROJETO
      </text>
    </svg>
  );
}

export function SpecialEquipmentSection() {
  return (
    <section
      id="especiais"
      data-sec="SEC.04"
      aria-label="Equipamentos especiais"
      className="relative overflow-hidden bg-night py-24 text-paper lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <TechnicalLabel tone="signal">SEC.04 — Sob consulta</TechnicalLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] tracking-tight text-signal uppercase">
            Quando o catálogo termina, começa o projeto.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            Pontes rolantes, monovias e soluções para áreas classificadas não
            saem de prateleira. Saem de levantamento, cálculo e fabricação
            dedicada — sob consulta, para cada operação.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-16 lg:mt-20">
          <CraneSchematic />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-px bg-paper/15 sm:grid-cols-2">
          {specialFronts.map((front, index) => (
            <Reveal
              as="li"
              key={front.code}
              delay={index * 0.06}
              className="group bg-night p-8 transition-colors duration-300 hover:bg-ink lg:p-10"
            >
              <p className="t-label text-signal">{front.code}</p>
              <h3 className="mt-4 font-display text-2xl tracking-tight uppercase lg:text-3xl">
                {front.name}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-paper/65">{front.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
