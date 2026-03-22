export type ExperienceItem = {
  company: string;
  label: string;
  period: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type EducationItem = {
  institution: string;
  title: string;
  period: string;
  status: string;
  description: string;
  topics: string[];
};

export const featuredExperience: ExperienceItem = {
  company: "WFX Energy",
  label: "Projeto profissional",
  period: "Ago 2025 — Dez 2025 · Entregue",
  title: "Plataforma comercial para gestão de orçamentos solares",
  description:
  "Desenvolvimento de uma plataforma web voltada à centralização do cadastro de clientes, criação de orçamentos e acompanhamento de projetos no contexto de energia solar. A solução foi pensada para organizar o fluxo comercial e operacional em um único ambiente, com mais clareza, agilidade e controle das informações.",
  highlights: [
  "Construção de fluxo centralizado para gestão de clientes, projetos e orçamentos",
  "Implementação de autenticação, banco de dados e interface com foco em rapidez e clareza de uso",
  "Automação da geração de documentos e relatórios em PDF a partir de dados estruturados no sistema",
],
  stack: [
    "Next.js 13+",
    "React 18",
    "TypeScript",
    "Firebase Auth",
    "Firestore",
    "Tailwind CSS",
    "Docxtemplater",
    "html2canvas",
    "jsPDF",
  ],
};

export const educationItems: EducationItem[] = [
  {
    institution: "Universidade São Judas",
    title: "Análise e Desenvolvimento de Sistemas",
    period: "2024 — 2026",
    status: "Em andamento",
    description:
      "Formação superior com foco em desenvolvimento de software, banco de dados e fundamentos de sistemas.",
    topics: ["Lógica de programação", "Banco de dados", "Estruturas de sistemas"],
  },
  {
    institution: "OneBitCode",
    title: "Full Stack JavaScript",
    period: "2024",
    status: "Concluído",
    description:
      "Formação prática com foco em desenvolvimento web, front-end, back-end e construção de aplicações full stack.",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Git e GitHub",
      "Banco de Dados",
      "Tailwind CSS",
    ],
  },
];