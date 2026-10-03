import { getProjects } from '@/lib/projects/queries';
import { deriveCategories } from '@/lib/projects/categories';
import ProjectsGrid from './ProjectsGrid';
 
export default async function ProjectsSection() {
  const projects = await getProjects();
  return (
    <ProjectsGrid projects={projects} categories={deriveCategories(projects)} />
  );
}