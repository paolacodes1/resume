'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/src/components/hooks/useInView'

const experiences = [
  {
    company: 'BG Meios de Pagamento',
    role: 'Operations Coordinator',
    period: 'Jun 2024 - Present',
    description: 'Leading process optimization in the payment processing sector. Built Python scripts and automation workflows to reduce manual reporting and streamline internal processes. Manages billing, financial reporting, and proof of payment documentation for multiple clients.',
    location: 'Remote',
    type: 'current'
  },
  {
    company: 'Freelance Film Production',
    role: '2nd Assistant Director',
    period: 'Feb 2018 - Jun 2024',
    description: 'Managed production workflows for major film and television projects. Coordinated between departments, managed schedules, and ensured seamless on-set operations.',
    location: 'Brazil & International',
    type: 'past'
  },
  {
    company: 'Various Administrative Roles',
    role: 'Administrative Professional',
    period: '2016 - 2018',
    description: 'Built foundation in operations management and process optimization across different industries in Brazil.',
    location: 'Brazil',
    type: 'past'
  }
]

export function Journey() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="py-14 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">$ ls ./experience</p>
          <h2 className="text-3xl font-light text-gray-900">
            Experience
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                exp.type === 'current' ? 'bg-blue-500' : 'bg-gray-400'
              } shadow-lg z-10`}></div>

              {/* Content card */}
              <motion.div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${
                      exp.type === 'current' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">{exp.company}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{exp.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 max-w-sm">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Education</p>
            <h4 className="text-base font-semibold text-gray-900">Bachelor's in Film Production</h4>
            <p className="text-gray-500 text-sm">Full Sail University · 2016–2017</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}