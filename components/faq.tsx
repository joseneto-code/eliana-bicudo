"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Ornament } from "@/components/ornament"

const faqs = [
  {
    question: "O INSS negou meu pedido. Ainda tenho como recorrer?",
    answer:
      "Sim. Existe o recurso administrativo junto ao INSS e, caso negado, é possível ingressar com ação judicial. O prazo é curto, então quanto antes você buscar orientação, melhor.",
  },
  {
    question: "Preciso ir até o escritório pessoalmente?",
    answer:
      "Não necessariamente. Realizamos atendimentos presenciais em Sumaré e também de forma online para toda a região de Campinas.",
  },
  {
    question: "Quanto custa uma consulta?",
    answer:
      "Cada caso exige uma análise individual. Entre em contato pelo WhatsApp para agendar seu atendimento e conhecer as condições dos honorários.",
  },
  {
    question: "Tenho direito ao BPC/LOAS mesmo sem ter contribuído para o INSS?",
    answer:
      "Sim. O BPC/LOAS não exige contribuição prévia — ele é voltado a pessoas com deficiência ou idosos acima de 65 anos em situação de vulnerabilidade econômica.",
  },
  {
    question: "A Dra. Eliana atende apenas casos previdenciários?",
    answer:
      "Sim. O escritório atua exclusivamente em Direito Previdenciário, garantindo especialização profunda e atendimento focado nessa área.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="perguntas"
      className="gradient-blush py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Ornament className="mb-5" />
        <h2 className="text-balance text-center font-serif text-3xl font-medium text-foreground md:text-4xl">
          Perguntas Frequentes
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border border-border border-l-4 bg-card/80 shadow-sm backdrop-blur-sm transition-colors duration-300 ${
                  isOpen ? "border-l-gold" : "border-l-gold/40 hover:bg-secondary"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-light leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
