import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TechBackground from './TechBackground'
import Logo from './Logo'
import Navigation from './Navigation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Logo />
      <Navigation />
      <TechBackground />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center text-white relative z-10 mt-32 md:mt-48"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white font-space tracking-tight"
        >
          Tyfn Kahveci
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl mb-12 text-orange-50/90"
        >
          Yazılım Geliştirici & Teknoloji Uzmanı
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <Link 
            href="#contact"
            className="inline-block bg-gradient-to-r from-red-950/50 to-red-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:from-red-900/60 hover:to-red-800/60 transition-all duration-300 border border-red-500/20 hover:border-red-500/40 shadow-lg shadow-red-500/20 transform hover:-translate-y-1"
          >
            İletişime Geç
          </Link>
          
          {/* Scroll indicator */}
          <motion.div 
            className="flex flex-col items-center mt-24 opacity-50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-0.5 h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            <div className="text-sm mt-2 font-space tracking-wider">Kaydır</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 