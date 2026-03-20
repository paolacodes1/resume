import { Hero } from '@/src/components/Hero'
import { Journey } from '@/src/components/Journey'
import { Skills } from '@/src/components/Skills'
import { Projects } from '@/src/components/Projects'
import { Manifesto } from '@/src/components/Manifesto'
import { Contact } from '@/src/components/Contact'
import { Navigation } from '@/src/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Manifesto />
      <Contact />
    </main>
  )
}
