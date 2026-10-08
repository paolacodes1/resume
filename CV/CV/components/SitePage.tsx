import SlateBar from '@/components/SlateBar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Scenes from '@/components/Scenes'
import AlsoBuilt from '@/components/AlsoBuilt'
import Quote from '@/components/Quote'
import CallTime from '@/components/CallTime'
import EndCredits from '@/components/EndCredits'
import type { SiteContent } from '@/content/types'

export default function SitePage({ t }: { t: SiteContent }) {
  return (
    <>
      <SlateBar t={t} />
      <main>
        <Hero t={t.hero} />
        <Story t={t.story} />
        <Scenes t={t.scenes} />
        <AlsoBuilt t={t.alsoBuilt} />
        <Quote t={t.quote} />
        <CallTime t={t.contact} />
      </main>
      <EndCredits t={t.credits} />
    </>
  )
}
