import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 font-space"
        >
          Hakkımda
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed mb-6"
          >
            Yazılım dünyasında 10+ yıllık deneyime sahip bir teknoloji tutkunuyum. 
            Modern web teknolojileri, mobil uygulama geliştirme ve yazılım mimarisi 
            konularında uzmanlaşmış durumdayım.
          </motion.p>
          {/* Daha fazla içerik eklenebilir */}
        </div>
      </div>
    </section>
  )
} 