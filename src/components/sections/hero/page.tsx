"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import me from "../../../../public/images/me.png";

const marqueeItems = [
  "FULLSTACK DEVELOPER",
  "•",
  "NEXT.JS",
  "•",
  "TYPESCRIPT",
  "•",
  "REACT",
  "•",
  "FULLSTACK DEVELOPER",
  "•",
  "NEXT.JS",
  "•",
  "TYPESCRIPT",
  "•",
  "REACT",
  "•",
];

const loopItems = [...marqueeItems, ...marqueeItems];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gabriel-0116",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devgabrielsantos01",
    icon: Linkedin,
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 top-[-5%] flex flex-col justify-center gap-8 opacity-[0.055]">
        <div className="marquee">
          <div className="marquee-track">
            {loopItems.map((item, index) => (
              <span
                key={`top-${index}`}
                className="mx-8 whitespace-nowrap font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            {loopItems.map((item, index) => (
              <span
                key={`bottom-${index}`}
                className="mx-8 whitespace-nowrap font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -left-28 -top-24 h-[340px] w-[340px] rounded-full bg-white/6 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[220px] w-[220px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_70%)] opacity-60" />

        <div className="absolute -right-28 -top-24 h-[340px] w-[340px] rounded-full bg-white/6 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[220px] w-[220px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_70%)] opacity-60" />

        <div className="absolute left-1/2 top-0 h-[180px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_70%)] blur-2xl" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-32 bg-gradient-to-r from-black via-black/85 to-transparent lg:w-40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-0 text-center lg:pl-24">
        <div className="relative flex items-center justify-center">
          <div className="absolute left-1/2 top-[34%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[50px] sm:h-40 sm:w-40 md:h-48 md:w-48" />
          <div className="absolute left-1/2 top-[34%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[100px] sm:h-60 sm:w-60 md:h-64 md:w-64" />

          <Image
            src={me}
            alt="Gabriel Santos"
            width={520}
            height={620}
            priority
            className="relative z-10 h-auto w-[220px] object-contain sm:w-[260px] md:w-[300px] lg:w-[340px]"
          />
        </div>

        <div className="relative z-20 -mt-10 max-w-6xl">
          <h1 className="font-heading text-[clamp(3rem,9vw,7.2rem)] font-semibold leading-[0.78] tracking-[-0.05em] text-white">
            Gabriel Santos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg md:text-[1.18rem]">
            Sou desenvolvedor <span className="font-semibold text-white">Front-end</span> e
            transformo ideias em interfaces modernas, funcionais e bem
            construídas.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(6,182,212,0.95),rgba(14,165,233,0.82))] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(14,165,233,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(14,165,233,0.34)]"
            >
              <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
              <span className="relative">Download CV</span>
              <ArrowUpRight className="relative h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-4">
  {socialLinks.map(({ label, href, icon: Icon }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group inline-flex items-center justify-center text-white/85 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-cyan-600"
    >
      <Icon
        size={30}
        strokeWidth={2}
        className="transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]"
      />
    </a>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}