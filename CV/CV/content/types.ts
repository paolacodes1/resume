import type { SceneProps } from '@/components/Scene'

export type Locale = 'en' | 'pt'

export interface SiteContent {
  locale: Locale
  htmlLang: string
  meta: { title: string; description: string; ogLocale: string; ogAlt: string }
  slate: {
    role: string
    location: string
    nav: { work: string; story: string; contact: string }
    // Link to the other language version
    switchLabel: string
    switchName: string
  }
  hero: {
    kicker: string
    headline: string
    lead: string
    sub: string
    primaryCta: string
    secondaryCta: string
    photoCaption: string
  }
  story: {
    kicker: string
    title: string
    frames: { frame: string; period: string; title: string; body: string; current?: boolean }[]
  }
  scenes: {
    kicker: string
    title: string
    inProductionLabel: string
    crewLabel: string
    items: Omit<SceneProps, 'inProductionLabel' | 'crewLabel'>[]
  }
  alsoBuilt: {
    kicker: string
    credits: { name: string; description: string; link?: string }[]
  }
  quote: { kicker: string; before: string; highlight: string; after: string }
  contact: {
    kicker: string
    title: string
    body: string
    sheetTitle: string
    sheetDay: string
    labels: { email: string; whatsapp: string; linkedin: string; github: string }
  }
  credits: { byline: string; languages: string }
}
