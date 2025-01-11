import React from 'react'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Tyfn Kahveci</h1>
        <p className="text-xl mb-8">Yazılım Geliştirici & Teknoloji Uzmanı</p>
        <button 
          onClick={scrollToContact}
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          İletişime Geç
        </button>
      </div>
    </section>
  )
} 