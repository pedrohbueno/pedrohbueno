import { mergeStack } from './stack';
import { safeHttpUrl } from '@/lib/url';
import type { CategoryRow, Project, ProjectRow, RepoInfo } from './types';
 
export function toProject(
  row: ProjectRow & { category: CategoryRow },
  repo: RepoInfo | null,
): Project {
  const c = row.category;
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: {
      slug: c.slug,
      label: c.label,
      accent: c.accent,
      accentSoft: c.accent_soft,
      icon: c.icon,
      sortOrder: c.sort_order,
    },
    stack: mergeStack(repo?.languages ?? {}, row.stack_extra),
    metric: row.metric ?? undefined,
    demoUrl: safeHttpUrl(row.demo_url),
    createdAt: row.created_at,
    github: repo
      ? { url: repo.url, stars: repo.stars, pushedAt: repo.pushedAt }
      : undefined,
  };
}
