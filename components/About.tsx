'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Ultra-smooth Magnetic Item using requestAnimationFrame & linear interpolation
const MagneticItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  const render = () => {
    // Lerp for smooth easing
    current.current.x += (target.current.x - current.current.x) * 0.1
    current.current.y += (target.current.y - current.current.y) * 0.1

    if (ref.current) {
      ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
    }
    requestRef.current = requestAnimationFrame(render)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    target.current.x = ((e.clientX - centerX) / (width / 2)) * 6 // Max 6px
    target.current.y = ((e.clientY - centerY) / (height / 2)) * 6 // Max 6px
  }

  const handleMouseLeave = () => {
    target.current.x = 0
    target.current.y = 0
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform transform-gpu ${className || ''}`}
    >
      {children}
    </div>
  )
}

const paragraphs = [
  {
    text: 'Founded on the principle that "Where Every Search Has a Value", EntryLab is a modern technology agency dedicated to extracting meaningful insights from complex data architectures.',
    highlight: false
  },
  {
    text: 'EntryLab is a Chattogram-based R&D firm specializing in precision-driven data intelligence. We architect clarity from complexity—transforming fragmented information into strategic, decision-ready insights.',
    highlight: false
  },
  {
    text: 'Leveraging advanced research frameworks and a detail-obsessed approach, we deliver intelligence that is not just accurate, but actionable and high-impact.',
    highlight: false
  },
  {
    text: 'EntryLab — Where Every Search Has Value.',
    highlight: true
  }
]

export default function About() {
  const [isTypingDone, setIsTypingDone] = useState(false)

  const wordContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Moderate speed word-by-word
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } },
  }

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', bounce: 0.5, duration: 0.6 },
    },
  }

  return (
    <section id="about" className="relative py-32 bg-[#111111] overflow-hidden flex justify-center items-center z-0">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-r2l {
          0% { background-position: 200% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-r2l {
          animation: gradient-r2l 4s linear infinite;
        }
      `}} />

      {/* Floating Objects (Behind Container) */}
      <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#00AAFF] to-blue-500 blur-[80px] opacity-60 will-change-transform transform-gpu"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[5%] w-24 h-24 md:w-40 md:h-40 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 blur-[80px] opacity-60 will-change-transform transform-gpu"
        />
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[15%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-cyan-400 to-teal-400 blur-[80px] opacity-60 will-change-transform transform-gpu"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[20%] left-[10%] w-20 h-20 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-indigo-500 to-[#00AAFF] blur-[80px] opacity-60 will-change-transform transform-gpu"
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          
          {/* SECTION TITLE */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight pb-2">
              <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent drop-shadow-sm">
                About
              </span>
            </h2>
            <div className="w-16 h-1 bg-[#00AAFF] rounded-full mt-2" />
          </div>

          {/* ROW 1: IMAGE */}
          <div className="w-full mb-6 flex justify-center">
            <MagneticItem className="w-full max-w-md relative overflow-hidden rounded-2xl drop-shadow-2xl z-10 bg-black/20">
              <img 
                src="https://iili.io/B8oQEyg.png" 
                alt="About EntryLab" 
                className="w-full h-auto object-contain rounded-2xl relative z-0"
              />
              {/* Image Gradient Overlay Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF]/20 via-white/10 to-[#00AAFF]/20 bg-[length:200%_auto] animate-gradient-r2l mix-blend-overlay pointer-events-none z-10 rounded-2xl" />
            </MagneticItem>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* ROW 2: DESCRIPTION (Typing Animation) */}
          <motion.div 
            variants={wordContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onAnimationComplete={() => setIsTypingDone(true)}
            className="w-full flex flex-col items-center text-center space-y-5 text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-4xl min-h-[220px] md:min-h-[160px]"
          >
            {paragraphs.map((p, pIndex) => (
              <p key={pIndex} className={p.highlight ? "pt-2 text-[#00AAFF] font-semibold text-xl md:text-2xl tracking-wide" : ""}>
                {p.text.split(" ").map((word, wIndex) => (
                  <motion.span key={wIndex} variants={wordVariants} className="inline-block mr-[0.25em] whitespace-nowrap">
                    {word}
                  </motion.span>
                ))}
              </p>
            ))}
          </motion.div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 my-8" />

          {/* ROW 3: SOCIAL ICONS */}
          <div className="h-[40px] flex items-center justify-center">
            {isTypingDone && (
              <motion.div 
                variants={iconContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center gap-8"
              >
                <motion.a 
                  variants={iconVariants}
                  href="https://www.facebook.com/EntryLab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform"
                >
                  <i className="fa-brands fa-facebook"></i>
                </motion.a>
                
                <motion.a 
                  variants={iconVariants}
                  href="https://www.linkedin.com/company/entrylab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </motion.a>
                
                <motion.a 
                  variants={iconVariants}
                  href="https://rocketreach.co/entrylab-profile_b704b6e0c514e80c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform"
                >
                  <i className="fa-solid fa-rocket"></i>
                </motion.a>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
