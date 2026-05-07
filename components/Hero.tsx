'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const headings = [
  "Precision search, Real impact",
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
  "M 960 540 L 800 400 L 400 400 L 200 200 L 0 200",
  "M 960 540 L 800 540 L 400 540 L 0 540",
  "M 960 540 L 800 680 L 500 680 L 300 880 L 0 880",
  "M 960 540 L 1120 400 L 1520 400 L 1720 200 L 1920 200",
  "M 960 540 L 1120 540 L 1520 540 L 1920 540",
  "M 960 540 L 1120 680 L 1420 680 L 1620 880 L 1920 880",
  "M 960 540 L 850 450 L 700 450 L 400 150 L 400 0",
  "M 960 540 L 1070 450 L 1220 450 L 1520 150 L 1520 0",
  "M 960 540 L 880 680 L 750 680 L 500 930 L 500 1080",
  "M 960 540 L 1040 680 L 1170 680 L 1420 930 L 1420 1080",
  "M 960 540 L 800 300 L 450 300 L 250 100 L 0 100",
  "M 960 540 L 1120 300 L 1470 300 L 1670 100 L 1920 100",
  "M 960 540 L 800 780 L 550 780 L 350 980 L 0 980",
  "M 960 540 L 1120 780 L 1370 780 L 1570 980 L 1920 980"
]

const nodes = [
  { cx: 800, cy: 400 }, { cx: 400, cy: 400 }, { cx: 200, cy: 200 },
  { cx: 800, cy: 540 }, { cx: 400, cy: 540 },
  { cx: 800, cy: 680 }, { cx: 500, cy: 680 }, { cx: 300, cy: 880 },
  { cx: 1120, cy: 400 }, { cx: 1520, cy: 400 }, { cx: 1720, cy: 200 },
  { cx: 1120, cy: 540 }, { cx: 1520, cy: 540 },
  { cx: 1120, cy: 680 }, { cx: 1420, cy: 680 }, { cx: 1620, cy: 880 },
  { cx: 850, cy: 450 }, { cx: 700, cy: 450 }, { cx: 400, cy: 150 },
  { cx: 1070, cy: 450 }, { cx: 1220, cy: 450 }, { cx: 1520, cy: 150 },
  { cx: 880, cy: 680 }, { cx: 750, cy: 680 }, { cx: 500, cy: 930 },
  { cx: 1040, cy: 680 }, { cx: 1170, cy: 680 }, { cx: 1420, cy: 930 },
  { cx: 800, cy: 300 }, { cx: 450, cy: 300 }, { cx: 250, cy: 100 },
  { cx: 1120, cy: 300 }, { cx: 1470, cy: 300 }, { cx: 1670, cy: 100 },
  { cx: 800, cy: 780 }, { cx: 550, cy: 780 }, { cx: 350, cy: 980 },
  { cx: 1120, cy: 780 }, { cx: 1370, cy: 780 }, { cx: 1570, cy: 980 }
]

const CircuitBackground = React.memo(() => {
  return (
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      {circuitPaths.map((path, i) => (
        <g key={`circuit-base-${i}`}>
          <path
            d={path}
            stroke="rgba(0,170,255,0.15)"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
          />
          <motion.path
            d={path}
            stroke="rgba(0,170,255,0.3)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: 0.15, pathOffset: 1, opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 4 + (i % 3) * 1.5, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 0.3 
            }}
          />
          <motion.path
            d={path}
            stroke="#00AAFF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: 0.15, pathOffset: 1, opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 4 + (i % 3) * 1.5, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 0.3 
            }}
          />
        </g>
      ))}

      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <rect
            x={node.cx - 5}
            y={node.cy - 5}
            width="10"
            height="10"
            rx="2"
            fill="#02050A"
            stroke="rgba(0,170,255,0.3)"
            strokeWidth="1.5"
          />
          <motion.rect
            x={node.cx - 2.5}
            y={node.cy - 2.5}
            width="5"
            height="5"
            rx="1"
            fill="#00AAFF"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ 
              duration: 2 + (i % 3), 
              repeat: Infinity, 
              delay: i * 0.1, 
              ease: "easeInOut" 
            }}
          />
        </g>
      ))}
    </svg>
  )
})

CircuitBackground.displayName = 'CircuitBackground'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [headingIndex, setHeadingIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentText = headings[headingIndex]

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false)
        setHeadingIndex((prev) => (prev + 1) % headings.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1))
        }, 40)
      }
    } else {
      if (displayedText.length === currentText.length) {
        timeout = setTimeout(() => setIsDeleting(true), 4000)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1))
        }, 60)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, headingIndex])

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#02050A] overflow-hidden flex flex-col items-center justify-start pt-[12vh] md:pt-[15vh] z-0">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-gradient {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
        .animate-custom-gradient {
          animation: custom-gradient 8s linear infinite;
        }
      `}} />

      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,170,255,0.25),transparent_60%)] pointer-events-none z-0 mix-blend-screen" />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,170,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0" />

      <CircuitBackground />

      <div className="relative z-30 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        <div className="relative w-full min-h-[120px] md:min-h-[160px] flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight w-full leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-custom-gradient">
              {displayedText}
            </span>
            <span 
              className="inline-block w-[3px] md:w-[5px] h-[0.9em] bg-[#00AAFF] ml-1 md:ml-2 animate-pulse align-middle" 
            />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white/70 text-base md:text-xl max-w-3xl mt-4 font-medium tracking-wide"
        >
          Transforming information into insights that power smarter decisions and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-10 mb-16"
        >
          <a
            href="#about"
            className="group relative flex items-center justify-center bg-[#00AAFF]/10 backdrop-blur-xl border border-[#00AAFF]/30 px-10 py-4 rounded-full overflow-hidden hover:bg-[#00AAFF] hover:border-[#00AAFF] transition-all duration-500 shadow-[0_0_20px_rgba(0,170,255,0.1)] hover:shadow-[0_0_40px_rgba(0,170,255,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 text-white text-lg font-bold tracking-wider transition-transform duration-500 group-hover:-translate-x-3">Learn More</span>
            <svg className="absolute right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white w-6 h-6 z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
        <div 
          className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-[#00AAFF]"
            animate={{ 
              opacity: isHovered ? 0.3 : 0.1,
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "blur(40px)" : "blur(20px)"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-[#02050A] backdrop-blur-md border border-[#00AAFF]/30 flex items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(0,170,255,0.15)]"
            animate={{
              borderColor: isHovered ? "rgba(0,170,255,0.8)" : "rgba(0,170,255,0.3)",
              boxShadow: isHovered 
                ? "inset 0 0 40px rgba(0,170,255,0.4), 0 0 30px rgba(0,170,255,0.3)" 
                : "inset 0 0 20px rgba(0,170,255,0.15), 0 0 0px rgba(0,170,255,0)"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/10 to-transparent opacity-60" />
            
            <motion.img 
              src="https://iili.io/BZZjMzu.png" 
              alt="EntryLab Logo" 
              className="relative w-24 md:w-36 object-contain z-10"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#02050A] via-[#02050A]/80 to-transparent z-40 pointer-events-none" />
    </section>
  )
}
