'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const companies = [
  { name: 'Apple', icon: 'fa-brands fa-apple' },
  { name: 'Microsoft', icon: 'fa-brands fa-windows' },
  { name: 'Google', icon: 'fa-brands fa-google' },
  { name: 'Amazon', icon: 'fa-brands fa-amazon' },
  { name: 'RedHat', icon: 'fa-brands fa-redhat' },
  { name: 'Meta', icon: 'fa-brands fa-meta' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
  { name: 'Airbnb', icon: 'fa-brands fa-airbnb' },
  { name: 'Shopify', icon: 'fa-brands fa-shopify' },
  { name: 'Visa', icon: 'fa-brands fa-cc-visa' },
  { name: 'DHL', icon: 'fa-brands fa-dhl' },
  { name: 'PayPal', icon: 'fa-brands fa-paypal' },
  { name: 'Dropbox', icon: 'fa-brands fa-dropbox' },
  { name: 'Atlassian', icon: 'fa-brands fa-atlassian' },
  { name: 'eBay', icon: 'fa-brands fa-ebay' },
  { name: 'FedEx', icon: 'fa-brands fa-fedex' },
  { name: 'Stripe', icon: 'fa-brands fa-stripe' },
  { name: 'Etsy', icon: 'fa-brands fa-etsy' },
  { name: 'CloudFlare', icon: 'fa-brands fa-cloudflare' },
  { name: 'Slack', icon: 'fa-brands fa-slack' },
  { name: 'Lyft', icon: 'fa-brands fa-lyft' },
  { name: 'Playstation', icon: 'fa-brands fa-playstation' },
  { name: 'Houzz', icon: 'fa-brands fa-houzz' },
  { name: 'Salesforce', icon: 'fa-brands fa-salesforce' },
  { name: 'Twitch', icon: 'fa-brands fa-twitch' },
  { name: 'Wix', icon: 'fa-brands fa-wix' },
  { name: 'Intercom', icon: 'fa-brands fa-intercom' },
  { name: 'Mailchimp', icon: 'fa-brands fa-mailchimp' },
  { name: 'RedRiver', icon: 'fa-brands fa-red-river' },
  { name: 'Angellist', icon: 'fa-brands fa-angellist' }
]

const stats = [
  { value: 7, suffix: '+', label: 'Years of Experience', image: 'https://iili.io/Bka13Dg.png' },
  { value: 15, suffix: 'k+', label: 'Projects Done', image: 'https://iili.io/Bka0QDu.png' },
  { value: 500, suffix: 'M+', label: 'Qualified Leads', image: 'https://iili.io/Bka0rKl.png' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', image: 'https://iili.io/Bka0c91.png' }
]

const paragraphs = [
  {
    text: 'Founded on the principle that "Where Every Search Has a Value", EntryLab is a modern technology agency dedicated to extracting meaningful insights from complex data architectures.',
    highlight: false
  },
  {
    text: 'It is a Chattogram-based R & D firm specializing in precision-driven data intelligence. We architect clarity from complexity—transforming fragmented information into strategic, decision-ready insights.',
    highlight: false
  },
  {
    text: 'Leveraging advanced research frameworks and a detail-obsessed approach, we deliver intelligence that is not just accurate, but actionable and high-impact.',
    highlight: false
  },
  {
    text: 'EntryLab—Where Every Search Has a Value',
    highlight: true
  }
]

const SmoothCounter = ({ endValue, suffix }: { endValue: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const duration = 2500
    
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const currentVal = Math.floor(easedProgress * endValue)

      if (ref.current) {
        ref.current.textContent = currentVal + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (ref.current) {
        ref.current.textContent = endValue + suffix
      }
    }

    requestAnimationFrame(animate)
  }, [inView, endValue, suffix])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold tracking-tight">
      0{suffix}
    </span>
  )
}

const MagneticStatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const maxMove = 8
    const moveX = ((e.clientX - centerX) / (rect.width / 2)) * maxMove
    const moveY = ((e.clientY - centerY) / (rect.height / 2)) * maxMove
    
    x.set(moveX)
    y.set(moveY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group flex flex-row items-center gap-6 p-6 bg-white rounded-2xl border border-gray-200 cursor-pointer will-change-transform transform-gpu transition-shadow transition-colors duration-300 hover:shadow-[0_0_30px_rgba(0,170,255,0.35)] hover:border-transparent"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0">
        <img 
          src={stat.image} 
          alt={stat.label} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="flex flex-col text-gray-900">
        <SmoothCounter endValue={stat.value} suffix={stat.suffix} />
        <span className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-wider mt-1">
          {stat.label}
        </span>
      </div>
    </motion.div>
  )
}

const MagneticItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    x.set(((e.clientX - centerX) / (width / 2)) * 6)
    y.set(((e.clientY - centerY) / (height / 2)) * 6)
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
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}

const ScrollRevealPro = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number
}) => {
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
      className={`inline-block w-full ${className}`}
    >
      {children}
    </motion.span>
  )
}

const InsightsContainer = () => {
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.15 },
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

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 md:py-12 mb-20 md:mb-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00AAFF]/10 via-purple-500/5 to-pink-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        
        <div className="w-full mb-6 flex justify-center">
          <MagneticItem className="w-full max-w-md relative overflow-hidden rounded-2xl drop-shadow-2xl z-10 bg-black/20">
            <img 
              src="https://iili.io/B8oQEyg.png" 
              alt="Insights Context" 
              className="w-full h-auto object-contain rounded-2xl relative z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00AAFF]/20 via-white/10 to-[#00AAFF]/20 bg-[length:200%_auto] animate-[gradient-r2l_4s_linear_infinite] mix-blend-overlay pointer-events-none z-10 rounded-2xl" />
          </MagneticItem>
        </div>

        <div className="w-full h-px bg-white/10 mb-6 md:mb-8" />

        <div className="w-full flex flex-col items-center text-center space-y-4 md:space-y-5 text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-4xl min-h-[180px] md:min-h-[140px]">
          {paragraphs.map((p, pIndex) => (
            p.highlight ? (
              <h5 key={pIndex} className="pt-2 text-center w-full !text-lg md:!text-xl">
                <ScrollRevealPro delay={pIndex * 0.1}>{p.text}</ScrollRevealPro>
              </h5>
            ) : (
              <p key={pIndex}>
                <ScrollRevealPro delay={pIndex * 0.1}>{p.text}</ScrollRevealPro>
              </p>
            )
          ))}
        </div>

        <div className="w-full h-px bg-white/10 my-6 md:mb-8" />

        <div className="h-[40px] flex items-center justify-center">
          <motion.div 
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8"
          >
            <motion.button 
              variants={iconVariants}
              onClick={() => window.open("https://www.facebook.com/EntryLab", "_blank")}
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform cursor-pointer appearance-none bg-transparent border-none p-0 outline-none"
            >
              <i className="fa-brands fa-facebook"></i>
            </motion.button>
            
            <motion.button 
              variants={iconVariants}
              onClick={() => window.open("https://www.linkedin.com/company/entrylab", "_blank")}
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform cursor-pointer appearance-none bg-transparent border-none p-0 outline-none"
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.button>
            
            <motion.button 
              variants={iconVariants}
              onClick={() => window.open("https://rocketreach.co/entrylab-profile_b704b6e0c514e80c", "_blank")}
              className="text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:text-[#00AAFF] hover:drop-shadow-[0_0_15px_rgba(0,170,255,0.8)] will-change-transform cursor-pointer appearance-none bg-transparent border-none p-0 outline-none"
            >
              <i className="fa-solid fa-rocket"></i>
            </motion.button>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

const OurPresence = () => {
  return (
    <section className="w-full relative py-12 md:py-24 text-white overflow-hidden px-6 lg:px-20 flex flex-col items-center">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-20">
          <div className="w-full xl:w-[45%]">
            <div className="flex items-center gap-4 mb-4">
              <ScrollRevealPro>
                <h5 className="!mb-0 text-[#00AAFF] tracking-[4px]">OUR PRESENCE</h5>
              </ScrollRevealPro>
              <div className="w-24 h-[2px] bg-[#00AAFF]" />
            </div>

            <ScrollRevealPro>
              <h3 className="text-[48px] sm:text-[64px] lg:text-[82px] leading-[1.02] font-extrabold mt-4 !text-left !pb-0 !bg-none !animate-none !text-white">
                Strategically Located.
                <span className="block text-[#00AAFF]">
                  Nationwide Impact.
                </span>
              </h3>
            </ScrollRevealPro>

            <ScrollRevealPro>
              <p className="mt-8 text-gray-400 text-lg leading-[2] max-w-[650px] font-medium text-left">
                EntryLab is proudly operating from key regions across Bangladesh,
                delivering innovative digital solutions to clients nationwide and
                beyond.
              </p>
            </ScrollRevealPro>

            <div className="flex flex-col sm:flex-row gap-6 mt-14">
              <div className="w-full sm:w-[190px] h-[190px] rounded-[28px] border border-white/10 bg-[#050505] p-7 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group">
                <div className="text-[#00AAFF] text-3xl transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="text-[#00AAFF] text-5xl font-bold mt-5 !text-left">
                  <SmoothCounter endValue={3} suffix="" />
                </div>
                <span className="block text-gray-300 mt-3 text-lg font-medium">Locations</span>
              </div>

              <div className="w-full sm:w-[190px] h-[190px] rounded-[28px] border border-white/10 bg-[#050505] p-7 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group">
                <div className="text-[#00AAFF] text-3xl transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="text-[#00AAFF] text-5xl font-bold mt-5 !text-left">
                  <SmoothCounter endValue={50} suffix="+" />
                </div>
                <span className="block text-gray-300 mt-3 text-lg font-medium">Experts</span>
              </div>

              <div className="w-full sm:w-[190px] h-[190px] rounded-[28px] border border-white/10 bg-[#050505] p-7 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group">
                <div className="text-[#00AAFF] text-3xl transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="text-[#00AAFF] text-5xl font-bold mt-5 !text-left">
                  <SmoothCounter endValue={100} suffix="+" />
                </div>
                <span className="block text-gray-300 mt-3 text-lg font-medium">Clients</span>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[55%] relative flex justify-center items-center mt-12 xl:mt-0">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00AAFF]/10 blur-[140px] rounded-full pointer-events-none" />

            <img
              src="https://iili.io/BpAwX9a.webp"
              alt="Bangladesh Map"
              className="relative z-10 w-full max-w-[760px] drop-shadow-[0_0_40px_rgba(0,170,255,0.35)]"
            />

            <div className="absolute top-[28%] right-[18%] z-20 bg-white text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-lg flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,170,255,0.3)]">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00AAFF] shadow-[0_0_18px_#00AAFF]" />
              Dhaka
            </div>

            <div className="absolute top-[55%] left-[26%] z-20 bg-white text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-lg flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,170,255,0.3)]">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00AAFF] shadow-[0_0_18px_#00AAFF]" />
              Barisal
            </div>

            <div className="absolute top-[58%] right-[2%] z-20 bg-white text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-lg flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,170,255,0.3)]">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00AAFF] shadow-[0_0_18px_#00AAFF]" />
              Chittagong
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
          <div className="bg-[#050505] border border-white/10 rounded-[30px] p-8 md:p-10 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group flex justify-between items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
             </div>
             <div className="flex items-start gap-4">
               <div className="text-[#00AAFF] mt-1 shrink-0">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
               </div>
               <div>
                  <h3 className="text-3xl md:text-4xl font-bold !bg-none !animate-none !text-white !pb-0 text-left">Dhaka</h3>
                  <h6 className="block text-[#00AAFF] text-base md:text-lg mt-2 font-medium">
                    Business & Client Operations
                  </h6>
                  <p className="text-gray-400 leading-[1.8] mt-4 text-sm md:text-lg">
                    House 12, Road 05, Dhanmondi
                  </p>
               </div>
             </div>
             <div className="text-[#00AAFF] opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 translate-x-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
          </div>

          <div className="bg-[#050505] border border-white/10 rounded-[30px] p-8 md:p-10 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group flex justify-between items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
             </div>
             <div className="flex items-start gap-4">
               <div className="text-[#00AAFF] mt-1 shrink-0">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
               </div>
               <div>
                  <h3 className="text-3xl md:text-4xl font-bold !bg-none !animate-none !text-white !pb-0 text-left">Barisal</h3>
                  <h6 className="block text-[#00AAFF] text-base md:text-lg mt-2 font-medium">
                    Support & Research
                  </h6>
                  <p className="text-gray-400 leading-[1.8] mt-4 text-sm md:text-lg">
                    Kawnkhali Road, Barisal
                  </p>
               </div>
             </div>
             <div className="text-[#00AAFF] opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 translate-x-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
          </div>

          <div className="bg-[#050505] border border-white/10 rounded-[30px] p-8 md:p-10 hover:border-[#00AAFF] duration-300 hover:-translate-y-2 group flex justify-between items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l10-10 10 10"></path><path d="M12 2v20"></path><path d="M2 22h20"></path></svg>
             </div>
             <div className="flex items-start gap-4">
               <div className="text-[#00AAFF] mt-1 shrink-0">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l10-10 10 10"></path><path d="M12 2v20"></path><path d="M2 22h20"></path></svg>
               </div>
               <div>
                  <h3 className="text-3xl md:text-4xl font-bold !bg-none !animate-none !text-white !pb-0 text-left">Chittagong</h3>
                  <h6 className="block text-[#00AAFF] text-base md:text-lg mt-2 font-medium">
                    Core Operations / HQ
                  </h6>
                  <p className="text-gray-400 leading-[1.8] mt-4 text-sm md:text-lg">
                    Zakir Hossain Road, Khulshi
                  </p>
               </div>
             </div>
             <div className="text-[#00AAFF] opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 translate-x-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex flex-col items-center justify-center relative w-full text-center">
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-6 md:gap-10">
             <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-l from-[#00AAFF] to-transparent max-w-xs" />
             
             <div className="flex flex-col items-center px-4">
               <div className="w-12 h-12 rounded-full border border-[#00AAFF] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,170,255,0.4)]">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
               </div>
               <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.6]">
                 Connecting innovation from <span className="text-[#00AAFF]">Dhaka</span>, <span className="text-[#00AAFF]">Barisal</span>, <span className="text-[#00AAFF]">Chittagong</span><br/>
                 to build smart solutions for a better tomorrow
               </div>
             </div>

             <div className="hidden md:block h-[2px] flex-grow bg-gradient-to-r from-[#00AAFF] to-transparent max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Insights() {
  return (
    <section id="insights" className="relative py-32 overflow-hidden bg-[#111111]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-scroll {
          animation: custom-scroll 180s linear infinite;
        }
        .group-marquee:hover .animate-custom-scroll {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2>INDUSTRY INSIGHTS</h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left"
          >
            <h3 className="mb-6 !text-left !pb-0">
              Unlock the power of search data
            </h3>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              Every query uncovers hidden patterns and intent signals. EntryLab deeply analyzes search algorithms and data complexities to deliver powerful insights and a lasting competitive advantage.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://iili.io/BeDH2IV.png" 
              alt="Search Data Insights" 
              className="w-full h-auto object-contain drop-shadow-2xl will-change-transform"
            />
          </motion.div>
        </div>

        <InsightsContainer />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-32 relative z-10">
          {stats.map((stat, i) => (
            <MagneticStatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
        
      <OurPresence />

      <div className="container mx-auto px-6 max-w-7xl pt-10">
        <div 
          className="relative transform-gpu w-full overflow-hidden py-10 group-marquee" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <div className="flex w-max animate-custom-scroll will-change-transform">
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center w-[120px] md:w-[180px] shrink-0 transition-opacity duration-300 hover:opacity-100 opacity-80 cursor-pointer"
              >
                <i className={`${company.icon} text-4xl md:text-5xl text-white mb-4`}></i>
                <span className="text-white text-sm md:text-base font-medium">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
