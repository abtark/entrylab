'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required.'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = 'Only letters (a-z) are allowed.'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required.'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Only letters (a-z) are allowed.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'Only numbers are allowed.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.message)) {
      newErrors.message = 'Only letters (a-z) and spaces are allowed.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name === 'message' && value.length > 180) return

    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log(formData)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const liquidGlassClass = "bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] rounded-3xl"

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#111111] overflow-hidden z-0">
      
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 bg-[#00AAFF] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-purple-500 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
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

        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={textRevealVariants} className="flex flex-col lg:w-[45%]">
            <h3 className="text-3xl md:text-4xl font-black text-[#00AAFF] mb-4 drop-shadow-sm tracking-tight">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
              We'd love to hear from you. Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </motion.div>

          <motion.div variants={textRevealVariants} className="flex flex-col sm:flex-row gap-10 lg:w-[50%] justify-start lg:justify-end">
            
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#00AAFF]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-location-dot text-[#00AAFF]"></i>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-[#00AAFF] drop-shadow-sm mb-2">
                  Our Address
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">Chuna Factory Moor, Artillery Road</p>
                <p className="text-gray-400 text-sm leading-relaxed">Chittagong, Bangladesh</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#00AAFF]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-phone text-[#00AAFF]"></i>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-[#00AAFF] drop-shadow-sm mb-2">
                  Contact Info
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">+880 1600 123 123</p>
                <p className="text-gray-400 text-sm leading-relaxed">info@entrylab.net</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-24">
          
          <motion.div 
            className="relative flex flex-col justify-between h-full gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#00AAFF]/30 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute -bottom-10 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

            <motion.div variants={textRevealVariants} className={`${liquidGlassClass} p-8 flex flex-col items-start gap-4 group cursor-pointer hover:border-white/30 transition-all duration-300`}>
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)] transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-headset text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Customer Support</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team is always here to help with any questions or concerns, ensuring your experience stays smooth and stress-free.
              </p>
            </motion.div>

            <motion.div variants={textRevealVariants} className={`${liquidGlassClass} p-8 flex flex-col items-start gap-4 group cursor-pointer hover:border-white/30 transition-all duration-300`}>
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)] transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-comment-dots text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Feedback & Suggestions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We value your ideas and feedback, as they help us improve and create a better experience for everyone.
              </p>
            </motion.div>

            <motion.div variants={textRevealVariants} className={`${liquidGlassClass} p-8 flex flex-col items-start gap-4 group cursor-pointer hover:border-white/30 transition-all duration-300`}>
              <div className="w-12 h-12 rounded-2xl bg-[#00AAFF]/10 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,170,255,0.1)] transition-transform duration-300 group-hover:scale-110">
                <i className="fa-solid fa-envelope text-[#00AAFF] text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Media Inquiries</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                For press and media-related inquiries, please contact us at <a href="mailto:info@entrylab.net" className="text-[#00AAFF] hover:underline transition-all">info@entrylab.net</a>
              </p>
            </motion.div>
          </motion.div>

          <div className="relative h-full flex flex-col">
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#00AAFF]/30 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute -bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

            <motion.div 
              className={`${liquidGlassClass} p-8 md:p-10 h-full flex flex-col relative z-10`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#00AAFF] mb-2">Let's Talk!</h3>
                <p className="text-gray-300 text-sm">Get in touch with us using the following form below.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col flex-grow justify-between">
                
                <div className="flex flex-col">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <div className="flex flex-col">
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name" 
                        className={`w-full bg-black/40 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors`} 
                      />
                      <div className="min-h-[24px] pt-1 pl-1">
                        <span className="text-red-500 text-xs">{errors.firstName}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name" 
                        className={`w-full bg-black/40 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors`} 
                      />
                      <div className="min-h-[24px] pt-1 pl-1">
                        <span className="text-red-500 text-xs">{errors.lastName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative">
                      <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[#00AAFF]"></i>
                      <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} py-4 pr-4 pl-12 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors`} 
                      />
                    </div>
                    <div className="min-h-[24px] pt-1 pl-1">
                      <span className="text-red-500 text-xs">{errors.email}</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className={`flex border ${errors.phone ? 'border-red-500' : 'border-white/10'} bg-black/40 rounded-xl focus-within:border-[#00AAFF] transition-colors overflow-hidden`}>
                      <div className="flex items-center px-4 border-r border-white/10 text-gray-400 bg-black/50 text-sm font-medium">
                        +880
                      </div>
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number" 
                        className="w-full bg-transparent p-4 text-white text-sm focus:outline-none" 
                      />
                    </div>
                    <div className="min-h-[24px] pt-1 pl-1">
                      <span className="text-red-500 text-xs">{errors.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative">
                      <textarea 
                        name="message"
                        placeholder="How can we help you?" 
                        rows={4} 
                        maxLength={180}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-black/40 border ${errors.message ? 'border-red-500' : 'border-white/10'} p-4 rounded-xl text-white text-sm focus:outline-none focus:border-[#00AAFF] transition-colors resize-none`}
                      ></textarea>
                      <span className="absolute bottom-4 right-4 text-xs font-medium text-gray-400">
                        {formData.message.length}/180
                      </span>
                    </div>
                    <div className="min-h-[24px] pt-1 pl-1">
                      <span className="text-red-500 text-xs">{errors.message}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl shadow-[0_0_15px_rgba(0,170,255,0.3)] hover:shadow-[0_0_25px_rgba(0,170,255,0.5)] transition-all"
                  >
                    <i className="fa-solid fa-paper-plane text-sm"></i> Submit
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                    By contacting us, you agree to our <a href="#" className="text-white hover:text-[#00AAFF] underline transition-colors">Terms of Service</a> and <a href="#" className="text-white hover:text-[#00AAFF] underline transition-colors">Privacy Policy</a>
                  </p>
                </div>

              </form>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Chuna%20factory%20moor,%2021%20Golondaz%20Rd,%20Chattogram&t=&z=18&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
          />
        </motion.div>

      </div>
    </section>
  )
}
