import React from 'react'

interface Service {
  title: string
  description: string
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Web Geliştirme',
      description: 'Modern ve özelleştirilmiş web uygulamaları geliştirme'
    },
    {
      title: 'Teknik Danışmanlık',
      description: 'Teknoloji projeleriniz için profesyonel danışmanlık'
    },
    {
      title: 'Eğitim',
      description: 'Yazılım ve teknoloji alanında özel eğitimler'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 