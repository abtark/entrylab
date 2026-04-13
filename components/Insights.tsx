// components/Insights.tsx
'use client'

import { motion } from 'framer-motion'

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Industry Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Unlock the power of your search data</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every query holds a pattern. At EntryLab, we dissect the complexities of search algorithms to provide you with a competitive edge.
            </p>
            <button className="btn-primary mt-4">Read Full Report</button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-gray-800"
          >
             <i className="fa-solid fa-chart-line text-8xl text-primary/50"></i>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
