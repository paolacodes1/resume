import type { Metadata } from 'next'
import CallSheet from '@/components/CallSheet'
import pt from '@/content/pt'

export const metadata: Metadata = {
  title: pt.callSheet.title,
  robots: { index: false, follow: false },
  alternates: { canonical: '/resume/pt/hi/', languages: { en: '/resume/hi/', 'pt-BR': '/resume/pt/hi/' } },
}

export default function Page() {
  return <CallSheet t={pt} />
}
