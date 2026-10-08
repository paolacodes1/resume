import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label: string
  title: string
  intro?: string
  className?: string
}

// Small mono `./label` above a plain heading, used at the top of every section
export function SectionHeading({ label, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p className="font-mono text-sm text-highlight mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {intro && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{intro}</p>
      )}
    </div>
  )
}
