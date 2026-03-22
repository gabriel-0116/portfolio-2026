"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, FileLock2, FileText } from "lucide-react";
import {
  SiFirebase,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { projects, type Project } from "../../../data/projects";

function getTechIcon(tech: string) {
  switch (tech) {
    case "Next.js":
      return <SiNextdotjs className="h-4 w-4" />;
    case "TypeScript":
      return <SiTypescript className="h-4 w-4" />;
    case "Firebase Auth":
    case "Firestore":
      return <SiFirebase className="h-4 w-4" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="h-4 w-4" />;
    case "React Native CLI":
    case "React Native Paper":
      return <TbBrandReactNative className="h-4 w-4" />;
    case "Styled-components":
      return <SiStyledcomponents className="h-4 w-4" />;
    case "jsPDF":
      return <FileText className="h-4 w-4" />;
    default:
      return <Code2 className="h-4 w-4" />;
  }
}

function projectMeta(project: Project) {
  if (project.company) {
    return `${project.company} • Plataforma comercial`;
  }

  return "Projeto autoral • Aplicativo mobile";
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 md:px-10 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-white/70">
            Projetos
          </span>

          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.5rem]">
            Projetos que mostram como transformo interface em produto funcional.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Casos selecionados com foco em produto, organização de fluxo e
            experiência de uso.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="relative h-[210px] overflow-hidden border-b border-white/10 md:h-[230px]">
  {project.poster ? (
    <Image
      src={project.poster}
      alt={project.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="h-full w-full bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

  <div className="absolute inset-x-0 bottom-0 p-5">
    <span className="inline-flex rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur">
      {project.company
        ? `${project.company} • Plataforma comercial`
        : "Projeto autoral • App mobile"}
    </span>
  </div>
</div>

              <div className="flex h-full flex-col p-6 md:p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white md:text-[1.9rem]">
                      {project.title}
                    </h3>

                    <p className="text-base leading-7 text-white/70">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      Stack principal
                    </span>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                        >
                          {getTechIcon(item)}
                          <span>{item}</span>
                        </span>
                      ))}

                      {project.stack.length > 5 && (
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      Destaques
                    </span>

                    <ul className="space-y-3">
                      {project.highlights.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span className="text-sm leading-6 text-white/75">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between gap-3 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-400/20 to-sky-500/10 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:from-cyan-400/30 hover:to-sky-500/20"
                  >
                    <span>Explorar projeto</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {project.privateCode ? (
                    <span className="inline-flex items-center gap-2 text-sm text-white/45">
                      <FileLock2 className="h-4 w-4" />
                      Código privado
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-white/65 transition hover:text-white"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}