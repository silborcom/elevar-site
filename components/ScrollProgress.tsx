"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Barra fina de progresso no topo — apenas telas pequenas. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-signal lg:hidden"
      style={{ scaleX }}
    />
  );
}

/**
 * Régua vertical fixa — assinatura visual do layout no desktop.
 * Tiques de medição, preenchimento de progresso e o código da seção
 * atual lido por IntersectionObserver nos elementos [data-sec].
 */
export function RulerRail() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: reduce ? 1000 : 120,
    damping: reduce ? 100 : 28,
    mass: 0.4,
  });
  const [current, setCurrent] = useState("SEC.00");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrent(entry.target.getAttribute("data-sec") ?? "SEC.00");
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col items-center border-r border-paper/15 bg-coal lg:flex"
    >
      <div className="t-label mt-20 text-paper/60" style={{ writingMode: "vertical-rl" }}></div>
      <div className="relative my-6 w-px flex-1">
        <div className="ruler-ticks absolute inset-0 text-paper/25" />
        <motion.div
          className="absolute inset-x-0 top-0 origin-top bg-signal"
          style={{ scaleY, height: "100%", width: "3px", left: "-1px" }}
        />
      </div>
      <div className="t-label mb-8 text-signal" style={{ writingMode: "vertical-rl" }}>
        {current}
      </div>
    </div>
  );
}
