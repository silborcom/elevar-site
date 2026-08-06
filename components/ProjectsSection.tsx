import { ProjectGalleryRail } from "@/components/ProjectGalleryRail";
import { Reveal } from "@/lib/motion";
import { SectionHeading, TechnicalLabel } from "@/components/ui";
import { buildObraLabels, projects, projectsTotal } from "@/data/projects";

/**
 * SEC.05 — acervo fotográfico dentro da home. O trilho é o mesmo componente
 * que servia a antiga rota /projetos; aqui muda só a moldura de seção.
 */
export function ProjectsSection() {
  // Sem acervo não há seção: evita cabeçalho órfão sobre um trilho vazio.
  if (projectsTotal === 0) return null;

  const obraLabels = buildObraLabels(projects);

  return (
    <section
      id="projetos"
      data-sec="SEC.05"
      aria-label="Projetos entregues"
      className="border-t border-paper/12 bg-coal py-20 text-paper lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            code="SEC.05 — Projetos entregues"
            title="Equipamento instalado, carga em movimento"
            dark
          >
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/70">
              Cada foto é um equipamento Elevar entregue e em operação. O
              registro vem do campo: da estrutura montada ao gancho sob carga.
            </p>
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex items-baseline justify-between gap-4">
            <TechnicalLabel tone="paper">
              {String(projectsTotal).padStart(2, "0")} registros
            </TechnicalLabel>
            <p className="t-label text-paper/45">Arraste para o lado →</p>
          </div>
        </Reveal>
      </div>

      {/* Fora do container: o trilho sangra até a borda e controla o próprio gutter. */}
      <div className="mt-10">
        <ProjectGalleryRail projects={projects} obraLabels={obraLabels} />
      </div>
    </section>
  );
}
