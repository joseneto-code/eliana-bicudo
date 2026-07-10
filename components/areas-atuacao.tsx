import {
  ScrollText,
  HeartPulse,
  HandHeart,
  Users,
  FileSearch,
  Stethoscope,
  Gavel,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Ornament } from "@/components/ornament"

const areas = [
  {
    icon: ScrollText,
    title: "Aposentadorias",
    description:
      "Planejamento e entrada do pedido de aposentadoria por idade, por tempo de contribuição, especial e da pessoa com deficiência (PCD), com análise completa do seu histórico no CNIS.",
  },
  {
    icon: Stethoscope,
    title: "Aposentadoria por Incapacidade Permanente",
    description:
      "Atuação na concessão da aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez), na esfera administrativa e judicial, para quem está permanentemente incapacitado para o trabalho.",
  },
  {
    icon: HeartPulse,
    title: "Auxílio por Incapacidade Temporária (antigo auxílio-doença)",
    description:
      "Atuação em pedidos de benefícios por incapacidade. Quando o INSS nega ou cessa o benefício, ingressamos diretamente com a ação judicial para buscar o reconhecimento da incapacidade e garantir o benefício devido.",
  },
  {
    icon: HandHeart,
    title: "BPC/LOAS",
    description:
      "Assessoria completa para pessoas com deficiência ou idosos de baixa renda que têm direito ao Benefício de Prestação Continuada e não sabem como comprovar.",
  },
  {
    icon: Users,
    title: "Pensão por Morte",
    description:
      "Atuação completa para dependentes na concessão, restabelecimento e revisão da pensão por morte. Análise criteriosa do caso para garantir o reconhecimento do seu direito perante o INSS ou na Justiça.",
  },
  {
    icon: FileSearch,
    title: "Revisão de Benefícios",
    description:
      "Verificamos se o INSS calculou seu benefício corretamente. Uma análise técnica pode identificar erros que aumentam o valor do benefício e garantem o pagamento das diferenças devidas.",
  },
  {
    icon: Gavel,
    title: "Ações Judiciais Previdenciárias",
    description:
      "Quando o INSS nega um benefício injustamente, buscamos a solução pela via judicial. Atuação técnica e estratégica para garantir os direitos do segurado.",
  },
]

export function AreasAtuacao() {
  return (
    <section id="areas" className="gradient-blush py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Ornament className="mb-5" />
          <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
            Como Podemos Ajudar Você
          </h2>
          <p className="mt-3 text-pretty font-light leading-relaxed text-muted-foreground">
            Especialização em todas as áreas do Direito Previdenciário
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const Icon = area.icon
            return (
              <Reveal
                key={area.title}
                delay={(i % 3) * 120}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 card-glow hover:-translate-y-1.5 hover:border-gold/50"
              >
                {/* Borda superior dourada */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-light-gold transition-transform duration-300 group-hover:scale-x-100" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-serif text-lg font-medium text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
