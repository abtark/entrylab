'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Teams', id: 'teams' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Careers', id: 'careers' }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const navRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (pathname === '/') {
        const sections = navItems.filter(item => item.id !== 'careers').map(item => item.id)
        
        let current = 'home'
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 200) {
              current = section
            }
          }
        }
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleNavigation = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    setTimeout(() => {
      if (id === 'careers') {
        if (pathname !== '/careers') router.push('/careers')
        return
      }
      
      if (id === 'contact') {
        if (pathname !== '/contact') router.push('/contact')
        return
      }

      if (id === 'home') {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setActiveSection('home')
        } else {
          router.push('/')
        }
        return
      }

      if (!isHomePage) {
        router.push(`/#${id}`)
        return
      }

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
    }, 150)
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] border-b transition-all duration-500 ease-[0.16,1,0.3,1] transform-gpu ${
        isScrolled ? 'bg-[#111111]/30 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div onClick={(e) => handleNavigation(e, 'home')} className="flex-shrink-0 cursor-pointer">
          <Image src="https://iili.io/FC3KC6g.png" alt="EntryLab" width={165} height={53} priority />
        </div>
        
        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
          {navItems.map((item) => {
            const isCareers = item.id === 'careers'
            const isActive = isCareers ? pathname === '/careers' : activeSection === item.id && isHomePage

            return (
              <button
                key={item.id}
                onClick={(e) => handleNavigation(e, item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 outline-none ${
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
              </button>
            )
          })}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={(e) => handleNavigation(e, 'contact')}
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-2xl border border-[#00AAFF]/30 px-5 py-2 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.1)] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] w-[140px] outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 text-white text-sm font-medium transition-transform duration-500 group-hover:-translate-x-2.5">Get In Touch</span>
            <svg 
              className="absolute right-3 opacity-0 translate-y-3 translate-x-3 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 text-white w-4 h-4 z-10" 
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
            >
              <path d="M5 12h14" strokeDasharray="2 4" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <button 
          className="lg:hidden outline-none flex items-center justify-center transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="bg-red-500/10 text-red-500 p-2.5 rounded-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#00AAFF]/10 text-[#00AAFF] p-2.5 rounded-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-[76px] left-0 w-full h-[calc(100vh-76px)] md:h-auto bg-[#111111]/95 backdrop-blur-2xl border-b border-white/10 overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col px-6 py-10 md:py-6 gap-6 md:gap-2 items-center md:items-start justify-center min-h-[70%] md:min-h-0">
              {navItems.map((item) => {
                const isCareers = item.id === 'careers'
                const isActive = isCareers ? pathname === '/careers' : activeSection === item.id && isHomePage

                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`w-full md:w-auto text-center md:text-left py-3 md:py-2 px-4 text-xl md:text-lg font-medium transition-colors outline-none rounded-lg ${
                      isActive ? 'text-[#00AAFF] bg-[#00AAFF]/10' : 'text-white/80 hover:text-[#00AAFF] hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <div className="w-full md:hidden h-px bg-white/10 my-4" />
              <button
                onClick={(e) => handleNavigation(e, 'contact')}
                className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-2xl border border-[#00AAFF]/30 px-5 py-3 md:py-2 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.1)] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)] w-full max-w-[280px] md:w-[140px] outline-none mt-2"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 text-white text-base md:text-sm font-medium transition-transform duration-500 group-hover:-translate-x-2.5">Get In Touch</span>
                <svg 
                  className="absolute right-6 md:right-3 opacity-0 translate-y-3 translate-x-3 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 text-white w-5 h-5 md:w-4 md:h-4 z-10" 
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" strokeDasharray="2 4" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
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
