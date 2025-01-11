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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  const handleClick = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Hamburger Menü Butonu */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-2 lg:hidden"
      >
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <motion.div
            className="w-6 h-5 flex flex-col justify-between"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 45, y: -2 }
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: 2 }
              }}
            />
          </motion.div>
        </div>
      </button>

      {/* Desktop Menü */}
      <motion.nav 
        className="fixed top-6 right-6 z-50 hidden lg:block"
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

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Arka plan blur ve gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/95 to-orange-950/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ul className="flex flex-col items-center gap-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 } 
                    }}
                    exit={{ 
                      opacity: 0,
                      y: 20,
                      transition: { delay: index * 0.1 } 
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="relative text-white/80 hover:text-white font-space text-3xl tracking-wider group"
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 