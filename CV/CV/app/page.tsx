'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import HowIWorkSection from '@/components/HowIWorkSection'
import ContactSection from '@/components/ContactSection'

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Work', href: 'projects' },
  { name: 'How I Work', href: 'how-i-work' },
  { name: 'Contact', href: 'contact' },
]

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-[#ddd9d0] shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="font-serif text-xl text-forest font-normal hover:text-forest-mid transition-colors"
            >
              Paola G.
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-forest/70 hover:text-forest transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/paolagisler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest/60 hover:text-forest transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            {/* Mobile: just LinkedIn */}
            <div className="md:hidden">
              <a
                href="https://www.linkedin.com/in/paolagisler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest/60 hover:text-forest transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <div id="home">
        <HeroSection />
      </div>

      <AboutSection />
      <ProjectsSection />
      <HowIWorkSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-cream border-t border-[#ddd9d0] py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sage">
          <span className="font-serif text-forest">Paola G.</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/paolacodes1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paolagisler"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span className="text-xs">Built with Next.js · Tailwind · Framer Motion</span>
        </div>
      </footer>
    </div>
  )
}
