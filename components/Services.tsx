'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const servicesData = [
  { 
    title: "Business Growth Solutions", 
    description: "Fuel business growth with targeted customer outreach and strategic growth initiatives.", 
    icon: "fa-chart-line", 
    color: "#00AAFF" 
  },
  { 
    title: "Information Management", 
    description: "Seamlessly organize and input critical business data with precision and efficiency.", 
    icon: "fa-database", 
    color: "#FF3366" 
  },
  { 
    title: "Market Intelligence", 
    description: "Gather and analyze key market trends to inform strategic business decisions.", 
    icon: "fa-lightbulb", 
    color: "#00FFCC" 
  },
  { 
    title: "Prospect Identification", 
    description: "Identify and engage high-potential opportunities to drive sales success.", 
    icon: "fa-bullseye", 
    color: "#FF9900" 
  },
  { 
    title: "Digital Insights Collection", 
    description: "Extract valuable data from online platforms to stay ahead in the industry.", 
    icon: "fa-cloud-arrow-down", 
    color: "#B829FF" 
  },
  { 
    title: "Customer Retention Strategy", 
    description: "Enhance customer engagement and streamline the sales process for maximum conversion.", 
    icon: "fa-handshake", 
    color: "#00E676" 
  },
  { 
    title: "Revenue Acceleration Strategies", 
    description: "Data-driven methods to boost sales performance, optimize funnels, and increase conversion efficiency.", 
    icon: "fa-arrow-trend-up", 
    color: "#FFD700" 
  },
  { 
    title: "Competitive Landscape Analysis", 
    description: "In-depth evaluation of industry trends, competitor positioning, and emerging opportunities for strategic advantage.", 
    icon: "fa-chess-knight", 
    color: "#FF5733" 
  },
  { 
    title: "Lead Nurturing Systems", 
    description: "Structured engagement processes to convert prospects into long-term clients through targeted communication and automation.", 
    icon: "fa-seedling", 
    color: "#00CED1" 
  }
]

// Helper Component for 3D Tilt Effect
const TiltCard = ({ service, index }: { service: typeof servicesData[0], index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        '--theme-color': service.color,
        borderColor: service.color,
        borderWidth: '1px',
        borderStyle: 'solid'
      } as React.CSSProperties}
      className="group relative h-full p-8 rounded-2xl cursor-pointer overflow-hidden transition-colors duration-500 bg-[#1c1c1c] flex flex-col justify-center items-center text-center shadow-lg"
    >
      {/* Dynamic Background that reveals on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[var(--theme-color)]" />
      
      {/* Shine Sweep Effect */}
      <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out z-20 skew-x-[-30deg]" />

      {/* Content wrapper with z-index to sit above the background */}
      <div className="relative z-10 flex flex-col items-center transform translate-z-[50px]">
        
        {/* Icon */}
        <i className={`fa-solid ${service.icon} text-5xl mb-6 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}></i>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-0 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
          {service.title}
        </h3>

        {/* Description (Height Animation) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-full">
          <div className="overflow-hidden">
            <p className="text-[#f8f8f8] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#111111]">
      <div className="relative z-20 container mx-auto px-6">
        {/* Animated Gradient Title */}
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
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
