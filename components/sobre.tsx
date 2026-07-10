import Image from "next/image"
import { Check, Award, Calendar, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Ornament } from "@/components/ornament"

const destaques = [
  "Especialista em benefícios negados e revisões do INSS",
  "Atendimento personalizado, sem juridiquês",
  "Atuação em Campinas e toda a região metropolitana",
  "Foco em garantir que o cliente receba o benefício que já conquistou com anos de trabalho",
]

const credenciais = [
  { icon: Award, label: "OAB/SP", value: "321.883" },
  { icon: Calendar, label: "Formada desde", value: "2010" },
  { icon: MapPin, label: "Localização", value: "Sumaré/SP" },
]

export function Sobre() {
  return (
    <section
      id="sobre"
      className="gradient-soft py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <Reveal className="relative mx-auto w-full max-w-sm md:order-first">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/40 to-gold/20 blur-2xl" />
          <div className="rounded-[2.4rem] border border-gold/40 p-2 backdrop-blur-sm">
            <div className="img-tint relative overflow-hidden rounded-[2rem] border-2 border-gold/50 bg-card shadow-xl shadow-primary/15">
              <Image
                src="/eliana-sentada.jpg"
                alt="Dra. Eliana Bicudo com livros de Direito Previdenciário"
                width={700}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Ornament className="mb-5 md:justify-start" />
          <h2 className="text-balance font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
            Advocacia Previdenciária com Compromisso Real em Sumaré e Região
          </h2>

          <p className="mt-5 text-pretty font-light leading-relaxed text-muted-foreground">
            A Dra. Eliana Bicudo é advogada especializada em Direito
            Previdenciário, com sede em Sumaré/SP e atuação em toda a região
            metropolitana de Campinas — incluindo Hortolândia, Monte Mor,
            Paulínia e municípios vizinhos. Formada desde 2010, construiu sua
            carreira ao lado de quem mais precisa: segurados que enfrentam a
            burocracia do INSS sem saber por onde começar.
          </p>

          <ul className="mt-7 space-y-3">
            {destaques.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border-l-2 border-gold bg-peach/25 px-4 py-2.5"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="text-sm font-light leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {credenciais.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="rounded-xl border border-gold/30 bg-card p-4 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-5 w-5 text-gold" strokeWidth={1.6} />
                  <p className="mt-2 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-0.5 font-serif text-base font-medium text-foreground">
                    {c.value}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
