'use client'
import React, { useEffect, useState, useCallback } from 'react'
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

// Matrix karakterleri
const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

// Matrix sütunu bileşeni
const MatrixColumn = ({ delay, height }: { delay: number, height: number }) => {
  const [chars, setChars] = useState<string[]>([])

  useEffect(() => {
    const length = Math.floor(Math.random() * 15) + 10
    const newChars = Array(length).fill('').map(() => 
      matrixChars[Math.floor(Math.random() * matrixChars.length)]
    )
    setChars(newChars)
  }, [])

  return (
    <motion.div
      className="absolute top-0 text-xs font-mono leading-none whitespace-pre select-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: height,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {chars.map((char, i) => (
        <motion.div
          key={i}
          className="text-red-500/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        >
          {char}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Ana bileşen
export default function TechBackground() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })
  const [matrixColumns, setMatrixColumns] = useState<number[]>([])

  const initializeMatrix = useCallback(() => {
    const columnCount = Math.floor(dimensions.width / 20) // Her 20px'de bir sütun
    const columns = Array(columnCount).fill(0).map((_, i) => i * 20)
    setMatrixColumns(columns)
  }, [dimensions.width])

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

  useEffect(() => {
    initializeMatrix()
  }, [initializeMatrix])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Matrix Efekti */}
      <div className="absolute inset-0">
        {matrixColumns.map((x, i) => (
          <div key={i} style={{ position: 'absolute', left: `${x}px` }}>
            <MatrixColumn delay={i * 0.15} height={dimensions.height + 100} />
          </div>
        ))}
      </div>

      {/* Hareketli teknoloji ikonları */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono font-bold ${item.color} ${item.size} mix-blend-screen select-none z-10`}
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

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-red-950/20 to-black/95 z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient-shift z-20" />
      
      {/* Hafif blur efekti */}
      <div className="absolute inset-0 backdrop-blur-[1px] z-20" />
    </div>
  )
} 