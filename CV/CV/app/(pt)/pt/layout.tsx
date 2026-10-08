import '../../fonts.css'
import '../../globals.css'
import pt from '@/content/pt'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata(pt)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={pt.htmlLang}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
