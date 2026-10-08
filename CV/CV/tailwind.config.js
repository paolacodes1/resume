/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-deep': 'var(--bg-deep)',
        surface: 'var(--surface)',
        film: 'var(--film)',
        card: 'var(--card)',
        line: 'var(--line)',
        text: 'var(--text)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      // The reference has no box-sizing reset, so its max-widths exclude padding/borders.
      // These are the border-box equivalents: 1240 + 2×24 padding, 860 + 2×24, 460 + 2×1 border.
      maxWidth: {
        page: '1288px',
        credits: '908px',
        sheet: '462px',
      },
    },
  },
  plugins: [],
}
