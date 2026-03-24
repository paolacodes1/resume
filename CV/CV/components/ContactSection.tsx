'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-forest">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage mb-6">Work With Me</p>

          <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-10 max-w-xl mx-auto">
            "If you have an operation that's running on workarounds and manual fixes — let's talk."
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:gislerpaola@gmail.com"
              className="flex items-center gap-2 text-cream/90 hover:text-cream border border-cream/30 hover:border-cream px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              <Mail size={16} />
              gislerpaola@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/paolagisler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/90 hover:text-cream border border-cream/30 hover:border-cream px-6 py-3 rounded-lg transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
