import { Layers3, Sparkles, Waypoints } from "lucide-react";

const aboutCards = [
  {
    label: "Especialidade",
    title: "Front-end moderno",
    description:
      "Interfaces responsivas com React, Next.js, TypeScript e Tailwind CSS, com foco em clareza, consistência e qualidade visual.",
    icon: Layers3,
  },
  {
    label: "Foco atual",
    title: "Experiência de uso",
    description:
      "Transformar layouts em aplicações funcionais, organizadas e com atenção real à navegação, ritmo visual e usabilidade.",
    icon: Sparkles,
  },
  {
    label: "Em evolução",
    title: "Aprofundando back-end",
    description:
      "Estudando back-end para ampliar minha visão de desenvolvimento e construir soluções mais completas e consistentes.",
    icon: Waypoints,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-cyan-400/8 blur-[110px]" />
        <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-sky-500/6 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.18]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            Sobre mim
          </span>

          <h2 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-5xl lg:text-[2.5rem]">
            Desenvolvedor front-end focado em experiência, organização e
            qualidade visual.
          </h2>

          <div className="mt-8 space-y-6 text-[1.05rem] leading-8 text-white/72 md:text-[1.12rem]">
            <p>
              Sou Gabriel Santos, desenvolvedor com foco em front-end, criando interfaces modernas, responsivas e bem estruturadas com React, Next.js, TypeScript e Tailwind CSS. Transformo layouts em aplicações funcionais com atenção à experiência do usuário, organização do código, desempenho e qualidade visual.
            </p>

            <p>
             Além da minha base em front-end, venho aprofundando meus conhecimentos em back-end para ampliar minha visão de desenvolvimento e construir soluções cada vez mais consistentes.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.slice(0, 2).map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,145,178,0.18),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.22)]">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-cyan-400/15 bg-cyan-400/8 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-white/35">
                    {card.label}
                  </p>

                  <h3 className="mt-3 font-heading text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-white/65">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}

          <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] sm:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,145,178,0.18),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.22)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-cyan-400/15 bg-cyan-400/8 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:text-cyan-200">
                  <Waypoints className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-white/35">
                {aboutCards[2].label}
              </p>

              <h3 className="mt-3 font-heading text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                {aboutCards[2].title}
              </h3>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/65">
                {aboutCards[2].description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}