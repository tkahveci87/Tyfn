import { Space_Grotesk, Poppins } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`scroll-smooth ${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
} 