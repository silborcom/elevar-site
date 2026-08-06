import type { Metadata } from "next";
import Link from "next/link";

import { ProjectGalleryRail } from "@/components/ProjectGalleryRail";
import { Reveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";
import { buildObraLabels, projects, projectsTotal } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos entregues — Elevar Movimentação de Cargas",
  description:
    "Registro fotográfico de projetos de elevação e movimentação de cargas entregues pela Elevar: equipamentos instalados e em operação.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos entregues — Elevar Movimentação de Cargas",
    description:
      "Equipamentos Elevar instalados e em operação: registro fotográfico de projetos entregues.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProjetosPage() {
  const obraLabels = buildObraLabels(projects);

  return (
    <main className="bg-coal text-paper">
      <header data-sec="SEC.08" className="border-b border-paper/12">
        <div className="mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-6 lg:px-10 lg:pt-40 lg:pb-20">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <TechnicalLabel tone="signal">SEC.08 — Projetos entregues</TechnicalLabel>
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
              Equipamento instalado, carga em movimento
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Cada foto é um equipamento Elevar entregue e em operação. O
              registro vem do campo: da estrutura montada ao gancho sob carga.
            </p>
          </Reveal>
        </div>
      </header>

      <section
        aria-label="Acervo de projetos entregues"
        className="py-16 lg:py-24"
      >
        {projectsTotal > 0 ? (
          <>
            <Reveal className="mx-auto mb-10 flex max-w-7xl items-baseline justify-between gap-4 px-5 sm:px-6 lg:px-10">
              <TechnicalLabel tone="paper">
                {String(projectsTotal).padStart(2, "0")} registros
              </TechnicalLabel>
              <p className="t-label text-paper/45">Arraste para o lado →</p>
            </Reveal>

            <ProjectGalleryRail projects={projects} obraLabels={obraLabels} />
          </>
        ) : (
          /* Estado vazio honesto: a página existe, o acervo entra sem tocar no layout. */
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <div className="border border-paper/15 bg-night px-6 py-16 lg:px-10 lg:py-20">
              <TechnicalLabel tone="signal">Acervo em preparação</TechnicalLabel>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
                O registro fotográfico dos projetos entregues está sendo
                organizado. Para conhecer aplicações já executadas, fale com a
                equipe técnica.
              </p>
              <Link
                href="/#contato"
                className="t-label mt-10 inline-block bg-signal px-7 py-4 text-night transition-colors hover:bg-paper"
              >
                Falar com a equipe técnica
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="border-t border-paper/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <p className="max-w-xl font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-tight uppercase">
            Sua operação tem uma carga parecida?
          </p>
          <Link
            href="/#contato"
            className="t-label w-fit bg-signal px-7 py-4 text-night transition-colors hover:bg-paper"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}
