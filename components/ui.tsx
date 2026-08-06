import type { ReactNode } from "react";

/** Rótulo técnico em mono, com colchetes de marcação de engenharia. */
export function TechnicalLabel({
  children,
  tone = "steel",
  className = "",
}: {
  children: ReactNode;
  tone?: "steel" | "signal" | "paper" | "coal";
  className?: string;
}) {
  const tones = {
    steel: "text-steel",
    signal: "text-signal",
    paper: "text-paper/70",
    coal: "text-coal/60",
  } as const;
  return (
    <span className={`t-label inline-flex items-baseline gap-2 ${tones[tone]} ${className}`}>
      <span aria-hidden>[</span>
      {children}
      <span aria-hidden>]</span>
    </span>
  );
}

/** Par rótulo + valor para especificações-chave. */
export function SpecPill({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1 border-t pt-3 ${
        dark ? "border-paper/20" : "border-coal/20"
      }`}
    >
      <dt className={`t-label ${dark ? "text-paper/55" : "text-steel"}`}>{label}</dt>
      <dd
        className={`font-sans text-base font-semibold tracking-tight ${
          dark ? "text-paper" : "text-coal"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

/** Cabeçalho padrão de seção: código + título de display. */
export function SectionHeading({
  code,
  title,
  dark = false,
  children,
}: {
  code: string;
  title: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <TechnicalLabel tone={dark ? "signal" : "coal"}>{code}</TechnicalLabel>
      <h2
        className={`font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] tracking-tight uppercase ${
          dark ? "text-paper" : "text-coal"
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
