import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AreasAtuacao } from "@/components/areas-atuacao"
import { Sobre } from "@/components/sobre"
import { Urgencia } from "@/components/urgencia"
import { Faq } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AreasAtuacao />
        <Sobre />
        <Urgencia />
        <Faq />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
