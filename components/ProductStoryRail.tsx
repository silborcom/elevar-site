import Link from "next/link";

import { Reveal } from "@/lib/motion";
import { ProductStage } from "@/components/ProductStage";
import { IndustrialGrid, SectionHeading } from "@/components/ui";
import { catalogIndex, products } from "@/data/products";

export function ProductStoryRail() {
  return (
    <section
      id="equipamentos"
      data-sec="SEC.03"
      aria-label="Equipamentos"
      className="relative bg-paper text-coal"
    >
      <div aria-hidden className="hazard h-3" />
      <IndustrialGrid />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-10 lg:py-36">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading code="SEC.03 — Catálogo 2026" title="Linha de equipamentos">
              <p className="mt-4 max-w-xl leading-relaxed text-coal/70">
                Cinco estações, do içamento manual ao conjunto motorizado de
                elevação e translação. Especificações extraídas do catálogo
                técnico Elevar — dados completos sob consulta.
              </p>
            </SectionHeading>
            <p className="t-label shrink-0 text-steel">
              05 estações de catálogo · fichas completas sob consulta
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          {products.map((product, index) => (
            <ProductStage key={product.id} product={product} flip={index % 2 === 1} />
          ))}
        </div>

        {/* Índice da linha completa */}
        <div className="mt-24 border-t-2 border-coal pt-12 lg:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-tight uppercase lg:text-3xl">
                Linha completa
              </h3>
              <p className="t-label text-steel">Fichas técnicas sob consulta</p>
            </div>
          </Reveal>

          <ul className="mt-8">
            {catalogIndex.map((item, index) => (
              <Reveal as="li" key={item.code} delay={index * 0.05}>
                <Link
                  href="#contato"
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-coal/15 py-5 transition-colors hover:bg-coal hover:text-paper sm:grid-cols-[4rem_1fr_1fr_auto] sm:px-4"
                >
                  <span className="t-label text-signal-deep transition-colors group-hover:text-signal">
                    {item.code}
                  </span>
                  <span className="font-display text-lg tracking-tight uppercase sm:text-xl">
                    {item.name}
                  </span>
                  <span className="t-label hidden text-steel transition-colors group-hover:text-paper/60 sm:block">
                    {item.note}
                  </span>
                  <span
                    aria-hidden
                    className="t-label justify-self-end text-coal/50 transition-all group-hover:translate-x-1 group-hover:text-signal"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
