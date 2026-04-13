// components/Teams.tsx
'use client'

import { motion } from 'framer-motion'

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-[#141414]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Meet The Experts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member, i) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden group"
            >
              <div className="h-64 bg-gray-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <i className="fa-solid fa-user-astronaut text-6xl text-gray-600 group-hover:text-primary transition-colors"></i>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-1">Expert {member}</h4>
                <p className="text-primary text-sm">Lead Engineer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
