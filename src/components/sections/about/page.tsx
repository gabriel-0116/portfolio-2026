"use client";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-72 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-white/70">
            Sobre mim
          </span>

          <div className="space-y-5">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2rem]">
              Desenvolvedor front-end focado em experiência, organização e
              qualidade visual.
            </h2>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Sou Gabriel Santos, desenvolvedor com foco em front-end, criando
              interfaces modernas, responsivas e bem estruturadas com React,
              Next.js, TypeScript e Tailwind CSS. Transformo layouts em
              aplicações funcionais com atenção à experiência do usuário,
              organização do código, desempenho e qualidade visual.
            </p>

            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Além da minha base em front-end, venho aprofundando meus
              conhecimentos em back-end para ampliar minha visão de
              desenvolvimento e construir soluções cada vez mais consistentes.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <span className="text-sm uppercase tracking-[0.2em] text-white/50">
              Especialidade
            </span>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Front-end moderno
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Interfaces responsivas com React, Next.js, TypeScript e Tailwind
              CSS, com foco em estrutura, clareza e qualidade visual.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <span className="text-sm uppercase tracking-[0.2em] text-white/50">
              Foco atual
            </span>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Boa experiência de uso
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Transformar layouts em aplicações funcionais, organizadas e com
              atenção real à experiência do usuário.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2">
            <span className="text-sm uppercase tracking-[0.2em] text-white/50">
              Em evolução
            </span>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Aprofundando back-end
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Estudando back-end para ampliar minha visão de desenvolvimento e
              construir soluções mais completas e consistentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}