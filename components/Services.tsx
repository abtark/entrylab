'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

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

const FlipCard = ({ service, index }: { service: typeof servicesData[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full h-[300px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          filter: isFlipped ? ["blur(0px)", "blur(6px)", "blur(0px)"] : ["blur(0px)", "blur(6px)", "blur(0px)"]
        }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-[#181818] border p-6 flex flex-col justify-center items-center text-center transition-colors duration-300 hover:border-transparent overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            borderColor: `${service.color}40`
          }}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
            style={{ backgroundColor: service.color }} 
          />
          <i 
            className={`fa-solid ${service.icon} text-4xl mb-4 transition-transform duration-500 group-hover:-translate-y-1`}
            style={{ color: service.color }}
          ></i>
          <h3 
            className="text-[1.15rem] font-bold mb-3 px-2 leading-tight transition-transform duration-500 group-hover:-translate-y-1" 
            style={{ color: service.color }}
          >
            {service.title}
          </h3>
          <p className="text-white/80 text-[0.85rem] leading-relaxed px-2 transition-transform duration-500 group-hover:-translate-y-1">
            {service.description}
          </p>
        </div>

        <div
          className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: service.color
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: isFlipped ? 0.2 : 0 }}
            className="flex items-center gap-3 mb-4 pb-4 border-b border-white/20"
          >
            <i className={`fa-solid ${service.icon} text-2xl text-white`}></i>
            <h3 className="text-lg font-bold text-white leading-tight">
              {service.title}
            </h3>
          </motion.div>
          
          <div className="flex flex-col gap-2.5">
            {service.bullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: isFlipped ? 0.3 + (i * 0.08) : 0 }}
                className="flex items-start gap-3"
              >
                <i className="fa-solid fa-check text-white mt-1 text-[0.8rem] shrink-0"></i>
                <span className="text-white text-[0.85rem] text-left leading-tight font-medium">
                  {bullet}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#111111] overflow-hidden">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#00AAFF] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, i) => (
            <FlipCard 
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
