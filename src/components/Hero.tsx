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
        className="container mx-auto px-4 text-center text-white relative z-10 mt-40 md:mt-52"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-transparent blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-space tracking-tight"
          >
            <span className="relative inline-block">
              {/* İsim için arka plan glow efekti */}
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 blur-3xl opacity-40" />
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 blur-xl opacity-40" />
              <span className="relative bg-gradient-to-r from-white via-white to-white/95 text-transparent bg-clip-text drop-shadow-2xl">
                Tyfn Kahveci
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-16 text-white/90 font-space"
          >
            Yazılım Geliştirici & Teknoloji Uzmanı
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-12"
        >
          <Link 
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4"
          >
            {/* Buton için arka plan glow efektleri */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-800/90 to-red-900/90 rounded-xl backdrop-blur-sm border border-red-500/30 transition-all duration-300 group-hover:border-red-500/50" />
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/30 to-red-700/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/20 to-red-800/20 blur-md" />
            <span className="relative text-lg font-semibold text-white drop-shadow-lg">
              İletişime Geç
            </span>
            <motion.span
              className="relative text-white/90"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          
          {/* Scroll indicator */}
          <motion.div 
            className="flex flex-col items-center mt-32 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-0.5 h-24 relative overflow-hidden rounded-full"
              style={{ background: 'rgba(255, 255, 255, 0.15)' }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-red-500 via-red-600 to-red-700"
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
            <div className="text-sm font-space tracking-wider text-white/70">
              KAYDIR
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 