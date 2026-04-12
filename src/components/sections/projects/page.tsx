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
      return <SiNextdotjs className="h-4 w-4 text-white" />;

    case "TypeScript":
      return <SiTypescript className="h-4 w-4 text-[#3178C6]" />;

    case "Firebase Auth":
    case "Firestore":
      return <SiFirebase className="h-4 w-4 text-[#FFCA28]" />;

    case "Tailwind CSS":
      return <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />;

    case "React Native CLI":
    case "React Native Paper":
      return <TbBrandReactNative className="h-4 w-4 text-[#61DAFB]" />;

    case "Styled-components":
      return <SiStyledcomponents className="h-4 w-4 text-[#DB7093]" />;

    case "jsPDF":
      return <FileText className="h-4 w-4 text-[#EF4444]" />;

    default:
      return <Code2 className="h-4 w-4 text-white/70" />;
  }
}

function projectMeta(project: Project) {
  if (project.company) {
    return `${project.company} • Plataforma comercial`;
  }

  return "Projeto autoral • App mobile";
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden px-6 pb-24 pt-14 md:px-10 md:pb-28 md:pt-16 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-cyan-400/7 blur-[110px]" />
        <div className="absolute right-[12%] top-16 h-64 w-64 rounded-full bg-sky-500/6 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_34%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            Projetos
          </span>

          <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-5xl lg:text-[3.3rem]">
            Projetos que mostram como transformo interface em produto funcional.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            Casos selecionados com foco em produto, organização de fluxo e
            experiência real de uso.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)]"
            >
              <div className="relative h-[190px] overflow-hidden border-b border-white/10 md:h-[210px]">
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

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                    {projectMeta(project)}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-[1.8rem] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[2rem]">
                      {project.title}
                    </h3>

                    <p className="max-w-2xl text-[15px] leading-7 text-white/68">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Stack principal
                    </span>

                    <div className="flex flex-wrap gap-2.5">
                      {project.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-white/78 transition duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                        >
                          {getTechIcon(item)}
                          <span>{item}</span>
                        </span>
                      ))}

                      {project.stack.length > 4 && (
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-white/50">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                      Destaques
                    </span>

                    <ul className="space-y-2.5">
                      {project.highlights.slice(0, 2).map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span className="text-sm leading-6 text-white/72">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between gap-2 rounded-xl border border-cyan-400/25 bg-gradient-to-r from-cyan-400/20 to-sky-500/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:from-cyan-400/30 hover:to-sky-500/20"
                  >
                    <span>Explorar projeto</span>
                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {project.privateCode ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/48">
                      <FileLock2 className="h-4 w-4" />
                      Código privado
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/68 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                    >
                      Ver código
                      <ArrowUpRight className="h-4 w-4" />
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