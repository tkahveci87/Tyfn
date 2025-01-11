'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const icons = [
  { icon: '⚛️', delay: 0 },    // React
  { icon: '🚀', delay: 2 },    // Performance
  { icon: '💻', delay: 4 },    // Code
  { icon: '🔧', delay: 6 },    // Tools
  { icon: '🎯', delay: 8 },    // Target
  { icon: '📱', delay: 10 },   // Mobile
  { icon: '🌐', delay: 12 },   // Web
  { icon: '⚙️', delay: 14 },   // Settings
]

export default function TechBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/10 text-6xl"
          initial={{ 
            opacity: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [null, Math.random() * dimensions.width],
            y: [null, Math.random() * dimensions.height],
          }}
          transition={{
            duration: 15,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-red-500/80 to-pink-500/80" />
    </div>
  )
} 