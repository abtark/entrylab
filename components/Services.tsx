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

const processData = [
  {
    title: "Understand",
    description: "We analyze requirements and data specifications thoroughly.",
    icon: "fa-brain",
    color: "#00AAFF"
  },
  {
    title: "Plan",
    description: "Create a detailed project plan with timelines and quality benchmarks.",
    icon: "fa-clipboard-list",
    color: "#00E676"
  },
  {
    title: "Execute",
    description: "Our skilled team processes data with precision and care.",
    icon: "fa-cogs",
    color: "#00AAFF"
  },
  {
    title: "Deliver",
    description: "Quality-checked output delivered on time with full support.",
    icon: "fa-paper-plane",
    color: "#00E676"
  }
]

const TiltFlipCard = ({ 
  service, 
  index, 
  isFlipped, 
  onClick 
}: { 
  service: typeof servicesData[0], 
  index: number,
  isFlipped: boolean,
  onClick: () => void 
}) => {
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
      onClick={onClick}
      style={{ 
        rotateX, 
        rotateY: tiltRotateY, 
        perspective: 1200 
      }}
      className={`group relative h-[250px] w-full cursor-pointer z-10 transition-all duration-300 ${isFlipped ? 'z-50 scale-105' : 'hover:z-20 hover:scale-[1.03]'}`}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-2xl shadow-xl"
      >
        <div
          className="absolute inset-0 w-full h-full p-6 rounded-2xl overflow-hidden bg-[#181818] border flex flex-col justify-center items-center text-center transition-colors duration-300 group-hover:border-transparent"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderColor: `${service.color}60`,
            '--theme-color': service.color
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[var(--theme-color)] pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-black/30 backdrop-blur-sm pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_0_30px_var(--theme-color)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out z-10 skew-x-[-30deg] pointer-events-none" />

          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-4">
              <i className={`fa-solid ${service.icon} text-5xl mb-3 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}></i>
              <h3 className="!text-xl font-bold transition-colors duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] !bg-none !pb-0 !animate-none">
                {service.title}
              </h3>
            </div>
            <div className="absolute bottom-5 left-0 w-full px-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] delay-75">
              <p className="text-white/95 leading-tight font-medium text-sm">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full rounded-2xl p-5 flex flex-col justify-start overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: service.color
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-0 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10 w-full h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: isFlipped ? 0.3 : 0 }}
              className="flex items-center gap-3 mb-3 pb-3 border-b border-white/30"
            >
              <i className={`fa-solid ${service.icon} text-[1.3rem] text-white drop-shadow-md`}></i>
              <h3 className="!text-[1.05rem] font-bold text-white text-left leading-tight drop-shadow-md !bg-none !pb-0 !animate-none">
                {service.title}
              </h3>
            </motion.div>
            
            <div className="flex flex-col gap-2.5 flex-grow justify-center">
              {service.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: isFlipped ? 0.4 + (i * 0.08) : 0 }}
                  className="flex items-start gap-2.5"
                >
                  <i className="fa-solid fa-check text-white mt-[3px] text-[0.7rem] shrink-0 drop-shadow-sm"></i>
                  <span className="text-white text-[0.8rem] text-left leading-tight font-medium drop-shadow-sm">
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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative pt-12 pb-12 bg-[#111111] overflow-hidden">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h5>WHAT WE OFFER</h5>
          <h2>OUR SERVICES</h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4 mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive research and data processing services, customized to meet specific business needs. Focused on delivering precise insights and maximizing efficiency for better decision-making.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, i) => (
            <TiltFlipCard 
              key={service.title} 
              service={service} 
              index={i} 
              isFlipped={flippedIndex === i}
              onClick={() => {
                if (flippedIndex !== null && flippedIndex !== i) {
                   setFlippedIndex(null);
                   setTimeout(() => {
                       setFlippedIndex(i);
                   }, 300);
                } else {
                   setFlippedIndex(flippedIndex === i ? null : i);
                }
              }}
            />
          ))}
        </div>

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h5>HOW WE WORK</h5>
            <h2>OUR PROCESS</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processData.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.2, delayChildren: i * 0.1 } 
                  }
                }}
                className="group p-6 md:p-8 rounded-2xl border flex flex-col items-start bg-[#181818] transition-all duration-300 hover:shadow-[0_0_15px_var(--hover-glow)] hover:-translate-y-1"
                style={{ 
                  borderColor: `${step.color}30`,
                  '--hover-glow': `${step.color}40`
                } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    variants={{ 
                      hidden: { opacity: 0, scale: 0.5 }, 
                      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } } 
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <i className={`fa-solid ${step.icon} text-xl transition-transform duration-300 group-hover:scale-125`} style={{ color: step.color }}></i>
                  </motion.div>
                  
                  <motion.h3 
                    variants={{ 
                      hidden: { opacity: 0, x: -20 }, 
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } 
                    }}
                    className="!text-xl font-bold !pb-0 !bg-none !animate-none transition-colors duration-300"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  variants={{ 
                    hidden: { opacity: 0, y: 20 }, 
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } 
                  }}
                  className="text-white/80 leading-relaxed text-sm text-left"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 max-w-3xl mx-auto flex flex-col items-center"
        >
          <h3>Need a Custom Solution?</h3>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-3xl leading-relaxed">
            We tailor our services to match your exact requirements. Let's discuss your project today.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="global-btn group relative overflow-hidden w-[210px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#00AAFF] to-[#0088CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            <span className="relative z-10 !translate-x-0 group-hover:!-translate-x-3 transition-transform duration-500">Get a Free Quote</span> 
            <svg 
              className="!absolute right-4 opacity-0 translate-y-3 translate-x-3 group-hover:opacity-100 group-hover:!translate-y-0 group-hover:!translate-x-0 transition-all duration-500 text-white w-5 h-5 z-10" 
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
            >
              <path d="M5 12h14" strokeDasharray="2 4" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/80 text-sm md:text-base">
            <span>Find us on these platforms:</span>
            <div className="flex items-center gap-0">
              <span 
                onClick={() => window.open('https://www.linkedin.com/company/entrylab', '_blank')} 
                className="group relative text-[#00AAFF] cursor-pointer flex items-center pl-5 pr-1"
              >
                <span className="transition-all duration-300 group-hover:-translate-x-4 group-hover:underline">LinkedIn</span>
                <i className="fa-brands fa-linkedin absolute right-1 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
              </span>
              <span className="text-[#00AAFF] text-xl leading-none">&bull;</span>
              <span 
                onClick={() => window.open('https://www.facebook.com/EntryLab', '_blank')} 
                className="group relative text-[#00AAFF] cursor-pointer flex items-center pl-5 pr-1"
              >
                <span className="transition-all duration-300 group-hover:-translate-x-4 group-hover:underline">Facebook</span>
                <i className="fa-brands fa-facebook absolute right-1 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
              </span>
              <span className="text-[#00AAFF] text-xl leading-none">&bull;</span>
              <span 
                onClick={() => window.open('https://rocketreach.co/entrylab-profile_b704b6e0c514e80c', '_blank')} 
                className="group relative text-[#00AAFF] cursor-pointer flex items-center pl-5 pr-1"
              >
                <span className="transition-all duration-300 group-hover:-translate-x-4 group-hover:underline">RocketReach</span>
                <i className="fa-solid fa-rocket absolute right-1 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></i>
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
