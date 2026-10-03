const IGNORED = new Set(['Dockerfile', 'Makefile', 'Shell', 'Batchfile']);
const MIN_SHARE = 0.05;
 
export function mergeStack(
  languages: Record<string, number>,
  extra: string[],
): string[] {
  const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
 
  const fromGithub = Object.entries(languages)
    .filter(
      ([name, bytes]) =>
        !IGNORED.has(name) && total > 0 && bytes / total >= MIN_SHARE,
    )
    .sort(([, a], [, b]) => b - a)
    .map(([name]) => name);
 
  const seen = new Set<string>();
  return [...fromGithub, ...extra].filter((tech) => {
    const key = tech.trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
