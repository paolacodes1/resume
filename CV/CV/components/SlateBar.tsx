const navigation = [
  { name: 'Work', href: '#work' },
  { name: 'Story', href: '#story' },
  { name: 'Call time', href: '#contact' },
]

export default function SlateBar() {
  return (
    <header className="border-b border-line bg-bg">
      <div className="max-w-page mx-auto px-6 py-[14px] flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs tracking-[0.08em] uppercase text-muted">
          <span className="flex items-center gap-2 text-text">
            <span aria-hidden="true" className="rec inline-block w-2 h-2 rounded-full bg-accent" />
            Paola Gisler
          </span>
          <span>Role: Builder</span>
          <span>Loc: Malaysia ↔ Brasil</span>
        </div>
        <nav aria-label="Main" className="flex gap-2 text-[15px]">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center min-h-[44px] px-3 text-text no-underline hover:text-[#FF8A45]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
