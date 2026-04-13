// components/Services.tsx
'use client'

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#141414]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors group"
            >
              <i className="fa-solid fa-server text-4xl text-primary mb-6 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Data Solutions {item}</h3>
              <p className="text-gray-400">Transforming search capabilities with advanced algorithms and modern tech stacks.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
