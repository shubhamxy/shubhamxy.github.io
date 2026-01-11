import type { Metadata } from 'next'
import { Archivo, DM_Serif_Display } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { siteConfig } from '@/config/navigation'
import './globals.css'

// Archivo - closest to Univers, clean neo-grotesque Swiss design
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// DM Serif Display - elegant serif for headings
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Architect',
    'Landscape Architect',
    'Urban Design',
    'Public Realm',
    'Healing Gardens',
    'Munich',
    'Germany',
    'Portfolio',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${archivo.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
