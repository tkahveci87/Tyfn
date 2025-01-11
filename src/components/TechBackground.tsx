'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Teknoloji ikonları ve renkleri
const techIcons = [
  { icon: '</>',  color: 'text-red-500', size: 'text-2xl', title: 'Code' },
  { icon: '{ }',  color: 'text-red-400', size: 'text-3xl', title: 'JSON' },
  { icon: '##',   color: 'text-red-300', size: 'text-2xl', title: 'Hash' },
  { icon: '</>',  color: 'text-red-600', size: 'text-4xl', title: 'HTML' },
  { icon: '/**/', color: 'text-red-400', size: 'text-3xl', title: 'Comment' },
  { icon: '===',  color: 'text-red-500', size: 'text-2xl', title: 'Equal' },
  { icon: '0101', color: 'text-red-300', size: 'text-3xl', title: 'Binary' },
  { icon: '>>',   color: 'text-red-400', size: 'text-2xl', title: 'Arrow' },
  { icon: '[]',   color: 'text-red-500', size: 'text-4xl', title: 'Array' },
  { icon: '()',   color: 'text-red-600', size: 'text-3xl', title: 'Params' },
  { icon: '&&',   color: 'text-red-400', size: 'text-2xl', title: 'And' },
  { icon: '||',   color: 'text-red-500', size: 'text-3xl', title: 'Or' },
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
      {/* Hareketli teknoloji ikonları */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono font-bold ${item.color} ${item.size} mix-blend-screen select-none`}
          initial={{ 
            opacity: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            rotate: Math.random() * 360
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [null, Math.random() * dimensions.width],
            y: [null, Math.random() * dimensions.height],
            rotate: [null, Math.random() * 360]
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            delay: index * 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          title={item.title}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Matrix benzeri dikey çizgiler */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_1px,rgba(220,38,38,0.03)_2px)] bg-[length:100%_4px]" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/30 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient-shift" />
      
      {/* Hafif blur efekti */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  )
} 