import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSlugs, getProjectBySlug } from '@/lib/projects/queries';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectOverview from '@/components/projects/ProjectOverview';
 
export const revalidate = 3600;
 
type Props = {
  params: Promise<{ slug: string }>;
};
 
export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Pedro Henrique`,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}
 
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
 
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
