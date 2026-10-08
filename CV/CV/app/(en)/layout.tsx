import '../fonts.css'
import '../globals.css'
import en from '@/content/en'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata(en)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={en.htmlLang}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
