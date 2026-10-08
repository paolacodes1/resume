import Kicker from '@/components/Kicker'

export default function Quote() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(72px,9vw,128px)]">
        <Kicker className="mb-6">To every business owner</Kicker>
        <blockquote className="max-w-[1000px]">
          <p className="font-display font-extrabold uppercase leading-none text-[clamp(40px,5.6vw,76px)]">
            Stop wasting your time. <span className="text-accent">AI is not here to replace you.</span> It&apos;s here to make you more capable.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
