import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michael Girikallo',
  description: "Michael Girikallo's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><title>Michael Girikallo</title><link rel="icon" type="image/x-icon" href="/images/g.png"/></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
