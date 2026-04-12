import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
} from "lucide-react";

const contacts = [
  {
    value: "E-mail",
    href: "mailto:devgabrielsantos01@gmail.com",
    icon: Mail,
  },
  {
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/devgabrielsantos01",
    icon: Linkedin,
  },
  {
    value: "GitHub",
    href: "https://github.com/gabriel-0116",
    icon: Github,
  },
  {
    value: "WhatsApp",
    href: "https://wa.me/5511972248790",
    icon: MessageCircleMore,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 md:px-10 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.2em] text-white/70">
            Contato
          </span>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.5rem]">
            Canais diretos para falar comigo.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Para propostas, vagas ou projetos, estes são os canais mais rápidos
            para entrar em contato comigo.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Vamos conversar
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;
                const isEmail = item.href.startsWith("mailto:");

                return (
                  <a
                    href={item.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-sky-500/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/40 group-hover:text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1 break-all text-sm font-medium text-white/85 md:break-normal md:truncate md:text-[15px]">
                          {item.value}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/35 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
