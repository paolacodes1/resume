import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Paola G. | Building AI Systems for Real Operations',
  description: 'From film sets to operations to building with AI. Creating tools that fix the things that actually matter.',
  keywords: 'AI builder, operations, process automation, Python, Claude Code, Kuala Lumpur',
  authors: [{ name: 'Paola G.' }],
  openGraph: {
    title: 'Paola G. | Building AI Systems for Real Operations',
    description: 'From film sets to operations to building with AI.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-cream`}>
        {children}
      </body>
    </html>
  )
}
