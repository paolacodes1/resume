import type { SiteContent } from './types'

const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Paola Gisler | Builder',
    description: "I've been building systems since before I wrote code. On film sets it was schedules and logistics. Now it's software and AI agents.",
    ogLocale: 'en_US',
    ogAlt: 'Paola Gisler — Builder.',
  },
  slate: {
    role: 'Role: Builder',
    location: 'Loc: Malaysia ↔ Brasil',
    nav: { work: 'Work', story: 'Story', contact: 'Call time' },
    switchLabel: 'PT',
    switchName: 'Português',
  },
  hero: {
    kicker: 'Scene 01 · Take 2026',
    headline: 'Builder',
    lead: "I've been building systems since before I wrote code. On film sets it was schedules and logistics. Now it's software and AI agents.",
    sub: 'The best part is still the same: the moment it finally clicks and works, and the time it gives back.',
    primaryCta: 'Get in touch',
    secondaryCta: 'See the work',
    photoCaption: 'Dir. / Builder',
  },
  story: {
    kicker: 'The through-line',
    title: 'Same job, three sets.',
    frames: [
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
    ],
  },
  scenes: {
    kicker: 'The work',
    title: 'Scenes',
    inProductionLabel: 'IN PRODUCTION',
    crewLabel: 'CREW',
    items: [
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
    ],
  },
  alsoBuilt: {
    kicker: 'Also built',
    credits: [
      {
        name: 'Transcritor',
        description: 'Free, private transcription for Mac. Whisper runs on the computer itself, so nothing gets uploaded.',
      },
      {
        name: 'Piccolo Italiano',
        description: "An Italian app for my nephew, who can't read yet. Help in Portuguese, Italian always last, and it cheers him on by name.",
      },
      {
        name: 'Hotel Maerkli guest app',
        description: 'Guest information in three languages, works offline.',
        link: 'https://paolacodes1.github.io/hotel_maerkli/',
      },
      {
        name: 'ChalkUp',
        description: 'My bouldering tracker. I build for myself first.',
        link: 'https://paolacodes1.github.io/climbing/',
      },
      {
        name: 'Clipboard Manager',
        description: 'A menu bar tool for macOS, in Python.',
        link: 'https://github.com/paolacodes1/clipboard_manager',
      },
    ],
  },
  quote: {
    kicker: 'To every business owner',
    before: 'Stop wasting your time.',
    highlight: 'AI is not here to replace you.',
    after: "It's here to make you more capable.",
  },
  contact: {
    kicker: 'Call time',
    title: 'Got a process held together by spreadsheets and WhatsApp?',
    body: "Tell me about it. I'm in Kuala Lumpur and work with teams in Brazil and Malaysia.",
    sheetTitle: 'Contact sheet',
    sheetDay: 'Day 1 of 1',
    labels: { email: 'EMAIL', whatsapp: 'WHATSAPP', linkedin: 'LINKEDIN', github: 'GITHUB' },
  },
  credits: {
    byline: 'Written, directed and built by Paola Gisler',
    languages: 'Portuguese · English · some Spanish',
  },
}

export default en
