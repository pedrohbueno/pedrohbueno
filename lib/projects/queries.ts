import 'server-only';
import { supabase } from '@/lib/supabase/server';
import { getRepoInfo } from '@/lib/github/repo';
import { toProject } from './mapper';
import type { Project } from './types';
 
const SELECT = '*, category:categories(*)';
 
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select(SELECT)
    .eq('published', true)
    .order('sort_order');
  if (error) throw new Error(`getProjects: ${error.message}`);
 
  return Promise.all(
    data.map(async (row) => toProject(row, await getRepoInfo(row.github_repo))),
  );
}
 
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select(SELECT)
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error) throw new Error(`getProjectBySlug: ${error.message}`);
  return data ? toProject(data, await getRepoInfo(data.github_repo)) : null;
}
 
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('slug')
    .eq('published', true);
  if (error) throw new Error(`getAllSlugs: ${error.message}`);
  return data.map((row) => row.slug);
}
