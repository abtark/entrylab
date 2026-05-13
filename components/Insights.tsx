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

const mapPattern = [
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000011111111000000000000000000000000001111111100000000000000000000000",
  "00000000000001111111111111000000000000000000001111111111111110000000000000000000",
  "00000000000111111111111111100000000000000000111111111111111111100000000000000000",
  "00000000001111111111111111110000000000000001111111111111111111110000000000000000",
  "00000000011111111111111111111000000000000011111111111111111111111100000000000000",
  "00000000111111111111111111111000000000000111111111111111111111111110000000000000",
  "00000000111111111111111111111000000000001111111111111111111111111111000000000000",
  "00000000111111111111111111110000000000000111111111111111111111111111100000000000",
  "00000000011111111111111111100000000000000011111111111111111111111111100000000000",
  "00000000001111111111111111000000000000000001111111111111111111111111000000000000",
  "00000000000111111111111110000000000000000001111111111111111111111111000000000000",
  "00000000000011111111111100000000000000000000111111111111111111111110000000000000",
  "00000000000001111111111000000000000000000000111111111111111111111100000000000000",
  "00000000000000111111110000000000000000000000011111111111111111111000000000000000",
  "00000000000000011111100000000000000000000000011111111111111111110000000000000000",
  "00000000000000001111000000000000000000000000011111111111111111100000000000000000",
  "00000000000000000110000000000000000000000000011111111111111111000000000000000000",
  "00000000000000000110000000000000000000000000011111111111111110000000000000000000",
  "00000000000000001110000000000000000000000000111111111111111100000000000000000000",
  "00000000000000001111000000000000000000000000011111111111111000000000000000000000",
  "00000000000000000111000000000000000000000000001111111111110000000000000000000000",
  "00000000000000000111100000000000000000000000000111111111110000000000001111000000",
  "00000000000000000011100000000000000000000000000011111111100000000000011111100000",
  "00000000000000000001100000000000000000000000000001111111000000000000001111100000",
  "00000000000000000001100000000000000000000000000000111110000000000000000111100000",
  "00000000000000000000100000000000000000000000000000001100000000000000000111000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000011000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000"
];

const markers = [
  { id: 'us', country: 'USA', flag: '🇺🇸', top: '35%', left: '20%' },
  { id: 'ca', country: 'Canada', flag: '🇨🇦', top: '25%', left: '22%' },
  { id: 'uk', country: 'UK', flag: '🇬🇧', top: '28%', left: '47%' },
  { id: 'fr', country: 'France', flag: '🇫🇷', top: '33%', left: '48%' },
  { id: 'se', country: 'Sweden', flag: '🇸🇪', top: '20%', left: '51%' },
  { id: 'no', country: 'Norway', flag: '🇳🇴', top: '18%', left: '49%' },
  { id: 'fi', country: 'Finland', flag: '🇫🇮', top: '18%', left: '53%' },
  { id: 'tr', country: 'Turkey', flag: '🇹🇷', top: '38%', left: '56%' },
  { id: 'ae', country: 'UAE', flag: '🇦🇪', top: '45%', left: '61%' },
  { id: 'in', country: 'India', flag: '🇮🇳', top: '48%', left: '68%' },
  { id: 'bd', country: 'Bangladesh', flag: '🇧🇩', top: '47%', left: '71%' },
  { id: 'ng', country: 'Nigeria', flag: '🇳🇬', top: '55%', left: '49%' },
  { id: 'za', country: 'South Africa', flag: '🇿🇦', top: '75%', left: '52%' },
  { id: 'sg', country: 'Singapore', flag: '🇸🇬', top: '60%', left: '76%' },
  { id: 'au', country: 'Australia', flag: '🇦🇺', top: '75%', left: '85%' },
];

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
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
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
      <div className="flex flex-col">
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
      className={`inline-block ${className}`}
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
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 mb-32">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00AAFF]/10 via-purple-500/5 to-pink-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      
      <div className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        
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

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="w-full flex flex-col items-center text-center space-y-5 text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-4xl min-h-[220px] md:min-h-[160px]">
          {paragraphs.map((p, pIndex) => (
            <p key={pIndex} className={p.highlight ? "pt-2 font-semibold text-xl md:text-2xl tracking-wide text-[#00AAFF]" : ""}>
              <ScrollRevealPro delay={pIndex * 0.1}>{p.text}</ScrollRevealPro>
            </p>
          ))}
        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        <div className="h-[40px] flex items-center justify-center">
          <motion.div 
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
        </div>

      </div>
    </div>
  )
}

const GlobalWorldMap = () => {
  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden flex flex-col items-center mb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00AAFF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-7xl mx-auto">
        <h4 className="text-xs font-semibold tracking-[0.2em] text-[#00AAFF] uppercase drop-shadow-[0_0_8px_rgba(0,170,255,0.5)] mb-6">
          Around The Globe
        </h4>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-[#BFE8FF] to-[#00AAFF] animate-[gradient_8s_ease_infinite] bg-[length:200%_auto] mb-2 leading-tight">
          Powering Innovation for Businesses
        </h2>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00AAFF] drop-shadow-[0_0_15px_rgba(0,170,255,0.4)] text-center mb-20 md:mb-28">
          Across the globe
        </h2>

        <div className="relative w-full max-w-5xl aspect-video md:aspect-[2/1] mx-auto">
          <svg 
            viewBox="0 0 80 31" 
            className="w-full h-full opacity-90" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mapPattern.map((row, i) =>
              row.split('').map((dot, j) => {
                if (dot === '1') {
                  const delay = (i * j) % 4;
                  const isHighlighted = (i + j) % 7 === 0;
                  return (
                    <circle
                      key={`${i}-${j}`}
                      cx={j}
                      cy={i}
                      r={0.4}
                      fill={isHighlighted ? 'rgba(203,213,225,0.42)' : 'rgba(148,163,184,0.22)'}
                      className="animate-[pulse_3s_ease-in-out_infinite]"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  );
                }
                return null;
              })
            )}
          </svg>

          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute group flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-2xl shadow-[0_0_15px_rgba(0,170,255,0.1)] hover:shadow-[0_0_25px_rgba(0,170,255,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-out cursor-pointer will-change-transform z-20"
              style={{ top: marker.top, left: marker.left }}
            >
              <span className="text-xs md:text-sm">{marker.flag}</span>
              <span className="hidden md:block text-[10px] md:text-xs font-medium text-white tracking-wide">
                {marker.country}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00AAFF] animate-pulse shadow-[0_0_5px_#00AAFF]"></div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </div>
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
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Industry Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
        
        <GlobalWorldMap />

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
