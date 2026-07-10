import Image from "next/image"
import { MapPin, MessageCircle, Camera } from "lucide-react"
import { whatsappLink, INSTAGRAM_URL, siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="gold-divider mx-auto max-w-6xl" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-eliana-bicudo.png"
              alt="Logo Eliana Bicudo Advocacia"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-serif text-lg text-gold">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 text-sm text-background/70">
            Advocacia Previdenciária
          </p>
          <p className="text-sm text-background/70">{siteConfig.oab}</p>
        </div>

        <div>
          <h3 className="font-serif text-base text-gold">Localização</h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-background/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-serif text-base text-gold">Contato</h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-gold"
            >
              <Camera className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-background/60 md:px-6">
          © 2026
         {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
