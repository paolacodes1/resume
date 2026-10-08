'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ChevronUp, Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navigation.map(nav => nav.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      setActiveSection(currentSection ?? '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0 })

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled || isMenuOpen
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center space-x-2">
              <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold font-mono">
                P
              </span>
              <span className="font-sans font-bold text-foreground">Paola Gisler</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-sans transition-colors hover:text-highlight ${
                    activeSection === item.href.substring(1) ? 'text-highlight' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-3 rounded-lg text-base font-sans transition-colors hover:bg-primary/10 hover:text-highlight ${
                  activeSection === item.href.substring(1) ? 'text-highlight bg-primary/10' : 'text-foreground'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Paola Gisler</p>
          <p className="font-mono">
            <span className="text-highlight">$</span> echo &quot;Always learning, always building&quot;
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/paolacodes1" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/paolagisler" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <Button onClick={scrollToTop} size="icon" aria-label="Back to top" className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <ChevronUp className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  )
}
