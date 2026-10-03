'use client';
 
import { useMemo, useState } from 'react';
import type { Category, Project } from '@/lib/projects/types';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
  categories: Category[];
}
 
export default function ProjectsGrid({ projects, categories }: Props) {
  const [filter, setFilter] = useState('all');
 
  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.category.slug === filter),
    [filter, projects],
  );
 
  const options = [{ slug: 'all', label: 'Todos' }, ...categories];
 
  return (
    <section id="projetos" className="section-shell py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Projetos</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Soluções desenvolvidas.
          </h2>
        </div>
 
        {categories.length > 1 && (
          <div
            role="group"
            aria-label="Filtrar projetos por categoria"
            className="flex flex-wrap gap-2"
          >
            {options.map((o) => (
              <button
                key={o.slug}
                type="button"
                onClick={() => setFilter(o.slug)}
                className="chip"
                data-active={filter === o.slug}
                aria-pressed={filter === o.slug}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      </div>
 
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
