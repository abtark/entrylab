'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const servicesData = [
  { 
    title: "Business Growth Solutions", 
    description: "Fuel growth with targeted outreach and smart initiatives.", 
    icon: "fa-chart-line", 
    color: "#00AAFF",
    bullets: [
      "Targeted outreach for growth",
      "Boost engagement strategically",
      "Leverage actionable data",
      "Expand market reach",
      "Drive measurable results"
    ]
  },
  { 
    title: "Information Management", 
    description: "Organize and manage business data with precision.", 
    icon: "fa-database", 
    color: "#FF3366",
    bullets: [
      "Organize data efficiently",
      "Ensure accuracy",
      "Streamline workflows",
      "Support smart decisions",
      "Simplify data handling"
    ]
  },
  { 
    title: "Market Intelligence", 
    description: "Analyze market trends for smarter decisions.", 
    icon: "fa-lightbulb", 
    color: "#00FFCC",
    bullets: [
      "Track market trends",
      "Analyze competitors",
      "Spot new opportunities",
      "Make informed decisions",
      "Stay ahead of the market"
    ]
  },
  { 
    title: "Prospect Identification", 
    description: "Identify high-potential opportunities to boost sales.", 
    icon: "fa-bullseye", 
    color: "#FF9900",
    bullets: [
      "Identify high-potential leads",
      "Target the right prospects",
      "Increase conversions",
      "Strengthen sales pipeline",
      "Engage prospects effectively"
    ]
  },
  { 
    title: "Digital Insights Collection", 
    description: "Extract online data to stay ahead in the market.", 
    icon: "fa-cloud-arrow-down", 
    color: "#B829FF",
    bullets: [
      "Gather online data",
      "Monitor competitors",
      "Analyze key insights",
      "Discover trends",
      "Stay competitive"
    ]
  },
  { 
    title: "Customer Retention", 
    description: "Improve engagement and streamline sales conversion.", 
    icon: "fa-handshake", 
    color: "#00E676",
    bullets: [
      "Engage customers effectively",
      "Build lasting relationships",
      "Streamline sales processes",
      "Boost repeat business",
      "Enhance satisfaction"
    ]
  },
  { 
    title: "Revenue Acceleration", 
    description: "Boost sales with data-driven funnel optimization.", 
    icon: "fa-arrow-trend-up", 
    color: "#FFD700",
    bullets: [
      "Optimize sales funnels",
      "Use data-driven strategies",
      "Improve conversion rates",
      "Increase sales performance",
      "Maximize revenue growth"
    ]
  },
  { 
    title: "Competitive Analysis", 
    description: "Evaluate trends, competitors, and growth opportunities.", 
    icon: "fa-chess-knight", 
    color: "#FF5733",
    bullets: [
      "Evaluate market trends",
      "Assess competitor positioning",
      "Identify strategic gaps",
      "Support growth strategies",
      "Gain actionable insights"
    ]
  },
  { 
    title: "Lead Nurturing Systems", 
    description: "Convert prospects into clients with targeted processes.", 
    icon: "fa-seedling", 
    color: "#00CED1",
    bullets: [
      "Structure lead processes",
      "Deliver targeted communication",
      "Convert prospects to clients",
      "Build long-term loyalty",
      "Increase retention rates"
    ]
  }
]

const TiltFlipCard = ({ service, index }: { service: typeof servicesData[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const tiltRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  useEffect(() => {
    if (isFlipped) {
      x.set(0)
      y.set(0)
    }
  }, [isFlipped, x, y])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ 
        rotateX, 
        rotateY: tiltRotateY, 
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      className="group relative transform-gpu h-[260px] w-full cursor-pointer will-change-transform z-10 hover:z-20"
    >
      <motion.div
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          filter: isFlipped ? ["blur(0px)", "blur(3px)", "blur(0px)"] : ["blur(0px)", "blur(3px)", "blur(0px)"]
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
      >
        {/* FRONT FACE (Original Design) */}
        <div
          className="absolute inset-0 isolate w-full h-full p-6 md:p-8 rounded-2xl overflow-hidden bg-[#181818] border flex flex-col justify-center items-center text-center transition-colors duration-300 group-hover:border-transparent"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            '--theme-color': service.color,
            borderColor: `${service.color}60`
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[var(--theme-color)]" />
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-black/20 backdrop-blur-md" />
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_0_30px_var(--theme-color)] pointer-events-none rounded-2xl" />
          <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out z-10 skew-x-[-30deg]" />

          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center transform translate-z-[40px]">
            <div className="flex flex-col items-center transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-6">
              <i className={`fa-solid ${service.icon} text-5xl mb-4 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}></i>
              <h3 className="text-xl font-bold transition-colors duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {service.title}
              </h3>
            </div>
            <div className="absolute bottom-2 left-0 w-full px-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] delay-75">
              <p className="text-white/95 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* BACK FACE (Flipped Content) */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl p-5 md:p-6 flex flex-col justify-center shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: service.color
          }}
        >
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: isFlipped ? 0.2 : 0 }}
              className="flex items-center gap-3 mb-4 pb-3 md:pb-4 border-b border-white/30"
            >
              <i className={`fa-solid ${service.icon} text-2xl md:text-3xl text-white drop-shadow-md`}></i>
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold text-white leading-tight text-left drop-shadow-sm">
                {service.title}
              </h3>
            </motion.div>
            
            <div className="flex flex-col gap-2 md:gap-2.5">
              {service.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: isFlipped ? 0.3 + (i * 0.08) : 0 }}
                  className="flex items-start gap-2.5 md:gap-3"
                >
                  <i className="fa-solid fa-check text-white mt-[3px] text-xs md:text-sm shrink-0 drop-shadow-sm"></i>
                  <span className="text-white text-xs md:text-sm text-left leading-snug font-medium drop-shadow-sm">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#111111]">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <TiltFlipCard 
              key={service.title} 
              service={service} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
