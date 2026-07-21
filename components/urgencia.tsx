import { Zap, Target, Heart, MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { Reveal } from "@/components/reveal"
import { Ornament } from "@/components/ornament"

const razoes = [
  {
    icon: Zap,
    title: "Rápida",
    description: "Análise do caso sem enrolação",
  },
  {
    icon: Target,
    title: "Especializada",
    description:
      "Conhecimento profundo da legislação previdenciária e das regras do INSS",
  },
  {
    icon: Heart,
    title: "Humanizada",
    description:
      "Atendimento que respeita o momento delicado de quem está doente, desempregado ou sem renda",
  },
]

export function Urgencia() {
  return (
    <section className="gradient-deep relative overflow-hidden py-20 text-primary-foreground md:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <Ornament className="mb-5" />
          <h2 className="text-balance font-serif text-3xl font-medium leading-snug text-gold md:text-4xl">
            Cada Dia Sem Orientação é um Dia a Menos no Seu Benefício
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty font-light leading-relaxed text-primary-foreground/85">
            Benefícios previdenciários têm prazo para recurso. Um pedido mal
            feito ou um prazo perdido pode significar meses — ou anos — sem
            receber o que é seu por direito.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {razoes.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal
                key={r.title}
                delay={i * 120}
                className="rounded-2xl border border-light-gold/25 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-primary-foreground/85">
                  {r.description}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-gold-foreground shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-gold/90"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com a Advogada Agora
          </a>
        </Reveal>
      </div>
    </section>
  )
}
