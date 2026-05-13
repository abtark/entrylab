'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h2>ENTRYLAB GALLERY</h2>
        <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4 mb-16"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-48 md:h-64 bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all flex items-center justify-center"
            >
              <i className="fa-solid fa-image text-4xl text-gray-700"></i>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
