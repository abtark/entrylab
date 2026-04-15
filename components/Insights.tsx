'use client'

import { useEffect, useRef } from 'react'
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

// Super Smooth Custom Counter with requestAnimationFrame
const SmoothCounter = ({ endValue, suffix }: { endValue: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const duration = 2500 // 2.5s duration
    
    // easeOutCubic easing function
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

// Magnetic Card Component
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
    
    const maxMove = 8 // Maximum pixel movement
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

export default function Insights() {
  return (
    <section id="insights" className="relative py-32 overflow-hidden">
      {/* Inline styles for custom pause-on-hover marquee */}
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
        
        {/* Animated Gradient Title */}
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

        {/* ROW 1: Content + Image */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-32">
          {/* Left Side: Text */}
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

          {/* Right Side: Image */}
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

        {/* ROW 2: Stats Section (Premium Upgrade) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-32 relative z-10">
          {stats.map((stat, i) => (
            <MagneticStatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ROW 3: Logo Marquee */}
        <div 
          className="relative transform-gpu w-full overflow-hidden py-10 group-marquee" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <div className="flex w-max animate-custom-scroll will-change-transform">
            {/* Render array twice for seamless infinite loop */}
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
