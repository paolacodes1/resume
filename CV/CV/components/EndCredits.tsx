import type { SiteContent } from '@/content/types'

export default function EndCredits({ t }: { t: SiteContent['credits'] }) {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-6 py-7 flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-xs tracking-[0.08em] uppercase text-muted">
        <span>{t.byline}</span>
        <span>{t.languages}</span>
        <span>© 2026</span>
      </div>
    </footer>
  )
}
