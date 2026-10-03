import { Github, Computer, Calendar, Redo } from 'lucide-react';
import type { Project } from '@/lib/projects/types';

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(iso));

export default function ProjectOverview({ project }: { project: Project }) {
  const { github, demoUrl } = project;

  return (
    <section className="section-shell grid min-h-screen items-center gap-16 pt-12 pb-20 lg:grid-cols-2 lg:pt-24">
      <div className="animate-fade-up">
        <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="pt-8">{project.description}</p>

        {(github || demoUrl) && (
          <div className="flex gap-3">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-950 px-5 py-3"
              >
                <div className="flex items-center gap-2">
                  <Github className="rounded-lg bg-white fill-black" size={20} />
                  <p>Ver no GitHub</p>
                </div>
              </a>
            )}

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-5 py-3"
              >
                <div className="flex items-center gap-2">
                  <Computer size={20} />
                  <p>Ver Demonstração</p>
                </div>
              </a>
            )}
          </div>
        )}

        <div className="flex gap-10 m-5">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <p>Criado em {formatDate(project.createdAt)}</p>
          </div>
          {github?.pushedAt && (
            <div className="flex items-center gap-2">
              <Redo size={20} />
              <p>Atualizado em {formatDate(github.pushedAt)}</p>
            </div>
          )}
        </div>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 m-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}