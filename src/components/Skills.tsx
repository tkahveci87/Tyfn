import React from 'react'

interface Skill {
  name: string
  level: string
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'Frontend Geliştirme', level: '95%' },
    { name: 'Backend Geliştirme', level: '85%' },
    { name: 'Mobil Uygulama', level: '85%' },
    { name: 'Veri Analizi', level: '90%' },
    { name: 'Siber Güvenlik', level: '80%' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Yetkinliklerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 