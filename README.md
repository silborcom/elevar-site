# ELEVAR — Movimentação de Cargas · Site/Wireframe v1

Wireframe navegável de alta fidelidade em formato de **storytelling vertical**:
da natureza da carga (risco, cálculo, continuidade) à engenharia, serviços,
catálogo de equipamentos, projetos especiais, segurança e orçamento.

Direção de arte: **industrial editorial** — preto carvão, branco técnico e
amarelo de sinalização, grids aparentes, linhas de medição, rótulos mono,
números grandes e faixas de segurança. Sem cards genéricos, sem glassmorphism,
sem layout SaaS.

---

## Rodando localmente

Pré-requisito: Node.js 18.18+ (desenvolvido com Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

Produção:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

> As fontes são auto-hospedadas (pacotes Fontsource copiados para `app/fonts/`
> e servidos via `next/font/local`) — nenhuma chamada externa a Google Fonts.

---

## Stack

- **Next.js 15 (App Router) + TypeScript** — página estática pré-renderizada
- **Tailwind CSS v4** — tokens do design system em `app/globals.css` (`@theme`)
- **Framer Motion 12** — reveals com stagger, parallax leve, progresso de
  scroll; tudo com suporte a `prefers-reduced-motion`
- **next/font/local** — Archivo Black (display), Archivo variável (texto),
  IBM Plex Mono (rótulos técnicos)

GSAP não foi necessário nesta fase: o scroll permanece nativo (sem hijack) e a
base de animação está preparada para evoluir com motion blur (ver
`lib/motion.tsx`, ponto único para estender variants).

---

## Estrutura (arquivos criados)

```
app/
  globals.css            # tokens da paleta, utilitários .t-label/.t-ghost/.hazard/.ruler-ticks
  fonts.ts               # next/font/local (woff2 em app/fonts/)
  layout.tsx             # metadados/SEO, régua lateral, header, footer
  page.tsx               # composição das seções
  icon.svg               # favicon tipográfico
components/
  ScrollProgress.tsx     # barra mobile + RulerRail (régua fixa com SEC.00–06)
  SiteHeader.tsx
  HeroSection.tsx        # talha suspensa da borda superior + linha de medição
  StorySection.tsx       # tensão: risco / cálculo / continuidade
  VerticalServiceTimeline.tsx  # 6 etapas, coluna sticky, etapa ativa
  ProductStoryRail.tsx   # cabeçalho do catálogo + estações + índice da linha
  ProductStage.tsx       # estação de produto: foto c/ parallax, ficha, tabela
  SpecialEquipmentSection.tsx  # preto dominante + esquema SVG de ponte rolante
  SafetySection.tsx      # dados grandes (1,5× · +25 · normas · assistência)
  FinalCTA.tsx           # CTA em campo amarelo + footer
  ui.tsx                 # TechnicalLabel, SpecPill, IndustrialGrid, SectionHeading
data/
  products.ts            # produtos extraídos de CATALOGO_2026 (tabelas completas)
  services.ts            # etapas de serviço + frentes especiais
  company.ts             # contatos, endereço, indicadores institucionais
lib/
  motion.tsx             # Reveal / StaggerGroup / StaggerItem (reduced-motion aware)
public/products/         # 5 fotos reais do catálogo (WebP otimizado, 15–84 KB)
```

---

## Origem dos dados

| Dado | Fonte |
| --- | --- |
| Specs, códigos e fotos das 5 estações | `CATALOGO_2026_-_elevar.xlsx` (planilha + imagens embutidas) |
| Endereço, telefones, e-mail, WhatsApp | Site institucional atual |
| Indicadores (ensaio 1,5×, +25 anos, normas BR/INT, assistência) | Site institucional atual |
| Categorias da “Linha completa” (índice A1–A5) | Site institucional atual |

Nenhuma especificação foi inventada. Categorias sem ficha no catálogo recebido
aparecem como índice com “fichas sob consulta”; produto sem foto teria
placeholder honesto desenhado (tratado em `ProductStage`).

---

## Pontos que precisam de validação humana

1. **Specs extraídas do catálogo** (`data/products.ts`): capacidades, códigos,
   potências, velocidades, pesos e faixas — conferir com a engenharia antes de
   publicar. A tabela da talha manual mostra a versão de 3 m (versões de 5 m
   indicadas em nota); DHY 1 t condensa as alturas 6/10/15 m em uma linha.
2. **“Patesca modelo europeia”** — a planilha grafa “EUROPEIRA”; assumi erro de
   digitação e normalizei. Confirmar nomenclatura oficial.
3. **Indicadores institucionais** (1,5×, +25 anos, normas, rede de assistência):
   retirados do site atual; validar se continuam corretos.
4. **Acesso ao site atual**: o domínio bloqueia acesso automatizado
   (robots). O conteúdo institucional foi coletado por busca/snippets — vale
   uma revisão de tom com o texto integral do site.
5. **Linha completa (A1–A5)**: guinchos de alavanca, talhas de alavanca (TAE),
   troles manuais, ganchos, moitões e cadernais estão listados sem specs por
   ausência no catálogo recebido. Havendo fichas/fotos, viram novas estações.
6. **Navegação mobile**: no wireframe v1, o menu de âncoras aparece em ≥768px;
   no mobile ficam wordmark + CTA de orçamento. Decidir se a v2 terá menu
   completo.
7. **Coordenadas 29°55′S · 51°11′W** — detalhe gráfico aproximado de
   Canoas/RS; ajustar se a sede preferir o dado exato.

---

## Validação executada

- `npm run lint` — sem erros ou warnings
- `npm run build` — build estático ok (página ~9 kB, First Load ~155 kB)
- Servidor de produção auditado via HTML renderizado: âncoras íntegras,
  1×`h1`, hierarquia de headings, 0 alts vazios, 5 fotos respondendo 200,
  contatos reais presentes, sem placeholders esquecidos
- Revisão visual crítica sem navegador disponível no ambiente (Playwright não
  pôde baixar browsers) — recomendo um passe de QA visual local com
  `npm run dev`
