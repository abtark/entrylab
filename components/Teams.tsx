'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const teamData = [
  { id: 1, name: "SM Masum", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSl1ol4.jpg" },
  { id: 2, name: "Nazmul Alam", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSlE84j.jpg" },
  { id: 3, name: "Samir Sakib", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS0ct9I.jpg" },
  { id: 4, name: "Naimul Hasnat", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS0Y6Dg.jpg" },
  { id: 5, name: "Shafayet Ullah", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS01MuI.jpg" },
  { id: 6, name: "Hridoy Sabbir", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS02hBf.jpg" },
  { id: 7, name: "Aminul Islam", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSlqAEG.jpg" },
  { id: 8, name: "Newaz Shihab", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSlEqmP.jpg" },
  { id: 9, name: "Ehshan Shakil", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSlIrxV.jpg" },
  { id: 10, name: "Abir Eman", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS0lp5B.jpg" },
  { id: 11, name: "Shahed Evan", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS0diOX.jpg" },
  { id: 12, name: "Towhid Jihad", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BS0chCb.jpg" },
  { id: 13, name: "Tariqul Rizvi", title: "**********", time: "Full-Time", type: "Onsite", img: "https://iili.io/BSlGIt9.jpg" },
  { id: 14, name: "Misbah Uddin", title: "**********", time: "Full-Time", type: "Onsite", img: "Use User Icon" },
  { id: 15, name: "Abdullah Takim", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS0lmJV.jpg" },
  { id: 16, name: "Mohammad Amin", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BSlMjse.jpg" },
  { id: 17, name: "Farshid Evan", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BSllpvS.jpg" },
  { id: 18, name: "Mahmud Omey", title: "**********", time: "Full-Time", type: "Remote", img: "Use User Icon" },
  { id: 19, name: "Ashraful Islam", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS00lm7.jpg" },
  { id: 20, name: "Abu Jafar", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BSlld1R.jpg" },
  { id: 21, name: "Emran Kutub", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS03cCb.jpg" },
  { id: 22, name: "Noman Shorif", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS0cgZg.jpg" },
  { id: 23, name: "Fardin Chowdhury", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS00p4f.jpg" },
  { id: 24, name: "Redwanul Karim", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BS0lixe.jpg" },
  { id: 25, name: "Uzzle Alam", title: "**********", time: "Full-Time", type: "Remote", img: "https://iili.io/BSlGyKb.jpg" },
  { id: 26, name: "Nusrat Jahan", title: "**********", time: "Full-Time", type: "Remote", img: "Use User Icon" },
  { id: 27, name: "Niki Rahman", title: "**********", time: "Full-Time", type: "Remote", img: "Use User Icon" },
  { id: 28, name: "Sunjia Priya", title: "**********", time: "Full-Time", type: "Remote", img: "Use User Icon" }
]

const TypingText = ({ text }: { text: string }) => {
  if (!text) return null
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

type TeamMember = typeof teamData[0]

export default function Teams() {
  const [filter, setFilter] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const filteredData = teamData.filter(m => filter === 'All' || m.type === filter)

  useEffect(() => {
    setIsMounted(true)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [filter])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const nextSlide = () => {
    if (filteredData.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % filteredData.length)
  }

  const prevSlide = () => {
    if (filteredData.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length)
  }

  // 5 Card Carousel Logic
  const getCardStyle = (offset: number) => {
    const absOffset = Math.abs(offset)
    
    if (isMobile) {
      return {
        x: `${offset * 105}%`,
        scale: offset === 0 ? 1 : 0.85,
        opacity: offset === 0 ? 1 : 0,
        zIndex: 10 - absOffset,
        pointerEvents: offset === 0 ? "auto" : "none"
      }
    }

    if (offset === 0) return { x: "0%", scale: 1, opacity: 1, zIndex: 10, pointerEvents: "auto" }
    if (offset === -1) return { x: "-60%", scale: 0.9, opacity: 1, zIndex: 9, pointerEvents: "auto" }
    if (offset === 1) return { x: "60%", scale: 0.9, opacity: 1, zIndex: 9, pointerEvents: "auto" }
    if (offset === -2) return { x: "-115%", scale: 0.8, opacity: 1, zIndex: 8, pointerEvents: "none" }
    if (offset === 2) return { x: "115%", scale: 0.8, opacity: 1, zIndex: 8, pointerEvents: "none" }
    
    return {
      x: offset > 0 ? "150%" : "-150%",
      scale: 0.7,
      opacity: 0,
      zIndex: -1,
      pointerEvents: "none"
    }
  }

  if (!isMounted) return null

  return (
    <section id="teams" className="relative py-32 bg-[#111111] overflow-hidden min-h-screen flex flex-col items-center">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-r2l {
          0% { background-position: 200% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-r2l {
          animation: gradient-r2l 4s linear infinite;
        }
      `}} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight pb-2">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-r2l bg-clip-text text-transparent drop-shadow-sm">
              Meet The Experts
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#00AAFF] rounded-full mt-2" />
        </div>

        <div className="flex gap-4 mb-16 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          {['All', 'Onsite', 'Remote'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 will-change-transform ${
                filter === f ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {filter === f && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#00AAFF]/20 border border-[#00AAFF]/50 rounded-xl"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full h-[380px] md:h-[460px] flex justify-center items-center mb-12">
          {filteredData.map((member, index) => {
            let offset = (index - currentIndex) % filteredData.length
            if (offset > Math.floor(filteredData.length / 2)) offset -= filteredData.length
            if (offset < -Math.floor(filteredData.length / 2)) offset += filteredData.length

            return (
              <motion.div
                key={member.id}
                onClick={() => {
                  if (Math.abs(offset) === 0) setSelectedMember(member)
                }}
                layoutId={`card-container-${member.id}`}
                animate={getCardStyle(offset) as any}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute w-[260px] h-[340px] md:w-[320px] md:h-[420px] p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl will-change-transform transform-gpu ${
                  Math.abs(offset) === 0 ? 'cursor-pointer hover:border-white/40' : ''
                }`}
              >
                <div className="w-full h-full relative group rounded-xl overflow-hidden bg-black/20">
                  {member.img !== "Use User Icon" ? (
                    <motion.img 
                      layoutId={`card-img-${member.id}`}
                      src={member.img} 
                      alt={member.name}
                      animate={{ scale: offset === 0 ? 1 : 0.9 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 will-change-transform transform-gpu"
                    />
                  ) : (
                    <motion.div 
                      layoutId={`card-img-${member.id}`}
                      animate={{ scale: offset === 0 ? 1 : 0.9 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full flex items-center justify-center bg-[#181818] grayscale group-hover:grayscale-0 will-change-transform transform-gpu"
                    >
                      <i className="fa-solid fa-user text-6xl text-white/20"></i>
                    </motion.div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-6 left-0 w-full text-center px-4">
                    <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-[#00AAFF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Profile
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 will-change-transform transform-gpu"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="flex gap-2">
            {filteredData.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-[#00AAFF]' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 will-change-transform transform-gpu"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md will-change-transform transform-gpu"
          >
            <motion.div
              layoutId={`card-container-${selectedMember.id}`}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-md bg-[#181818]/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col items-center shadow-[0_0_50px_rgba(0,170,255,0.15)] will-change-transform transform-gpu"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#00AAFF]/30 shadow-[0_0_20px_rgba(0,170,255,0.2)] mb-8">
                {selectedMember.img !== "Use User Icon" ? (
                  <motion.img 
                    layoutId={`card-img-${selectedMember.id}`}
                    src={selectedMember.img} 
                    alt={selectedMember.name}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.div 
                    layoutId={`card-img-${selectedMember.id}`}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center bg-[#222]"
                  >
                    <i className="fa-solid fa-user text-5xl text-white/20"></i>
                  </motion.div>
                )}
              </div>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
                className="w-full flex flex-col items-center text-center gap-4 mb-10 px-4"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 text-white w-full">
                  <i className="fa-solid fa-user text-[#00AAFF] text-xl"></i>
                  <h3 className="text-2xl font-bold tracking-wide"><TypingText text={selectedMember.name} /></h3>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 text-white/70 w-full">
                  <i className="fa-solid fa-briefcase text-[#00AAFF]"></i>
                  <p className="font-medium tracking-widest"><TypingText text={selectedMember.title} /></p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 text-white/70 w-full">
                  <i className="fa-solid fa-clock text-[#00AAFF]"></i>
                  <p className="font-medium"><TypingText text={selectedMember.time} /></p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 text-white/70 w-full">
                  <i className={`fa-solid ${selectedMember.type === 'Remote' ? 'fa-laptop' : 'fa-building'} text-[#00AAFF]`}></i>
                  <p className="font-medium"><TypingText text={selectedMember.type} /></p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                className="w-full flex items-center justify-center gap-6 pt-6 border-t border-white/10"
              >
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 transform-gpu will-change-transform">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 transform-gpu will-change-transform">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 transform-gpu will-change-transform">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
