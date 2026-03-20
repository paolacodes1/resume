'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'
import { Code, Database, Cog, Film, Globe, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: Code,
    skills: ['Python', 'SQL', 'GitHub', 'Web Development', 'Data Analysis', 'Process Automation'],
    color: 'blue'
  },
  {
    title: 'AI & Automation',
    icon: Zap,
    skills: ['AI Agents', 'Prompt Engineering', 'n8n', 'Workflow Automation', 'LLM Integration'],
    color: 'purple'
  },
  {
    title: 'Operations & Process',
    icon: Cog,
    skills: ['Process Optimization', 'Financial Operations / BPO', 'Workflow Design', 'Team Coordination', 'Project Management'],
    color: 'green'
  },
  {
    title: 'Creative & Production',
    icon: Film,
    skills: ['Film Production', 'Creative Direction', 'Storytelling', 'Visual Communication', 'Content Strategy'],
    color: 'orange'
  },
  {
    title: 'Languages & Communication',
    icon: Globe,
    skills: ['Portuguese (Native)', 'English (Fluent)', 'Spanish (Conversational)', 'Cross-cultural Communication'],
    color: 'indigo'
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Data Analysis', 'Process Metrics', 'Performance Tracking', 'Report Generation', 'Trend Analysis'],
    color: 'teal'
  }
]

const colorVariants = {
  blue: 'bg-blue-50 border-blue-200 text-blue-900',
  purple: 'bg-purple-50 border-purple-200 text-purple-900',
  green: 'bg-green-50 border-green-200 text-green-900',
  orange: 'bg-orange-50 border-orange-200 text-orange-900',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  teal: 'bg-teal-50 border-teal-200 text-teal-900'
}

const iconColorVariants = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  indigo: 'text-indigo-600',
  teal: 'text-teal-600'
}

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-14 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">$ cat skills.json</p>
          <h2 className="text-3xl font-light text-gray-900">
            Skills
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="h-full bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${colorVariants[category.color as keyof typeof colorVariants]} border mr-4`}>
                      <Icon className={`w-6 h-6 ${iconColorVariants[category.color as keyof typeof iconColorVariants]}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * skillIndex + 0.3 }}
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-600 transition-colors duration-300"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}