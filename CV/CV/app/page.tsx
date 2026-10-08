import SlateBar from '@/components/SlateBar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Scenes from '@/components/Scenes'
import AlsoBuilt from '@/components/AlsoBuilt'
import Quote from '@/components/Quote'
import CallTime from '@/components/CallTime'
import EndCredits from '@/components/EndCredits'

export default function HomePage() {
  return (
    <>
      <SlateBar />
      <main>
        <Hero />
        <Story />
        <Scenes />
        <AlsoBuilt />
        <Quote />
        <CallTime />
      </main>
      <EndCredits />
    </>
  )
}
