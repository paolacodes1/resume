import fs from 'fs'
import path from 'path'
import HeroBackground from '@/components/HeroBackground'
import type { SiteContent } from '@/content/types'
import { withBasePath } from '@/lib/utils'

// Shown only when public/paola.jpg exists; otherwise the text takes the full width
const hasPhoto = fs.existsSync(path.join(process.cwd(), 'public', 'paola.jpg'))

export default function Hero({ t }: { t: SiteContent['hero'] }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <HeroBackground />
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />

      <div className="relative max-w-page mx-auto px-6 pt-[clamp(56px,9vw,120px)] pb-[clamp(56px,8vw,104px)] flex flex-wrap items-end gap-12">
        <div className="flex-[999_1_560px] min-w-0">
          <p className="mb-5 font-mono text-[13px] tracking-[0.12em] uppercase text-accent">{t.kicker}</p>
          <h1 className="font-display font-black uppercase leading-[0.86] tracking-[-0.01em] text-[clamp(88px,15vw,212px)] text-text">
            {t.headline}<span className="text-accent">.</span>
          </h1>
          <p className="mt-7 max-w-[620px] text-[clamp(20px,2.1vw,26px)] leading-[1.4] text-text">
            {t.lead}
          </p>
          <p className="mt-4 max-w-[560px] text-[17px] leading-[1.6] text-muted">
            {t.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center min-h-[48px] px-6 rounded bg-accent text-accent-ink hover:text-accent-ink hover:bg-[#FF8A45] font-semibold no-underline text-base"
            >
              {t.primaryCta}
            </a>
            <a
              href="#work"
              className="inline-flex items-center min-h-[48px] px-6 rounded border border-[#4A3A2D] text-text hover:text-text hover:border-accent font-medium no-underline text-base"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>

        {hasPhoto && (
          <figure className="flex-[1_1_260px] max-w-[320px] m-0">
            <div className="bg-film py-3 rounded">
              <div className="sprockets-sm mx-[10px]" />
              <img
                src={withBasePath('/paola.jpg')}
                alt="Paola Gisler"
                className="block mx-[14px] my-[10px] w-[calc(100%-28px)] aspect-[3/4] object-cover"
              />
              <div className="sprockets-sm mx-[10px]" />
            </div>
            <figcaption className="mt-[10px] flex justify-between font-mono text-xs tracking-[0.08em] uppercase text-muted">
              <span>Paola Gisler</span>
              <span>{t.photoCaption}</span>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
