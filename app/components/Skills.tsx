'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skills = {
  'Frontend Technologies': [
    'React.js', 'Next.js', 'Vue.js', 'Angular.js', 'Svelte.js',
    'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS',
    'Bootstrap', 'MUI', 'Redux', 'React Redux', 'Three.js'
  ],
  'Backend Technologies': [
    'Node.js', 'Express.js', 'Nest.js', 'PHP', 'Laravel',
    'Python', 'FastAPI', 'Django', 'Ruby on Rails',
    'RESTful APIs', 'GraphQL', 'Apollo', 'Bloomreach Discovery API'
  ],
  'Database & Storage': [
    'PostgreSQL', 'MySQL', 'MongoDB', 'GraphQL', 'Prisma',
    'Mongoose', 'SQL', 'Inversify'
  ],
  'Mobile & Cloud': [
    'React Native', 'AWS', 'Heroku', 'Docker', 'Jenkins',
    'CI/CD', 'Cloud Technologies', 'Progressive Web Applications (PWAs)'
  ],
  'Blockchain & Web3': [
    'Solidity', 'Web3.js', 'Ether.js'
  ],
  'Testing & Quality': [
    'Jest', 'Cypress', 'JavaScript Testing', 'UI Testing',
    'Automated Testing Frameworks', 'End-to-End Testing'
  ],
  'Design & Tools': [
    'Figma', 'User Interface (UI)', 'User Experience (UX)',
    'GitHub', 'Agile Project Management', 'Team Collaboration',
    'Communication Skills'
  ],
  'Specializations': [
    'eCommerce', 'Video Streaming', 'Marketplaces', 'Mobile Development',
    'Web Development', 'Single-page Applications (SPA)', 'Responsive Web Apps',
    'Mobile-first Design', 'Real-time Applications', 'API Integration',
    'Search & Discovery', 'Product Recommendations', 'Personalization'
  ]
}

const SkillCard = ({ category, items }: { category: string; items: string[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="py-20" id={'skills'}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="text-gradient">Expertise</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  )
} 