'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'ShrineTech LLC',
    period: 'May 2023 - Present',
    location: 'New York, United States',
    achievements: [
      'Launched Skill Academy mobile app using React Native and Node.js, achieving 400,000+ downloads and a 5-star rating',
      'Led English Academy platform development with React and Node.js, engaging over 1,000 weekly active users',
      'Architected scalable e-commerce platform with React, Node.js, and PostgreSQL, supporting high user concurrency and zero downtime',
      'Integrated Bloomreach Discovery API for advanced product search and recommendation engine, improving user engagement by 35%',
      'Optimized application performance, reducing load times by 40%, and implemented CI/CD pipelines with Docker and Jenkins'
    ],
    technologies: ['React', 'React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker', 'Jenkins', 'Bloomreach Discovery']
  },
  {
    title: 'Full Stack Developer',
    company: 'Cryptool.io',
    period: 'August 2020 - April 2023',
    location: 'Tilburg, Netherlands',
    achievements: [
      'Spearheaded internal portal development using React and Node.js for reviewing suspicious transactions, boosting process efficiency by 200%',
      'Developed robust end-to-end automated testing framework with Jest and Cypress, providing comprehensive reporting and coverage analysis',
      'Led team of developers in migrating legacy systems to modern technologies, reducing maintenance costs by 25%',
      'Designed and implemented scalable e-commerce platform using React, Node.js, and MongoDB, supporting thousands of concurrent users'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Jest', 'Cypress', 'Docker', 'Jenkins']
  },
  {
    title: 'Frontend Engineer',
    company: 'OIS Solutions',
    period: 'January 2017 - July 2020',
    location: 'Toronto, Ontario, Canada',
    achievements: [
      'Created robust API endpoints using Node.js, Inversify, and MongoDB for seamless data management',
      'Developed comprehensive admin platform from scratch using React, Node.js, and Mongoose',
      'Engineered sophisticated UI components with React/TypeScript and SCSS to enhance user experience',
      'Improved user experience by integrating Drag-and-Drop (DnD) components, enhancing workflow efficiency'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'SCSS', 'Inversify', 'Mongoose']
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div>
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.title}
          </motion.h3>
          <motion.h4 
            className="text-xl font-semibold text-blue-400 mb-1"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.company}
          </motion.h4>
          <motion.p 
            className="text-gray-400 mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.period}
          </motion.p>
          <motion.p 
            className="text-gray-500"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {experience.location}
          </motion.p>
        </div>
      </div>

      <div className="mb-6">
        <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, achIndex) => (
            <motion.li
              key={achIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
              className="flex items-start text-gray-300"
            >
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
