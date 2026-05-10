'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const headings = [
  "Every Search Has a Value",
  "Search That Drives Growth",
  "Every Search Has Power",
  "Search Beyond Limits",
  "Every Search Adds Value",
  "Smart Search, Real Value",
  "Every Query Creates Value",
  "Search Smarter, Grow Faster",
  "Every Click Starts Value",
  "Search That Moves Forward"
]

const circuitPaths = [
  "M 0 200 L 300 200 L 500 400 L 750 400 L 860 510",
  "M 0 880 L 250 880 L 450 680 L 700 680 L 840 540",
  "M 1920 200 L 1620 200 L 1420 400 L 1170 400 L 1060 510",
  "M 1920 880 L 1670 880 L 1470 680 L 1220 680 L 1080 540",
  "M 400 0 L 400 150 L 650 400 L 820 400 L 900 480",
  "M 1520 0 L 1520 150 L 1270 400 L 1100 400 L 1020 480",
  "M 500 1080 L 500 930 L 750 680 L 880 680 L 930 630",
  "M 1420 1080 L 1420 930 L 1170 680 L 1040 680 L 990 630",
  "M 0 540 L 400 540 L 600 540 L 800 540",
  "M 1920 540 L 1520 540 L 1320 540 L 1120 540"
]

const nodes = [
  { cx: 300, cy: 200 }, { cx: 500, cy: 400 }, { cx: 750, cy: 400 },
  { cx: 250, cy: 880 }, { cx: 450, cy: 680 }, { cx: 700, cy: 680 },
  { cx: 1620, cy: 200 }, { cx: 1420, cy: 400 }, { cx: 1170, cy: 400 },
  { cx: 1670, cy: 880 }, { cx: 1470, cy: 680 }, { cx: 1220, cy: 680 },
  { cx: 400, cy: 150 }, { cx: 650, cy: 400 }, { cx: 1520, cy: 150 }, { cx: 1270, cy: 400 },
  { cx: 500, cy: 930 }, { cx: 750, cy: 680 }, { cx: 1420, cy: 930 }, { cx: 1170, cy: 680 },
  { cx: 400, cy: 540 }, { cx: 600, cy: 540 }, { cx: 1520, cy: 540 }, { cx: 1320, cy: 540 }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen bg-[#02050A] overflow-hidden flex flex-col z-0">
      
      <motion.div 
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#00AAFF] rounded-full blur-[150px] pointer-events-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0" />

      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {circuitPaths.map((path, i) => (
          <g key={`circuit-base-${i}`}>
            <path
              d={path}
              stroke="rgba(0,170,255,0.1)"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            
            <motion.path
              d={path}
              stroke="#00AAFF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
              animate={{ pathLength: 0.15, pathOffset: -0.15, opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 8 + (i % 3) * 2, 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.5 
              }}
            />
          </g>
        ))}

        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <rect
              x={node.cx - 6}
              y={node.cy - 6}
              width="12"
              height="12"
              rx="2"
              fill="#02050A"
              stroke="rgba(0,170,255,0.2)"
              strokeWidth="1.5"
            />
            <motion.rect
              x={node.cx - 3}
              y={node.cy - 3}
              width="6"
              height="6"
              rx="1"
              fill="#00AAFF"
              animate={{ opacity: [0.1, 0.8, 0.1] }}
              transition={{ 
                duration: 4 + (i % 3), 
                repeat: Infinity, 
                delay: i * 0.1, 
                ease: "easeInOut" 
              }}
            />
          </g>
        ))}
      </svg>

      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto pt-[12vh] md:pt-[15vh] pointer-events-auto">
        <div className="relative w-full h-[100px] md:h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text w-full"
              style={{
                backgroundImage: "linear-gradient(to right, #00AAFF 0%, #ffffff 50%, #00AAFF 100%)",
                backgroundSize: "200% auto",
                animation: "neon-gradient 8s linear infinite"
              }}
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="text-white/70 text-base md:text-xl max-w-3xl mt-2 font-medium tracking-wide"
        >
          Transforming information into insights that power smarter decisions and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#about"
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-xl border border-[#00AAFF]/30 px-8 py-4 rounded-full overflow-hidden hover:bg-[#00AAFF] hover:border-[#00AAFF] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 text-white text-base md:text-lg font-bold tracking-wider transition-transform duration-500 group-hover:-translate-x-3">Learn More</span>
            <svg className="absolute right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-5 h-5 z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute top-[60%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div 
          className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[#00AAFF] blur-[40px] md:blur-[60px]"
            animate={{ 
              opacity: isHovered ? 0.6 : 0.2,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full bg-[#001122]/80 backdrop-blur-3xl border border-[#00AAFF]/30 overflow-hidden"
            animate={{
              boxShadow: isHovered 
                ? "inset 0 0 40px rgba(0,170,255,0.4), 0 0 20px rgba(0,170,255,0.3)" 
                : "inset 0 0 20px rgba(0,170,255,0.1), 0 0 0px rgba(0,170,255,0)"
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.2)_0%,transparent_70%)] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30" />
          </motion.div>

          <motion.img 
            src="https://iili.io/BZZjMzu.png" 
            alt="EntryLab Logo" 
            className="relative w-28 md:w-40 object-contain z-10"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? "drop-shadow(0 0 15px rgba(255,255,255,0.4))" : "drop-shadow(0 0 0px rgba(255,255,255,0))"
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="absolute top-1/2 left-[-2px] w-6 h-1.5 bg-[#00AAFF] rounded-full blur-[1px] -translate-y-1/2 opacity-80" />
          <div className="absolute top-1/2 right-[-2px] w-6 h-1.5 bg-[#00AAFF] rounded-full blur-[1px] -translate-y-1/2 opacity-80" />
          <div className="absolute left-1/2 top-[-2px] w-1.5 h-6 bg-[#00AAFF] rounded-full blur-[1px] -translate-x-1/2 opacity-80" />
          <div className="absolute left-1/2 bottom-[-2px] w-1.5 h-6 bg-[#00AAFF] rounded-full blur-[1px] -translate-x-1/2 opacity-80" />
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#02050A] via-[#02050A]/80 to-transparent z-40 pointer-events-none" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes neon-gradient {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}} />
    </section>
  )
}
