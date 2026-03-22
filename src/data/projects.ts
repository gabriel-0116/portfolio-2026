export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: string;
  type: "real" | "ongoing";
  company?: string;
  stack: string[];
  highlights: string[];
  previewVideo?: string;
  heroVideo?: string;
  poster?: string;
  liveUrl?: string;
  githubUrl?: string;
  privateCode?: boolean;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
};

export const projects: Project[] = [
  {
     slug: "plataforma-orcamentos-solares",
  title: "Plataforma de Orçamentos Solares",
  company: "WFX Energy",
    shortDescription:
      "Sistema web desenvolvido para empresa Wfx Energy do setor solar, com foco na criação e gestão de orçamentos, clientes e propostas de forma mais rápida, organizada e profissional.",
    fullDescription:
      "Projeto desenvolvido para atender uma necessidade real de negócio, centralizando o control de clientes, projetos e orçamentos em um único sistema. A aplicação também automatiza cálculos financeiros e geração de propostas e contratos, tornando o processo mais ágil e profissional.",
    status: "Projeto real",
    type: "real",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Tailwind CSS",
      "jsPDF",
    ],
    highlights: [
      "Autenticação de usuários com Firebase Authentication",
      "Gerenciamento centralizado de clientes, projetos e orçamentos",
      "Cálculos automáticos de custos, lucros e relatórios financeiros",
      "Geração de propostas e contratos em PDF",
    ],
    heroVideo: "/videos/solar-full.mp4",
    poster: "/images/solar-poster.png",
    liveUrl: "#",
    privateCode: true,
    overview:
      "Sistema web criado para facilitar o dia a dia de um negócio do setor solar, com foco em organização, agilidade e apresentação profissional dos orçamentos.",
    challenge:
      "O desafio era transformar um processo manual e descentralizado em uma ferramenta simples de usar, mas robusta o suficiente para gerenciar clientes, projetos, orçamentos e documentos.",
    solution:
      "Desenvolvi uma aplicação com autenticação, estrutura de dados no Firestore, cálculo automático de custos e geração de documentos, unificando o fluxo em uma interface clara e responsiva.",
    features: [
      "Login seguro com email e senha",
      "Cadastro e gerenciamento de clientes",
      "Criação, salvamento e consulta de orçamentos",
      "Cálculo automático de custos e lucros",
      "Relatórios financeiros",
      "Geração de propostas e contratos em PDF",
    ],
  },
  {
    slug: "crise-control",
    title: "Crise Control",
    shortDescription:
      "Aplicativo mobile em desenvolvimento para registrar crises de Hernia, organizar histórico e facilitar o acompanhamento pessoal com informações mais claras ao longo do tempo.",
    fullDescription:
      "Aplicativo mobile criado para ajudar no registro e acompanhamento de crises de dor no dia a dia. A proposta é permitir que o usuário organize informações importantes como intensidade, duração, atividade realizada, sintomas e histórico, facilitando a visualização dos registros ao longo do tempo.",
    status: "Em desenvolvimento",
    type: "ongoing",
    stack: [
      "React Native CLI",
      "Firebase Auth",
      "Firestore",
      "Styled-components",
      "React Native Paper",
    ],
    highlights: [
      "Registro de crise com data, nível de dor, duração e observações",
      "Seleção de atividade realizada com modal interativo",
      "Histórico com calendário, filtros por período e listagem de registros",
      "Cálculo automático da média de dor no período selecionado",
    ],
    heroVideo: "/videos/crise-control-full.mp4",
    poster: "/images/crise-control.png",
    liveUrl: "#",
    githubUrl: "#",
    overview:
      "Aplicativo mobile em desenvolvimento com foco em registro pessoal de crises, organização de histórico e visualização mais clara das informações do usuário.",
    challenge:
      "O principal desafio foi transformar um problema cotidiano em uma interface simples e útil, permitindo registrar informações importantes de forma rápida e organizada sem tornar o fluxo cansativo.",
    solution:
      "Estruturei o aplicativo com telas de registro e histórico, incluindo filtros, navegação por calendário e métricas básicas, criando uma base sólida para evolução futura do produto.",
    features: [
      "Registro da data da crise",
      "control do nível de dor por slider",
      "Registro de duração da crise",
      "Seleção de atividade realizada",
      "Inclusão de sintomas adicionais",
      "Campo para observações opcionais",
      "Histórico com calendário e filtros",
      "Cálculo da média de dor no período",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}