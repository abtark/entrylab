'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Magnetic Hover Component (Max 6px movement)
const MagneticItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const moveX = ((e.clientX - centerX) / (width / 2)) * 6 // max 6px
    const moveY = ((e.clientY - centerY) / (height / 2)) * 6 // max 6px
    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`will-change-transform transform-gpu ${className || ''}`}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  // Stagger animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  }

  return (
    <section id="about" className="relative py-32 bg-[#111111] overflow-hidden flex justify-center items-center z-0">
      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-r2l {
          0% { background-position: 200% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-r2l {
          animation: gradient-r2l 4s linear infinite;
        }
        @keyframes image-shine {
          0% { transform: translateX(-150%) skewX(-30deg); }
          5% { transform: translateX(250%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
        .animate-image-shine {
          animation: image-shine 30s infinite;
        }
      `}} />

      {/* Floating Objects (Behind Container) */}
      <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none z-0">
        {/* Circle 1 */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#00AAFF]/50 to-blue-600/50 blur-3xl will-change-transform"
        />
        {/* Rectangle 1 */}
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[5%] w-24 h-24 md:w-40 md:h-40 rounded-2xl bg-gradient-to-tr from-purple-500/40 to-pink-500/40 blur-3xl will-change-transform"
        />
        {/* Circle 2 */}
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[15%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tl from-cyan-400/40 to-teal-500/40 blur-3xl will-change-transform"
        />
        {/* Rectangle 2 */}
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[20%] left-[10%] w-20 h-20 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-indigo-500/40 to-[#00AAFF]/40 blur-3xl will-change-transform"
        />
      </div>

      {/* MAIN CONTAINER (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-14 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]">
          
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
            <MagneticItem className="w-full max-w-md relative overflow-hidden rounded-2xl">
              <img 
                src="https://iili.io/B8FmsP1.png" 
                alt="About EntryLab" 
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl relative z-0"
              />
              {/* Shine Effect Overlay */}
              <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-image-shine pointer-events-none z-10" />
            </MagneticItem>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 mb-6" />

          {/* ROW 2: DESCRIPTION (Staggered Animation) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex flex-col items-center text-center space-y-4 text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-4xl"
          >
            <motion.p variants={itemVariants}>
              Founded on the principle that <span className="text-white font-bold">"Where Every Search Has a Value"</span>, EntryLab is a modern technology agency dedicated to extracting meaningful insights from complex data architectures.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              EntryLab is a Chattogram-based R&D firm specializing in precision-driven data intelligence. We architect clarity from complexity—transforming fragmented information into strategic, decision-ready insights.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Leveraging advanced research frameworks and a detail-obsessed approach, we deliver intelligence that is not just accurate, but actionable and high-impact.
            </motion.p>
            
            <motion.p variants={itemVariants} className="pt-2 text-[#00AAFF] font-semibold text-xl md:text-2xl tracking-wide">
              EntryLab — Where Every Search Has Value.
            </motion.p>
          </motion.div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-white/10 my-6" />

          {/* ROW 3: SOCIAL ICONS */}
          <div className="flex items-center justify-center gap-8">
            <a 
              href="https://www.facebook.com/EntryLab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)]"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            
            <a 
              href="https://www.linkedin.com/company/entrylab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)]"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            
            <a 
              href="https://rocketreach.co/entrylab-profile_b704b6e0c514e80c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)]"
            >
              <i className="fa-solid fa-rocket"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
