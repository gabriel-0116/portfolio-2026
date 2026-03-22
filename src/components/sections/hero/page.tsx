"use client";

import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";
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
    href: "https://github.com/SEU_USUARIO",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/SEU_USUARIO",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/SEU_USUARIO",
    icon: Instagram,
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 top-[-5%] flex flex-col justify-center gap-8 opacity-[0.07]">
        <div className="marquee">
          <div className="marquee-track">
            {loopItems.map((item, index) => (
              <span
                key={`top-${index}`}
                className="mx-8 whitespace-nowrap text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
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
                className="mx-8 whitespace-nowrap text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -left-28 -top-24 h-[340px] w-[340px] rounded-full bg-white/6 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[220px] w-[220px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_70%)] opacity-60" />

        <div className="absolute -right-28 -top-24 h-[340px] w-[340px] rounded-full bg-white/6 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[220px] w-[220px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_70%)] opacity-60" />

        <div className="absolute left-1/2 top-0 h-[180px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(120,180,255,0.06),transparent_70%)] blur-2xl" />
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
          <h1 className="text-[clamp(3rem,9vw,7.2rem)] font-semibold leading-[0.72] tracking-[0em] text-white">
            Gabriel Santos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Sou desenvolvedor{" "}
            <span className="font-semibold text-white">Front-end</span> e
            transformo ideias em interfaces modernas, funcionais e bem
            construídas.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.22)] transition hover:scale-[1.02] hover:from-cyan-400 hover:to-sky-400"
            >
              Download CV
            </a>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-zinc-200 transition duration-300 hover:scale-105 hover:text-white"
                >
                  <Icon size={30} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}