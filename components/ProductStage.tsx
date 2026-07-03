"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Reveal } from "@/lib/motion";
import { SpecPill, TechnicalLabel } from "@/components/ui";
import type { Product } from "@/data/products";

export function ProductStage({
  product,
  flip,
  displayIndex,
  total = 5,
}: {
  product: Product;
  flip: boolean;
  /** Numeração de estação exibida; cai para product.index quando ausente. */
  displayIndex?: string;
  /** Total de estações no denominador (ex.: Est. 03 / 17). */
  total?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -28]);

  const image = product.image;
  const stationIndex = displayIndex ?? product.index;
  const stationTotal = String(total).padStart(2, "0");

  return (
    <article
      ref={ref}
      id={product.id}
      aria-labelledby={`${product.id}-titulo`}
      className="border-t border-coal/15 py-16 lg:py-24"
    >
      {/* Linha de metadados da estação */}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="t-label text-steel">
          Est. {stationIndex} / {stationTotal} — {product.category}
        </p>
        <p className="t-label text-steel">Fonte: {product.source.replace("_", " ")}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Visual */}
        <div
          className={`relative flex justify-center lg:col-span-5 ${
            flip ? "lg:col-start-8" : "lg:col-start-1"
          }`}
        >
          <span
            aria-hidden
            className="t-ghost absolute -top-6 left-0 z-0 font-display text-[clamp(5rem,9vw,8rem)] leading-none text-coal/20 select-none"
          >
            {stationIndex}
          </span>

          {image ? (
            /* Foto recortada — flutua livremente sobre o fundo da seção, sem
               placa, card ou moldura. Apenas drop-shadow sutil para profundidade
               e parallax leve no scroll. Tratamento idêntico para todos. */
            <motion.div style={{ y }} className="relative z-10 pt-8">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 28rem, 85vw"
                className="h-[30rem] w-auto object-contain drop-shadow-[0_18px_36px_rgba(18,18,16,0.28)] sm:h-[36rem] lg:h-[40rem]"
              />
              <span aria-hidden className="absolute top-10 -right-8 bottom-2 hidden w-px bg-coal/30 sm:block">
                <span className="absolute -top-1.5 -left-1 font-mono text-[10px] text-coal/60">▲</span>
                <span className="absolute -bottom-1.5 -left-1 font-mono text-[10px] text-coal/60">▼</span>
              </span>
              <p className="t-label mt-4 flex justify-between text-coal/55">
                <span>Foto · Catálogo 2026</span>
                <span>{product.refCode}</span>
              </p>
            </motion.div>
          ) : (
            /* Sem foto no catálogo — placeholder honesto, desenhado */
            <div className="relative z-10 flex aspect-[3/4] w-full max-w-sm items-center justify-center border border-dashed border-coal/30 bg-bone">
              <p className="t-label text-coal/50">Foto em atualização — catálogo 2026</p>
            </div>
          )}
        </div>

        {/* Ficha */}
        <div className={`lg:col-span-6 ${flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"}`}>
          <Reveal>
            <TechnicalLabel tone="coal">{product.series}</TechnicalLabel>
            <h3
              id={`${product.id}-titulo`}
              className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[0.98] tracking-tight text-coal uppercase"
            >
              {product.name}
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed text-coal/75">{product.shortDescription}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 border-l-2 border-signal pl-5">
              <p className="t-label text-steel">Aplicação</p>
              <p className="mt-2 max-w-xl leading-relaxed text-coal/85">{product.application}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {product.specHighlights.map((spec) => (
                <SpecPill key={spec.label} label={spec.label} value={spec.value} />
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left">
                <caption className="sr-only">
                  Tabela de especificações — {product.name} {product.series}
                </caption>
                <thead>
                  <tr className="border-y border-coal/25">
                    {product.specTable.columns.map((column) => (
                      <th key={column} scope="col" className="t-label py-3 pr-6 font-medium text-coal/60">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specTable.rows.map((row) => (
                    <tr
                      key={row.join("-")}
                      className="border-b border-coal/12 transition-colors hover:bg-signal/10"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${cell}-${cellIndex}`}
                          className={`py-3 pr-6 font-mono text-sm ${
                            cellIndex === 0 ? "font-medium text-coal" : "text-coal/75"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {product.specTable.note ? (
              <p className="t-label mt-4 max-w-xl text-coal/50 normal-case tracking-normal">
                * {product.specTable.note}
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="#contato"
              className="t-label group mt-10 inline-flex items-center gap-3 text-coal transition-colors hover:text-signal-deep"
            >
              Consultar aplicação
              <span aria-hidden className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
