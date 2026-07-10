// Configurações centrais do site.
// Número no formato internacional, apenas dígitos.
export const WHATSAPP_NUMBER = "5519995222579"

const WHATSAPP_MESSAGE = "Olá, preciso falar com a Dra. Eliana Bicudo"

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const INSTAGRAM_URL = "https://instagram.com"

export const siteConfig = {
  name: "Dra. Eliana Bicudo",
  oab: "OAB/SP 321.883",
  address: {
    line1: "Av. Emílio Bosco, 115 - Sala 8 - 2º Andar",
    line2: "Sumaré/SP",
  },
}
