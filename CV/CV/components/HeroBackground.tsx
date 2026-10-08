// Energy-flow background, copied from builder-reference.html
export default function HeroBackground() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="softglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9" /></filter>
        <radialGradient id="ember" cx="72%" cy="38%" r="55%"><stop offset="0%" stopColor="#FF7A2F" stopOpacity="0.22" /><stop offset="100%" stopColor="#FF7A2F" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="1440" height="820" fill="url(#ember)" />
      <g fill="none" stroke="#FF7A2F" strokeLinecap="round">
        <path d="M-40 700 C 260 640, 420 380, 760 360 S 1180 120, 1480 90" strokeWidth="2.4" opacity="0.9" filter="url(#glow)" />
        <path className="flow" d="M-40 700 C 260 640, 420 380, 760 360 S 1180 120, 1480 90" stroke="#FFD2B0" strokeWidth="2" opacity="0.9" />
        <path d="M-40 560 C 300 600, 520 300, 860 300 S 1220 260, 1480 200" strokeWidth="1.4" opacity="0.55" filter="url(#glow)" />
        <path className="flow slow" d="M-40 560 C 300 600, 520 300, 860 300 S 1220 260, 1480 200" stroke="#FFC08F" strokeWidth="1.2" opacity="0.7" />
        <path d="M200 860 C 420 620, 640 520, 900 470 S 1260 420, 1480 330" strokeWidth="1.8" opacity="0.6" filter="url(#glow)" />
        <path d="M-40 400 C 240 420, 560 470, 760 360 S 1080 180, 1300 -40" strokeWidth="1" opacity="0.4" />
        <path d="M600 860 C 760 640, 980 560, 1120 420 S 1300 220, 1480 160" strokeWidth="1" opacity="0.45" />
        <path className="flow slow" d="M200 860 C 420 620, 640 520, 900 470 S 1260 420, 1480 330" stroke="#FFD2B0" strokeWidth="1.4" opacity="0.6" />
        <path d="M-40 760 C 380 760, 520 540, 980 520 S 1300 520, 1480 470" strokeWidth="0.8" opacity="0.3" />
      </g>
      <g fill="#FFB27F">
        <circle cx="760" cy="360" r="14" fill="#FF7A2F" opacity="0.5" filter="url(#softglow)" />
        <circle className="node" cx="760" cy="360" r="4.5" />
        <circle cx="1120" cy="420" r="12" fill="#FF7A2F" opacity="0.45" filter="url(#softglow)" />
        <circle className="node" cx="1120" cy="420" r="3.5" style={{ animationDelay: '1.2s' }} />
        <circle className="node" cx="900" cy="470" r="3" style={{ animationDelay: '2.1s' }} />
        <circle className="node" cx="1236" cy="196" r="3" style={{ animationDelay: '.6s' }} />
        <circle className="node" cx="520" cy="452" r="2.5" style={{ animationDelay: '2.8s' }} />
        <circle cx="1236" cy="196" r="10" fill="#FF7A2F" opacity="0.35" filter="url(#softglow)" />
      </g>
    </svg>
  )
}
