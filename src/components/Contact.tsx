import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS Service ID
        'YOUR_TEMPLATE_ID', // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tyfn Kahveci',
        },
        'YOUR_PUBLIC_KEY' // EmailJS Public Key
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      console.error('Email gönderme hatası:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2">Ad Soyad</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Adınız Soyadınız"
                required
              />
            </div>
            <div>
              <label className="block mb-2">E-posta</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="ornek@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Mesaj</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                rows={4}
                placeholder="Mesajınız..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 rounded-lg transition ${
                status === 'sending' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {status === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
            </button>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Mesajınız başarıyla gönderildi!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
} 