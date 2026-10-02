import { supabase } from "./supabase";

export async function getProjects() {
  // Busca apenas os projetos publicados no Supabase
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("sort_order");

  if (error) {
    throw new Error(error.message);
  }

  // Espera todas as buscas do GitHub terminarem
  const projects = await Promise.all(
    data.map(async (project) => {
      // Busca os dados desse projeto no GitHub
      const response = await fetch(
        `https://api.github.com/repos/${project.github_repo}`
      );

      // Converte a resposta do GitHub para objeto
      const github = await response.json();

      // Junta os dados do Supabase com os do GitHub
      return {
        ...project,
        stack: github.language ? [github.language] : [],
        github:{
            name: github.name,
            url: github.html_url,
            language: github.language,
            stars: github.stargazers_count,
        },
      };
    })
  );

  return projects;
}