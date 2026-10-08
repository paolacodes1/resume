import Kicker, { sectionHeading } from '@/components/Kicker'
import Scene, { type SceneProps } from '@/components/Scene'

const scenes: SceneProps[] = [
  {
    number: '01',
    slugline: 'INT. WHATSAPP — EVERY DAY',
    title: 'My agent fleet',
    body: "Four AI agents I talk to on WhatsApp, built on an OpenClaw and Hermes mashup with Claude in the background. My dad and I use them every day. The main one handles conversation and daily reports. Zara runs HZN work and turns screenshots into finished documents in the company's design. The other two cover health and fitness, and market analysis.",
    crew: 'OpenClaw · Hermes · Claude · WhatsApp',
    imageAlt: 'A chat with Zara on WhatsApp',
  },
  {
    number: '02',
    slugline: 'INT. HZN BACK OFFICE — EVERY MORNING',
    title: 'Finance on autopilot',
    body: "A few automations I built to help myself with HZN's day-to-day. They cut down the time I spend on daily tasks.",
    bullets: [
      'Payment receipts get read, matched to the right bill, filed in Drive and emailed to the accountant.',
      'PIX receipts get renamed the same way every time and tracked in a sheet.',
      'New bills land in the right Drive folders, and my sheets update themselves.',
    ],
    crew: 'Python · Claude · Google Drive, Sheets & Gmail · Telegram',
    imageAlt: 'Receipts filed into Drive automatically',
    flip: true,
  },
  {
    number: '03',
    slugline: 'INT. BANGSAR — ÉTERNEL CLINIC',
    inProduction: true,
    title: 'Bringing old clients back',
    body: "Years of client records, all on paper. We're reading every old file into one database the clinic can open online, and building a way to add each day's new records that fits how the team already works. With everything in one place, they can reach out to old clients and bring them back.",
    crew: 'Next.js · Supabase · GPT-4o Vision',
    imageAlt: 'A paper record next to its digital version',
  },
  {
    number: '04',
    slugline: 'INT. CLINICAL STATION — CLOCK RUNNING',
    inProduction: true,
    title: 'Fórmula Revalida',
    body: "A mentorship program for doctors trained outside Brazil, getting ready for the practical stage of the Revalida: timed clinical stations they have to pass to practise here. I'm building the platform that runs it end to end.",
    bullets: [
      'Students pay and their access opens on its own.',
      'Each week: one-on-one practice stations with mentors and actors, joined from the platform, followed by a written report on what to fix.',
      'Staff get one list of every session that needs rebooking. Pausing extends the plan automatically, and payments, reminders and emails run without anyone chasing them.',
    ],
    crew: 'Next.js · TypeScript · Postgres',
    imageAlt: "A student's weekly schedule",
    flip: true,
  },
]

export default function Scenes() {
  return (
    <section id="work" className="border-b border-line">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)]">
        <Kicker>The work</Kicker>
        <h2 className={`mb-14 ${sectionHeading}`}>Scenes</h2>
        <div className="flex flex-col gap-[72px]">
          {scenes.map((scene) => (
            <Scene key={scene.number} {...scene} />
          ))}
        </div>
      </div>
    </section>
  )
}
