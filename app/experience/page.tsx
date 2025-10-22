'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Background3D from '../components/Background3D'
import Experience from '../components/Experience'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Background3D />

      <Experience />
    </main>
  )
}
