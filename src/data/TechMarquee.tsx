import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

type TechItem = {
  icon: IconType;
  label: string;
  color: string;
};

const techItems: TechItem[] = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiSass, label: "Sass", color: "#CC6699" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
];

// aumenta o comprimento real da faixa
const marqueeItems = [...techItems, ...techItems, ...techItems, ...techItems];

// renderiza duas faixas iguais para ficar contínuo
const loopItems = [...marqueeItems, ...marqueeItems];

export function TechMarquee() {
  return (
    <section className="relative z-10 w-full overflow-hidden pb-10">
      <div
        className="flex w-max items-center gap-10 md:gap-14 animate-tech-marquee"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)",
        }}
      >
        {loopItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.label}-${index}`}
              title={item.label}
              aria-label={item.label}
              className="flex shrink-0 items-center justify-center"
            >
              <Icon
                className="text-[26px] opacity-80 transition duration-300 hover:scale-110 hover:opacity-100 md:text-[32px]"
                style={{ color: item.color }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}