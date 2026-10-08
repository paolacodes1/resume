import Kicker, { sectionHeading } from '@/components/Kicker'
import type { SiteContent } from '@/content/types'

export default function Story({ t }: { t: SiteContent['story'] }) {
  return (
    <section id="story" className="border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)]">
        <Kicker>{t.kicker}</Kicker>
        <h2 className={`mb-10 max-w-[820px] ${sectionHeading}`}>{t.title}</h2>

        <div className="bg-film rounded py-[14px]">
          <div className="sprockets mx-[14px]" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[14px] p-[14px]">
            {t.frames.map((f) => (
              <article
                key={f.frame}
                className={`bg-card border p-7 flex flex-col gap-[14px] ${f.current ? 'border-accent' : 'border-line'}`}
              >
                <div className={`flex justify-between font-mono text-xs tracking-[0.08em] ${f.current ? 'text-accent' : 'text-muted'}`}>
                  <span>{f.frame}</span>
                  <span>{f.period}</span>
                </div>
                <h3 className="font-display font-extrabold uppercase text-[34px] leading-none">{f.title}</h3>
                <p className="text-[17px] leading-[1.6] text-body">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="sprockets mx-[14px]" />
        </div>
      </div>
    </section>
  )
}
