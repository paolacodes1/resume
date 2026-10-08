import Kicker, { sectionHeading } from '@/components/Kicker'

const frames = [
  {
    frame: 'FRAME 01',
    period: '2018–2024',
    title: 'Film sets',
    body: 'As an assistant director I was already building. Schedules, logistics, a whole system of people and gear that had to work by call time.',
  },
  {
    frame: 'FRAME 02',
    period: '2024–',
    title: 'Operations',
    body: 'At HZN I started building processes: automating the repetitive parts and organising how the company runs.',
  },
  {
    frame: 'FRAME 03',
    period: 'NOW',
    title: 'AI',
    body: "Same instinct, more technology. People are surprised how easily I build with AI. They don't see that I've been at it since I was copy-pasting code from ChatGPT, before Claude existed.",
    current: true,
  },
]

export default function Story() {
  return (
    <section id="story" className="border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)]">
        <Kicker>The through-line</Kicker>
        <h2 className={`mb-10 max-w-[820px] ${sectionHeading}`}>Same job, three sets.</h2>

        <div className="bg-film rounded py-[14px]">
          <div className="sprockets mx-[14px]" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[14px] p-[14px]">
            {frames.map((f) => (
              <article
                key={f.frame}
                className={`bg-card border p-7 flex flex-col gap-[14px] ${f.current ? 'border-accent' : 'border-line'}`}
              >
                <div className={`flex justify-between font-mono text-xs tracking-[0.08em] ${f.current ? 'text-accent' : 'text-muted'}`}>
                  <span>{f.frame}</span>
                  <span>{f.period}</span>
                </div>
                <h3 className="font-display font-extrabold uppercase text-[34px] leading-none">{f.title}</h3>
                <p className="text-[17px] leading-[1.6] text-body">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="sprockets mx-[14px]" />
        </div>
      </div>
    </section>
  )
}
