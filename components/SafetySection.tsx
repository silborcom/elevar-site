import { Reveal } from "@/lib/motion";
import { IndustrialGrid, SectionHeading } from "@/components/ui";
import { engineeringDetails, trustData } from "@/data/company";

export function SafetySection() {
  return (
    <section
      id="seguranca"
      data-sec="SEC.05"
      aria-label="Segurança e confiança"
      className="relative bg-paper py-24 text-coal lg:py-36"
    >
      <IndustrialGrid />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading code="SEC.05 — Segurança" title="Capacidade nominal é compromisso">
            <p className="mt-4 max-w-2xl leading-relaxed text-coal/70">
              Ensaio, norma e assistência fazem parte do equipamento tanto
              quanto a corrente e o gancho. Os dados abaixo vêm do conteúdo
              institucional da Elevar.
            </p>
          </SectionHeading>
        </Reveal>

        {/* Dados grandes em grade pautada */}
        <dl className="mt-16 grid grid-cols-1 border-t-2 border-coal sm:grid-cols-2 lg:grid-cols-4">
          {trustData.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.07}
              className="border-b border-coal/15 py-10 pr-8 sm:border-r sm:last:border-r-0 lg:py-12"
            >
              <dt className="t-label text-steel">{item.label}</dt>
              <dd className="mt-4">
                <span className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-tight">
                  {item.figure}
                </span>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-coal/70">
                  {item.description}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Detalhes de projeto — série TAE */}
        <Reveal delay={0.1}>
          <div className="mt-16 border border-coal/20 bg-bone px-6 py-6 lg:px-8">
            <p className="t-label text-steel">Detalhes de projeto — Série TAE</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {engineeringDetails.map((detail) => (
                <li key={detail} className="flex items-center gap-3 font-mono text-sm text-coal/85">
                  <span aria-hidden className="h-2 w-2 bg-signal" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
