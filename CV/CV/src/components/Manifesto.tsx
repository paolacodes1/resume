'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'

export function Manifesto() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="py-14 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
            $ cat about.txt
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Six years directing film productions taught me how to hold complex systems together under pressure. 
            Operations and BPO sharpened that into process design and financial coordination at scale. 
            Now I build automation systems — Python scripts, AI agents, n8n workflows — that replace manual work with reliable infrastructure.
          </p>

          <p className="text-base text-gray-500 leading-relaxed mb-8">
            I work best at the intersection of technical execution and operational clarity: understanding what's broken, 
            building the fix, and making sure it stays fixed.
          </p>

          <div className="border-l-2 border-gray-200 pl-6">
            <p className="text-sm text-gray-500 font-mono italic">
              "The future belongs to those who can bridge worlds — creative thinking with technical execution, 
              human insight with automation."
            </p>
            <p className="text-xs text-gray-400 font-mono mt-2">— Paola G.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
