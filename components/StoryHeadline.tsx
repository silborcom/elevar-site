"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurReveal, useSafeReducedMotion } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";

/**
 * Bloco de abertura da SEC.01 com revelação por desfoque e um movimento
 * vertical sutil que acompanha o scroll (parallax) para dar dinamismo.
 */
export function StoryHeadline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Movimento vertical leve acompanhando o scroll.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <div ref={ref} className="relative">
      <BlurReveal>
        <TechnicalLabel tone="coal">SEC.01 — A natureza da carga</TechnicalLabel>
      </BlurReveal>

      <motion.div style={{ y }}>
        <BlurReveal delay={0.1} y={56} blur={18}>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-tight uppercase">
            Movimentar carga não é sobre força.
            {/* Quebra explícita + inline-block: o campo amarelo ganha linha
                própria e nunca cobre os descendentes da linha anterior. */}
            <br />
            <span className="mt-2 inline-block bg-signal px-2 text-night lg:mt-3">
              É sobre controle.
            </span>
          </h2>
        </BlurReveal>
      </motion.div>
    </div>
  );
}
