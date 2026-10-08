import Kicker, { sectionHeading } from '@/components/Kicker'
import Scene from '@/components/Scene'
import type { SiteContent } from '@/content/types'

export default function Scenes({ t }: { t: SiteContent['scenes'] }) {
  return (
    <section id="work" className="border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)]">
        <Kicker>{t.kicker}</Kicker>
        <h2 className={`mb-14 ${sectionHeading}`}>{t.title}</h2>
        <div className="flex flex-col gap-[72px]">
          {t.items.map((scene) => (
            <Scene key={scene.number} {...scene} inProductionLabel={t.inProductionLabel} crewLabel={t.crewLabel} />
          ))}
        </div>
      </div>
    </section>
  )
}
