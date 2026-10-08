import { Github, Linkedin } from 'lucide-react'

// Decorative terminal accent. Each line fades in 0.4s after the previous one.
const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Paola Gisler' },
  { prompt: true, text: 'ls ./work' },
  { prompt: false, text: 'reporting/  hotel-ops/  clinic-agents/' },
]

export default function HeroSection() {
  return (
    <section id="home" className="px-4 pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-5xl mx-auto">
        {/* TODO(paola): add CV/CV/public/paola.jpg and show it as a rounded square
            beside the headline on desktop and above it on phone. */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground max-w-4xl">
          I build the systems small businesses run on.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Dashboards, financial reporting and AI agents for hotels, clinics and finance teams,
          designed around how the work gets done day to day.
        </p>
        <p className="mt-4 text-base md:text-lg text-foreground/90 italic">
          Based in Kuala Lumpur. Open to a few new system builds.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-border text-foreground text-base font-semibold hover:border-highlight hover:text-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            See my work
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-6 text-base">
          <a
            href="https://www.linkedin.com/in/paolagisler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/paolacodes1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div
          aria-hidden="true"
          className="mt-12 max-w-md rounded-lg border border-border bg-card/60 px-5 py-4 font-mono text-sm leading-7"
        >
          {terminalLines.map((line, index) => (
            <div
              key={index}
              className="terminal-line"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {line.prompt && <span className="text-terminal-green">$ </span>}
              <span className={line.prompt ? 'text-foreground' : 'text-terminal-text'}>{line.text}</span>
              {index === terminalLines.length - 1 && (
                <span className="caret ml-1 text-terminal-green">▍</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
