'use client'
import React from 'react'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Mission from '@/components/Mission'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <Skills />
      <Services />
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
} 