'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

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

// Animated Number Counter Component
const AnimatedNumber = ({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Number(latest).toFixed(decimals) + suffix
          }
        }
      })
    }
  }, [inView, value, suffix, decimals])

  return <span ref={ref} className="text-3xl font-bold text-white mb-1 tracking-tight">0{suffix}</span>
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

const timelineData = [
  {
    year: "2019",
    title: "EntryLab Founded",
    description: "Started with a small team of 3 passionate data professionals."
  },
  {
    year: "2020",
    title: "First 100 Projects",
    description: "Reached our first milestone of 100 completed projects."
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to 20+ team members and expanded service offerings."
  },
  {
    year: "2022",
    title: "International Clients",
    description: "Started serving clients from USA, UK, and Australia."
  },
  {
    year: "2023",
    title: "New Office",
    description: "Moved to a modern, spacious office to accommodate our growing team."
  },
  {
    year: "2024",
    title: "12000+ Projects",
    description: "Crossed the 12000+ project milestone with 99.9% accuracy."
  },
  {
    year: "2025",
    title: "Own Work Space",
    description: "New Journey - New workspace with highly decorated interior."
  }
]

const cultureData = [
  {
    title: "Collaborative Environment",
    description: "We believe in teamwork. Every project is a collaborative effort where everyone's ideas matter.",
    icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
    iconExtras: <circle cx="9" cy="7" r="4" />,
    color: "#00AAFF"
  },
  {
    title: "Growth & Learning",
    description: "Regular training sessions and skill development programs keep our team at the cutting edge.",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    color: "#8B5CF6"
  },
  {
    title: "Work-Life Balance",
    description: "We value our team's well-being with flexible schedules and regular team outings.",
    icon: <circle cx="12" cy="12" r="10" />,
    iconExtras: <polyline points="12 6 12 12 16 14" />,
    color: "#10B981"
  },
  {
    title: "Celebrate Together",
    description: "From project milestones to festivals, we celebrate every achievement as a family.",
    icon: <path d="M12 2v20" />,
    iconExtras: <><path d="m17 5-5-3-5 3v14l5 3 5-3V5z"/></>,
    color: "#F59E0B"
  },
  {
    title: "Innovation First",
    description: "We encourage creative problem-solving and constantly improve our processes.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    color: "#EF4444"
  },
  {
    title: "Open Communication",
    description: "Transparent, honest communication is the foundation of our workplace culture.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    color: "#3B82F6"
  },
  {
    title: "Trip & Tour",
    description: "We believe in creating memories together beyond the office walls.",
    icon: <path d="M2 22 22 2" />,
    iconExtras: <><path d="M22 2v10" /><path d="M12 2h10" /><path d="m2 22 10-10" /></>,
    color: "#EC4899"
  },
  {
    title: "Fun & Creativity",
    description: "We love thinking outside the box and enjoying the process.",
    icon: <circle cx="12" cy="12" r="10" />,
    iconExtras: <><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
    color: "#14B8A6"
  },
  {
    title: "Recognition & Rewards",
    description: "We celebrate achievements big and small.",
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    color: "#EAB308"
  }
]

export default function About() {
  const [isTypingDone, setIsTypingDone] = useState(false)

  const wordContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
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

  const timelineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="about" className="relative py-32 bg-[#111111] overflow-hidden flex flex-col justify-center items-center z-0">
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

      {/* NEW TOP SECTION: Heading, Description & Feature Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-20 flex flex-col items-center">
        
        {/* NEW SECTION HEADING */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight pb-2">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent drop-shadow-sm">
              About EntryLab.
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#00AAFF] to-blue-500 rounded-full mt-3" />
        </div>

        {/* DESCRIPTION TEXT */}
        <p className="text-white/80 text-center max-w-2xl text-lg mb-14 mt-2">
          We're a dedicated team of data professionals committed to delivering accuracy, speed, and value in every project we handle.
        </p>

        {/* THREE FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          
          {/* CARD 1: Our Mission */}
          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 transition-colors duration-300 ease-out hover:border-[#00AAFF] hover:shadow-[0_0_25px_rgba(0,170,255,0.15)] flex flex-col items-start">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#00AAFF]/20 to-blue-600/20 mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-white/70 leading-relaxed text-base">
              To empower businesses worldwide with accurate, efficient, and affordable data services that drive growth and informed decision-making.
            </p>
          </div>

          {/* CARD 2: Our Vision */}
          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 transition-colors duration-300 ease-out hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] flex flex-col items-start">
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-white/70 leading-relaxed text-base">
              To become the most trusted data services partner globally, known for excellence in quality, innovation, and client satisfaction.
            </p>
          </div>

          {/* CARD 3: Our Values */}
          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 transition-colors duration-300 ease-out hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col items-start">
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
            <p className="text-white/70 leading-relaxed text-base">
              Accuracy, integrity, teamwork, and continuous improvement. We treat every project with the same dedication and attention to detail.
            </p>
          </div>

        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          
          {/* ROW 1: IMAGE */}
          <div className="w-full mb-6 flex justify-center">
            <MagneticItem className="w-full max-w-md relative overflow-hidden rounded-2xl drop-shadow-2xl z-10 bg-black/20">
              <img 
                src="https://iili.io/B8oQEyg.png" 
                alt="About EntryLab" 
                className="w-full h-auto object-contain rounded-2xl relative z-0"
              />
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

      {/* NEW BOTTOM SECTION: Our Story */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[#00AAFF] text-sm font-bold uppercase tracking-widest mb-3">
              Our Story
            </span>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent pb-1">
              From a Small Team to a Trusted Agency
            </h3>
            
            <p className="text-white/80 leading-relaxed mb-5 max-w-lg text-sm md:text-base">
              EntryLab was founded in 2019 with a simple mission: to provide businesses with reliable, accurate, and affordable data services. What started as a team of 3 passionate individuals in a small room has grown into a thriving agency with 50+ skilled professionals.
            </p>
            
            <p className="text-white/80 leading-relaxed mb-5 max-w-lg text-sm md:text-base">
              Over the years, we've had the privilege of working with hundreds of clients from around the world, handling everything from simple data entry tasks to complex web research and data mining projects.
            </p>
            
            <p className="text-white/80 leading-relaxed mb-12 max-w-lg text-sm md:text-base">
              But EntryLab is more than just work — it's a family. The memories we create together, from office celebrations to team outings, are what make this journey truly special. That's why we built this space to celebrate those moments.
            </p>

            {/* STATS / COUNTERS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
              {/* Stat 1 */}
              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <AnimatedNumber value={25} suffix="+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  {"Team\nMembers"}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <AnimatedNumber value={99.9} suffix="%" decimals={1} />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  {"Accuracy"}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
                <AnimatedNumber value={15} suffix="k+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  {"Projects"}
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <AnimatedNumber value={7} suffix="+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  {"Years"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TWO STACKED IMAGES & BADGE */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full mt-8 lg:mt-0">
            {/* Top Image */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <img 
                src="https://iili.io/Br9rhHN.jpg" 
                alt="EntryLab Team Top" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Bottom Image Container */}
            <div className="relative w-full aspect-video group">
              {/* Image Box */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/5 relative z-10">
                <img 
                  src="https://iili.io/BgW7HSn.jpg" 
                  alt="EntryLab Team Bottom" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-gradient-to-br from-[#00AAFF] to-purple-600 text-white p-4 md:p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110 flex flex-col items-center justify-center z-20 border border-white/20">
                <span className="text-xs md:text-sm font-medium tracking-wide uppercase mb-1">Since</span>
                <span className="text-xl md:text-3xl font-bold leading-none">2019</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* NEW SECTION: OUR JOURNEY (TIMELINE) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-40">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#00AAFF] text-sm font-bold uppercase tracking-widest mb-3">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight pb-2">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent drop-shadow-sm">
              Key Milestone
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto pb-10">
          {/* Vertical Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00AAFF]/40 via-purple-500/40 to-transparent transform md:-translate-x-1/2 z-0" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative z-10 flex items-center justify-between w-full mb-12 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
              >
                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#00AAFF] border-4 border-[#111] transform -translate-x-1/2 shadow-[0_0_15px_#00AAFF] z-20" />
                
                {/* Content Card */}
                <div className="w-full pl-12 md:pl-0 md:w-5/12">
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:border-[#00AAFF]/50 hover:shadow-[0_5px_20px_rgba(0,170,255,0.1)]">
                    <span className="inline-block text-[#00AAFF] font-black text-xl mb-2">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* NEW SECTION: LIFE AT ENTRYLAB */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-32 mb-20">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#00AAFF] text-sm font-bold uppercase tracking-widest mb-3">
            Life at EntryLab
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight pb-2">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent drop-shadow-sm">
              Our Culture
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {cultureData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 transition-colors duration-300 ease-out hover:border-white/20 flex flex-col items-start"
            >
              <div 
                className="p-3 rounded-lg mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                  {item.iconExtras}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
