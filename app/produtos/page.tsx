import type { Metadata } from "next";
import Link from "next/link";

import { ProductStage } from "@/components/ProductStage";
import { Reveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";
import { catalogGroups, catalogTotal } from "@/data/products";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Catálogo completo — Elevar Movimentação de Cargas",
  description:
    "Catálogo técnico completo Elevar: talhas manuais e elétricas, troles, guinchos, patescas, moitões, cadernais e ganchos, com especificações e códigos de produto.",
  alternates: { canonical: "/produtos" },
  openGraph: {
    title: "Catálogo completo — Elevar Movimentação de Cargas",
    description:
      "Linha completa de equipamentos de elevação e movimentação de cargas, com fichas técnicas extraídas do catálogo Elevar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProdutosPage() {
  // Numeração contínua das estações (Est. 01 / 17, 02 / 17, ...).
  let counter = 0;
  const groups = catalogGroups.map((group) => ({
    ...group,
    items: group.items.map((product) => {
      counter += 1;
      return {
        product,
        displayIndex: String(counter).padStart(2, "0"),
        flip: counter % 2 === 0,
      };
    }),
  }));

  return (
    <main className="bg-paper text-coal">
      {/* Cabeçalho do catálogo */}
      <header
        data-sec="SEC.07"
        className="border-b border-paper/12 bg-coal text-paper"
      >
        <div className="mx-auto max-w-7xl px-5 pt-32 pb-20 sm:px-6 lg:px-10 lg:pt-40 lg:pb-28">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <TechnicalLabel tone="signal">SEC.07 — Catálogo completo</TechnicalLabel>
              <Link
                href="/"
                className="t-label text-paper/55 transition-colors hover:text-signal"
              >
                ← Voltar ao início
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
              Linha completa de equipamentos
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              {catalogTotal} equipamentos de elevação e movimentação de cargas,
              organizados por família. Especificações e códigos
              extraídos do catálogo técnico Elevar — fichas completas e
              dimensionamento sob consulta.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <nav aria-label="Famílias do catálogo" className="mt-12 flex flex-wrap gap-3">
              {groups.map((group) => (
                <a
                  key={group.code}
                  href={`#${group.code}`}
                  className="t-label border border-paper/20 px-4 py-2.5 text-paper/70 transition-colors hover:border-signal hover:text-signal"
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </header>

      {/* Grupos do catálogo */}
      {groups.map((group) => (
        <section
          key={group.code}
          id={group.code}
          aria-labelledby={`${group.code}-titulo`}
          className="scroll-mt-24 border-t border-coal/15 first:border-t-0"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 border-b-2 border-coal pb-8 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <TechnicalLabel tone="coal">
                    {group.code} — {group.title}
                  </TechnicalLabel>
                  <h2
                    id={`${group.code}-titulo`}
                    className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[0.98] tracking-tight uppercase"
                  >
                    {group.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-coal/70">{group.intro}</p>
                </div>
                <p className="t-label shrink-0 text-steel">
                  {String(group.items.length).padStart(2, "0")}{" "}
                  {group.items.length === 1 ? "equipamento" : "equipamentos"}
                </p>
              </div>
            </Reveal>

            <div className="mt-4">
              {group.items.map(({ product, displayIndex, flip }) => (
                <ProductStage
                  key={product.id}
                  product={product}
                  flip={flip}
                  displayIndex={displayIndex}
                  total={catalogTotal}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA de orçamento */}
      <section aria-label="Solicitar orçamento" className="bg-signal text-night">
        <div aria-hidden className="hazard h-3" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal>
            <p className="t-label text-night/60">Próximo passo</p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight uppercase">
              Encontrou o equipamento? Descreva a carga.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-night/75">
              Capacidade, vão, altura de elevação e regime de trabalho: a equipe
              técnica retorna com a especificação e o orçamento.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label bg-night px-7 py-4 text-signal transition-colors hover:bg-coal"
              >
                WhatsApp · {company.whatsapp}
              </a>
              <Link
                href="/#contato"
                className="t-label border border-night/40 px-7 py-4 text-night transition-colors hover:border-night hover:bg-night hover:text-signal"
              >
                Falar com a engenharia
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
