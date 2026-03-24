import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
