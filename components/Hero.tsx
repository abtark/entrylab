'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
  "M 960 760 L 800 600 L 400 600 L 200 400 L 0 400",
  "M 960 760 L 800 760 L 400 760 L 0 760",
  "M 960 760 L 800 880 L 500 880 L 300 980 L 0 980",
  "M 960 760 L 1120 600 L 1520 600 L 1720 400 L 1920 400",
  "M 960 760 L 1120 760 L 1520 760 L 1920 760",
  "M 960 760 L 1120 880 L 1420 880 L 1620 980 L 1920 980",
  "M 960 760 L 850 650 L 700 650 L 400 350 L 0 350",
  "M 960 760 L 1070 650 L 1220 650 L 1520 350 L 1920 350",
  "M 960 760 L 880 880 L 750 880 L 500 1080",
  "M 960 760 L 1040 880 L 1170 880 L 1420 1080",
  "M 960 760 L 800 500 L 450 500 L 250 300 L 0 300",
  "M 960 760 L 1120 500 L 1470 500 L 1670 300 L 1920 300",
  "M 960 760 L 700 800 L 200 800 L 0 900",
  "M 960 760 L 1220 800 L 1720 800 L 1920 900",
  "M 960 760 L 850 500 L 500 200 L 0 200",
  "M 960 760 L 1070 500 L 1420 200 L 1920 200",
  "M 960 760 L 600 700 L 100 700 L 0 700",
  "M 960 760 L 1320 700 L 1820 700 L 1920 700",
  "M 960 760 L 750 950 L 300 1080",
  "M 960 760 L 1170 950 L 1620 1080",
  "M 960 760 L 800 680 L 500 600 L 0 600",
  "M 960 760 L 1120 680 L 1420 600 L 1920 600"
]

const nodes = [
  { cx: 800, cy: 600 }, { cx: 400, cy: 600 }, { cx: 200, cy: 400 },
  { cx: 800, cy: 760 }, { cx: 400, cy: 760 },
  { cx: 800, cy: 880 }, { cx: 500, cy: 880 }, { cx: 300, cy: 980 },
  { cx: 1120, cy: 600 }, { cx: 1520, cy: 600 }, { cx: 1720, cy: 400 },
  { cx: 1120, cy: 760 }, { cx: 1520, cy: 760 },
  { cx: 1120, cy: 880 }, { cx: 1420, cy: 880 }, { cx: 1620, cy: 980 },
  { cx: 850, cy: 650 }, { cx: 700, cy: 650 }, { cx: 400, cy: 350 },
  { cx: 1070, cy: 650 }, { cx: 1220, cy: 650 }, { cx: 1520, cy: 350 },
  { cx: 880, cy: 880 }, { cx: 750, cy: 880 },
  { cx: 1040, cy: 880 }, { cx: 1170, cy: 880 },
  { cx: 800, cy: 500 }, { cx: 450, cy: 500 }, { cx: 250, cy: 300 },
  { cx: 1120, cy: 500 }, { cx: 1470, cy: 500 }, { cx: 1670, cy: 300 },
  { cx: 700, cy: 800 }, { cx: 200, cy: 800 },
  { cx: 1220, cy: 800 }, { cx: 1720, cy: 800 },
  { cx: 850, cy: 500 }, { cx: 500, cy: 200 },
  { cx: 1070, cy: 500 }, { cx: 1420, cy: 200 },
  { cx: 600, cy: 700 }, { cx: 100, cy: 700 },
  { cx: 1320, cy: 700 }, { cx: 1820, cy: 700 },
  { cx: 750, cy: 950 }, { cx: 1170, cy: 950 },
  { cx: 800, cy: 680 }, { cx: 500, cy: 600 },
  { cx: 1120, cy: 680 }, { cx: 1420, cy: 600 }
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
            stroke="rgba(0,170,255,0.4)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: 0.15, pathOffset: 1, opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 0.45 
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
              duration: 8, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 0.45 
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
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: (i % 5) * 0.8, 
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
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 1500)
    return () => clearTimeout(loadTimer)
  }, [])

  useEffect(() => {
    if (isInitialLoad) return

    let timeout: NodeJS.Timeout
    const currentText = headings[headingIndex]

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false)
        setHeadingIndex((prev) => (prev + 1) % headings.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1))
        }, 30)
      }
    } else {
      if (displayedText.length === currentText.length) {
        timeout = setTimeout(() => setIsDeleting(true), 6000)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1))
        }, 40)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, headingIndex, isInitialLoad])

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

      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,170,255,0.25),transparent_60%)] pointer-events-none z-0 mix-blend-screen" />
      
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,170,255,0.25),transparent_60%)] pointer-events-none z-0 mix-blend-screen" />
      
      <div className="absolute -inset-1 bg-[linear-gradient(rgba(0,170,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,170,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0" />

      <CircuitBackground />

      <div className="relative z-30 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="relative w-full min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight w-full leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-custom-gradient">
                {isInitialLoad ? headings[0] : displayedText}
              </span>
              <span 
                className="inline-block w-[3px] md:w-[5px] h-[0.9em] bg-[#00AAFF] ml-1 md:ml-2 animate-pulse align-middle" 
              />
            </h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-white/70 text-base md:text-xl max-w-3xl mt-4 font-medium tracking-wide"
        >
          Transforming information into insights that power smarter decisions and accelerate growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-10 mb-8"
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

      <div className="absolute top-[70.3%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
        <div className="relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36">
          <div className="absolute inset-0 rounded-3xl bg-[#00AAFF] opacity-15 blur-[20px] mix-blend-screen" />

          <div className="absolute inset-0 rounded-3xl bg-[#02050A] backdrop-blur-md border border-[#00AAFF]/30 flex items-center justify-center overflow-hidden z-10 shadow-[inset_0_0_25px_rgba(0,170,255,0.3),0_0_35px_rgba(0,170,255,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/20 to-transparent opacity-80" />
            
            <img 
              src="https://iili.io/BZZjMzu.png" 
              alt="EntryLab Logo" 
              className="relative w-20 md:w-28 object-contain z-20 drop-shadow-[0_0_12px_rgba(0,170,255,0.6)]" 
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#02050A] via-[#02050A]/80 to-transparent z-40 pointer-events-none" />
    </section>
  )
}
