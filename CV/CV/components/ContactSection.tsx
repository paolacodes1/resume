import { Linkedin, Mail, MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gislerpaola@gmail.com',
    href: 'mailto:gislerpaola@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+60 18-402 4695',
    href: 'https://wa.me/60184024695',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/paolagisler',
    href: 'https://www.linkedin.com/in/paolagisler',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="./contact"
          title="Get in touch"
          intro="Have a process held together by spreadsheets and WhatsApp? Tell me about it."
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-border p-5 hover:border-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <link.icon className="w-6 h-6 shrink-0 text-highlight" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-foreground">{link.label}</span>
                    <span className="block text-base text-muted-foreground group-hover:text-highlight transition-colors break-words">
                      {link.value}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
