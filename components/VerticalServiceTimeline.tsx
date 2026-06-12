"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Reveal } from "@/lib/motion";
import { SectionHeading } from "@/components/ui";
import { serviceSteps } from "@/data/services";

/**
 * Storytelling vertical de serviços. Cada etapa ocupa boa altura de tela
 * e reporta quando está em vista — gancho pronto para as futuras
 * transições com motion blur.
 */
export function VerticalServiceTimeline() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="servicos"
      data-sec="SEC.02"
      aria-label="Serviços"
      className="relative border-t border-paper/10 bg-coal py-24 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:px-10">
        {/* Coluna fixa */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading code="SEC.02 — Serviços" title="Da especificação à operação" dark>
              <p className="mt-4 max-w-md leading-relaxed text-paper/70">
                Seis etapas entre a necessidade de mover uma carga e a carga em
                movimento. Precisão, segurança e suporte técnico em cada uma.
              </p>
            </SectionHeading>

            <p className="t-label mt-10 text-paper/50" aria-live="polite">
              Etapa {serviceSteps[active].index} / 0{serviceSteps.length}
            </p>
            <div aria-hidden className="mt-3 h-px w-48 bg-paper/20">
              <motion.div
                className="h-px bg-signal"
                animate={{ width: `${((active + 1) / serviceSteps.length) * 100}%` }}
                transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Etapas */}
        <ol className="flex flex-col lg:col-span-7">
          {serviceSteps.map((step, index) => (
            <motion.li
              key={step.index}
              onViewportEnter={() => setActive(index)}
              viewport={{ margin: "-45% 0px -45% 0px", amount: "some" }}
              className={`flex min-h-[46vh] flex-col justify-center border-t py-12 pl-7 transition-colors duration-500 lg:min-h-[52vh] ${
                active === index ? "border-l-2 border-l-signal" : "border-l-2 border-l-transparent"
              } border-t-paper/12`}
            >
              <Reveal>
                <span
                  className={`font-display text-5xl tracking-tight transition-colors duration-500 ${
                    active === index ? "text-signal" : "text-paper/25"
                  }`}
                  aria-hidden
                >
                  {step.index}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-paper uppercase lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-paper/70">{step.body}</p>
              </Reveal>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
