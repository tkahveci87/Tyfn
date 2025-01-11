'use client'
import React from 'react'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Services />
      <Blog />
      <Contact />
    </main>
  )
} 