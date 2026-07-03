"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Revela o conteúdo ao entrar na viewport. Base preparada para evoluir
 * com transições de motion blur: basta estender as variants daqui.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion.create(Tag as ElementType);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Revelação suave com desfoque + movimento vertical, acionada ao entrar na
 * viewport. Pensada para títulos e blocos de texto que pedem ênfase dinâmica.
 */
export function BlurReveal({
  children,
  delay = 0,
  y = 40,
  blur = 14,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  className?: string;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion.create(Tag as ElementType);

  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        filter: reduce ? "blur(0px)" : `blur(${blur}px)`,
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Seta vertical com loop suave de ênfase: a ponta desce e some em ciclo,
 * reforçando a leitura descendente do vetor de carga.
 */
export function PulseArrow({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span aria-hidden className={className}>
        <span className="absolute top-1 bottom-0 left-0 w-px bg-coal/30" />
        <span className="absolute -bottom-1 -left-[3.5px] font-mono text-[10px] text-coal/60">
          ▼
        </span>
      </span>
    );
  }

  return (
    <span aria-hidden className={className}>
      <span className="absolute top-1 bottom-0 left-0 w-px overflow-hidden bg-coal/20">
        <motion.span
          className="absolute inset-x-0 top-0 h-1/3 bg-coal/70"
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "300%"] }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />
      </span>
      <motion.span
        className="absolute -left-[3.5px] font-mono text-[10px] text-coal/60"
        initial={{ bottom: "-4px" }}
        animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.4,
        }}
        style={{ bottom: "-4px" }}
      >
        ▼
      </motion.span>
    </span>
  );
}

/** Grupo com entrada em cascata (stagger) para linhas de título. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & ComponentPropsWithoutRef<
  typeof motion.div
>) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}
