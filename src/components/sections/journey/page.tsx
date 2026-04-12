import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { educationItems, featuredExperience } from "../../../data/journey";

export function Journey() {
  return (
    <section
      id="journey"
      className="relative isolate w-full overflow-hidden px-6 pb-24 pt-14 md:px-10 md:pb-28 md:pt-16 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-8 h-56 w-56 rounded-full bg-cyan-400/8 blur-[120px]" />
        <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-sky-500/7 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.14]" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            Trajetória
          </span>

          <h2 className="w-5xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-5xl lg:text-[3.3rem]">
            Experiência prática em produto real, apoiada por formação contínua.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            O que sustenta meu trabalho hoje é a combinação entre aplicação
            prática em projeto profissional e evolução técnica constante.
          </p>
        </div>

        <div className="relative grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <div className="pointer-events-none absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] -translate-x-1/2 xl:block">
            <div className="relative h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent">
              <div className="absolute left-1/2 top-1/2 h-40 w-20 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/10 blur-2xl" />
            </div>
          </div>

          <article className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_36%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                <BriefcaseBusiness className="h-4 w-4" />
                {featuredExperience.label}
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                {featuredExperience.period}
              </span>
            </div>

            <div className="relative mt-6 space-y-3">
              <h3 className="font-heading text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white md:text-[2.3rem]">
                {featuredExperience.company}
              </h3>

              <p className="text-lg font-medium text-white/78">
                {featuredExperience.title}
              </p>

              <p className="max-w-2xl text-[15px] leading-7 text-white/68">
                {featuredExperience.description}
              </p>
            </div>

            <div className="relative mt-8 space-y-3">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Principais pontos
              </span>

              <ul className="space-y-3">
                {featuredExperience.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm leading-7 text-white/72">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <GraduationCap className="h-5 w-5" />
              </span>

              <div>
                <h3 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-white">
                   Formação
                </h3>
              </div>
            </div>

            <div className="relative mt-6 space-y-5">
              {educationItems.map((item) => (
                <article
                  key={`${item.institution}-${item.title}`}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
                      {item.status}
                    </span>

                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/38">
                      {item.period}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                      {item.institution}
                    </h4>

                    <p className="mt-1 text-base font-medium text-white/72">
                      {item.title}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/62">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}