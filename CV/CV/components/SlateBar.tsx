import type { SiteContent } from '@/content/types'
import { withBasePath } from '@/lib/utils'

export default function SlateBar({ t }: { t: SiteContent }) {
  const navigation = [
    { name: t.slate.nav.work, href: '#work' },
    { name: t.slate.nav.story, href: '#story' },
    { name: t.slate.nav.contact, href: '#contact' },
  ]
  const other = t.locale === 'en' ? { href: withBasePath('/pt/'), lang: 'pt-BR' } : { href: withBasePath('/'), lang: 'en' }

  return (
    <header className="border-b border-line bg-bg">
      <div className="max-w-page mx-auto px-6 py-[14px] flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs tracking-[0.08em] uppercase text-muted">
          <span className="flex items-center gap-2 text-text">
            <span aria-hidden="true" className="rec inline-block w-2 h-2 rounded-full bg-accent" />
            Paola Gisler
          </span>
          <span>{t.slate.role}</span>
          <span>{t.slate.location}</span>
        </div>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-2 text-[15px]">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center min-h-[44px] px-3 text-text no-underline hover:text-[#FF8A45]"
            >
              {item.name}
            </a>
          ))}
          <a
            href={other.href}
            hrefLang={other.lang}
            lang={other.lang}
            aria-label={t.slate.switchName}
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] ml-1 px-2 font-mono text-[13px] tracking-[0.08em] text-muted border border-line rounded no-underline hover:text-[#FF8A45] hover:border-accent"
          >
            {t.slate.switchLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}
