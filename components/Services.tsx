'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const servicesData = [
  { 
    title: "Business Growth Solutions", 
    description: "Fuel growth with targeted outreach and smart initiatives.", 
    fullDescription: "Fuel business growth with targeted outreach, data insights, and strategic initiatives that increase engagement and drive results.",
    image: "https://iili.io/BeiIFYF.jpg",
    icon: "fa-chart-line", 
    color: "#00AAFF" 
  },
  { 
    title: "Information Management", 
    description: "Organize and manage business data with precision.", 
    fullDescription: "Seamlessly organize, manage, and input critical business data with accuracy, ensuring efficiency and better decision-making.",
    image: "https://iili.io/BeiGoru.jpg",
    icon: "fa-database", 
    color: "#FF3366" 
  },
  { 
    title: "Market Intelligence", 
    description: "Analyze market trends for smarter decisions.", 
    fullDescription: "Gather and analyze key market trends to support informed decisions, identify opportunities, and stay ahead of competition.",
    image: "https://iili.io/BeikVLJ.jpg",
    icon: "fa-lightbulb", 
    color: "#00FFCC" 
  },
  { 
    title: "Prospect Identification", 
    description: "Identify high-potential opportunities to boost sales.", 
    fullDescription: "Identify, target, and engage high-potential prospects to boost conversions, strengthen pipelines, and drive sales growth.",
    image: "https://iili.io/Bes24DP.jpg",
    icon: "fa-bullseye", 
    color: "#FF9900" 
  },
  { 
    title: "Digital Insights Collection", 
    description: "Extract online data to stay ahead in the market.", 
    fullDescription: "Extract and analyze valuable online data to gain insights, monitor competitors, and maintain a competitive edge.",
    image: "https://iili.io/BesAqDg.jpg",
    icon: "fa-cloud-arrow-down", 
    color: "#B829FF" 
  },
  { 
    title: "Customer Retention", 
    description: "Improve engagement and streamline sales conversion.", 
    fullDescription: "Enhance customer engagement and streamline sales processes to improve efficiency, build relationships, and increase conversions.",
    image: "https://iili.io/Bes19s9.jpg",
    icon: "fa-handshake", 
    color: "#00E676" 
  },
  { 
    title: "Revenue Acceleration", 
    description: "Boost sales with data-driven funnel optimization.", 
    fullDescription: "Apply data-driven strategies to boost sales performance, optimize funnels, and improve overall conversion rates effectively.",
    image: "https://iili.io/BesSvtt.jpg",
    icon: "fa-arrow-trend-up", 
    color: "#FFD700" 
  },
  { 
    title: "Competitive Analysis", 
    description: "Evaluate trends, competitors, and growth opportunities.", 
    fullDescription: "Evaluate market trends, competitor positioning, and opportunities to develop strategies that support sustainable business growth.",
    image: "https://iili.io/Besmvbn.jpg",
    icon: "fa-chess-knight", 
    color: "#FF5733" 
  },
  { 
    title: "Lead Nurturing Systems", 
    description: "Convert prospects into clients with targeted processes.", 
    fullDescription: "Use structured processes and targeted communication to nurture prospects and convert them into long-term loyal clients.",
    image: "https://iili.io/BeLqB0F.jpg",
    icon: "fa-seedling", 
    color: "#00CED1" 
  }
]

// Helper Component for Typing Effect
const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    setDisplayedText("")
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(intervalId)
    }, 35)

    return () => clearInterval(intervalId)
  }, [text])

  return <span>{displayedText}</span>
}

// Helper Component for 3D Tilt Effect
const TiltCard = ({ service, index, onClick }: { service: typeof servicesData[0], index: number, onClick: () => void }) => {
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
      onClick={onClick}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        '--theme-color': service.color,
        borderColor: `${service.color}60`
      } as React.CSSProperties}
      className="group relative isolate transform-gpu h-[260px] w-full p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#181818] border flex flex-col justify-center items-center text-center will-change-transform hover:scale-[1.03] hover:border-transparent"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[var(--theme-color)]" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-black/20 backdrop-blur-md" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 shadow-[0_0_30px_var(--theme-color)] pointer-events-none rounded-2xl" />
      <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out z-10 skew-x-[-30deg]" />

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center transform translate-z-[40px]">
        <div className="flex flex-col items-center transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-10">
          <i className={`fa-solid ${service.icon} text-6xl mb-6 transition-all duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]`}></i>
          <h3 className="text-2xl font-bold transition-colors duration-500 text-[var(--theme-color)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {service.title}
          </h3>
        </div>
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
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null)
    }

    if (selectedService) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

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
            <TiltCard 
              key={service.title} 
              service={service} 
              index={i} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md will-change-transform transform-gpu"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: selectedService.color,
                boxShadow: `0 0 40px ${selectedService.color}80`
              }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 text-white will-change-transform transform-gpu"
            >
              {/* Optimized Small Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors z-[60] text-white"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>

              {/* LEFT SIDE: Stable Layout with Fixed Text Container */}
              <div className="w-full md:w-1/3 flex flex-col justify-start mt-4 md:mt-0 md:pt-6">
                <i className={`fa-solid ${selectedService.icon} text-5xl md:text-6xl mb-6 drop-shadow-md text-white`}></i>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md text-white">
                  {selectedService.title}
                </h3>
                {/* Fixed height prevents upward layout shift as text types */}
                <div className="text-white/95 text-lg leading-relaxed font-medium h-[120px] md:h-[180px]">
                  <TypingEffect text={selectedService.fullDescription} />
                </div>
              </div>

              {/* RIGHT SIDE: Image */}
              <div className="w-full md:w-2/3 h-[250px] sm:h-[350px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl shrink-0">
                <div className="absolute inset-0 bg-black/10 z-10 rounded-2xl"></div>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
