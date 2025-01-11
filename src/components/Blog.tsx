import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Modern Web Geliştirme Teknolojileri',
      excerpt: 'Next.js, React ve TypeScript ile modern web uygulamaları nasıl geliştirilir?',
      date: '1 Mart 2024',
      readTime: '5 dk',
      category: 'Web Geliştirme'
    },
    {
      id: 2,
      title: 'Backend Sistemlerde Performans Optimizasyonu',
      excerpt: 'Yüksek trafikli sistemlerde performans nasıl optimize edilir?',
      date: '28 Şubat 2024',
      readTime: '7 dk',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Siber Güvenlik İpuçları',
      excerpt: 'Web uygulamalarınızı güvende tutmak için temel güvenlik önlemleri',
      date: '25 Şubat 2024',
      readTime: '6 dk',
      category: 'Güvenlik'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-orange-500">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
} 