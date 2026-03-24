'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream px-4 py-24">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-7xl md:text-8xl font-normal text-forest leading-tight mb-4">
            Paola G
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-2xl md:text-3xl text-coral mb-4"
        >
          Building AI systems for real operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base text-sage tracking-wide mb-10"
        >
          Python · Claude Code · Based in Kuala Lumpur
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="bg-forest text-cream px-7 py-3 rounded-lg font-medium hover:bg-forest-mid transition-colors duration-200"
          >
            See My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-forest text-forest px-7 py-3 rounded-lg font-medium hover:bg-sand transition-colors duration-200"
          >
            Get In Touch
          </button>
          <a
            href="https://www.linkedin.com/in/paolagisler"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#ddd9d0] rounded-lg text-forest hover:border-forest transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
