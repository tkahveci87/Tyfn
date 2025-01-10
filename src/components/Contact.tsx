import React from 'react'

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Ad Soyad</label>
              <input 
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label className="block mb-2">E-posta</label>
              <input 
                type="email"
                className="w-full p-3 border rounded-lg"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block mb-2">Mesaj</label>
              <textarea 
                className="w-full p-3 border rounded-lg"
                rows={4}
                placeholder="Mesajınız..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 