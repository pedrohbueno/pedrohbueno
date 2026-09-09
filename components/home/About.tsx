import { Boxes, Bot, Database, Code2 } from "lucide-react";

const SKILLS = [
  {
    icon: Code2,
    title: "Desenvolvimento Backend",
    description:
      "APIs REST, arquitetura de microsserviços e integração de sistemas com foco em performance e escalabilidade.",
  },
  {
    icon: Bot,
    title: "Automação (RPA)",
    description:
      "Robôs de processo que eliminam tarefas manuais repetitivas e reduzem erros operacionais.",
  },
  {
    icon: Database,
    title: "ETL & Dados",
    description:
      "Pipelines de extração, transformação e carga que unificam dados de múltiplas fontes para decisões melhores.",
  },
  // {
  //   icon: Boxes,
  //   title: "Integração de Sistemas",
  //   description:
  //     "Conexão entre ERPs, CRMs e serviços de terceiros via APIs, webhooks e filas de mensageria.",
  // },
];

export default function About() {
  return (
    <section id="sobre" className="section-shell py-24">
      <p className="eyebrow">Sobre mim</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
        Construo pontes entre processos manuais e sistemas inteligentes.
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Trabalho na fronteira entre desenvolvimento de software e automação de
        processos. Meu objetivo é sempre o mesmo: identificar onde a
        tecnologia pode substituir o trabalho repetitivo e liberar tempo para
        o que realmente importa.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="card-surface p-6 transition-colors duration-200 hover:border-purple-soft"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-purple-soft">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-base font-semibold">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
