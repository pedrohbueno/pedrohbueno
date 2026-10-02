import type { Database } from '@/types/database';
 
export type ProjectRow = Database['public']['Tables']['projects']['Row'];
export type CategoryRow = Database['public']['Tables']['categories']['Row'];
 
export interface Category {
  slug: string;
  label: string;
  accent: string;
  accentSoft: string;
  icon: string;
  sortOrder: number;
}
 
export interface RepoInfo {
  url: string;
  stars: number;
  pushedAt: string;
  languages: Record<string, number>; // bytes por linguagem
}
 
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  stack: string[];
  metric?: string;
  demoUrl?: string;
  createdAt: string;
  github?: Omit<RepoInfo, 'languages'>;
}
