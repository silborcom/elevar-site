import type { Metadata, Viewport } from "next";

import "./globals.css";
import { archivo, archivoBlack, plexMono } from "./fonts";
import { ScrollProgress, RulerRail } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/FinalCTA";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description:
    "Equipamentos de elevação, transporte e movimentação de cargas: talhas manuais e elétricas, troles, patescas, pontes rolantes, monovias e projetos para áreas classificadas. Canoas/RS.",
  keywords: [
    "movimentação de cargas",
    "talha elétrica",
    "talha manual",
    "trole",
    "patesca",
    "ponte rolante",
    "monovia",
    "Canoas RS",
  ],
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description:
      "Do equipamento padronizado ao projeto sob consulta. Talhas, troles, patescas, pontes rolantes e monovias com engenharia, precisão e segurança.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121210",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivoBlack.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>
        <ScrollProgress />
        <RulerRail />
        <SiteHeader />
        <div className="lg:pl-14">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
