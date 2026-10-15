import type { Metadata } from 'next'
import { withBasePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lock-screen wallpaper',
  robots: { index: false, follow: false },
}

// Hidden, unlinked page. Designed at 390×844; screenshotted at 393×852 ×3 (1179×2556) for the lock screen.
export default function Page() {
  return (
    <div className="relative overflow-hidden w-full h-[100dvh] bg-bg text-text font-mono">
      <svg aria-hidden="true" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="g2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <radialGradient id="e2" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#FF7A2F" stopOpacity="0.2" /><stop offset="100%" stopColor="#FF7A2F" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="390" height="844" fill="url(#e2)" />
        <g fill="none" stroke="#FF7A2F" strokeLinecap="round">
          <path d="M-30 560 C 80 520, 120 380, 220 340 S 340 200, 420 160" strokeWidth="2.2" opacity="0.85" filter="url(#g2)" />
          <path d="M-30 640 C 120 620, 200 470, 300 430 S 400 400, 430 380" strokeWidth="1.2" opacity="0.5" filter="url(#g2)" />
          <path d="M-30 300 C 100 330, 180 260, 260 300 S 380 420, 430 460" strokeWidth="0.8" opacity="0.35" />
          <path d="M60 880 C 140 760, 260 700, 430 640" strokeWidth="1" opacity="0.4" />
        </g>
        <circle cx="220" cy="340" r="4" fill="#FFB27F" />
      </svg>

      <div className="absolute inset-x-0 top-[calc(50%-42px)] flex flex-col items-center gap-4">
        <div className="p-[10px] bg-text rounded-md shadow-[0_0_0_1px_#4A3A2D,0_0_40px_rgba(255,122,47,0.25)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBasePath('/qr-hi.svg')} alt="QR code to paolacodes1.github.io/resume/hi" className="block w-[188px] h-[188px]" />
        </div>
        <p className="m-0 mt-[6px] text-[11px] tracking-[0.16em] uppercase text-accent">Scan for my call sheet</p>
        <p className="m-0 font-display font-black text-[40px] leading-[0.9] uppercase tracking-[0.01em]">Paola Gisler</p>
        <p className="m-0 text-[11px] tracking-[0.16em] uppercase text-muted">Builder · Malaysia ↔ Brazil</p>
      </div>
    </div>
  )
}
