import Kicker, { sectionHeading } from '@/components/Kicker'

const contacts = [
  { label: 'EMAIL', value: 'gislerpaola@gmail.com', href: 'mailto:gislerpaola@gmail.com' },
  { label: 'WHATSAPP', value: '+60 18-402 4695', href: 'https://wa.me/60184024695' },
  { label: 'LINKEDIN', value: '/in/paolagcodes1', href: 'https://www.linkedin.com/in/paolagcodes1' },
  { label: 'GITHUB', value: 'paolacodes1', href: 'https://github.com/paolacodes1' },
]

export default function CallTime() {
  return (
    <section id="contact">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)] flex flex-wrap gap-12 items-start justify-between">
        <div className="flex-[1_1_420px] min-w-0">
          <Kicker>Call time</Kicker>
          <h2 className={sectionHeading}>Got a process held together by spreadsheets and WhatsApp?</h2>
          <p className="mt-5 max-w-[520px] text-lg leading-[1.6] text-body">
            Tell me about it. I&apos;m in Kuala Lumpur and work with teams in Brazil and Malaysia.
          </p>
        </div>
        <div className="flex-[1_1_340px] max-w-sheet min-w-0 border border-line bg-[#120E0B]">
          <div className="px-5 py-[14px] border-b border-line font-mono text-xs tracking-[0.1em] uppercase text-muted flex justify-between">
            <span>Contact sheet</span>
            <span>Day 1 of 1</span>
          </div>
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              className={`flex justify-between gap-4 px-5 py-[18px] min-h-[44px] text-text hover:text-[#FF8A45] no-underline ${
                index < contacts.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <span className="font-mono text-[13px] text-muted">{contact.label}</span>
              <span className="text-base">{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
