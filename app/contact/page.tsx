'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Background3D from '../components/Background3D'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Background3D />
      
      <Contact />
    </main>
  )
}
