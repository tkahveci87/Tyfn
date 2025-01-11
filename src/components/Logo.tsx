import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/">
      <motion.div 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-10 h-10">
          <motion.div
            className="absolute inset-0 bg-orange-500 rounded-lg"
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
            className="absolute inset-1 bg-white rounded-lg flex items-center justify-center font-bold text-orange-500"
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
        <div className="text-white font-semibold text-xl">
          <span className="text-orange-500">T</span>kahveci
        </div>
      </motion.div>
    </Link>
  )
} 