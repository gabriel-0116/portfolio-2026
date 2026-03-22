"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  FolderGit2,
  Home,
  Mail,
  UserRound,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home, active: true },
  { label: "Sobre", href: "#about", icon: UserRound },
  { label: "Projetos", href: "#projects", icon: FolderGit2 },
  { label: "Serviços", href: "#services", icon: BriefcaseBusiness },
  { label: "Contato", href: "#contact", icon: Mail },
];

export function Navbar() {
  return (
    <aside className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="flex w-[108px] flex-col items-center rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(24,24,27,0.92),rgba(10,10,10,0.82))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-2xl">
        <Link
          href="#home"
          aria-label="Ir para o início"
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] text-base font-semibold text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.14),0_8px_18px_rgba(0,0,0,0.35)] transition hover:scale-105"
        >
          GS
        </Link>

        <div className="mb-4 h-px w-10 bg-white/12" />

        <nav className="flex flex-col items-center gap-4">
          {navItems.map(({ label, href, icon: Icon, active }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className={[
                "group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300",
                active
                  ? "border-white/18 bg-white/12 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.14),0_10px_22px_rgba(0,0,0,0.3)]"
                  : "border-white/10 bg-white/[0.03] text-zinc-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]",
              ].join(" ")}
            >
              <Icon size={20} strokeWidth={1.9} />

              <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs text-white/90 shadow-lg group-hover:block">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}