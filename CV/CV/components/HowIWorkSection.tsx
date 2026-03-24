'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Operations first',
    body: "I start with the broken process, not the tech. The tool comes after I understand what's actually failing.",
    icon: '⚙️',
  },
  {
    title: 'AI as a partner',
    body: "I use Claude Code as a collaborator — not a shortcut. Every system I build, I understand and can explain.",
    icon: '🤝',
  },
  {
    title: 'Bias for shipping',
    body: "Working prototypes beat perfect plans. I iterate fast and document as I go.",
    icon: '🚀',
  },
  {
    title: 'Context from the field',
    body: "Six years in production taught me to solve problems in real time under pressure. That doesn't go away.",
    icon: '🎬',
  },
]

export default function HowIWorkSection() {
  return (
    <section id="how-i-work" className="py-24 px-4 bg-sand">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-3">Approach</p>
          <h2 className="font-serif text-4xl text-forest">How I Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-cream border border-[#ddd9d0] rounded-xl p-6"
            >
              <span className="text-2xl mb-4 block">{card.icon}</span>
              <h3 className="text-base font-semibold text-forest mb-2">{card.title}</h3>
              <p className="text-sm text-forest/70 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
