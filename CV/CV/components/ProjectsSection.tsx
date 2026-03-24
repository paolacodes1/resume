'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    name: "Aave Wallet Tracker",
    problem: "Monitor DeFi wallet positions without opening the app.",
    stack: "Python + Aave API",
    github: "https://github.com/paolacodes1/aave_dashboard",
  },
  {
    name: "Crypto Price Tracker",
    problem: "Real-time price dashboard for multiple assets.",
    stack: "Python + CoinGecko API",
    github: "https://github.com/paolacodes1/crypto_tracker",
  },
  {
    name: "Clipboard Manager",
    problem: "Persistent clipboard history for ops workflows.",
    stack: "Python + system hooks",
    github: "https://github.com/paolacodes1/clipboard_manager",
  },
  {
    name: "AI Agent Reporting System",
    problem: "Automated reporting pipeline for operations.",
    stack: "Claude + Python",
    github: null,
    note: "Private",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-3">What I Build</p>
          <h2 className="font-serif text-4xl text-forest">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-cream border border-[#ddd9d0] rounded-xl p-6 hover:border-coral/40 hover:shadow-md transition-all duration-300"
            >
              <p className="text-base font-medium text-forest mb-2">{project.problem}</p>
              <h3 className="text-lg font-semibold text-forest mb-1">{project.name}</h3>
              <p className="text-sm text-sage mb-4">{project.stack}</p>

              <div className="flex items-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-forest/70 hover:text-forest transition-colors"
                  >
                    <Github size={14} />
                    View code
                  </a>
                ) : (
                  <span className="text-sm text-sage/60 italic">
                    {project.note ?? 'Private'}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
