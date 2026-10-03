import type { Category, Project } from './types';
 
export function deriveCategories(projects: Project[]): Category[] {
  const bySlug = new Map<string, Category>();
  for (const { category } of projects) bySlug.set(category.slug, category);
  return [...bySlug.values()].sort((a, b) => a.sortOrder - b.sortOrder);
}
