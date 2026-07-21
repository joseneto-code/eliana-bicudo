import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { withBasePath } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Dra. Eliana Bicudo | Advocacia Previdenciária em Sumaré',
  description:
    'Dra. Eliana Bicudo - Advogada especializada em Direito Previdenciário em Sumaré e Campinas. Atendimento para aposentadoria, INSS, BPC/LOAS, auxílio-doença e revisão de benefícios. Consulta humanizada e especializada.',
  keywords: [
    'advogada previdenciária',
    'INSS',
    'aposentadoria',
    'Sumaré',
    'Campinas',
    'BPC',
    'LOAS',
    'auxílio-doença',
    'benefício negado',
    'revisão INSS',
    'direito previdenciário',
  ],
  openGraph: {
    title: 'Dra. Eliana Bicudo | Advocacia Previdenciária',
    description:
      'Especialista em Direito Previdenciário. Atendimento humanizado para aposentadoria, INSS e benefícios.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: withBasePath('/icon.png'),
    shortcut: withBasePath('/icon.png'),
    apple: withBasePath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8a6530',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${playfair.variable} ${montserrat.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
