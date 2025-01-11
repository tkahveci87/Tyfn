import React from 'react'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link 
        href="/" 
        className="text-orange-500 hover:text-orange-600 mb-8 inline-block"
      >
        ← Ana Sayfaya Dön
      </Link>
      <h1 className="text-4xl font-bold mb-4">Blog Başlığı</h1>
      <div className="prose prose-lg max-w-none">
        <p>Blog içeriği burada olacak...</p>
      </div>
    </article>
  )
} 