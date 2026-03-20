'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Github } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <motion.div
        className="max-w-3xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal block */}
        <motion.div
          className="bg-gray-950 rounded-lg p-6 mb-10 font-mono text-sm"
          style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)' }}
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          </div>
          <p className="text-green-400">$ whoami</p>
          <p className="text-gray-300 mb-3">paola-gisler</p>
          <p className="text-green-400">$ cat title.txt</p>
          <p className="text-gray-300 mb-3">Operations &amp; AI Systems Builder</p>
          <p className="text-green-400">$ echo $STACK</p>
          <p className="text-gray-300 mb-3">Python · n8n · AI Agents · Process Automation · GitHub</p>
          <p className="text-green-400">$ echo $PATH</p>
          <p className="text-gray-400">film sets → BPO operations → building with AI<span className="animate-pulse">_</span></p>
        </motion.div>

        {/* Name + tagline */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            Paola G.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            I turn messy operational problems into clean automated systems.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="flex items-center gap-6 mb-12" variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/paolagisler"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/paolacodes1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200"
          variants={itemVariants}
          whileHover={{ y: -2 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
          <span>Explore</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
