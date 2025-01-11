import React from 'react'
import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 font-space"
        >
          Misyon & Vizyon
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-space">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Müşterilerimize en yüksek kalitede teknoloji çözümleri sunarak, 
              dijital dönüşüm yolculuklarında güvenilir bir partner olmak.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-space">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Teknoloji dünyasındaki yenilikleri takip ederek, 
              sürdürülebilir ve yenilikçi çözümler üretmek.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 