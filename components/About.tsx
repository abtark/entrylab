'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedNumber = ({ value, suffix = "", decimals = 0 }: AnimatedNumberProps) => {
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

interface ScrollRevealProProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollRevealPro = ({ 
  children, 
  className = "", 
  delay = 0 
}: ScrollRevealProProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay 
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "EntryLab Founded",
    description: "Started with a small team of 3 passionate data professionals."
  },
  {
    year: "2020",
    title: "First 100 Projects",
    description: "Achieved our first milestone with 100 completed projects."
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
    description: "Relocated to a modern, spacious office to support our growing team."
  },
  {
    year: "2024",
    title: "12000+ Projects",
    description: "Achieved the milestone of 12k+ projects with 99.9% accuracy."
  },
  {
    year: "2025",
    title: "Own Work Space",
    description: "New Journey — A new workspace with a beautifully designed interior."
  }
]

interface CultureItem {
  title: string;
  description: string;
  icon: ReactNode;
  iconExtras?: ReactNode;
  color: string;
}

const cultureData: CultureItem[] = [
  {
    title: "Collaborative Environment",
    description: "We grow together through collaboration, where every idea contributes to success.",
    icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
    iconExtras: <circle cx="9" cy="7" r="4" />,
    color: "#00AAFF"
  },
  {
    title: "Growth & Learning",
    description: "Continuous learning and training keep our team ahead of the curve.",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    color: "#8B5CF6"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work and fun outings help us maintain a healthy work-life balance.",
    icon: <circle cx="12" cy="12" r="10" />,
    iconExtras: <polyline points="12 6 12 12 16 14" />,
    color: "#10B981"
  },
  {
    title: "Celebrate Together",
    description: "We celebrate every milestone and festival together as one family.",
    icon: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></>,
    color: "#F59E0B"
  },
  {
    title: "Innovation First",
    description: "Creativity and innovation drive us to improve and solve challenges better.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    color: "#EF4444"
  },
  {
    title: "Open Communication",
    description: "Honest communication and transparency build trust across our workplace.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    color: "#3B82F6"
  },
  {
    title: "Trip & Tour",
    description: "Beyond work, we create meaningful memories and stronger connections together.",
    icon: <><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l5.5 4L5 15.5 2.8 15 2 16l3 3 1 .8L7.5 22l.5-1.8-.5-2.2 3.5-3.5 4 5.5c.3.5.9.6 1.3.4l1.2-1.7c.3-.3.1-.7-.2-.9z"/></>,
    color: "#EC4899"
  },
  {
    title: "Fun & Creativity",
    description: "We embrace creativity, think differently, and enjoy every step of the journey.",
    icon: <circle cx="12" cy="12" r="10" />,
    iconExtras: <><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
    color: "#14B8A6"
  },
  {
    title: "Recognition & Rewards",
    description: "Every achievement, big or small, deserves recognition and celebration.",
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    color: "#EAB308"
  }
]

const GlobalWorldMap = () => {
  return (
    <div className="relative w-full py-12 md:py-16 overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00AAFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-7xl mx-auto">
        <ScrollRevealPro><h5>Around The Globe</h5></ScrollRevealPro>
        <ScrollRevealPro><h3 className="text-center">Empowering Global Businesses</h3></ScrollRevealPro>
        <ScrollRevealPro><h4 className="mb-10 md:mb-16 text-center">Through Research & Development</h4></ScrollRevealPro>
        <div className="relative w-full flex justify-center mt-8 md:mt-12 mb-8 md:mb-12 scale-[1.15] md:scale-[1.35] lg:scale-[1.5]">
          <img 
            src="https://iili.io/BbpOJjV.webp" 
            alt="Global Map" 
            className="w-full max-w-6xl h-auto object-contain drop-shadow-[0_0_30px_rgba(0,170,255,0.15)]"
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const timelineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="about" className="relative pt-32 pb-12 bg-[#111111] overflow-hidden flex flex-col justify-center items-center z-0">
      <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#00AAFF] to-blue-500 blur-[80px] opacity-60 will-change-transform transform-gpu"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[5%] w-24 h-24 md:w-40 md:h-40 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 blur-[80px] opacity-60 will-change-transform transform-gpu"
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-20 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <h2>ABOUT ENTRYLAB</h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4"></div>
        </div>

        <p className="text-white/80 text-center max-w-2xl text-lg mb-14 mt-4">
          <ScrollRevealPro>
            We&apos;re a dedicated team of data professionals committed to delivering accuracy, speed, and value in every project we handle.
          </ScrollRevealPro>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border-[0.5px] border-[#00AAFF]/40 rounded-2xl p-8 flex flex-col items-start shadow-sm transition-all duration-300 hover:border-[#00AAFF]/80 hover:shadow-[0_0_15px_rgba(0,170,255,0.2)]">
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="!text-xl md:!text-2xl font-bold text-[#00AAFF] text-left !bg-none !text-[#00AAFF] !animate-none !pb-0">
                <ScrollRevealPro>Our Mission</ScrollRevealPro>
              </h3>
              <div className="p-4 rounded-xl bg-[#00AAFF] transition-transform duration-300 group-hover:scale-110 will-change-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-base text-left w-full">
              <ScrollRevealPro>To empower businesses worldwide with accurate, efficient, and affordable data services that drive growth and support informed decision-making.</ScrollRevealPro>
            </p>
          </div>

          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border-[0.5px] border-[#00AAFF]/40 rounded-2xl p-8 flex flex-col items-start shadow-sm transition-all duration-300 hover:border-[#00AAFF]/80 hover:shadow-[0_0_15px_rgba(0,170,255,0.2)]">
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="!text-xl md:!text-2xl font-bold text-[#00AAFF] text-left !bg-none !text-[#00AAFF] !animate-none !pb-0">
                <ScrollRevealPro>Our Vision</ScrollRevealPro>
              </h3>
              <div className="p-4 rounded-xl bg-[#00AAFF] transition-transform duration-300 group-hover:scale-110 will-change-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-base text-left w-full">
              <ScrollRevealPro>To become the most trusted data services partner globally, known for excellence in quality, innovation, and client satisfaction.</ScrollRevealPro>
            </p>
          </div>

          <div className="group bg-[#1a1a1a]/80 backdrop-blur-md border-[0.5px] border-[#00AAFF]/40 rounded-2xl p-8 flex flex-col items-start shadow-sm transition-all duration-300 hover:border-[#00AAFF]/80 hover:shadow-[0_0_15px_rgba(0,170,255,0.2)]">
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="!text-xl md:!text-2xl font-bold text-[#00AAFF] text-left !bg-none !text-[#00AAFF] !animate-none !pb-0">
                <ScrollRevealPro>Our Values</ScrollRevealPro>
              </h3>
              <div className="p-4 rounded-xl bg-[#00AAFF] transition-transform duration-300 group-hover:scale-110 will-change-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-base text-left w-full">
              <ScrollRevealPro>Accuracy, integrity, teamwork, and continuous improvement. We treat every project with the same dedication and attention to detail.</ScrollRevealPro>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-4xl bg-gradient-to-bl from-blue-500/10 via-[#00AAFF]/5 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="flex flex-col items-start text-left w-full">
            <ScrollRevealPro><h5>Our Story</h5></ScrollRevealPro>
            <ScrollRevealPro><h3>From a Small Team to a Trusted Agency</h3></ScrollRevealPro>
            
            <p className="text-white/80 leading-relaxed mb-5 max-w-lg text-sm md:text-base text-justify">
              <ScrollRevealPro>
                EntryLab was founded in 2019 with a simple mission: to provide businesses with reliable, accurate, and affordable data services. What started as a team of 3 passionate individuals in a small room has grown into a thriving agency with 50+ skilled professionals.
              </ScrollRevealPro>
            </p>
            
            <p className="text-white/80 leading-relaxed mb-5 max-w-lg text-sm md:text-base text-justify">
              <ScrollRevealPro>
                Over the years, we&apos;ve had the privilege of working with hundreds of clients from around the world, handling everything from simple data entry tasks to complex web research and data mining projects.
              </ScrollRevealPro>
            </p>
            
            <p className="text-white/80 leading-relaxed mb-12 max-w-lg text-sm md:text-base text-justify">
              <ScrollRevealPro>
                But EntryLab is more than just work &mdash; it&apos;s a family. The memories we create together, from office celebrations to team outings, are what make this journey truly special. That&apos;s why we built this space to celebrate those moments.
              </ScrollRevealPro>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <AnimatedNumber value={25} suffix="+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  <ScrollRevealPro>Team-mates</ScrollRevealPro>
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <AnimatedNumber value={99.9} suffix="%" decimals={1} />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  <ScrollRevealPro>Accuracy</ScrollRevealPro>
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
                <AnimatedNumber value={15} suffix="k+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  <ScrollRevealPro>Projects</ScrollRevealPro>
                </span>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <AnimatedNumber value={7} suffix="+" />
                <span className="text-white/60 text-sm whitespace-pre-line leading-snug">
                  <ScrollRevealPro>Years</ScrollRevealPro>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 w-full mt-8 lg:mt-0">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <img 
                src="https://iili.io/Bmld4UP.webp" 
                alt="EntryLab Team Top" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            
            <div className="relative w-full aspect-video group">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/5 relative z-10">
                <img 
                  src="https://iili.io/Bmldr0B.webp" 
                  alt="EntryLab Team Bottom" 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-gradient-to-br from-[#00AAFF] to-blue-600 text-white p-4 md:p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-110 flex flex-col items-center justify-center z-20 border border-white/20">
                <span className="text-xs md:text-sm font-medium tracking-wide uppercase mb-1">Since</span>
                <span className="text-xl md:text-3xl font-bold leading-none">2019</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-40">
        <div className="flex flex-col items-center mb-16">
          <ScrollRevealPro><h5>Our Journey</h5></ScrollRevealPro>
          <ScrollRevealPro><h3>Key Milestone</h3></ScrollRevealPro>
        </div>

        <div className="relative max-w-4xl mx-auto pb-10">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00AAFF]/40 via-blue-500/40 to-transparent transform md:-translate-x-1/2 z-0" />

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
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#00AAFF] border-4 border-[#111] transform -translate-x-1/2 shadow-[0_0_15px_#00AAFF] z-20" />
                
                <div className="w-full pl-12 md:pl-0 md:w-5/12">
                  <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:border-[#00AAFF]/50 hover:shadow-[0_5px_20px_rgba(0,170,255,0.1)]">
                    <span className="inline-block text-[#00AAFF] font-black text-xl mb-2">
                      <ScrollRevealPro>{item.year}</ScrollRevealPro>
                    </span>
                    <h4 className="!text-xl font-bold text-white mb-2 !drop-shadow-none !bg-none !animate-none">
                      <ScrollRevealPro>{item.title}</ScrollRevealPro>
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      <ScrollRevealPro>{item.description}</ScrollRevealPro>
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <GlobalWorldMap />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-16 mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-[#00AAFF]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
        
        <div className="flex flex-col items-center mb-16">
          <ScrollRevealPro><h5>Life at EntryLab</h5></ScrollRevealPro>
          <ScrollRevealPro><h3>Our Culture</h3></ScrollRevealPro>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {cultureData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#1a1a1a]/80 backdrop-blur-md border-[1px] rounded-2xl p-6 flex flex-col items-start relative z-10 transition-all duration-300 hover:shadow-[0_0_15px_var(--hover-glow)] hover:-translate-y-1"
              style={{ 
                borderColor: item.color,
                '--hover-glow': `${item.color}40`
              } as React.CSSProperties}
            >
              <div 
                className="p-3 rounded-lg mb-5 transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                  {item.iconExtras}
                </svg>
              </div>
              <h3 className="!text-lg md:!text-xl font-bold text-white mb-2 !pb-0 !bg-none !text-white !animate-none">
                <ScrollRevealPro>{item.title}</ScrollRevealPro>
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                <ScrollRevealPro>{item.description}</ScrollRevealPro>
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24 max-w-3xl mx-auto flex flex-col items-center relative z-10"
      >
        <h3>Want To Learn More About Us?</h3>
        <button 
          onClick={() => window.location.href = '/industryinsights'}
          className="global-btn group mt-8 relative overflow-hidden w-[190px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          <span className="relative z-10 !translate-x-0 group-hover:!-translate-x-3 transition-transform duration-500">Our Insights</span> 
          <svg 
            className="!absolute right-4 opacity-0 translate-y-3 translate-x-3 group-hover:opacity-100 group-hover:!translate-y-0 group-hover:!translate-x-0 transition-all duration-500 text-white w-5 h-5 z-10" 
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
          >
            <path d="M5 12h14" strokeDasharray="2 4" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

    </section>
  )
}
