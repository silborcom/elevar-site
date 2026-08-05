import Link from "next/link";

import { Reveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";

export function ProjectsTeaser() {
  return (
    <section
      id="projetos"
      aria-label="Projetos entregues"
      className="border-t border-paper/12 bg-coal py-20 text-paper lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <TechnicalLabel tone="signal">Projetos entregues</TechnicalLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] tracking-tight uppercase">
              O equipamento pronto é só metade. A outra está no campo.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
              Registro fotográfico de instalações Elevar em operação — da
              estrutura montada ao gancho sob carga.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
          <Link
            href="/projetos"
            className="t-label inline-block w-fit border border-paper/30 px-7 py-4 text-paper transition-colors hover:border-signal hover:bg-signal hover:text-night"
          >
            Ver projetos entregues →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
