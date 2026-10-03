import 'server-only';
import { env } from '@/lib/env';
import type { RepoInfo } from '@/lib/projects/types';
 
const API = 'https://api.github.com/repos';
 
const headers: HeadersInit = {
  Accept: 'application/vnd.github+json',
  ...(env.githubToken ? { Authorization: `Bearer ${env.githubToken}` } : {}),
};
 
async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}/${path}`, {
    headers,
        next: { revalidate: 3600 },
        });
        return res.ok ? ((await res.json()) as T) : null;
    } catch {
        return null;
    }
    }
    
    export async function getRepoInfo(repo: string | null): Promise<RepoInfo | null> {
    if (!repo) return null;
    const [meta, languages] = await Promise.all([
        get<{ html_url: string; stargazers_count: number; pushed_at: string }>(repo),
        get<Record<string, number>>(`${repo}/languages`),
    ]);
    if (!meta) return null;
    return {
        url: meta.html_url,
        stars: meta.stargazers_count,
        pushedAt: meta.pushed_at,
        languages: languages ?? {},
    };
}
