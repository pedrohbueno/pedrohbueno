import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects/types';
import { getCategoryIcon } from './category-icons';

const MAX_STACK = 5;

export default function ProjectCard({ project }: { project: Project }) {
  const { category } = project;
  const Icon = getCategoryIcon(category.icon);
  const visibleStack = project.stack.slice(0, MAX_STACK);
  const hiddenCount = project.stack.length - visibleStack.length;

  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-colors duration-200 hover:border-purple-soft">
      {/* thumbnail - generated gradient, no external image dependency */}
      <div
        className="relative flex h-36 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${category.accent}22, ${category.accent}05)`,
        }}
      >
        <div
          className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full opacity-20 blur-xl"
          style={{ background: category.accent }}
        />
        <Icon size={38} color={category.accentSoft} strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: category.accentSoft }}
          >
            {category.label}
          </span>
          {project.metric && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.metric}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-muted">
              +{hiddenCount}
            </span>
          )}
        </div>

        <Link
          href={'/projects/' + project.slug}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-purple-soft"
        >
          Ver detalhes
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}