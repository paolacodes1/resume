import type { SiteContent } from '@/content/types'
import { withBasePath } from '@/lib/utils'
import LangRedirect from '@/components/LangRedirect'

const rowBase = 'flex items-center justify-between min-h-[56px] px-5 rounded-[4px] no-underline'
const outlined = `${rowBase} min-h-[58px] border border-[#4A3A2D] bg-[#120E0B] text-text text-base hover:text-text`
const hint = 'font-mono text-xs text-muted'

// Energy lines for the top of the page, copied from hi-reference.html
function Lines() {
  return (
    <svg aria-hidden="true" viewBox="0 0 390 420" preserveAspectRatio="xMidYMid slice" className="absolute left-0 top-0 w-full h-[420px]">
      <defs>
        <filter id="g1" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <radialGradient id="e1" cx="80%" cy="20%" r="70%"><stop offset="0%" stopColor="#FF7A2F" stopOpacity="0.22" /><stop offset="100%" stopColor="#FF7A2F" stopOpacity="0" /></radialGradient>
        <linearGradient id="fade1" x1="0" y1="0" x2="0" y2="1"><stop offset="55%" stopColor="#0D0A08" stopOpacity="0" /><stop offset="100%" stopColor="#0D0A08" stopOpacity="1" /></linearGradient>
      </defs>
      <rect width="390" height="420" fill="url(#e1)" />
      <g fill="none" stroke="#FF7A2F" strokeLinecap="round">
        <path d="M-20 300 C 90 260, 160 150, 260 140 S 360 60, 420 40" strokeWidth="2" opacity="0.85" filter="url(#g1)" />
        <path d="M-20 220 C 100 240, 180 110, 290 100 S 380 90, 420 70" strokeWidth="1" opacity="0.5" />
        <path d="M120 420 C 200 300, 280 260, 420 200" strokeWidth="1.2" opacity="0.45" filter="url(#g1)" />
      </g>
      <circle cx="260" cy="140" r="3.5" fill="#FFB27F" />
      <rect width="390" height="420" fill="url(#fade1)" />
    </svg>
  )
}

export default function CallSheet({ t }: { t: SiteContent }) {
  const c = t.callSheet
  const isEn = t.locale === 'en'
  const other = isEn ? withBasePath('/pt/hi/') : withBasePath('/hi/?lang=en')
  const home = isEn ? withBasePath('/') : withBasePath('/pt/')
  const wa = `https://wa.me/60184024695?text=${encodeURIComponent(c.whatsappMessage)}`

  return (
    <main className="relative overflow-hidden min-h-[100dvh] flex flex-col bg-bg text-text">
      {isEn && <LangRedirect to={withBasePath('/pt/hi/')} />}
      <Lines />

      <div className="relative flex items-center justify-between px-6 py-[18px] border-b border-line font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
        <span className="flex items-center gap-2 text-text">
          <span aria-hidden="true" className="inline-block w-[7px] h-[7px] rounded-full bg-accent" />
          {isEn ? 'Call sheet' : 'Ordem do dia'}
        </span>
        <a
          href={other}
          hrefLang={isEn ? 'pt-BR' : 'en'}
          lang={isEn ? 'pt-BR' : 'en'}
          aria-label={c.switchName}
          className="text-muted no-underline py-3 pl-3 hover:text-[#FF8A45]"
        >
          {c.switchLabel}
        </a>
      </div>

      <div className="relative pt-11 px-6">
        <p className="m-0 mb-[10px] font-mono text-xs tracking-[0.12em] uppercase text-accent">{c.name}</p>
        <h1 className="m-0 font-display font-black uppercase text-[96px] leading-[0.84]">
          {c.headline}<span className="text-accent">.</span>
        </h1>
      </div>

      <p className="relative mt-[22px] mx-6 mb-0 text-[17px] leading-[1.5] text-body">{c.tagline}</p>

      <nav aria-label={c.navLabel} className="relative mt-[26px] mx-6 flex flex-col gap-[10px]">
        <a
          href={withBasePath('/paola-gisler.vcf')}
          download
          className={`${rowBase} min-h-[58px] bg-accent text-accent-ink font-semibold text-[17px] hover:text-accent-ink`}
        >
          <span>{c.save}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#140A04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11" /><path d="M7 10l5 5 5-5" /><path d="M5 20h14" /></svg>
        </a>
        <a href={wa} className={outlined}>
          <span>{c.whatsapp}</span><span className={hint}>+60 18-402 4695</span>
        </a>
        <a href="https://www.linkedin.com/in/paolagcodes1" className={outlined}>
          <span>{c.linkedin}</span><span className={hint}>/in/paolagcodes1</span>
        </a>
        <a href="mailto:gislerpaola@gmail.com" className={outlined}>
          <span>{c.email}</span><span className={hint}>gislerpaola@gmail.com</span>
        </a>
        <a href={home} className={`${rowBase} min-h-[57px] rounded-none text-text text-base border-b border-line hover:text-text`}>
          <span>{c.work}</span>
          <span className={hint}>{c.workHint} <span className="text-accent text-base">→</span></span>
        </a>
      </nav>

      <footer className="relative mt-auto px-6 py-[18px] border-t border-line flex justify-end font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
        <span>{c.footerDay}</span>
      </footer>
    </main>
  )
}
