import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const CHANNELS = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@pedrohenrique.dev",
    href: "mailto:contato@pedrohenrique.dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/pedrohenrique",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/pedrohenrique",
    href: "https://github.com",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="section-shell py-24">
      <div className="card-surface relative overflow-hidden px-8 py-16 sm:px-16">
        <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-purple/20 blur-3xl" />

        <p className="eyebrow">Contato</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
          Tem um processo manual ou uma ideia para automatizar?
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Vamos conversar sobre como transformar isso em uma solução eficiente.
        </p>

        <a
          href="mailto:contato@pedrohenrique.dev"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-blue px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
        >
          Enviar mensagem
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        <div className="mt-12 grid gap-4 border-t border-border-soft pt-8 sm:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-ink"
            >
              <Icon size={16} className="text-purple-soft" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted/70">
                  {label}
                </span>
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
