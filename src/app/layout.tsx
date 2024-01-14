import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { fredoca } from '@/components/fonts';

export const metadata: Metadata = {
  title: 'Mini-Cuentos',
  description: 'Cuentos en Inglés y Español',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fredoca.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  )
}
