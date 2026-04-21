'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'

const navItems = ['Home', 'About', 'Services', 'Insights', 'Testimonials', 'Teams', 'Gallery', 'Careers', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 100 

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1))
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollTo('home')}>
          <Image src="https://iili.io/FC3KC6g.png" alt="EntryLab" width={120} height={40} />
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item ? 'text-primary' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="btn-primary text-sm hidden md:block">Get Started</button>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-primary w-full origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  )
}
