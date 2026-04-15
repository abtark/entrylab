'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const servicesData = [
  { 
    title: "Business Growth Solutions", 
    description: "Fuel growth with targeted outreach and smart initiatives.", 
    icon: "fa-chart-line", 
    color: "#00AAFF" 
  },
  { 
    title: "Information Management", 
    description: "Organize and manage business data with precision.", 
    icon: "fa-database", 
    color: "#FF3366" 
  },
  { 
    title: "Market Intelligence", 
    description: "Analyze market trends for smarter decisions.", 
    icon: "fa-lightbulb", 
    color: "#00FFCC" 
  },
  { 
    title: "Prospect Identification", 
    description: "Identify high-potential opportunities to boost sales.", 
    icon: "fa-bullseye", 
    color: "#FF9900" 
  },
  { 
    title: "Digital Insights Collection", 
    description: "Extract online data to stay ahead in the market.", 
    icon: "fa-cloud-arrow-down", 
    color: "#B829FF" 
  },
  { 
    title: "Customer Retention", 
    description: "Improve engagement and streamline sales conversion.", 
    icon: "fa-handshake", 
    color: "#00E676" 
  },
  { 
    title: "Revenue Acceleration", 
    description: "Boost sales with data-driven funnel optimization.", 
    icon: "fa-arrow-trend-up", 
    color: "#FFD700" 
  },
  { 
    title: "Competitive Analysis", 
    description: "Evaluate trends, competitors, and growth opportunities.", 
    icon: "fa-chess-knight", 
    color: "#FF5733" 
  },
  { 
    title: "Lead Nurturing Systems", 
    description: "Convert prospects into clients with targeted processes.", 
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
        borderColor: `${service.color}60` // 60 adds slight transparency to the hex
      } as React.CSSProperties}
      className="group relative isolate transform-gpu h-[260px] w-full p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#181818] border flex flex-col justify-center items-center text-center will-change-transform hover:scale-[1.03] hover:border-transparent"
    >
      {/* 1. Base Theme Color Background (Reveals on Hover) */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[var(--theme-color)]" />
      
      {/* 2. Glassmorphism Overlay (Adds depth over the theme color) */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-black/20 backdrop-blur-md" />

      {/* 3. Soft Glow Effect (Box shadow linked to theme color) */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_0_30px_var(--theme-color)] pointer-events-none rounded-2xl" />

      {/* 4. Shine Sweep Effect */}
      <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out z-10 skew-x-[-30deg]" />

      {/* Content Wrapper */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center transform translate-z-[40px]">
        
        {/* Icon & Title Wrapper (Centered initially, moves up on hover) */}
        <div className="flex flex-col items-center transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-10">
          {/* Icon */}
          <i className={`fa-solid ${service.icon} text-6xl mb-6 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}></i>
          
          {/* Title */}
          <h3 className="text-2xl font-bold transition-colors duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {service.title}
          </h3>
        </div>

        {/* Description (Absolute positioning prevents layout shift, translates up & fades in) */}
        <div className="absolute bottom-2 left-0 w-full px-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] delay-75">
          <p className="text-white/95 leading-relaxed font-medium text-base">
            {service.description}
          </p>
        </div>

      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#111111]">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
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
