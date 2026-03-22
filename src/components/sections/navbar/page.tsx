"use client";

import Link from "next/link";
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
  return (
    <>
      <header className="fixed left-0 top-0 z-50 hidden w-full px-6 pt-5 md:px-10 lg:block lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <Link
            href="#home"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/12 text-cyan-300">
              GS
            </span>
            Gabriel Santos
          </Link>

          <nav className="flex items-center gap-2">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-5 z-50 px-4 lg:hidden">
        <nav className="mx-auto flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/75 transition hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}