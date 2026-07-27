import { 
  // Github, 
  // Linkedin, 
  Mail, 
  ArrowRight } from "lucide-react";
import WorkspaceIllustration from "./WorkspaceIllustration";

const SOCIALS = [
  // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  // { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:contato@pedrohenrique.dev", label: "E-mail" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-shell grid min-h-screen items-center gap-16 pt-32 pb-20 lg:grid-cols-2 lg:pt-24"
    >
      <div className="animate-fade-up">
        <p className="text-lg text-muted">Olá, eu sou</p>

        <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Pedro
          <br />
          Henrique
          <span className="text-purple">.</span>
        </h1>

        <p className="eyebrow mt-6 leading-relaxed">
          Desenvolvedor de software
          <br />
          automatizando ideias, criando soluções.
        </p>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Especialista em automação de processos (RPA), desenvolvimento
          backend e integração de sistemas. Transformo desafios complexos em
          soluções eficientes.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-blue px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            Ver Projetos
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contato"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-purple-soft"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-purple-soft hover:text-purple-soft"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <WorkspaceIllustration />
      </div>
    </section>
  );
}
