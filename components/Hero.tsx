// components/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rotatingTexts = [
  "Every Search Has a Value",
  "Every Search Has a Story",
  "Search More, Discover More",
  "Every Click Counts",
  "Turn Searches into Insights",
  "Every Query Unlocks Power",
  "Find Value in Every Click"
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/70 z-10" />
        <img 
          src="https://iili.io/BWmHJob.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-105 transform transition-transform duration-[20s] hover:scale-100"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="h-24 md:h-32 mb-6 relative overflow-hidden flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-4xl md:text-7xl font-bold text-primary absolute w-full"
              >
                {rotatingTexts[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where Every Search Has a Value. We transform complex data queries into actionable intelligence for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">Explore Services</button>
            <button className="bg-transparent border border-primary text-primary font-bold py-3 px-8 rounded hover:bg-primary/10 transition-colors">Contact Us</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
