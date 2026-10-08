import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const title = 'Paola Gisler | Systems, dashboards and AI agents for small businesses'
const description = 'I build dashboards, financial reporting and AI agents for hotels, clinics and finance teams.'

export const metadata: Metadata = {
  metadataBase: new URL('https://paolacodes1.github.io'),
  title,
  description,
  keywords: 'operations systems, dashboards, financial reporting, AI agents, Next.js, Python, Claude Code, Kuala Lumpur',
  authors: [{ name: 'Paola Gisler', url: 'https://paolacodes1.github.io/resume/' }],
  alternates: {
    canonical: '/resume/',
  },
  openGraph: {
    title,
    description,
    url: '/resume/',
    siteName: 'Paola Gisler',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/resume/og.png',
        width: 1200,
        height: 630,
        alt: 'Paola Gisler — I build the systems small businesses run on.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/resume/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
