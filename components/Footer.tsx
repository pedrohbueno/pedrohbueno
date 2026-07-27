export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p>© {year} Pedro Henrique. Todos os direitos reservados.</p>
        <p className="font-mono uppercase tracking-wider">
          Feito com Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
