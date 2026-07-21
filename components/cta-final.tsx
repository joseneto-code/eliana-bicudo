import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { whatsappLink, withBasePath } from "@/lib/site"
import { Reveal } from "@/components/reveal"

export function CtaFinal() {
  return (
    <section className="gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-gold/30 bg-card/70 p-8 shadow-lg shadow-primary/10 backdrop-blur-sm md:grid-cols-[1fr_auto] md:p-12">
          {/* Detalhe decorativo dourado */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative text-center md:text-left">
            <h2 className="text-balance font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
              Seus Direitos Previdenciários Merecem uma Defesa Especializada
            </h2>
            <p className="mt-4 text-pretty font-light leading-relaxed text-muted-foreground">
              Não deixe o INSS decidir sozinho o que você merece. Fale agora com
              a Dra. Eliana Bicudo e descubra o que a lei garante para você.
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp Agora
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-40 shrink-0 md:w-52">
            <div className="rounded-2xl border border-gold/40 p-1.5">
              <div className="img-tint relative overflow-hidden rounded-xl border border-gold/60 shadow-sm">
                <Image
                  src={withBasePath("/eliana-retrato.jpg")}
                  alt="Dra. Eliana Bicudo"
                  width={400}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
