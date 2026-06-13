"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BlurReveal } from "@/lib/motion";
import { TechnicalLabel } from "@/components/ui";

/**
 * Bloco de abertura da SEC.01 com revelação por desfoque e um movimento
 * vertical sutil que acompanha o scroll (parallax) para dar dinamismo.
 */
export function StoryHeadline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Movimento vertical leve acompanhando o scroll.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <div ref={ref}>
      <BlurReveal>
        <TechnicalLabel tone="coal">SEC.01 — A natureza da carga</TechnicalLabel>
      </BlurReveal>

      <motion.div style={{ y }}>
        <BlurReveal delay={0.1} y={56} blur={18}>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase">
            Movimentar carga não é sobre força.{" "}
            <span className="bg-signal px-2 text-night">É sobre controle.</span>
          </h2>
        </BlurReveal>
      </motion.div>
    </div>
  );
}
