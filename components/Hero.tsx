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
  "M 0 250 L 250 250 L 350 350 L 350 650 L 840 650",
  "M 0 450 L 150 450 L 250 550 L 820 550 L 860 590",
  "M 0 710 L 300 710 L 400 810 L 820 810 L 860 750",
  "M 0 900 L 250 900 L 440 710 L 820 710",
  "M 1920 250 L 1670 250 L 1570 350 L 1570 650 L 1080 650",
  "M 1920 450 L 1770 450 L 1670 550 L 1100 550 L 1060 590",
  "M 1920 710 L 1620 710 L 1520 810 L 1100 810 L 1060 750",
  "M 1920 900 L 1670 900 L 1480 710 L 1100 710",
  "M 450 0 L 450 150 L 600 300 L 600 450 L 860 450",
  "M 1470 0 L 1470 150 L 1320 300 L 1320 450 L 1060 450"
]

const nodes = [
  { cx: 250, cy: 250 }, { cx: 350, cy: 350 }, { cx: 150, cy: 450 }, { cx: 250, cy: 550 },
  { cx: 300, cy: 710 }, { cx: 400, cy: 810 }, { cx: 250, cy: 900 }, { cx: 440, cy: 710 },
  { cx: 1670, cy: 250 }, { cx: 1570, cy: 350 }, { cx: 1770, cy: 450 }, { cx: 1670, cy: 550 },
  { cx: 1620, cy: 710 }, { cx: 1520, cy: 810 }, { cx: 1670, cy: 900 }, { cx: 1480, cy: 710 },
  { cx: 450, cy: 150 }, { cx: 600, cy: 300 }, { cx: 1470, cy: 150 }, { cx: 1320, cy: 300 }
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen bg-[#02050A] overflow-hidden flex flex-col items-center z-0">
      
      <motion.div 
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#00AAFF] rounded-full blur-[180px] pointer-events-none"
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)] pointer-events-none z-0" />

      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {circuitPaths.map((path, i) => (
          <g key={`circuit-base-${i}`}>
            <path
              d={path}
              stroke="rgba(0,170,255,0.15)"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
            />
            
            <motion.path
              d={path}
              stroke="#00AAFF"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 0.1, pathOffset: -0.1 }}
              transition={{ 
                duration: 6 + (i % 3) * 1.5, 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.4 
              }}
              style={{ filter: "drop-shadow(0 0 10px #00AAFF)" }}
            />
            
            <motion.path
              d={path}
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 0.05, pathOffset: -0.05 }}
              transition={{ 
                duration: 6 + (i % 3) * 1.5, 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.4 + 0.1
              }}
              style={{ filter: "drop-shadow(0 0 15px #00AAFF)" }}
            />
          </g>
        ))}

        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <rect
              x={node.cx - 8}
              y={node.cy - 8}
              width="16"
              height="16"
              rx="4"
              fill="#02050A"
              stroke="rgba(0,170,255,0.4)"
              strokeWidth="2"
            />
            <motion.rect
              x={node.cx - 4}
              y={node.cy - 4}
              width="8"
              height="8"
              rx="2"
              fill="#00AAFF"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                filter: ["drop-shadow(0 0 2px #00AAFF)", "drop-shadow(0 0 12px #00AAFF)", "drop-shadow(0 0 2px #00AAFF)"]
              }}
              transition={{ 
                duration: 3 + (i % 3), 
                repeat: Infinity, 
                delay: i * 0.2, 
                ease: "easeInOut" 
              }}
            />
          </g>
        ))}
      </svg>

      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-4xl pt-[18vh] md:pt-[20vh] pointer-events-auto">
        <div className="relative w-full h-[120px] md:h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95, y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05, y: -15 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text w-full drop-shadow-[0_0_25px_rgba(0,170,255,0.3)]"
              style={{
                backgroundImage: "linear-gradient(to right, #00AAFF 0%, #ffffff 50%, #00AAFF 100%)",
                backgroundSize: "200% auto",
                animation: "neon-gradient 6s linear infinite"
              }}
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="text-white/70 text-lg md:text-2xl max-w-3xl mt-4 font-medium tracking-wide drop-shadow-md"
        >
          Transforming information into insights that power smarter decisions and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#about"
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-xl border border-[#00AAFF]/40 px-10 py-5 rounded-full overflow-hidden hover:bg-[#00AAFF] hover:border-[#00AAFF] transition-all duration-700 shadow-[0_0_20px_rgba(0,170,255,0.15)] hover:shadow-[0_0_40px_rgba(0,170,255,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 text-white text-lg font-bold tracking-wider transition-transform duration-500 group-hover:-translate-x-4">Learn More</span>
            <svg className="absolute right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-6 h-6 z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-[60vh] md:top-[65vh] -translate-x-1/2 z-30 pointer-events-auto">
        <motion.div
          className="relative flex items-center justify-center p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-[#00AAFF]/10 backdrop-blur-2xl border-2 border-[#00AAFF]/30 w-48 h-48 md:w-64 md:h-64 cursor-pointer overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,170,255,0.2), inset 0 0 30px rgba(0,170,255,0.2)",
              "0 20px 50px rgba(0,0,0,0.8), 0 0 80px rgba(0,170,255,0.7), inset 0 0 60px rgba(0,170,255,0.6)",
              "0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,170,255,0.2), inset 0 0 30px rgba(0,170,255,0.2)"
            ]
          }}
          transition={{ 
            scale: { duration: 0.6, ease: "easeOut" },
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
          <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border border-white/20 [mask-image:linear-gradient(to_bottom right,white,transparent)]" />
          
          <img 
            src="https://iili.io/BZs4Bn9.png" 
            alt="EntryLab Logo" 
            className="relative w-32 md:w-44 object-contain z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-700" 
          />
        </motion.div>
        
        <div className="absolute top-1/2 left-[-16px] w-8 h-2 bg-[#00AAFF] rounded-full blur-[2px] shadow-[0_0_10px_#00AAFF] -translate-y-1/2" />
        <div className="absolute top-1/2 right-[-16px] w-8 h-2 bg-[#00AAFF] rounded-full blur-[2px] shadow-[0_0_10px_#00AAFF] -translate-y-1/2" />
        <div className="absolute left-1/2 top-[-16px] w-2 h-8 bg-[#00AAFF] rounded-full blur-[2px] shadow-[0_0_10px_#00AAFF] -translate-x-1/2" />
        <div className="absolute left-1/2 bottom-[-16px] w-2 h-8 bg-[#00AAFF] rounded-full blur-[2px] shadow-[0_0_10px_#00AAFF] -translate-x-1/2" />
      </div>
      
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#02050A] via-[#02050A]/90 to-transparent z-20 pointer-events-none" />
    </section>
  )
}
