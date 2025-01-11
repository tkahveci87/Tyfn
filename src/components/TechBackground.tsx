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
          className="absolute text-white/5 text-6xl"
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
      
      {/* Yeni gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/30 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient-shift" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  )
} 