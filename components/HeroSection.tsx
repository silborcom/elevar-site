import Image from "next/image";
import Link from "next/link";

import { StaggerGroup, StaggerItem, Reveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";
import { company } from "@/data/company";
import { products } from "@/data/products";

export function HeroSection() {
  const heroProduct = products[0];

  return (
    <section
      id="topo"
      data-sec="SEC.00"
      aria-label="Apresentação"
      className="relative overflow-hidden bg-coal"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 gap-10 px-5 pt-28 pb-14 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pt-36">
        {/* Bloco editorial */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <StaggerGroup>
            <StaggerItem>
              <TechnicalLabel tone="signal">
                {company.shortName} · Movimentação de cargas — Canoas · RS
              </TechnicalLabel>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.92] tracking-tight text-paper uppercase">
                Engenharia
                <br />
                aplicada ao
                <br />
                <span className="text-signal">movimento.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
                Equipamentos de elevação e movimentação de cargas para
                operações que não podem parar. Do item de catálogo ao projeto
                sob consulta.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#contato"
                  className="t-label bg-signal px-7 py-4 text-night transition-colors hover:bg-paper"
                >
                  Solicitar orçamento
                </Link>
                <Link
                  href="#equipamentos"
                  className="t-label border border-paper/35 px-7 py-4 text-paper transition-colors hover:border-signal hover:text-signal"
                >
                  Explorar equipamentos
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* Indicador de scroll + coordenadas */}
          <div className="mt-16 flex items-end justify-between gap-6 lg:mt-24">
            <div className="flex items-center gap-3" aria-hidden>
              <span className="t-label text-paper/55">Scroll</span>
              <span className="relative h-12 w-px overflow-hidden bg-paper/25">
                <span className="absolute left-0 top-0 h-4 w-px animate-drop bg-signal" />
              </span>
            </div>
            <p className="t-label text-right text-paper/45"></p>
          </div>
        </div>

        {/* Equipamento suspenso a partir da borda superior */}
        <div className="relative min-h-[28rem] lg:col-span-5 lg:min-h-0">
          <span
            aria-hidden
            className="t-ghost absolute right-0 bottom-10 z-0 font-display text-[clamp(7rem,16vw,13rem)] leading-none text-paper/25 select-none"
          >
            10t
          </span>

          <Reveal y={-36} className="absolute inset-x-0 -top-20 z-10 flex justify-center sm:-top-28 lg:-top-36">
            <div className="relative">
              <Image
                src={heroProduct.image!.src}
                alt={heroProduct.image!.alt}
                width={heroProduct.image!.width}
                height={heroProduct.image!.height}
                priority
                decoding="async"
                sizes="(min-width: 1024px) 22rem, 14rem"
                className="h-[34rem] w-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] lg:h-[44rem]"
              />

              {/* Linha de medição */}
              <div
                aria-hidden
                className="absolute -right-12 top-6 bottom-6 hidden w-px bg-paper/35 sm:block"
              >
                <span className="absolute -top-1 -left-1 font-mono text-[10px] text-paper/60">▲</span>
                <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-paper/60">▼</span>
                <span
                  className="t-label absolute top-1/2 left-3 -translate-y-1/2 whitespace-nowrap text-paper/60"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Elevação 3–5 m
                </span>
              </div>

              {/* Placa de dados */}
              <div className="absolute bottom-10 -left-4 border border-coal/20 bg-bone px-4 py-3 shadow-lg sm:-left-10">
                <p className="t-label text-coal/60">{heroProduct.refCode} · Compacta ES</p>
                <p className="mt-1 font-display text-2xl tracking-tight text-coal">
                  0,5–10 <span className="text-signal-deep">t</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hairlines do grid sobre o hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="relative mx-auto h-full max-w-7xl px-10">
          <span className="absolute top-0 left-[58.333%] h-full w-px bg-paper/8" />
        </div>
      </div>
    </section>
  );
}
