import { ArrowUpRight, Smartphone, Globe, Bot, Database } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryMeta } from "@/data/projects";

const CATEGORY_ICON = {
  mobile: Smartphone,
  website: Globe,
  rpa: Bot,
  etl: Database,
};

export default function ProjectCard({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  const Icon = CATEGORY_ICON[project.category];

  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-colors duration-200 hover:border-purple-soft">
      {/* thumbnail - generated gradient, no external image dependency */}
      <div
        className="relative flex h-36 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${meta.accent}22, ${meta.accent}05)`,
        }}
      >
        <div
          className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full opacity-20 blur-xl"
          style={{ background: meta.accent }}
        />
        <Icon size={38} color={meta.accentSoft} strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: meta.accentSoft }}
          >
            {meta.label}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {project.metric}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.href ?? "#"}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-purple-soft"
        >
          Ver detalhes
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}
