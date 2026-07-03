import { BlurReveal, PulseArrow } from "@/lib/motion";
import { StoryHeadline } from "@/components/StoryHeadline";

const vectors = [
  {
    code: "F1",
    title: "Risco",
    body: "Toneladas suspensas sobre pessoas, máquinas e prazo de entrega. Cada içamento é uma decisão de engenharia.",
  },
  {
    code: "F2",
    title: "Cálculo",
    body: "Capacidade nominal, esforço de operação, número de ramais, aba da viga: variáveis dimensionadas, não estimadas.",
  },
  {
    code: "F3",
    title: "Continuidade",
    body: "Equipamento parado é linha parada. Disponibilidade e assistência também são parte da segurança.",
  },
];

export function StorySection() {
  return (
    <section
      data-sec="SEC.01"
      aria-label="O problema da movimentação de cargas"
      className="relative bg-paper py-24 text-coal lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <StoryHeadline />

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3 lg:mt-28">
          {vectors.map((vector, index) => (
            <BlurReveal key={vector.code} delay={index * 0.12} className="relative pl-8">
              {/* Vetor de carga */}
              <PulseArrow className="absolute top-1 bottom-0 left-0 w-px" />

              <p className="t-label text-steel">
                {vector.code} · kgf<span aria-hidden> ↓</span>
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tight uppercase">
                {vector.title}
              </h3>
              <p className="mt-4 leading-relaxed text-coal/75">{vector.body}</p>
            </BlurReveal>
          ))}
        </div>

        <BlurReveal delay={0.1}>
          <p className="mt-20 max-w-3xl border-l-2 border-signal pl-6 text-xl leading-relaxed text-coal/85 lg:mt-28">
            Cargas críticas pedem controle. A Elevar fornece o equipamento, o
            dimensionamento e o suporte para que o movimento aconteça — dentro
            da norma e dentro do prazo.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}
