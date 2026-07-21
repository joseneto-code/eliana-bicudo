"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { whatsappLink, withBasePath } from "@/lib/site"

const navLinks = [
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Perguntas", href: "#perguntas" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/20 bg-background/80 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src={withBasePath("/logo-eliana-bicudo.png")}
            alt="Logo Eliana Bicudo Advocacia"
            width={52}
            height={52}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base tracking-wide text-foreground">
              Eliana Bicudo
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">
              Advocacia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Falar Agora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              Falar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
