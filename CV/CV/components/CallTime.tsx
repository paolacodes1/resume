import Kicker, { sectionHeading } from '@/components/Kicker'
import type { SiteContent } from '@/content/types'

const contacts = [
  { key: 'email', value: 'gislerpaola@gmail.com', href: 'mailto:gislerpaola@gmail.com' },
  { key: 'whatsapp', value: '+60 18-402 4695', href: 'https://wa.me/60184024695' },
  { key: 'linkedin', value: '/in/paolagcodes1', href: 'https://www.linkedin.com/in/paolagcodes1' },
  { key: 'github', value: 'paolacodes1', href: 'https://github.com/paolacodes1' },
] as const

export default function CallTime({ t }: { t: SiteContent['contact'] }) {
  return (
    <section id="contact">
      <div className="max-w-page mx-auto px-6 py-[clamp(64px,8vw,112px)] flex flex-wrap gap-12 items-start justify-between">
        <div className="flex-[1_1_420px] min-w-0">
          <Kicker>{t.kicker}</Kicker>
          <h2 className={sectionHeading}>{t.title}</h2>
          <p className="mt-5 max-w-[520px] text-lg leading-[1.6] text-body">
            {t.body}
          </p>
        </div>
        <div className="flex-[1_1_340px] max-w-sheet min-w-0 border border-line bg-[#120E0B]">
          <div className="px-5 py-[14px] border-b border-line font-mono text-xs tracking-[0.1em] uppercase text-muted flex justify-between">
            <span>{t.sheetTitle}</span>
            <span>{t.sheetDay}</span>
          </div>
          {contacts.map((contact, index) => (
            <a
              key={contact.key}
              href={contact.href}
              className={`flex justify-between gap-4 px-5 py-[18px] min-h-[44px] text-text hover:text-[#FF8A45] no-underline ${
                index < contacts.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <span className="font-mono text-[13px] text-muted">{t.labels[contact.key]}</span>
              <span className="text-base">{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
