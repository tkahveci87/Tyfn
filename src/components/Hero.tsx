import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Animasyonlu arka plan efekti */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Parlama efekti */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-pink-500/30 backdrop-blur-[1px]" />
      
      {/* İçerik */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white">
          Tyfn Kahveci
        </h1>
        <p className="text-xl mb-8 text-orange-50">
          Yazılım Geliştirici & Teknoloji Uzmanı
        </p>
        <Link 
          href="#contact"
          className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-orange-200/20 hover:border-orange-200/40 shadow-lg shadow-orange-500/20"
        >
          İletişime Geç
        </Link>
      </div>
    </section>
  )
} 