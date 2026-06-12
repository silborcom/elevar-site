import Link from "next/link";

const navItems = [
  { href: "#equipamentos", label: "Equipamentos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#especiais", label: "Especiais" },
  { href: "#seguranca", label: "Segurança" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/15 bg-coal lg:left-14">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-10">
        <Link href="#topo" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-paper">ELEVAR</span>
          <span className="t-label hidden text-paper/55 transition-colors group-hover:text-signal sm:inline">
            Mov. de cargas
          </span>
        </Link>

        <nav aria-label="Seções da página" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="t-label text-paper/70 transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contato"
          className="t-label bg-signal px-4 py-2.5 text-night transition-colors hover:bg-paper"
        >
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
}
