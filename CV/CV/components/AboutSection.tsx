'use client'

import { motion } from 'framer-motion'

const badges = [
  '6 yrs film production',
  'AI tools in production',
  'Based in KL 🇲🇾',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-8">About</p>

          <div className="bg-sand rounded-2xl p-8 md:p-10">
            <p className="font-serif italic text-2xl text-forest leading-relaxed mb-4">
              "I spent six years on film sets.
            </p>
            <p className="text-base text-forest/80 leading-relaxed mb-6">
              Then I moved into ops at a fintech BPO. Somewhere in the middle, I started building tools to fix the things that frustrated me — and I never stopped."
            </p>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#ddd9d0]">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-forest/10 text-forest border border-forest/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
