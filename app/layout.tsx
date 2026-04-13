// app/layout.tsx
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${ubuntu.variable} font-ubuntu bg-background text-white antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
