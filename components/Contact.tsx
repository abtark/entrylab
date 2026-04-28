'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 150) {
      setMessage(e.target.value)
    }
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#111111] overflow-hidden z-0">
      
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 bg-[#00AAFF] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-purple-500 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* HEADING SECTION */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={textRevealVariants} className="overflow-hidden">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-l from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] text-transparent bg-clip-text pb-2"
              style={{ animation: 'gradient 4s linear infinite' }}
            >
              Contact Us
            </h2>
          </motion.div>
          <motion.div variants={textRevealVariants} className="w-16 h-[2px] bg-[#00AAFF] mt-2 rounded-full shadow-[0_0_10px_rgba(0,170,255,0.6)]" />
        </motion.div>

        {/* TOP 3 COLUMNS SECTION */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Column 1 */}
          <motion.div variants={textRevealVariants} className="flex flex-col">
            <h3 className="text-5xl md:text-6xl font-black text-[#00AAFF] mb-4 drop-shadow-sm tracking-tight">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
              We'd love to hear from you. Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={textRevealVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00AAFF]/10 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-location-dot text-[#00AAFF]"></i>
              </div>
              <h4 className="text-xl font-bold text-[#00AAFF] drop-shadow-sm">
                Our Address
              </h4>
            </div>
            <div>
              <p className="text-gray-400 text-sm leading-relaxed">Chuna Factory Moor, Artillery Road</p>
              <p className="text-gray-400 text-sm leading-relaxed">Chittagong, Bangladesh</p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={textRevealVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#00AAFF]/10 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-phone text-[#00AAFF]"></i>
              </div>
              <h4 className="text-xl font-bold text-[#00AAFF] drop-shadow-sm">
                Contact Info
              </h4>
            </div>
            <div>
              <p className="text-gray-400 text-sm leading-relaxed">+880 1600 123 123</p>
              <p className="text-gray-400 text-sm leading-relaxed">info@entrylab.net</p>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM 2 COLUMNS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Info Blocks */}
          <motion.div 
            className="flex flex-col justify-between h-full py-4 lg:py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Customer Support */}
            <motion.div variants={textRevealVariants} className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)]">
                <i className="fa-solid fa-headset text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Customer Support</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team is always here to help with any questions or concerns, ensuring your experience stays smooth and stress-free.
              </p>
            </motion.div>

            {/* Feedback & Suggestions */}
            <motion.div variants={textRevealVariants} className="flex flex-col items-start gap-4 mt-8 lg:mt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)]">
                <i className="fa-solid fa-comment-dots text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Feedback & Suggestions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We value your ideas and feedback, as they help us improve and create a better experience for everyone.
              </p>
            </motion.div>

            {/* Media Inquiries */}
            <motion.div variants={textRevealVariants} className="flex flex-col items-start gap-4 mt-8 lg:mt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)]">
                <i className="fa-solid fa-envelope text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Media Inquiries</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                For press and media-related inquiries, please contact us at <a href="mailto:info@entrylab.net" className="text-[#00AAFF] hover:underline transition-all">info@entrylab.net</a>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#00AAFF] mb-2">Let's Talk!</h3>
              <p className="text-gray-300 text-sm">Get in touch with us using the following form below.</p>
            </div>

            <form className="flex flex-col gap-6 flex-grow justify-between">
              
              <div className="flex flex-col gap-5">
                {/* Row 1: First and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-[#111111] border border-gray-700/60 p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors" 
                  />
                  <input 
                    type="text" 
                    placeholder="Second Name" 
                    className="w-full bg-[#111111] border border-gray-700/60 p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors" 
                  />
                </div>

                {/* Row 2: Email Input */}
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[#00AAFF]"></i>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-[#111111] border border-gray-700/60 py-4 pr-4 pl-12 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors" 
                  />
                </div>

                {/* Row 3: Phone Number Input */}
                <div className="flex border border-gray-700/60 bg-[#111111] rounded-xl focus-within:border-[#00AAFF] transition-colors overflow-hidden">
                  <div className="flex items-center px-4 border-r border-gray-700/60 text-gray-400 bg-[#151515] text-sm font-medium">
                    +880
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-transparent p-4 text-white text-sm focus:outline-none" 
                  />
                </div>

                {/* Row 4: Textarea */}
                <div className="relative">
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={4} 
                    maxLength={150}
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full bg-[#111111] border border-gray-700/60 p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors resize-none"
                  ></textarea>
                  <span className="absolute bottom-4 right-4 text-xs font-medium text-gray-500">
                    {message.length}/150
                  </span>
                </div>
              </div>

              <div className="mt-4">
                {/* Row 5: Submit Button */}
                <button 
                  type="button" 
                  className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl shadow-[0_0_15px_rgba(0,170,255,0.3)] hover:shadow-[0_0_25px_rgba(0,170,255,0.5)] transition-all"
                >
                  <i className="fa-solid fa-paper-plane text-sm"></i> Submit
                </button>

                {/* Footer Terms */}
                <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                  By contacting us, you agree to our <a href="#" className="text-white hover:text-[#00AAFF] underline transition-colors">Terms of Service</a> and <a href="#" className="text-white hover:text-[#00AAFF] underline transition-colors">Privacy Policy</a>
                </p>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
