"use client";

import { useMemo, useState } from "react";
import { projects, categoryMeta, type ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type FilterValue = ProjectCategory | "todos";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "mobile", label: categoryMeta.mobile.label },
  { value: "website", label: categoryMeta.website.label },
  { value: "rpa", label: categoryMeta.rpa.label },
  { value: "etl", label: categoryMeta.etl.label },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterValue>("todos");

  const filteredProjects = useMemo(
    () =>
      filter === "todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="projetos" className="section-shell py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Projetos</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Soluções que já entregaram resultado.
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filtrar projetos por categoria"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className="chip"
              data-active={filter === item.value}
              aria-pressed={filter === item.value}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-muted">
          Nenhum projeto encontrado nessa categoria ainda.
        </p>
      )}
    </section>
  );
}
