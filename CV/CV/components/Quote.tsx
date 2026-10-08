import Kicker from '@/components/Kicker'
import type { SiteContent } from '@/content/types'

export default function Quote({ t }: { t: SiteContent['quote'] }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(72px,9vw,128px)]">
        <Kicker className="mb-6">{t.kicker}</Kicker>
        <blockquote className="max-w-[1000px]">
          <p className="font-display font-extrabold uppercase leading-none text-[clamp(40px,5.6vw,76px)]">
            {t.before} <span className="text-accent">{t.highlight}</span> {t.after}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
