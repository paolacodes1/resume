import { SectionHeading } from '@/components/ui/section-heading'

const experiences = [
  {
    period: '2024–now',
    company: 'HZN (formerly BG Meios de Pagamento)',
    role: 'Operations & Systems',
  },
  {
    period: '2018–2024',
    company: 'Freelance film production, United States',
    role: '2nd Assistant Director',
  },
  {
    period: '2013–2016',
    company: 'Hotel Maerkli and Mirá Consultoria Imobiliária, Brazil',
    role: 'Administration and marketing',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="./experience" title="Experience" />
        <ol className="border-t border-border">
          {experiences.map((experience) => (
            <li
              key={experience.period}
              className="grid grid-cols-[6.5rem_1fr] md:grid-cols-[10rem_1fr] gap-4 py-5 border-b border-border"
            >
              <span className="font-mono text-base text-highlight">{experience.period}</span>
              <div className="text-base md:text-lg">
                <p className="font-semibold text-foreground">{experience.role}</p>
                <p className="text-muted-foreground">{experience.company}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
