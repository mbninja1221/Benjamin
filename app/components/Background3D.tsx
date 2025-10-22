'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<(HTMLDivElement | null)[]>([])
  const controls = useAnimation()
  const [particles, setParticles] = useState<JSX.Element[]>([])

  useEffect(() => {
    // Create particles only on client side
    const newParticles = Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        ref={(el) => {
          particlesRef.current[i] = el
        }}
        className="absolute w-1 h-1 bg-white/30 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 2 + 0.5,
        }}
        animate={{
          y: [
            Math.random() * window.innerHeight,
            Math.random() * window.innerHeight,
            Math.random() * window.innerHeight,
          ],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
        
        // Animate particles on mouse move
        particlesRef.current.forEach((particle) => {
          if (!particle) return
          
          const distance = Math.hypot(
            e.clientX - rect.left - (particle.offsetLeft + particle.offsetWidth / 2),
            e.clientY - rect.top - (particle.offsetTop + particle.offsetHeight / 2)
          )
          
          if (distance < 200) {
            const angle = Math.atan2(
              e.clientY - rect.top - (particle.offsetTop + particle.offsetHeight / 2),
              e.clientX - rect.left - (particle.offsetLeft + particle.offsetWidth / 2)
            )
            
            const force = (200 - distance) / 200
            const x = Math.cos(angle) * force * 50
            const y = Math.sin(angle) * force * 50
            
            particle.style.transform = `translate(${x}px, ${y}px)`
          } else {
            particle.style.transform = 'translate(0, 0)'
          }
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      {/* Interactive particles */}
      {particles}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          left: '20%',
          top: '30%',
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          right: '20%',
          bottom: '30%',
        }}
      />

      {/* Interactive light effect */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-2xl"
        animate={{
          x: mouseRef.current.x - 150,
          y: mouseRef.current.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 2
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  )
} 