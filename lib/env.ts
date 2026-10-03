function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Variável de ambiente ausente: ${name}`);
  return value;
}
 
export const env = {
  supabaseUrl: required('SUPABASE_URL'),
  supabaseKey: required('SUPABASE_PUBLISHABLE_KEY'),
  githubToken: process.env.GITHUB_TOKEN, // opcional, mas recomendado
  revalidateSecret: process.env.REVALIDATE_SECRET, // webhook
};
