import { SectionHeading } from '@/components/ui/section-heading'

const stack = [
  { group: 'Build', items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Supabase', 'Zustand'] },
  { group: 'Automation and documents', items: ['Python', 'WeasyPrint', 'OCR and vision extraction'] },
  { group: 'AI', items: ['Claude Code', 'agent design', 'WhatsApp bots'] },
  { group: 'Languages', items: ['Portuguese', 'English', 'some Spanish'] },
]

export default function SkillsSection() {
  return (
    <section id="stack" className="section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="./stack" title="Stack" />
        <dl className="border-t border-border">
          {stack.map((row) => (
            <div
              key={row.group}
              className="py-5 border-b border-border md:grid md:grid-cols-[16rem_1fr] md:gap-4"
            >
              <dt className="text-base font-semibold text-foreground mb-1 md:mb-0">{row.group}</dt>
              <dd className="text-base md:text-lg text-muted-foreground">{row.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
