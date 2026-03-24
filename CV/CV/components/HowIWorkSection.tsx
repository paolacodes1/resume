'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Systems before tools',
    body: "I start with the broken process. The tool comes after I understand what's actually failing — and why workarounds accumulated in the first place.",
  },
  {
    title: "I build for when I'm not there",
    body: "Every system I design runs without constant attention. If it needs me to babysit it, I built it wrong.",
  },
  {
    title: 'AI as a real collaborator',
    body: "I use Claude Code as a thinking partner, not a shortcut. Every system I ship, I understand and can explain to anyone.",
  },
  {
    title: 'Pressure-tested instincts',
    body: "Six years of film production taught me to solve problems in real time with no margin for error. That framework didn't go away when I changed industries.",
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
              <h3 className="text-base font-semibold text-forest mb-3">{card.title}</h3>
              <p className="text-sm text-forest/70 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
