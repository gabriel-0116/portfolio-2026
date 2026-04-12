"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FolderGit2,
  Home,
  Mail,
  UserRound,
  Waypoints,
} from "lucide-react";

const navItems = [
  { label: "Início", href: "#home", icon: Home },
  { label: "Sobre", href: "#about", icon: UserRound },
  { label: "Projetos", href: "#projects", icon: FolderGit2 },
  { label: "Trajetória", href: "#journey", icon: Waypoints },
  { label: "Contato", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => !!section);

      if (!sections.length) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      let currentSection = sectionIds[0];

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
    };
  }, []);

  return (
    <>
      <aside className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-zinc-950/78 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="relative flex flex-col items-center gap-3">
            <Link
              href="#home"
              aria-label="Início"
              className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-sky-500/10 text-[13px] font-semibold tracking-[0.18em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              GS

              <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 group-hover:opacity-100">
                Gabriel Santos
              </span>
            </Link>

            <div className="h-px w-8 bg-white/10" />

            <nav className="relative flex flex-col items-center gap-3">
              {navItems.map(({ label, href, icon: Icon }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl border transition duration-300 ${
                      isActive
                        ? "border-cyan-400/40 bg-cyan-400/14 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/12 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                    }`}
                  >
                    <Icon
                      className={`h-[18px] w-[18px] transition duration-300 ${
                        isActive ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />

                    <span
                      className={`pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 ${
                        isActive
                          ? "border-cyan-400/20 bg-zinc-950 text-cyan-200 opacity-100"
                          : "border-white/10 bg-black/90 text-white opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      <div className="fixed inset-x-0 bottom-5 z-50 px-4 lg:hidden">
        <nav className="mx-auto flex max-w-max items-center gap-2 rounded-full border border-cyan-400/15 bg-zinc-950/80 px-3 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <Link
            href="#home"
            aria-label="Gabriel Santos"
            title="Gabriel Santos"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-sky-500/10 text-[11px] font-semibold tracking-[0.14em] text-cyan-100"
          >
            GS
          </Link>

          <div className="mx-1 h-6 w-px bg-white/10" />

          {navItems.map(({ label, href, icon: Icon }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={label}
                href={href}
                aria-label={label}
                title={label}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                  isActive
                    ? "border-cyan-400/35 bg-cyan-400/14 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/[0.04] text-white/75 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200"
                }`}
              >
                <Icon className="h-[17px] w-[17px]" />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}