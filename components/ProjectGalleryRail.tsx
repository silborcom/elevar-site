"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSafeReducedMotion } from "@/lib/motion";
import type { Project } from "@/data/projects";

/** Monta a linha mono sob o nome, ignorando metadados ausentes. */
function metaLine(project: Project, obraLabel?: string) {
  return [obraLabel, project.equipment, project.capacity, project.location, project.year]
    .filter((part): part is string => Boolean(part && part.trim()))
    .join("  ·  ");
}

function Arrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Foto anterior" : "Próxima foto"}
      className="flex h-11 w-11 items-center justify-center border border-paper/25 bg-night/60 font-mono text-sm text-paper/80 backdrop-blur-[9px] transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30"
    >
      <span aria-hidden>{direction === "prev" ? "←" : "→"}</span>
    </button>
  );
}

export function ProjectGalleryRail({
  projects,
  obraLabels,
}: {
  projects: Project[];
  obraLabels: Record<string, string>;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startLeft: number } | null>(null);
  const reduce = useSafeReducedMotion();

  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Leitura de scroll com throttle por requestAnimationFrame e cleanup completo.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(max - el.scrollLeft <= 2);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    el.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      el.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const card = el.querySelector("li");
      const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
      el.scrollBy({ left: direction * amount, behavior: reduce ? "auto" : "smooth" });
    },
    [reduce],
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Trilho: scroll nativo com snap, sem sequestro da roda do mouse. */}
      <div
        ref={scrollerRef}
        role="region"
        aria-label="Galeria de projetos entregues — arraste ou use as setas do teclado"
        tabIndex={0}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") return;
          const el = scrollerRef.current;
          if (!el) return;
          dragRef.current = { startX: event.clientX, startLeft: el.scrollLeft };
          el.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const el = scrollerRef.current;
          const drag = dragRef.current;
          if (!el || !drag) return;
          el.scrollLeft = drag.startLeft - (event.clientX - drag.startX);
        }}
        onPointerUp={(event) => {
          dragRef.current = null;
          scrollerRef.current?.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => {
          dragRef.current = null;
        }}
        /* `scroll-pl-*` casa o ponto de snap com o respiro lateral do layout —
           sem isso o primeiro card cola na borda e engole o gutter. */
        className="snap-x snap-mandatory scroll-pl-5 overflow-x-auto overscroll-x-contain pb-1 sm:scroll-pl-6 lg:scroll-pl-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max items-stretch gap-4 px-5 sm:px-6 lg:px-10">
          {projects.map((project) => {
            const obraLabel = project.obraId ? obraLabels[project.obraId] : undefined;
            const meta = metaLine(project, obraLabel);

            return (
              <li
                key={project.id}
                className="h-[46vh] shrink-0 snap-start lg:h-[62vh]"
                /* Altura fixa + proporção da foto = largura variável sem corte. */
                style={{ aspectRatio: `${project.image.width} / ${project.image.height}` }}
              >
                <figure className="relative h-full w-full overflow-hidden bg-night">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 45vw"
                    /* O trilho vive abaixo da dobra: o único priority da home é
                       a foto do hero. Todas as 12 fotos daqui ficam lazy. */
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="object-cover select-none"
                  />

                  {/* Gradiente de legibilidade sob a faixa. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night/85 via-night/35 to-transparent"
                  />

                  <figcaption className="absolute inset-x-0 bottom-0">
                    <div className="border-t-2 border-signal">
                      <div className="border border-t-0 border-[rgba(239,238,232,0.18)] bg-[rgba(11,11,10,0.45)] px-5 py-4 backdrop-blur-[9px] lg:px-6 lg:py-5">
                        <h3 className="font-display text-base leading-tight tracking-tight text-paper uppercase lg:text-xl">
                          {project.name}
                        </h3>
                        {meta ? <p className="t-label mt-2 text-paper/70">{meta}</p> : null}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Controles: barra de progresso + setas discretas. */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 sm:px-6 lg:px-10">
        <div aria-hidden className="h-px flex-1 bg-paper/15">
          <div
            className="h-px bg-signal"
            style={{
              width: `${Math.round(progress * 100)}%`,
              transition: reduce ? "none" : "width 120ms linear",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Arrow direction="prev" onClick={() => step(-1)} disabled={atStart} />
          <Arrow direction="next" onClick={() => step(1)} disabled={atEnd} />
        </div>
      </div>
    </div>
  );
}
