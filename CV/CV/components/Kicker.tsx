// Small accent label above a section heading, e.g. "The work"
export default function Kicker({ children, className = 'mb-3' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`${className} font-mono text-[13px] tracking-[0.12em] uppercase text-accent`}>
      {children}
    </p>
  )
}

export const sectionHeading =
  'font-display font-extrabold uppercase leading-[0.95] text-[clamp(44px,6vw,80px)]'
