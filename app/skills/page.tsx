'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Background3D from '../components/Background3D'
import Skills from '../components/Skills'

export default function SkillsPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Background3D />
      
      <Skills />
    </main>
  )
}
