import { projects } from "@/data/projects";

export default function ProjectOverview({ projectName }: { projectName: string }) {
  const project = projects.find(
    p => p.title === projectName
  );

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <section
      id="inicio"
      className="section-shell grid min-h-screen items-center gap-16 pt-32 pb-20 lg:grid-cols-2 lg:pt-24"
    >
      <div>
        <h1>{project.title}</h1>
        <br />
        <p>{project.description}</p>
      </div>
    </section>
  );
}
