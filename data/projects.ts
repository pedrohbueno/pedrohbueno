export type ProjectCategory = "mobile" | "website" | "rpa" | "etl";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  metric: string;
  href?: string;
}

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; accent: string; accentSoft: string }
> = {
  mobile: { label: "Mobile", accent: "#3B82F6", accentSoft: "#60A5FA" },
  website: { label: "Website", accent: "#8B5CF6", accentSoft: "#A78BFA" },
  rpa: { label: "RPA", accent: "#EC4899", accentSoft: "#F472B6" },
  etl: { label: "ETL", accent: "#14B8A6", accentSoft: "#2DD4BF" },
};

export const projects: Project[] = [
  {
    id: "financeflow-app",
    title: "FinanceFlow",
    category: "mobile",
    description:
      "App de controle financeiro pessoal com sincronização em tempo real e categorização automática de gastos via OCR de notas fiscais.",
    stack: ["React Native", "TypeScript", "Firebase", "Zustand"],
    metric: "+12k downloads",
  },
  {
    id: "routex-app",
    title: "RouteX Delivery",
    category: "mobile",
    description:
      "Aplicativo de logística para entregadores com roteirização otimizada, rastreamento em tempo real e modo offline-first.",
    stack: ["Flutter", "Dart", "Google Maps API", "SQLite"],
    metric: "-23% tempo de rota",
  },
  {
    id: "ph-consultoria",
    title: "Consultoria Vértice",
    category: "website",
    description:
      "Site institucional para consultoria empresarial, com CMS headless para atualização de conteúdo pela equipe de marketing.",
    stack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    metric: "98/100 Lighthouse",
  },
  {
    id: "loja-conecta",
    title: "Loja Conecta",
    category: "website",
    description:
      "Plataforma de e-commerce B2B com catálogo dinâmico, checkout customizado e integração com múltiplos meios de pagamento.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    metric: "+40% conversão",
  },
  {
    id: "bot-fiscal",
    title: "Robô de Notas Fiscais",
    category: "rpa",
    description:
      "Automação que baixa, valida e lança notas fiscais eletrônicas no ERP da empresa, eliminando o processo manual diário.",
    stack: ["UiPath", "Python", "REST API", "SAP"],
    metric: "6h/dia economizadas",
  },
  {
    id: "bot-onboarding",
    title: "Onboarding Automatizado RH",
    category: "rpa",
    description:
      "Fluxo de automação que cria acessos, envia documentação e agenda integrações para novos colaboradores automaticamente.",
    stack: ["Python", "Selenium", "Microsoft Graph API"],
    metric: "-80% tempo de setup",
  },
  {
    id: "pipeline-vendas",
    title: "Pipeline de Vendas Unificado",
    category: "etl",
    description:
      "Pipeline que consolida dados de vendas de múltiplas fontes (CRM, marketplace e ERP) em um data warehouse para BI.",
    stack: ["Python", "Apache Airflow", "dbt", "BigQuery"],
    metric: "5 fontes unificadas",
  },
  {
    id: "etl-clientes360",
    title: "Cliente 360",
    category: "etl",
    description:
      "Processo de ETL que higieniza, deduplica e enriquece a base de clientes para uma visão única usada por vendas e suporte.",
    stack: ["Python", "Pandas", "PostgreSQL", "Docker"],
    metric: "99.2% dados limpos",
  },
];
