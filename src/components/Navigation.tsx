import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Misyon & Vizyon', href: '#mission' },
  { name: 'Blog', href: '#blog' },
  { name: 'İletişim', href: '#contact' }
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <motion.nav 
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ul className="flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              onHoverStart={() => setActiveItem(item.name)}
              onHoverEnd={() => setActiveItem(null)}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-white/80 hover:text-white font-space text-sm tracking-wider transition-colors duration-300 py-2 px-1"
              >
                {item.name}
                <AnimatePresence>
                  {activeItem === item.name && (
                    <motion.span
                      className="absolute inset-0 bg-orange-500/10 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <motion.span 
                  className="absolute left-0 bottom-0 h-0.5 bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: activeItem === item.name ? '100%' : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
} 