'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    title: 'NFT3X',
    description: 'A multi-asset swaps and options platform to barter, reserve & exchange NFT collections, entirely peer-to-peer. Built with modern React and Web3 technologies.',
    technologies: ['React', 'Next.js', 'Chakra UI', 'Solidity', 'Web3.js', 'Ethereum'],
    image: '/imgs/nf3.jpg',
    link: 'https://nf3.exchange/'
  },
  {
    title: 'World of V',
    description: 'The most renowned NFT marketplaces on VeChain, based in Italy. Features advanced NFT trading capabilities with VeChain blockchain integration.',
    technologies: ['React.js', 'Next.js', 'Styled Components', 'Redux', 'VeChain/Connex', 'Web3.js'],
    image: '/imgs/worldofv.art.jpg',
    link: 'https://worldofv.art'
  },
  {
    title: 'Cryptool.io',
    description: 'Automated all-in-one platform to easily manage, raise, invest and trade cryptocurrency assets. Comprehensive crypto management solution.',
    technologies: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'RESTful APIs', 'Google Sheets API', 'Web3.js', 'Solidity'],
    image: '/imgs/cryptool.io.jpg',
    link: 'https://cryptool.io/'
  },
  {
    title: 'Realtor',
    description: 'A real estate platform that provides a comprehensive list of properties for sale and provides the tools and information you need to make informed decisions about real estate.',
    technologies: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'ASP.net', 'AWS', 'MongoDB', 'Tailwind CSS'],
    image: '/imgs/realtor.jpg',
    link: 'https://www.realtor.com/'
  },
  {
    title: 'Polcode',
    description: 'An award-winning developer agency, trusted worldwide for our remote services in web, mobile and team extension projects.',
    technologies: ['React.js', 'Vue.js', 'Vuex', 'Redux', 'RESTful APIs', 'GraphQL', 'Webpack', 'Babel'],
    image: '/imgs/polcode.jpg',
    link: 'https://polcode.com/'
  },
  {
    title: 'Grata Inc',
    description: 'A platform providing a business-to-business (B2B) search engine designed to help users discover small to medium-sized private companies.',
    technologies: ['React.js', 'Vue.js', 'Vuex', 'Redux', 'RESTful APIs', 'GraphQL', 'PHP', 'Laravel'],
    image: '/imgs/grata.jpg',
    link: 'https://grata.com/'
  },
  {
    title: 'Veritone',
    description: 'A platform for cognitive computing. Its technology is designed to process and analyze large amounts of unstructured audio and video data, making it accessible and actionable for various industries.',
    technologies: ['React.js', 'Vue.js', 'Vuex', 'Redux', 'RESTful APIs', 'GraphQL', 'PHP', 'Laravel'],
    image: '/imgs/veritone.jpg',
    link: 'https://www.veritone.com/'
  },
  {
    title: 'Chime',
    description: 'An online bank that offers fee-free banking solutions. It focuses on providing easy-to-use financial services with no hidden fees, targeting younger consumers and those frustrated with traditional banking.',
    technologies: ['React.js', 'Vue.js', 'Vuex', 'Redux', 'RESTful APIs', 'GraphQL', 'PHP', 'Laravel'],
    image: '/imgs/chime.jpg',
    link: 'https://www.chime.com/'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
          >
            <p className="text-sm font-medium">View Details</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <motion.h3 
            className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className={`text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 cursor-pointer ${!isExpanded ? 'line-clamp-2' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.description}
          </motion.p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/btn"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm font-medium">View Project</span>
          <motion.svg 
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 