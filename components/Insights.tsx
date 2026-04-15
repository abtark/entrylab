'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'

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
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 15, suffix: 'k+', label: 'Projects Done' },
  { value: 500, suffix: 'M+', label: 'Qualified Leads' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' }
]

// Animated Counter Component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const spring = useSpring(0, { bounce: 0, duration: 3500 })

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [spring, suffix])

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
      0{suffix}
    </span>
  )
}

export default function Insights() {
  return (
    <section id="insights" className="relative py-32 overflow-hidden">
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
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* ROW 2: Stats Section */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 md:p-12 border border-white/10 rounded-2xl md:rounded-3xl"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 text-sm md:text-lg font-medium uppercase tracking-widest mt-2 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ROW 3: Logo Marquee */}
        <div className="relative transform-gpu w-full overflow-hidden py-10" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 180, repeat: Infinity }}
          >
            {/* Render array twice for seamless infinite loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center w-[120px] md:w-[180px] shrink-0"
              >
                <i className={`${company.icon} text-4xl md:text-5xl text-white mb-4 opacity-80`}></i>
                <span className="text-white text-sm md:text-base font-medium opacity-80">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
