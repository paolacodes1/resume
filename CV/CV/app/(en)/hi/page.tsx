import type { Metadata } from 'next'
import CallSheet from '@/components/CallSheet'
import en from '@/content/en'

export const metadata: Metadata = {
  title: en.callSheet.title,
  robots: { index: false, follow: false },
  alternates: { canonical: '/resume/hi/', languages: { en: '/resume/hi/', 'pt-BR': '/resume/pt/hi/' } },
}

export default function Page() {
  return <CallSheet t={en} />
}
