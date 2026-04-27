"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticItemProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticItem = ({ children, className = "" }: MagneticItemProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    // Reduced multiplier from 0.15 to 0.05 for a much gentler magnetic effect
    x.set(mouseX * 0.05);
    y.set(mouseY * 0.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

export default function Careers() {
  const [advIndex, setAdvIndex] = useState(0);

  const coreValues = [
    {
      title: "Accountability",
      image: "https://iili.io/BPj2VPS.png",
      bgColor: "bg-[#FEF9C3]",
      textColor: "text-[#CA8A04]",
    },
    {
      title: "Responsibility",
      image: "https://iili.io/BPhgOUF.png",
      bgColor: "bg-[#DBEAFE]",
      textColor: "text-[#2563EB]",
    },
    {
      title: "Sustainability",
      image: "https://iili.io/BPhgrVp.png",
      bgColor: "bg-[#DCFCE7]",
      textColor: "text-[#16A34A]",
    },
    {
      title: "Transparency",
      image: "https://iili.io/BPhgmx4.png",
      bgColor: "bg-[#FFEDD5]",
      textColor: "text-[#EA580C]",
    },
  ];

  const marqueeImages = [
    "https://iili.io/BPINPee.jpg",
    "https://iili.io/BPINLzb.jpg",
    "https://iili.io/BPINDqQ.jpg",
    "https://iili.io/BPIO971.jpg",
    "https://iili.io/BPIO3hJ.jpg",
    "https://iili.io/BPIOn2I.jpg",
    "https://iili.io/BPIOAQf.jpg",
    "https://iili.io/BPIOlY7.jpg",
    "https://iili.io/BPIO1pe.jpg",
    "https://iili.io/BPIOXCx.jpg",
    "https://iili.io/BPIOkyF.jpg",
    "https://iili.io/BPIO4GR.jpg",
  ];

  const advantages = [
    {
      title: "Culture & Environment",
      desc: "A collaborative, inclusive workplace with open communication and transparent leadership that empowers every voice.",
      icon: "https://iili.io/BP8qJOQ.gif",
    },
    {
      title: "Growth & Development",
      desc: "Grow with continuous learning, mentorship, and clear career paths designed to help you reach your full potential.",
      icon: "https://iili.io/BP85bje.gif",
    },
    {
      title: "Impact & Purpose",
      desc: "Work on meaningful projects that create real-world impact and deliver lasting value to customers and communities.",
      icon: "https://iili.io/BP80bwB.gif",
    },
    {
      title: "Flexibility & Balance",
      desc: "Enjoy flexible work options and a balanced environment that supports productivity, well-being, and personal priorities.",
      icon: "https://iili.io/BP8vUN9.gif",
    },
    {
      title: "Innovation & Excellence",
      desc: "Be part of a forward-thinking team where creativity thrives and excellence drives everything we build and deliver.",
      icon: "https://iili.io/BP8rY2j.gif",
    },
    {
      title: "Recognition & Rewards",
      desc: "We value your work with fair rewards, recognition, and a culture that celebrates contributions and shared success.",
      icon: "https://iili.io/BP8QwiB.gif",
    },
  ];

  const doubledMarquee = [...marqueeImages, ...marqueeImages];

  useEffect(() => {
    const timer = setInterval(() => {
      setAdvIndex((prev) => (prev + 1) % advantages.length);
    }, 8000); // 8 seconds duration
    return () => clearInterval(timer);
  }, [advantages.length]);

  const nextAdv = () => setAdvIndex((prev) => (prev + 1) % advantages.length);
  const prevAdv = () =>
    setAdvIndex((prev) => (prev - 1 + advantages.length) % advantages.length);

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden font-sans selection:bg-[#00AAFF] selection:text-white pb-24">
      {/* 1. Header Section */}
      <section className="relative pt-40 pb-16 px-6 flex flex-col items-center justify-center">
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text drop-shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
              backgroundSize: "200% auto",
            }}
            animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          >
            CAREER AT ENTRYLAB
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto space-y-2 text-lg md:text-xl text-neutral-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>Innovators Wanted; Join the EntryLabs Revolution.</p>
          <p>
            Our philosophy is simple; hire great people and give them the resources
            and support to do their best work.
          </p>
        </motion.div>
      </section>

      {/* 2. Core Values Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <MagneticItem key={`core-value-${value.title}-${index}`}>
              <motion.div
                className={`group flex items-center gap-6 p-6 rounded-3xl cursor-pointer transition-shadow duration-500 shadow-lg hover:shadow-2xl ${value.bgColor}`}
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center shadow-inner"
                  variants={{
                    hover: { scale: 1.1 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-16 h-16 object-contain drop-shadow-md"
                  />
                </motion.div>
                <h3 className={`text-3xl font-bold tracking-tight ${value.textColor}`}>
                  {value.title}
                </h3>
              </motion.div>
            </MagneticItem>
          ))}
        </div>
      </section>

      {/* 3. Marquee Section */}
      <section className="py-32 relative w-full overflow-hidden flex flex-col justify-center">
        {/* Expanded fade out for left and right */}
        <div className="absolute top-0 bottom-0 left-0 w-48 md:w-80 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-48 md:w-80 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8 w-max will-change-transform items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120, // Extremely slow now
          }}
        >
          {doubledMarquee.map((src, index) => (
            <div
              key={`marquee-img-${index}`}
              className={`relative shrink-0 w-[300px] md:w-[450px] aspect-[3/2] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${
                index % 2 === 0 ? "-translate-y-16" : "translate-y-16" // Exaggerated vertical variation
              }`}
            >
              <img
                src={src}
                alt={`Gallery visual ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 4. Our Advantages Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col">
            <h4 className="text-[#00AAFF] font-semibold text-lg mb-2">
              Our Advantages
            </h4>
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text drop-shadow-lg"
              style={{
                backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
                backgroundSize: "200% auto",
              }}
              animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 4,
              }}
            >
              Why Work With Us?
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevAdv}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              aria-label="Previous advantage"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextAdv}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              aria-label="Next advantage"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative h-[450px] w-full flex items-center justify-center">
          {advantages.map((adv, i) => {
            // Determine relative position
            const diff = (i - advIndex + advantages.length) % advantages.length;
            let position = 2; // Hidden by default
            if (diff === 0) position = 0; // Center
            else if (diff === 1) position = 1; // Right
            else if (diff === advantages.length - 1) position = -1; // Left

            return (
              <motion.div
                key={`adv-${i}`}
                initial={false}
                animate={{
                  x:
                    position === 0
                      ? "0%"
                      : position === 1
                      ? "115%"
                      : position === -1
                      ? "-115%"
                      : "0%",
                  scale: position === 0 ? 1 : position === 2 ? 0.8 : 0.85,
                  opacity: position === 0 ? 1 : position === 2 ? 0 : 0.4,
                  filter: position === 0 ? "blur(0px)" : "blur(4px)",
                  zIndex: position === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute w-[320px] md:w-[400px] h-[350px] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transition-colors duration-500 ${
                  position === 0
                    ? "bg-[#E0F2FE]/10 border border-[#E0F2FE]/30 shadow-[0_10px_40px_-10px_rgba(0,170,255,0.2)]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <img
                  src={adv.icon}
                  alt={adv.title}
                  className="w-20 h-20 mb-6 object-contain drop-shadow-lg"
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {adv.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
