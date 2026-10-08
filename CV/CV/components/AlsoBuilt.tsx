import Kicker from '@/components/Kicker'
import type { SiteContent } from '@/content/types'

export default function AlsoBuilt({ t }: { t: SiteContent['alsoBuilt'] }) {
  return (
    <section className="border-b border-line bg-bg-deep">
      <div className="max-w-credits mx-auto px-6 py-[clamp(64px,8vw,104px)] text-center">
        <Kicker className="mb-10">{t.kicker}</Kicker>
        <div className="flex flex-col gap-[26px]">
          {t.credits.map((credit) => (
            <div key={credit.name}>
              <p className="font-display font-extrabold uppercase text-[30px]">
                {credit.link ? (
                  <a href={credit.link} className="inline-block py-1 -my-1 text-text hover:text-[#FF8A45] no-underline">{credit.name}</a>
                ) : (
                  credit.name
                )}
              </p>
              <p className="mt-1 text-base text-muted">{credit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
