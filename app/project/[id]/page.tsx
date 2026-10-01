import Header from "@/components/Header";
import ProjectOverview from "@/components/projects/ProjectOverview";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{id: string}>;  
}) {
  const { id } = await params;
  const project = projects.find(
    p => p.id === id
  );

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Projeto não encontrado</div>;
  }

  return (
    <>
      <Header />
      <main>
        <ProjectOverview project={project} />
      </main>
      <Footer />
    </>
  );
}
