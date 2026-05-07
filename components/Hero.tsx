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

const circuits = [
  "M -100 350 L 150 350 L 250 250 L 420 250 L 470 200",
  "M -100 150 L 50 150 L 150 50 L 350 50 L 400 100 L 470 100",
  "M 1100 350 L 850 350 L 750 250 L 580 250 L 530 200",
  "M 1100 150 L 950 150 L 850 50 L 650 50 L 600 100 L 530 100",
  "M 150 500 L 150 400 L 300 250 L 350 250",
  "M 850 500 L 850 400 L 700 250 L 650 250",
  "M 500 500 L 500 350 L 470 320",
  "M 0 250 L 100 250 L 200 150 L 300 150 L 350 200",
  "M 1000 250 L 900 250 L 800 150 L 700 150 L 650 200"
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen bg-[#02050A] overflow-hidden flex flex-col items-center pt-[18vh] md:pt-[22vh] z-0">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes neon-gradient {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
        .text-neon {
          animation: neon-gradient 4s linear infinite;
        }
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scanline 6s linear infinite;
        }
      `}} />

      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#00AAFF] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_80%)] pointer-events-none" />
      
      <div className="absolute left-0 right-0 h-[2px] bg-[#00AAFF]/20 shadow-[0_0_20px_rgba(0,170,255,0.5)] animate-scan pointer-events-none z-50" />

      <div className="absolute left-4 md:left-10 top-1/4 flex flex-col gap-6 opacity-60 pointer-events-none z-10 hidden md:flex">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#00AAFF] rounded-full animate-ping" style={{ animationDelay: `${i * 0.3}s` }} />
            <div className="w-8 h-[1px] bg-[#00AAFF]/40" />
          </div>
        ))}
      </div>

      <div className="absolute right-4 md:right-10 top-1/3 flex flex-col items-end gap-4 opacity-50 pointer-events-none z-10 hidden md:flex">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-[#00AAFF]/60" />
          <span className="text-[#00AAFF] text-[10px] font-mono tracking-widest">SYS.ACTV</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#00AAFF]/40" />
          <span className="text-[#00AAFF] text-[10px] font-mono tracking-widest">NET.LINK</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#00AAFF]/30 border-t-[#00AAFF] animate-spin mt-4" style={{ animationDuration: '3s' }} />
      </div>

      <div className="relative z-40 flex flex-col items-center text-center px-6 w-full max-w-5xl">
        <div className="relative w-full h-[100px] sm:h-[120px] md:h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, filter: "blur(15px)", scale: 0.95, y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(15px)", scale: 1.05, y: -15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text text-neon w-full drop-shadow-[0_0_20px_rgba(0,170,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(to left, #00AAFF 0%, #ffffff 50%, #44BBFF 100%)",
                backgroundSize: "200% auto",
              }}
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="text-white/80 text-base md:text-xl max-w-2xl mt-4 md:mt-8 font-medium tracking-wide drop-shadow-md"
        >
          Transforming information into insights that power smarter decisions and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#about"
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-md border border-[#00AAFF]/50 px-8 py-4 rounded-full overflow-hidden hover:bg-[#00AAFF] hover:shadow-[0_0_30px_rgba(0,170,255,0.6)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[#00AAFF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-white font-semibold tracking-wider transition-transform duration-500 group-hover:-translate-x-3">Learn More</span>
            <svg className="absolute right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-5 h-5 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[50vh] z-20 pointer-events-none">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          {circuits.map((path, i) => (
            <g key={`circuit-${i}`}>
              <path
                d={path}
                stroke={isHovered ? "rgba(0,170,255,0.6)" : "rgba(0,170,255,0.2)"}
                strokeWidth={isHovered ? "2" : "1"}
                fill="none"
                className="transition-all duration-700"
              />
              <motion.path
                d={path}
                stroke="#00AAFF"
                strokeWidth={isHovered ? "3" : "2"}
                fill="none"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 0.15, pathOffset: 0 }}
                transition={{ duration: 3 + (i % 2), repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                style={{ filter: isHovered ? "drop-shadow(0 0 8px #00AAFF)" : "drop-shadow(0 0 4px #00AAFF)" }}
              />
            </g>
          ))}
          
          {[
            { cx: 470, cy: 200 }, { cx: 470, cy: 100 }, { cx: 530, cy: 200 }, { cx: 530, cy: 100 },
            { cx: 350, cy: 250 }, { cx: 650, cy: 250 }, { cx: 470, cy: 320 }, { cx: 350, cy: 200 }, { cx: 650, cy: 200 }
          ].map((point, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={point.cx}
              cy={point.cy}
              r={isHovered ? 5 : 3}
              fill="#02050A"
              stroke="#00AAFF"
              strokeWidth="2"
              className="transition-all duration-500"
              animate={{ filter: ["drop-shadow(0 0 2px #00AAFF)", "drop-shadow(0 0 10px #00AAFF)", "drop-shadow(0 0 2px #00AAFF)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-auto">
          <motion.div
            className="cursor-pointer relative flex items-center justify-center p-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#00AAFF]/20 rounded-full blur-[40px] pointer-events-none"
              animate={{ 
                opacity: isHovered ? 0.8 : 0.3,
                scale: isHovered ? 1.5 : 1 
              }}
              transition={{ duration: 0.5 }}
            />
            <img 
              src="https://iili.io/BZs4Bn9.png" 
              alt="EntryLab Logo" 
              className="relative h-12 md:h-16 w-auto z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#02050A] to-transparent z-30 pointer-events-none" />
    </section>
  )
}
