import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paola G. — Operations & AI Systems Builder',
  description: 'Film production → operations & BPO → building with Python, AI agents, and automation. Process optimizer who ships real systems.',
  keywords: ['Paola G', 'Operations', 'AI Systems', 'Python', 'Automation', 'n8n', 'AI Agents', 'Process Optimization', 'Film Production'],
  authors: [{ name: 'Paola G' }],
  openGraph: {
    title: 'Paola G. — Operations & AI Systems Builder',
    description: 'Film production → operations & BPO → building with Python, AI agents, and automation. Process optimizer who ships real systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paola G. — Operations & AI Systems Builder',
    description: 'Film production → operations & BPO → building with Python, AI agents, and automation. Process optimizer who ships real systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}