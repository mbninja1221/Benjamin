'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-white/10 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           <motion.div
             whileHover={{ scale: 1.05 }}
             className="flex items-center"
           >
             <Link href="/" className="text-2xl font-bold">
               <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                 
               </span>
               <span className="text-white/90 ml-2"></span>
             </Link>
           </motion.div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 transition-all duration-500 ${
                      pathname === item.href 
                        ? 'text-white' 
                        : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {item.name}
                     {pathname === item.href && (
                       <motion.div
                         className="absolute inset-0 rounded-lg"
                         layoutId={`activeShadow-${item.name}`}
                         initial={{ 
                           opacity: 0,
                           boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
                         }}
                         animate={{
                           opacity: 1,
                           boxShadow: [
                             '0 0 0px rgba(59, 130, 246, 0)',
                             '0 0 25px rgba(59, 130, 246, 0.8)',
                             '0 0 40px rgba(147, 51, 234, 0.7)',
                             '0 0 25px rgba(59, 130, 246, 0.8)',
                             '0 0 0px rgba(59, 130, 246, 0)'
                           ]
                         }}
                         exit={{ 
                           opacity: 0,
                           boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
                         }}
                         transition={{
                           opacity: { duration: 0.3, ease: "easeInOut" },
                           boxShadow: {
                             duration: 3,
                             repeat: Infinity,
                             ease: "easeInOut"
                           }
                         }}
                       />
                     )}
                  </Link>
                </motion.div>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </motion.header>
  )
}