import Image from "next/image"
import { MessageCircle, MapPin, ShieldCheck } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { Ornament } from "@/components/ornament"

export function Hero() {
  return (
    <section
      id="inicio"
      className="gradient-soft relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Brilhos decorativos suaves */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Advocacia Previdenciária
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            O INSS Negou Seu <span className="italic text-primary">Benefício</span>?
          </h1>

          <p className="mt-5 text-pretty text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
            Fale agora com uma advogada previdenciarista em Sumaré
          </p>

          <p className="mt-4 text-pretty font-light leading-relaxed text-muted-foreground md:max-w-md">
            Atendimento especializado e humanizado para aposentadoria,
            auxílio-doença, BPC/LOAS e revisão de benefícios negados.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar Agora no WhatsApp
            </a>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-sm font-light text-muted-foreground md:justify-start">
            <MapPin className="h-4 w-4 text-gold" />
            Atendimento para Sumaré, Campinas e região
          </p>

          <Ornament className="mt-8 hidden md:flex md:justify-start" />
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/40 to-gold/20 blur-2xl" />
          {/* Moldura dourada dupla */}
          <div className="rounded-[2.4rem] border border-gold/40 p-2 backdrop-blur-sm">
            <div className="img-tint relative overflow-hidden rounded-[2rem] border-2 border-gold/50 shadow-2xl shadow-primary/20">
              <Image
                src="/eliana-corpo-inteiro.jpg"
                alt="Dra. Eliana Bicudo, advogada previdenciária em Sumaré"
                width={700}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
