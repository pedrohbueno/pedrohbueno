import Header from "@/components/Header";
import ProjectOverview from "@/components/projects/ProjectOverview";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { project?: string };
}) {
  const project = projects.find(
    p => p.title === searchParams.project
  );

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Projeto não encontrado</div>;
  }

  return (
    <>
      <Header />
      <main>
        <ProjectOverview projectName={project.title} />
      </main>
      <Footer />
    </>
  );
}
