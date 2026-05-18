'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  "https://iili.io/Byupz9R.webp",
  "https://iili.io/Byupo8v.webp",
  "https://iili.io/ByupTwN.webp",
  "https://iili.io/ByupIup.webp",
  "https://iili.io/Byup5MX.webp",
  "https://iili.io/Byup7Pn.webp",
  "https://iili.io/ByupaFs.webp",
  "https://iili.io/ByupccG.webp",
  "https://iili.io/ByuplSf.webp",
  "https://iili.io/Byup194.webp",
  "https://iili.io/ByupEAl.webp",
  "https://iili.io/ByupGN2.webp",
  "https://iili.io/ByupMtS.webp"
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoplayTimer, setAutoplayTimer] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [autoplayTimer])

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % images.length)
    setAutoplayTimer(Date.now())
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    setAutoplayTimer(Date.now())
  }

  const getRelativePosition = (i: number, currentActive: number) => {
    const len = images.length
    if (i === (currentActive + 1) % len) return 0
    if (i === (currentActive + 2) % len) return 1
    if (i === (currentActive + 3) % len) return 2
    return -1
  }

  return (
    <section id="gallery" className="relative w-full h-screen min-h-[700px] md:min-h-[800px] bg-[#111111] overflow-hidden flex flex-col p-4 md:p-6 lg:p-8 z-0">
      
      <div className="absolute inset-4 md:inset-6 lg:inset-8 z-0 rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,170,255,0.15)] border border-white/10 bg-black">
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={{
              initial: (dir: number) => ({
                opacity: 0,
                scale: dir === 1 ? 1.05 : 0.95,
                filter: "blur(12px)"
              }),
              animate: {
                opacity: 0.7,
                scale: 1,
                filter: "blur(0px)"
              },
              exit: (dir: number) => ({
                opacity: 0,
                scale: dir === 1 ? 0.95 : 1.05,
                filter: "blur(12px)"
              })
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image 
              src={images[activeIndex]} 
              alt={`EntryLab Gallery Background ${activeIndex + 1}`} 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority 
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/10 to-[#111111]/90 z-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col justify-between h-full w-full pointer-events-none pt-12 md:pt-16 pb-6 md:pb-10 px-4 md:px-8">
        
        <div className="w-full text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="!drop-shadow-2xl !text-white !bg-none">ENTRYLAB GALLERY</h2>
            <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4 mb-8 shadow-[0_0_15px_rgba(0,170,255,0.6)]"></div>
          </motion.div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0 max-w-7xl mx-auto">
          
          <div className="flex gap-4 pointer-events-auto order-2 md:order-1">
            <button 
              onClick={handlePrev} 
              aria-label="Previous Image"
              className="group relative flex items-center justify-center w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.05)] hover:shadow-[0_0_30px_rgba(0,170,255,0.4)] outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              <svg className="relative z-10 w-6 h-6 text-white transition-transform duration-500 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M19 12H5" strokeDasharray="2 4" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext} 
              aria-label="Next Image"
              className="group relative flex items-center justify-center w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.05)] hover:shadow-[0_0_30px_rgba(0,170,255,0.4)] outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
              <svg className="relative z-10 w-6 h-6 text-white transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14" strokeDasharray="2 4" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative h-[220px] sm:h-[260px] md:h-[300px] w-full md:w-[450px] lg:w-[600px] flex justify-end items-end pointer-events-auto order-1 md:order-2 perspective-[1200px]">
            <AnimatePresence custom={direction}>
              {images.map((img, i) => {
                const relativePosition = getRelativePosition(i, activeIndex)
                if (relativePosition === -1) return null

                return (
                  <motion.div
                    key={i}
                    custom={direction}
                    variants={{
                      initial: (dir: number) => ({
                        x: dir === 1 ? "60%" : "-200%",
                        y: dir === 1 ? "15%" : "-60%",
                        scale: dir === 1 ? 0.7 : 1.4,
                        opacity: 0,
                        filter: "blur(8px)"
                      }),
                      animate: {
                        x: `-${(2 - relativePosition) * 65}%`,
                        y: `${(2 - relativePosition) * 12}%`,
                        scale: 1 - (2 - relativePosition) * 0.1,
                        zIndex: 30 - relativePosition * 10,
                        opacity: 1,
                        filter: "blur(0px)"
                      },
                      exit: (dir: number) => ({
                        x: dir === 1 ? "-200%" : "60%",
                        y: dir === 1 ? "-60%" : "15%",
                        scale: dir === 1 ? 1.4 : 0.7,
                        opacity: 0,
                        filter: "blur(8px)"
                      })
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ 
                      type: "spring", 
                      stiffness: 110, 
                      damping: 22, 
                      mass: 0.9 
                    }}
                    className="absolute right-0 bottom-0 w-[140px] sm:w-[170px] md:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/20 bg-black/50 cursor-pointer transform-gpu will-change-transform group"
                    onClick={handleNext}
                  >
                    <Image 
                      src={img} 
                      alt={`Gallery Preview ${i + 1}`} 
                      fill 
                      sizes="(max-width: 768px) 140px, 200px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,170,255,0.2)] z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[#00AAFF]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
