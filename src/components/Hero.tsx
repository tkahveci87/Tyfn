import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TechBackground from './TechBackground'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Logo />
      <TechBackground />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center text-white relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white"
        >
          Tyfn Kahveci
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-orange-50"
        >
          Yazılım Geliştirici & Teknoloji Uzmanı
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#contact"
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-orange-200/20 hover:border-orange-200/40 shadow-lg shadow-orange-500/20"
          >
            İletişime Geç
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 