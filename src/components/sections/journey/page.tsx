import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { featuredExperience, educationItems } from "../../../data/journey";

export function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full px-6 py-24 md:px-10 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-white/70">
            Trajetória
          </span>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.5rem]">
            Experiência prática em produto real, apoiada por formação contínua.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            O que sustenta meu trabalho hoje é a combinação entre aplicação real
            em projeto profissional e evolução técnica constante.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                <BriefcaseBusiness className="h-4 w-4" />
                {featuredExperience.label}
              </span>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                  {featuredExperience.period}
                </p>

                <h3 className="text-2xl font-semibold text-white md:text-[1.9rem]">
                  {featuredExperience.company}
                </h3>

                <p className="text-base font-medium text-white/75">
                  {featuredExperience.title}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
              {featuredExperience.description}
            </p>

            <div className="mt-8 space-y-3">
              <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                Principais pontos
              </span>

              <ul className="space-y-3">
                {featuredExperience.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-sm leading-6 text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-3">
              <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                Stack utilizada
              </span>

              <div className="flex flex-wrap gap-3">
                {featuredExperience.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="space-y-6">
            {educationItems.map((item) => (
              <article
                key={`${item.institution}-${item.title}`}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                    <GraduationCap className="h-4 w-4" />
                    {item.status}
                  </span>

                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                      {item.period}
                    </p>

                    <h3 className="text-xl font-semibold text-white">
                      {item.institution}
                    </h3>

                    <p className="text-base font-medium text-white/75">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-white/65">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/35">
                      {item.institution === "OneBitCode"
                        ? "Tecnologias abordadas"
                        : "Bases desenvolvidas"}
                    </span>

                    <div className="flex flex-wrap gap-3">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}