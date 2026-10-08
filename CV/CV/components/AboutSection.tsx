import { SectionHeading } from '@/components/ui/section-heading'

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="./about" title="About" />
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-3xl">
          I spent six years on film sets as an assistant director, where the job is keeping a
          hundred moving pieces on schedule. I moved into operations at a payments company and
          started building the tools I wished I had. Now I design the systems myself and use
          Claude Code to ship them quickly.
        </p>
      </div>
    </section>
  )
}
