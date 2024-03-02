import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { gochi } from '@/components/fonts';

export const metadata: Metadata = {
  title: 'Mini-Cuentos',
  description: 'Cuentos en inglés y español - Aprende inglés leyendo cuentos cortos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gochi.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  )
}
