import React from 'react'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import BackToTop from '@/components/BackToTop'
import LaunchCountdown from '@/components/LaunchCountdown'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu'
})

export const metadata: Metadata = {
  title: 'EntryLab | Where Every Search Has a Value',
  description: 'Where Every Search Has a Value',
  icons: {
    icon: 'https://iili.io/FC3fr7f.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} font-ubuntu bg-background text-white antialiased`}>
        <LaunchCountdown>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <BackToTop />
        </LaunchCountdown>
      </body>
    </html>
  )
}
