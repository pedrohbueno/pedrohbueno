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
    id: "enerlytics-app",
    title: "Enerlytics",
    category: "mobile",
    description:
      "App para controle de consumo de energia por eletrodomesticos de uma ou mais residencias.",
    stack: ["Java", "Spring Boot"],
    metric: "",
  },
  // {
  //   id: "routex-app",
  //   title: "RouteX Delivery",
  //   category: "mobile",
  //   description:
  //     "Aplicativo de logística para entregadores com roteirização otimizada, rastreamento em tempo real e modo offline-first.",
  //   stack: ["Flutter", "Dart", "Google Maps API", "SQLite"],
  //   metric: "-23% tempo de rota",
  // },
  {
    id: "linnie",
    title: "Linnie",
    category: "website",
    description:
      "É uma rede social e plataforma de desecoberta de conteúdos especilisado para moldes de roupas.",
    stack: ["React.js", "SCSS", "Node Express", "MySQL"],
    metric: "",
  },
  {
    id: "gamevault",
    title: "GameVault",
    category: "website",
    description:
      "Plataforma para compra e descoberta de jogos.",
    stack: ["Next.js", "Node.js", "MySQL"],
    metric: "+40% conversão",
  },
  // {
  //   id: "bot-fiscal",
  //   title: "Robô de Notas Fiscais",
  //   category: "rpa",
  //   description:
  //     "Automação que baixa, valida e lança notas fiscais eletrônicas no ERP da empresa, eliminando o processo manual diário.",
  //   stack: ["UiPath", "Python", "REST API", "SAP"],
  //   metric: "6h/dia economizadas",
  // },
  // {
  //   id: "bot-onboarding",
  //   title: "Onboarding Automatizado RH",
  //   category: "rpa",
  //   description:
  //     "Fluxo de automação que cria acessos, envia documentação e agenda integrações para novos colaboradores automaticamente.",
  //   stack: ["Python", "Selenium", "Microsoft Graph API"],
  //   metric: "-80% tempo de setup",
  // },
  // {
  //   id: "pipeline-vendas",
  //   title: "Pipeline de Vendas Unificado",
  //   category: "etl",
  //   description:
  //     "Pipeline que consolida dados de vendas de múltiplas fontes (CRM, marketplace e ERP) em um data warehouse para BI.",
  //   stack: ["Python", "Apache Airflow", "dbt", "BigQuery"],
  //   metric: "5 fontes unificadas",
  // },
  {
    id: "watt_scope",
    title: "WattScope: Energy Star",
    category: "etl",
    description:
      "Processo de ETL que consome a api de Energy Star para pegar consumos de eletrodomésticos.",
    stack: ["Python", "Pandas", "PostgreSQL", "Docker"],
    metric: "99.2% dados limpos",
  },
];
