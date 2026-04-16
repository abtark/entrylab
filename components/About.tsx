'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Reusable Magnetic Component for ultra-smooth lerp-based hover interactions
const Magnetic = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.3) // Magnetic strength
    y.set(middleY * 0.3)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`will-change-transform transform-gpu z-10 ${className || ''}`}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHoveringSection, setIsHoveringSection] = useState(false)

  // 1. Cursor Glow Trail (requestAnimationFrame for 60fps interpolation)
  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0
    let animationFrameId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)

    const render = () => {
      // Smooth lerp (interpolation)
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // 2. Container Tilt Effect (Perspective Transform)
  const tiltX = useMotionValue(0.5)
  const tiltY = useMotionValue(0.5)
  const springTiltX = useSpring(tiltX, { stiffness: 100, damping: 30 })
  const springTiltY = useSpring(tiltY, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(springTiltY, [0, 1], [3, -3]) // Very subtle tilt
  const rotateY = useTransform(springTiltX, [0, 1], [-3, 3])

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    tiltX.set(mouseX / rect.width)
    tiltY.set(mouseY / rect.height)
  }

  const handleContainerMouseLeave = () => {
    tiltX.set(0.5)
    tiltY.set(0.5)
  }

  return (
    <section 
      id="about" 
      ref={sectionRef}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative py-32 bg-[#111111] overflow-hidden perspective-[2000px]"
    >
      {/* Ambient Cursor Glow Trail (Hidden on Mobile) */}
      <div
        ref={cursorRef}
        className={`hidden md:block pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-[#00AAFF] rounded-full blur-[120px] mix-blend-screen transition-opacity duration-700 z-0 will-change-transform ${
          isHoveringSection ? 'opacity-[0.12]' : 'opacity-0'
        }`}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Ambient Floating Container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="will-change-transform"
        >
          <div 
            ref={containerRef}
            onMouseMove={handleContainerMouseMove}
            onMouseLeave={handleContainerMouseLeave}
            className="relative bg-[#181818]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20 shadow-2xl overflow-hidden"
          >
            {/* Soft Gradient Light Reflection (Moves across container) */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] pointer-events-none z-0"
            />

            {/* LEFT: Premium Magnetic Image */}
            <div className="w-full md:w-1/2 relative z-10 transform translate-z-[30px]">
              <Magnetic>
                <div className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl bg-black">
                  {/* Subtle Glow Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#00AAFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10" />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,170,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                  
                  <img 
                    src="https://iili.io/BWmHJob.png" 
                    alt="About EntryLab" 
                    className="w-full h-[350px] md:h-[450px] object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 will-change-transform" 
                  />
                </div>
              </Magnetic>
            </div>

            {/* RIGHT: Content & Micro-Interactions */}
            <div className="w-full md:w-1/2 relative z-10 transform translate-z-[40px]">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  About <br/>
                  <span className="bg-gradient-to-r from-[#00AAFF] to-white bg-clip-text text-transparent drop-shadow-md">
                    EntryLab
                  </span>
                </h2>
                <div className="w-16 h-1 bg-[#00AAFF] rounded-full mb-8" />
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 font-medium">
                  Founded on the principle that <span className="text-white">"Where Every Search Has a Value"</span>, EntryLab is a modern technology agency dedicated to extracting meaningful insights from complex data architectures. We transform ordinary queries into a lasting competitive advantage.
                </p>

                {/* Social Icons with Magnetic Hover & Glow Pulse */}
                <div className="flex gap-6">
                  <Magnetic>
                    <a href="#" className="relative group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 bg-white/5 backdrop-blur-md">
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,170,255,0.6)] bg-[#00AAFF]/10 animate-pulse pointer-events-none" />
                      <i className="fa-brands fa-github text-2xl relative z-10 transform transition-transform duration-300 group-hover:scale-110"></i>
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a href="#" className="relative group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 bg-white/5 backdrop-blur-md">
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,170,255,0.6)] bg-[#00AAFF]/10 animate-pulse pointer-events-none" />
                      <i className="fa-brands fa-linkedin-in text-2xl relative z-10 transform transition-transform duration-300 group-hover:scale-110"></i>
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a href="#" className="relative group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 bg-white/5 backdrop-blur-md">
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,170,255,0.6)] bg-[#00AAFF]/10 animate-pulse pointer-events-none" />
                      <i className="fa-brands fa-x-twitter text-2xl relative z-10 transform transition-transform duration-300 group-hover:scale-110"></i>
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
