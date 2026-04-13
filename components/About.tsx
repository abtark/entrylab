// components/About.tsx
'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#141414]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About EntryLab</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Founded on the principle that "Where Every Search Has a Value", EntryLab is a modern technology agency dedicated to extracting meaningful insights from complex data architectures.
          </p>
          <div className="flex justify-center space-x-6 text-3xl text-gray-600">
            <i className="fa-brands fa-github hover:text-primary transition-colors cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-primary transition-colors cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-primary transition-colors cursor-pointer"></i>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
