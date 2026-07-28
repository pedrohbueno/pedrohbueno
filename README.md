# Pedro Henrique — Portfólio (Next.js)

Portfólio de desenvolvedor construído com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**, inspirado no layout de referência (tema escuro, acentos neon, seção hero com "hotspots" interativos).

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura de arquivos

```
app/
  layout.tsx        # layout raiz, fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
  page.tsx           # monta a página (Header, Hero, About, Projects, Contact, Footer)
  globals.css        # tokens de cor via Tailwind + classes utilitárias (.card-surface, .chip, .eyebrow)

components/
  Header.tsx               # navegação fixa com destaque da seção ativa (scroll spy)
  Hero.tsx                  # seção inicial: headline, CTAs, redes sociais
  WorkspaceIllustration.tsx # ilustração SVG original (mesa/monitores) com cards flutuantes (hotspots) ligando às seções
  About.tsx                 # seção "Sobre", grade de competências
  Projects.tsx               # seção "Projetos" com filtro por categoria (client component)
  ProjectCard.tsx            # card individual de projeto
  Contact.tsx                 # seção de contato / CTA final
  Footer.tsx

data/
  projects.ts        # fonte única dos projetos (mobile, website, RPA, ETL) — edite aqui para adicionar/editar projetos

public/
  favicon.svg         # marca "PH" em SVG
```

## Sobre as "imagens"

Em vez de fotos externas (que exigiriam licenciamento/hospedagem), o hero e os cards de projeto usam **ilustração SVG própria** e **gradientes por categoria** gerados em código — assim o projeto roda sem nenhuma dependência de imagem externa. Se preferir usar fotos reais:

1. Coloque os arquivos em `public/` (ex: `public/projects/app-financeflow.png`).
2. Troque o bloco de `thumbnail` em `components/ProjectCard.tsx` por um `<Image src="/projects/..." ... />` do `next/image`.

## Adicionando um novo projeto

Edite `data/projects.ts` e adicione um novo objeto ao array `projects`, definindo `category` como `"mobile" | "website" | "rpa" | "etl"`. O filtro e o card já se atualizam automaticamente.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (tokens de cor customizados em `tailwind.config.ts`)
- lucide-react (ícones)
