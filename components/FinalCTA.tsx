import Link from "next/link";

import { Reveal } from "@/lib/motion";
import { company } from "@/data/company";

export function FinalCTA() {
  return (
    <section
      id="contato"
      data-sec="SEC.06"
      aria-label="Solicitar orçamento"
      className="relative bg-signal text-night"
    >
      <div aria-hidden className="hazard h-3" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="t-label text-night/60">SEC.06 — Orçamento e projeto</p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-tight uppercase">
              Descreva a carga. Nós dimensionamos o resto.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-night/75">
              Capacidade, vão, altura de elevação e regime de trabalho: com
              esses dados, a equipe técnica retorna com a especificação e o
              orçamento. Equipamento de linha ou projeto sob consulta.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label bg-night px-7 py-4 text-signal transition-colors hover:bg-coal"
              >
                WhatsApp · {company.whatsapp}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="t-label border border-night/40 px-7 py-4 text-night transition-colors hover:border-night hover:bg-night hover:text-signal"
              >
                {company.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
          <div className="border-t-2 border-night pt-6">
            <p className="t-label text-night/60">Sede e fábrica</p>
            <address className="mt-4 leading-relaxed text-night/85 not-italic">
              {company.address.street} — {company.address.district}
              <br />
              {company.address.city} / {company.address.state} · CEP {company.address.zip}
            </address>
            <p className="mt-6 font-mono text-sm text-night/85">
              Tel. {company.phone}
              <br />
              {company.site}
            </p>
            <p className="t-label mt-8 text-night/50">{company.coordinates}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/12 bg-night py-14 text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-tight">ELEVAR</p>
          <p className="t-label mt-2 text-paper/55">Movimentação de cargas</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
            Equipamentos e projetos para elevação, transporte e movimentação de
            cargas. {company.address.city}/{company.address.state}, Brasil.
          </p>
        </div>

        <nav aria-label="Mapa do site" className="flex flex-col gap-3">
          <p className="t-label text-paper/45">Navegação</p>
          {[
            { href: "/#equipamentos", label: "Equipamentos" },
            { href: "/produtos", label: "Catálogo completo" },
            { href: "/#servicos", label: "Serviços" },
            { href: "/#especiais", label: "Equipamentos especiais" },
            { href: "/#seguranca", label: "Segurança" },
            { href: "/#contato", label: "Orçamento" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-sm text-paper/70 transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:items-end">
          <p className="t-label text-paper/45">Contato</p>
          <a href={`tel:+55${company.phone.replace(/\D/g, "")}`} className="text-sm text-paper/70 transition-colors hover:text-signal">
            {company.phone}
          </a>
          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/70 transition-colors hover:text-signal">
            WhatsApp {company.whatsapp}
          </a>
          <a href={`mailto:${company.email}`} className="text-sm text-paper/70 transition-colors hover:text-signal">
            {company.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-baseline justify-between gap-4 border-t border-paper/12 px-5 pt-6 sm:px-6 lg:px-10">
        <p className="t-label text-paper/40">
          © 2026 {company.name}
        </p>
        <p className="t-label text-paper/40">{company.coordinates}</p>
      </div>
    </footer>
  );
}
