import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'

const title = 'Paola Gisler | Builder'
const description = "I've been building systems since before I wrote code. On film sets it was schedules and logistics. Now it's software and AI agents."

export const metadata: Metadata = {
  metadataBase: new URL('https://paolacodes1.github.io'),
  title,
  description,
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
        alt: 'Paola Gisler — Builder.',
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
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
