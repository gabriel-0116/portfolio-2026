import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
} from "lucide-react";

const contacts = [
  {
    label: "E-mail",
    value: "seuemail@gmail.com",
    href: "mailto:seuemail@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/seu-link",
    href: "https://www.linkedin.com/in/seu-link",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/seu-user",
    href: "https://github.com/seu-user",
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: "+55 88 99999-9999",
    href: "https://wa.me/5588999999999",
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
            Aberto a oportunidades em desenvolvimento front-end, produtos web e
            projetos com foco em experiência real de uso.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Vamos conversar
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Escolha o canal mais prático
              </h3>

              <p className="max-w-2xl text-base leading-7 text-white/65">
                Para propostas, vagas ou projetos, estes são os canais mais
                rápidos para entrar em contato comigo.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-white/35 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                    </div>

                    <div className="mt-5 space-y-2">
                      <p className="text-sm uppercase tracking-[0.18em] text-white/35">
                        {item.label}
                      </p>

                      <p className="break-words text-sm leading-6 text-white/80">
                        {item.value}
                      </p>
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