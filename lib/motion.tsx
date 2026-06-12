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
