'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Teams', id: 'teams' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Careers', id: 'careers' }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'careers') return

    if (!isHomePage) {
      e.preventDefault()
      router.push(`/#${id}`)
      return
    }

    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] border-b transition-all duration-500 ease-[0.16,1,0.3,1] transform-gpu ${
        isScrolled ? 'bg-[#111111]/30 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <Image src="https://iili.io/FC3KC6g.png" alt="EntryLab" width={165} height={53} priority />
        </Link>
        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
          {navItems.map((item) => {
            const isCareers = item.id === 'careers'
            const targetUrl = isCareers ? '/careers' : `/#${item.id}`
            const isActive = isCareers ? pathname === '/careers' : activeSection === item.id && isHomePage

            return (
              <Link
                key={item.id}
                href={targetUrl}
                onClick={(e) => scrollToSection(e as any, item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#00AAFF]/20 border border-[#00AAFF]/50 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:block">
          <Link
            href="/#contact"
            onClick={(e) => scrollToSection(e as any, 'contact')}
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-2xl border border-[#00AAFF]/30 px-6 py-2.5 rounded-full overflow-hidden hover:bg-[#00AAFF] hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.1)] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] w-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 text-white text-sm font-bold tracking-wider transition-transform duration-500 group-hover:-translate-x-3">Get In Touch</span>
            <svg className="absolute right-4 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-4 h-4 z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <button 
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#111111]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => {
                const isCareers = item.id === 'careers'
                const targetUrl = isCareers ? '/careers' : `/#${item.id}`
                
                return (
                  <Link
                    key={item.id}
                    href={targetUrl}
                    onClick={(e) => scrollToSection(e as any, item.id)}
                    className="text-white/80 hover:text-[#00AAFF] text-lg font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/#contact"
                onClick={(e) => scrollToSection(e as any, 'contact')}
                className="text-white/80 hover:text-[#00AAFF] text-lg font-medium transition-colors mt-2"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00AAFF] origin-left z-50"
        style={{ scaleX }}
      />
    </motion.nav>
  )
}
