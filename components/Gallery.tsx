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
      setAutoplayTimer(Date.now())
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

  return (
    <section id="gallery" className="py-24 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center mb-12 md:mb-16"
        >
          <h2>ENTRYLAB GALLERY</h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(0,170,255,0.6)]"></div>
        </motion.div>

        <div className="relative w-full h-[60vh] min-h-[500px] max-h-[750px] rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,170,255,0.15)] border border-white/10 bg-black">
          
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

          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0 w-full pointer-events-auto pb-4">
              
              <div className="flex gap-4 order-2 md:order-1">
                <button 
                  onClick={handlePrev} 
                  aria-label="Previous Image"
                  className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.05)] hover:shadow-[0_0_30px_rgba(0,170,255,0.4)] outline-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                  <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-500 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M19 12H5" strokeDasharray="2 4" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext} 
                  aria-label="Next Image"
                  className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.05)] hover:shadow-[0_0_30px_rgba(0,170,255,0.4)] outline-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                  <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14" strokeDasharray="2 4" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-3 md:gap-4 order-1 md:order-2 overflow-hidden items-end relative perspective-[1200px]">
                <AnimatePresence mode="popLayout" custom={direction}>
                  {[0, 1, 2].map((offset) => {
                    const idx = (activeIndex + offset + images.length) % images.length
                    
                    return (
                      <motion.div
                        key={idx}
                        layout
                        custom={direction}
                        variants={{
                          initial: (dir: number) => ({
                            opacity: 0,
                            x: dir === 1 ? 80 : -80,
                            scale: 0.8,
                            filter: "blur(8px)"
                          }),
                          animate: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            filter: "blur(0px)"
                          },
                          exit: (dir: number) => ({
                            opacity: 0,
                            x: dir === 1 ? -80 : 80,
                            scale: 0.8,
                            filter: "blur(8px)",
                            position: "absolute"
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
                        className="relative w-[70px] sm:w-[90px] md:w-[110px] aspect-[3/4] rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/20 bg-black/50 cursor-pointer transform-gpu will-change-transform group shrink-0"
                        onClick={handleNext}
                      >
                        <Image 
                          src={images[idx]} 
                          alt={`Gallery Preview ${idx + 1}`} 
                          fill 
                          sizes="(max-width: 768px) 70px, 110px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,170,255,0.2)] z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 z-10 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[#00AAFF]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                        {offset === 0 && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-[#00AAFF] rounded-full shadow-[0_0_10px_rgba(0,170,255,0.8)] z-20"></div>
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30">
            <motion.div
              key={autoplayTimer}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 7, ease: "linear" }}
              className="h-full bg-[#00AAFF] shadow-[0_0_15px_rgba(0,170,255,0.8)] origin-left"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
