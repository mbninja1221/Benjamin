'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Header from './components/Header'
import Background3D from './components/Background3D'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Background3D />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated border */}
            <motion.div
              className="relative inline-block"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-50" />
              <h1 className="relative text-6xl md:text-8xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Benjamin
                </span>
                <span className="text-white/90 ml-4">Martin</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-8">
                <TypeAnimation
                  sequence={[
                    'Senior Full Stack Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'Node.js Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  className="text-white/90"
                />
              </h2>
            </motion.div>
            
                   {/* CTA Buttons */}
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.9 }}
                     className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                   >
                     <motion.a
                       href="/projects"
                       whileHover={{ 
                         y: -6,
                         rotateX: 8,
                         rotateY: 8,
                         boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                       }}
                       whileTap={{ y: -2 }}
                       className="group relative px-10 py-5 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl font-semibold text-white transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                       style={{
                         transformStyle: 'preserve-3d',
                         perspective: '1000px'
                       }}
                     >
                       {/* Animated background gradient */}
                       <motion.div
                         className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                         animate={{
                           background: [
                             'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                             'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
                             'linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                             'linear-gradient(315deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))'
                           ]
                         }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       />
                       
                       {/* Shimmer effect */}
                       <motion.div
                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                         animate={{ x: ['-100%', '100%'] }}
                         transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                       />
                       
                       <span className="relative z-10 flex items-center gap-3 text-lg">
                         <motion.span
                           whileHover={{ x: -2 }}
                           transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         >
                           View Projects
                         </motion.span>
                         <motion.div
                           whileHover={{ x: 4, rotate: 15 }}
                           transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         >
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                           </svg>
                         </motion.div>
                       </span>
                       
                       {/* Glow effect */}
                       <motion.div
                         className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-sm"
                         transition={{ duration: 0.3 }}
                       />
                     </motion.a>
                     
                     <motion.a
                       href="/contact"
                       whileHover={{ 
                         y: -6,
                         rotateX: -8,
                         rotateY: -8,
                         boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.5)"
                       }}
                       whileTap={{ y: -2 }}
                       className="group relative px-10 py-5 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-3xl font-semibold text-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
                       style={{
                         transformStyle: 'preserve-3d',
                         perspective: '1000px'
                       }}
                     >
                       {/* Animated gradient background */}
                       <motion.div
                         className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"
                         animate={{
                           background: [
                             'linear-gradient(45deg, #3B82F6, #9333EA, #3B82F6)',
                             'linear-gradient(135deg, #9333EA, #3B82F6, #9333EA)',
                             'linear-gradient(225deg, #3B82F6, #9333EA, #3B82F6)',
                             'linear-gradient(315deg, #9333EA, #3B82F6, #9333EA)'
                           ]
                         }}
                         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       />
                       
                       {/* Particle effect */}
                       <motion.div
                         className="absolute inset-0 opacity-0 group-hover:opacity-100"
                         initial={false}
                       >
                         {[...Array(6)].map((_, i) => (
                           <motion.div
                             key={i}
                             className="absolute w-1 h-1 bg-white rounded-full"
                             style={{
                               left: `${20 + i * 10}%`,
                               top: `${30 + (i % 2) * 40}%`
                             }}
                             animate={{
                               y: [-10, -20, -10],
                               opacity: [0, 1, 0]
                             }}
                             transition={{
                               duration: 2,
                               repeat: Infinity,
                               delay: i * 0.2
                             }}
                           />
                         ))}
                       </motion.div>
                       
                       <span className="relative z-10 flex items-center gap-3 text-lg">
                         <motion.span
                           whileHover={{ x: -2 }}
                           transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         >
                           Contact Me
                         </motion.span>
                         <motion.div
                           whileHover={{ x: 4, rotate: -15 }}
                           transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         >
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                           </svg>
                         </motion.div>
                       </span>
                       
                       {/* Enhanced glow effect */}
                       <motion.div
                         className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-lg"
                         transition={{ duration: 0.3 }}
                       />
                     </motion.a>
                   </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Additional sections can be added here if needed */}
    </main>
  )
} 