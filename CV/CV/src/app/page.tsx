import { Hero } from '@/src/components/Hero'
import { Manifesto } from '@/src/components/Manifesto'
import { Journey } from '@/src/components/Journey'
import { Projects } from '@/src/components/Projects'
import { Skills } from '@/src/components/Skills'
import { Contact } from '@/src/components/Contact'
import { Navigation } from '@/src/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Manifesto />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
