import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { withBasePath } from '@/lib/utils'

interface Project {
  title: string
  context: string
  body: string
  stack: string[]
  // Optional, relative to public/, e.g. 'projects/hzn-reporting.png'
  screenshot?: string
}

const projects: Project[] = [
  {
    title: 'Consolidated financial reporting',
    context: 'For HZN, a Brazilian payments and BPO company',
    body: 'Monthly reporting across 14 client accounts was assembled by hand. I built a pipeline that applies the accounting rules, validates source documents with OCR, and generates consolidated PDF reports and itemized monthly statements.',
    stack: ['Python', 'WeasyPrint', 'OCR validation'],
  },
  {
    title: 'Hotel operations dashboard',
    context: 'For Hotel Maerkli, Brazil',
    body: 'One installable app replacing separate spreadsheets and chats: a WhatsApp guest bot, laundry control, and staff scheduling, with role-based access for admin, manager, reception, housekeeping and staff. The bot uses AI only to detect what the guest wants and replies from approved templates, so it never improvises.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Supabase', 'Zustand'],
  },
  {
    title: 'Clinic system with AI agents',
    context: 'For Éternel, a holistic aesthetics clinic in Kuala Lumpur',
    body: 'A trilingual website (English, Bahasa Malaysia, Chinese), a role-based staff dashboard, and six AI agents covering reception, client re-engagement, special dates, promotions, Instagram content and admin. Paper records are digitized with vision AI into a queue a person reviews before anything is saved.',
    stack: ['Next.js', 'shadcn/ui', 'Supabase', 'Zustand', 'GPT-4o Vision'],
  },
]

const alsoBuilt: { name: string; description: string; link?: string }[] = [
  // TODO(paola): add the Etherias Tarot website URL as `link`
  { name: 'Etherias Tarot', description: 'Client website' },
  {
    name: 'Clipboard Manager',
    description: 'macOS menu bar utility in Python',
    link: 'https://github.com/paolacodes1/clipboard_manager',
  },
]

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => (
  <article className="rounded-2xl border border-border bg-card/60 p-6 md:p-10 md:grid md:grid-cols-[6rem_1fr] md:gap-8">
    <p aria-hidden="true" className="font-mono text-4xl md:text-6xl font-semibold text-highlight leading-none mb-5 md:mb-0">
      {String(index + 1).padStart(2, '0')}
    </p>
    <div>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-2 text-base md:text-lg text-highlight">{project.context}</p>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/90 max-w-3xl">{project.body}</p>
      <p className="mt-5 font-mono text-sm md:text-base text-muted-foreground">
        {project.stack.join(' · ')}
      </p>
      {project.screenshot && (
        <img
          src={withBasePath(`/${project.screenshot}`)}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="mt-8 w-full rounded-lg border border-border"
        />
      )}
    </div>
  </article>
)

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="./work"
          title="Selected work"
          intro="Systems I have designed and built for real operations."
        />

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <ProjectBlock key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="font-mono text-sm text-highlight mb-4">Also built</h3>
          <ul className="divide-y divide-border border-y border-border">
            {alsoBuilt.map((item) => (
              <li key={item.name} className="py-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-lg font-semibold text-foreground hover:text-highlight transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-lg font-semibold text-foreground">{item.name}</span>
                )}
                <span className="text-base text-muted-foreground">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-xl">
            Have a process held together by spreadsheets and WhatsApp? Tell me about it.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-colors self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
