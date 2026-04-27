"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Careers() {
  const [advIndex, setAdvIndex] = useState(0);
  const [openAcc, setOpenAcc] = useState(0);

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

  const workplaceItems = [
    {
      title: "A Healthy, Focused Culture",
      desc: "Work in a calm, respectful environment where collaboration thrives, quality comes first, and long-term growth is genuinely valued.",
      bullets: [
        "Clear priorities that help you focus on meaningful, high-impact work",
        "Open communication and mutual respect across all teams",
        "Leadership that supports growth, feedback, and accountability",
        "A sustainable pace that values consistency over burnout",
      ],
    },
    {
      title: "Comfort in Your Daily Routine",
      desc: "Enjoy complimentary meals, coffee, and snacks—so you can stay energized and focused throughout your day.",
      bullets: [
        "Fresh, nutritious meals available throughout the workday",
        "Unlimited coffee, tea, and healthy snacks",
        "Clean, thoughtfully designed workspaces for better productivity",
        "Breakout areas to relax, recharge, or collaborate informally",
      ],
    },
    {
      title: "Wellness That Matters",
      desc: "Stay active and balanced with access to sports facilities that support both physical and mental well-being.",
      bullets: [
        "Fully equipped treadmill for daily fitness routines",
        "Indoor and outdoor sports facilities for recreation",
        "Wellness-focused initiatives and regular health activities",
        "A culture that encourages balance between work and personal life",
      ],
    },
    {
      title: "Stress-Free Commute",
      desc: "Take advantage of our shuttle services and convenient parking options, making your daily travel simpler and more reliable.",
      bullets: [
        "Reliable shuttle services covering key routes",
        "Safe and accessible parking for employees",
        "Coordinated schedules to reduce commute uncertainty",
        "Supportive policies that ease daily travel challenges",
      ],
    },
    {
      title: "Meaningful Rewards & Benefits",
      desc: "We recognize your commitment with festival bonuses, leave encashment, and loyalty rewards that grow with you.",
      bullets: [
        "Competitive festival bonuses to celebrate special occasions",
        "Leave encashment options for added flexibility",
        "Loyalty rewards that recognize long-term contributions",
        "Structured benefits designed for financial stability",
      ],
    },
    {
      title: "A Respectful Workplace for Everyone",
      desc: "We maintain a considerate environment with dedicated prayer spaces, allowing you to work comfortably while honoring your personal beliefs.",
      bullets: [
        "Dedicated prayer spaces for personal reflection and practice",
        "A culture that respects individual values and beliefs",
        "Policies that ensure fairness and dignity at work",
        "An environment where everyone feels comfortable and supported",
      ],
    },
  ];

  const doubledMarquee = [...marqueeImages, ...marqueeImages];

  useEffect(() => {
    const timer = setInterval(() => {
      setAdvIndex((prev) => (prev + 1) % advantages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [advantages.length]);

  const nextAdv = () => setAdvIndex((prev) => (prev + 1) % advantages.length);
  const prevAdv = () =>
    setAdvIndex((prev) => (prev - 1 + advantages.length) % advantages.length);

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden font-sans selection:bg-[#00AAFF] selection:text-white pb-24">
      
      <section className="relative pt-40 pb-16 px-6 flex flex-col items-center justify-center">
        <motion.div
          className="relative mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text drop-shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
              backgroundSize: "200% auto",
            }}
            animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
          >
            CAREER AT ENTRYLAB
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto space-y-2 text-lg md:text-xl text-neutral-300 font-medium"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>Innovators Wanted; Join the EntryLabs Revolution.</p>
        </motion.div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {coreValues.map((value, index) => (
            <MagneticItem key={`core-value-${value.title}-${index}`}>
              <motion.div
                className={`group flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl ${value.bgColor}`}
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl overflow-hidden bg-white/50 flex items-center justify-center shadow-inner"
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-sm"
                  />
                </motion.div>
                <h3 className={`text-lg md:text-xl font-bold tracking-tight text-center md:text-left ${value.textColor}`}>
                  {value.title}
                </h3>
              </motion.div>
            </MagneticItem>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed">
            Our philosophy is simple; hire great people and give them the resources and support to do their best work.
          </p>
        </motion.div>
      </section>

      <section className="py-32 relative w-full overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-80 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-80 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8 w-max will-change-transform items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 300 }}
        >
          {doubledMarquee.map((src, index) => (
            <div
              key={`marquee-img-${index}`}
              className={`relative shrink-0 w-[300px] md:w-[450px] aspect-[3/2] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${
                index % 2 === 0 ? "-translate-y-20" : "translate-y-20"
              }`}
            >
              <img
                src={src}
                alt={`EntryLab Workspace ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col text-left">
            <h4 className="text-[#00AAFF] font-semibold text-lg mb-2">
              Our Advantages
            </h4>
            <motion.h2
              className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text drop-shadow-lg capitalize"
              style={{
                backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
                backgroundSize: "200% auto",
              }}
              animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
            >
              Why Work With Us?
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevAdv}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 text-white"
              aria-label="Previous advantage"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextAdv}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 text-white"
              aria-label="Next advantage"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[480px] w-full flex items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((adv, i) => {
            const diff = (i - advIndex + advantages.length) % advantages.length;
            let position = 2; 
            if (diff === 0) position = 0; 
            else if (diff === 1) position = 1; 
            else if (diff === advantages.length - 1) position = -1;

            const isFocused = position === 0;
            const imgSrc = isFocused ? adv.icon : adv.icon.replace('.gif', '.md.gif');

            return (
              <motion.div
                key={`adv-${i}`}
                initial={false}
                animate={{
                  x: position === 0 ? "0%" : position === 1 ? "110%" : position === -1 ? "-110%" : "0%",
                  scale: position === 0 ? 1 : position === 2 ? 0.8 : 0.85,
                  opacity: position === 0 ? 1 : position === 2 ? 0 : 0.6,
                  filter: position === 0 ? "blur(0px)" : "blur(6px)",
                  zIndex: position === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute w-[320px] md:w-[420px] h-[400px] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transition-colors duration-500 ${
                  isFocused
                    ? "bg-[#F0F9FF] border border-[#00AAFF]/40 shadow-[0_10px_40px_-10px_rgba(0,170,255,0.3)]"
                    : "bg-white border border-transparent shadow-lg"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={adv.title}
                  className="w-32 h-32 mb-6 object-contain mix-blend-multiply"
                />
                <h3 className="text-2xl font-bold text-[#00AAFF] mb-4">
                  {adv.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-black tracking-tight uppercase text-transparent bg-clip-text drop-shadow-lg mb-4"
            style={{
              backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
              backgroundSize: "200% auto",
            }}
            animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
          >
            A Workplace Designed Around You
          </motion.h2>
          <p className="text-neutral-300 text-lg md:text-xl">
            We create an environment where your well-being, comfort, and growth come first—so you can do your best work every day.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workplaceItems.map((item, i) => {
            const isOpen = openAcc === i;
            return (
              <div 
                key={`workplace-${i}`} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? "bg-[#00AAFF]/10 border-l-4 border-l-[#00AAFF] border-t-white/10 border-r-white/10 border-b-white/10" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <button 
                  onClick={() => setOpenAcc(i)} 
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-[#00AAFF]" : "text-white"}`}>
                    {String(i + 1).padStart(2, '0')}. {item.title}
                  </h3>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00AAFF]" : "text-white/50"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                          {item.desc}
                        </p>
                        <ul className="space-y-3">
                          {item.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-3">
                              <svg className="shrink-0 w-6 h-6 text-[#00AAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                              </svg>
                              <span className="text-neutral-400 text-sm md:text-base">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}
