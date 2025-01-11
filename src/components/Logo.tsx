import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Logo() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  // Logo arka plan opacity'sini scroll pozisyonuna göre ayarla
  const bgOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.9]
  )

  useEffect(() => {
    const updateScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <Link href="/">
      <motion.div 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Arka plan blur efekti */}
        <motion.div
          className="absolute inset-0 -m-2 rounded-xl backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: bgOpacity
          }}
        />

        <div className="relative w-10 h-10">
          <motion.div
            className="absolute inset-0 bg-orange-500 rounded-lg group-hover:bg-orange-400 transition-colors"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-1 bg-white rounded-lg flex items-center justify-center font-bold text-orange-500 font-space tracking-tighter"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            TK
          </motion.div>
        </div>
        <div className="relative font-space font-bold text-xl tracking-tight">
          <span className="text-orange-500">T</span>
          <span className={`transition-colors duration-300 ${hasScrolled ? 'text-white' : 'text-white/90'}`}>
            kahveci
          </span>
        </div>
      </motion.div>
    </Link>
  )
} 