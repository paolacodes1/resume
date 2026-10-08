import type { Metadata } from 'next'
import type { SiteContent } from '@/content/types'

const paths = { en: '/resume/', pt: '/resume/pt/' } as const

export function buildMetadata(t: SiteContent): Metadata {
  const { title, description, ogLocale, ogAlt } = t.meta
  return {
    metadataBase: new URL('https://paolacodes1.github.io'),
    title,
    description,
    authors: [{ name: 'Paola Gisler', url: 'https://paolacodes1.github.io/resume/' }],
    alternates: {
      canonical: paths[t.locale],
      languages: { en: paths.en, 'pt-BR': paths.pt, 'x-default': paths.en },
    },
    openGraph: {
      title,
      description,
      url: paths[t.locale],
      siteName: 'Paola Gisler',
      type: 'website',
      locale: ogLocale,
      alternateLocale: t.locale === 'en' ? ['pt_BR'] : ['en_US'],
      images: [{ url: '/resume/og.png', width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/resume/og.png'],
    },
  }
}
