import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../data/projects";

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-white/60 transition hover:text-white"
        >
          ← Voltar para projetos
        </Link>

        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-white/70">
            {project.status}
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            {project.fullDescription}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 md:p-6">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
            {project.heroVideo ? (
              <video
                className="h-auto max-h-[700px] w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={project.poster}
              >
                <source src={project.heroVideo} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
            ) : (
              <div className="flex h-[420px] items-center justify-center text-white/35">
                Vídeo completo do projeto
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Visão geral</h2>
              <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
                {project.overview}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Desafio</h2>
              <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
                {project.challenge}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Solução</h2>
              <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
                {project.solution}
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">
                Principais funcionalidades
              </h2>

              <ul className="mt-5 space-y-3">
                {project.features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm leading-6 text-white/75 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Stack</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}