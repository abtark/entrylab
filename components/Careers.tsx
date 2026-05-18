"use client";

import React, { useState, useEffect, MouseEvent, useCallback } from "react";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const coreValues = [
  { title: "Teamwork", image: "https://imglink.cc/cdn/t2GVeL5cqa.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Excellence", image: "https://imglink.cc/cdn/DIa1NMl9nr.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Curiosity", image: "https://imglink.cc/cdn/Hl-wVjKJro.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Passion", image: "https://imglink.cc/cdn/UB6Mel7BiN.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Accountability", image: "https://imglink.cc/cdn/EHVovoX5Eq.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Responsibility", image: "https://imglink.cc/cdn/YZRDJ6lEKa.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Sustainability", image: "https://imglink.cc/cdn/fGeN64knUa.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
  { title: "Transparency", image: "https://imglink.cc/cdn/tj4vp7hGhn.webp", bgColor: "bg-[#00AAFF]/10 border border-[#00AAFF]", textColor: "text-[#00AAFF]" },
];

const marqueeImages = [
  "https://imglink.cc/cdn/dtwwwXfhHK.webp",
  "https://imglink.cc/cdn/bd7SwuYUQ_.webp",
  "https://imglink.cc/cdn/29mZz7iHyt.webp",
  "https://imglink.cc/cdn/5iEfazbILE.webp",
  "https://imglink.cc/cdn/aJ0NbsDGiD.webp",
  "https://imglink.cc/cdn/9gedfa6hGv.webp",
  "https://imglink.cc/cdn/kyIRbf8z7n.webp",
  "https://imglink.cc/cdn/QWttKHTiBp.webp",
  "https://imglink.cc/cdn/PDbMNDxuWS.webp",
  "https://imglink.cc/cdn/T0Yxz4DrUd.webp",
  "https://imglink.cc/cdn/xjNDaC2evQ.webp",
  "https://imglink.cc/cdn/gSAN8ZGSKh.webp",
  "https://imglink.cc/cdn/KzN_FRhCak.webp"
];

const doubledMarquee = [...marqueeImages, ...marqueeImages];

const advantages = [
  { title: "Culture & Environment", desc: "A collaborative, inclusive workplace with open communication and transparent leadership that empowers every voice.", icon: "https://imglink.cc/cdn/jzm0KFV8ib.webp" },
  { title: "Growth & Development", desc: "Grow with continuous learning, mentorship, and clear career paths designed to help you reach your full potential.", icon: "https://imglink.cc/cdn/ISXPpSKD4x.webp" },
  { title: "Impact & Purpose", desc: "Work on meaningful projects that create real-world impact and deliver lasting value to customers and communities.", icon: "https://imglink.cc/cdn/k5FjG6OBdC.webp" },
  { title: "Flexibility & Balance", desc: "Enjoy flexible work options and a balanced environment that supports productivity, well-being, and personal priorities.", icon: "https://imglink.cc/cdn/hD-9IQd5EL.webp" },
  { title: "Innovation & Excellence", desc: "Be part of a forward-thinking team where creativity thrives and excellence drives everything we build and deliver.", icon: "https://imglink.cc/cdn/vBai-qrp6x.webp" },
  { title: "Recognition & Rewards", desc: "We value your work with fair rewards, recognition, and a culture that celebrates contributions and shared success.", icon: "https://imglink.cc/cdn/PPI8RAkufy.webp" },
];

const workplaceItems = [
  {
    title: "A Healthy, Focused Culture",
    desc: "Work in a calm, respectful environment where collaboration thrives, quality comes first, and long-term growth is genuinely valued.",
    image: "https://imglink.cc/cdn/NaJz-aROhT.webp",
    themeColor: "#FD7FAC",
    bullets: ["Clear priorities that help you focus on meaningful, high-impact work", "Open communication and mutual respect across all teams", "Leadership that supports growth, feedback, and accountability", "A sustainable pace that values consistency over burnout"],
  },
  {
    title: "Comfort in Your Daily Routine",
    desc: "Enjoy complimentary meals, coffee, and snacks—so you can stay energized and focused throughout your day.",
    image: "https://imglink.cc/cdn/i0CfLKeZzT.webp",
    themeColor: "#EB3E3C",
    bullets: ["Fresh, nutritious meals available throughout the workday", "Unlimited coffee, tea, and healthy snacks", "Clean, thoughtfully designed workspaces for better productivity", "Breakout areas to relax, recharge, or collaborate informally"],
  },
  {
    title: "Wellness That Matters",
    desc: "Stay active and balanced with access to sports facilities that support both physical and mental well-being.",
    image: "https://imglink.cc/cdn/lKnOOU2jM0.webp",
    themeColor: "#FBAD5C",
    bullets: ["Fully equipped treadmill for daily fitness routines", "Indoor and outdoor sports facilities for recreation", "Wellness-focused initiatives and regular health activities", "A culture that encourages balance between work and personal life"],
  },
  {
    title: "Stress-Free Commute",
    desc: "Take advantage of our convenient parking options and transport support, making your daily commute simpler and more reliable.",
    image: "https://imglink.cc/cdn/2n5yndjfby.webp",
    themeColor: "#977FFB",
    bullets: ["Transport allowance provided to help cover daily travel expenses", "Safe and accessible parking for all team-mates", "Coordinated schedules to reduce commute uncertainty", "Supportive policies that ease everyday transport challenges"],
  },
  {
    title: "Meaningful Rewards & Benefits",
    desc: "We recognize your commitment with festival bonuses, leave encashment, and loyalty rewards that grow with you.",
    image: "https://imglink.cc/cdn/KUApIVxHCf.webp",
    themeColor: "#B26FE7",
    bullets: ["Competitive festival bonuses to celebrate special occasions", "Leave encashment options for added flexibility", "Loyalty rewards that recognize long-term contributions", "Structured benefits designed for financial stability"],
  },
  {
    title: "A Respectful Workplace for Everyone",
    desc: "We maintain a considerate environment with dedicated prayer spaces, allowing you to work comfortably while honoring your personal beliefs.",
    image: "https://imglink.cc/cdn/qWBDQCp9zo.webp",
    themeColor: "#57E0FA",
    bullets: ["Dedicated prayer spaces for personal reflection and practice", "A culture that respects individual values and beliefs", "Policies that ensure fairness and dignity at work", "An environment where everyone feels comfortable and supported"],
  },
];

const hiringSteps = [
  { step: "STEP 01", title: "Initial Assessment", desc: ["After confirming your email, you will complete a one-time, time-limited assessment. This step is required to proceed.", "Successful completion enables you to submit your resume, while unsuccessful attempts will result in disqualification."] },
  { step: "STEP 02", title: "Task or Onsite Visit", desc: ["Based on the role, you may be assigned a practical task or invited for an onsite visit.", "Your performance on the task, along with your resume, will be evaluated to determine your eligibility for the next stage."] },
  { step: "STEP 03", title: "In-Person Interview", desc: ["Qualified candidates will be invited to a face-to-face interview with relevant team members.", "This discussion will focus on your experience, skills, and career aspirations, while also giving you insight into working at EntryLab."] }
];

const openPositions = [
  { dept: "Operations Management", title: "Junior Executive", details: "Onsite | Full Time | Entry Level" },
  { dept: "Information Management", title: "Research Executive", details: "Onsite | Full Time | Junior Level" },
  { dept: "Legal & Compliance", title: "HR Executive", details: "Onsite | Full Time | Senior Level" }
];

export default function Careers() {
  const [advIndex, setAdvIndex] = useState(0);
  const [openAcc, setOpenAcc] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAdvIndex((prev) => (prev + 1) % advantages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextAdv = useCallback(() => setAdvIndex((prev) => (prev + 1) % advantages.length), []);
  const prevAdv = useCallback(() => setAdvIndex((prev) => (prev - 1 + advantages.length) % advantages.length), []);

  return (
    <main id="careers" className="min-h-screen bg-neutral-950 text-white overflow-hidden font-sans selection:bg-[#00AAFF] selection:text-white pb-24 relative z-0">
      
      <section className="relative pt-40 pb-16 w-full flex flex-col items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            100% { transform: translateX(-50%); }
          }
          .marquee-scroll {
            animation: scroll 60s linear infinite;
            will-change: transform;
          }
          .marquee-scroll:hover {
            animation-play-state: paused;
          }
        `}} />

        <motion.div
          className="relative mb-6 text-center flex flex-col items-center px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2>CAREER AT ENTRYLAB</h2>
          <div className="w-24 h-1 bg-[#00AAFF] mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="text-center max-w-4xl mx-auto px-6 space-y-2 text-lg md:text-xl text-neutral-300 font-medium mt-8 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <p>Our philosophy is simple: hire great people and empower them with the resources and support to perform at their best and achieve excellence.</p>
        </motion.div>

        <div className="relative w-full overflow-hidden flex flex-col justify-center py-10">
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-80 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-80 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 w-max items-center marquee-scroll">
            {doubledMarquee.map((src, index) => (
              <div key={`marquee-img-${index}`} className={`relative shrink-0 w-[300px] md:w-[450px] aspect-[3/2] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 0 ? "-translate-y-8" : "translate-y-8"}`}>
                <img src={src} alt="EntryLab Workspace" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center max-w-4xl mx-auto px-6 space-y-2 text-xl md:text-2xl text-neutral-100 font-bold mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-[#00AAFF]">Join EntryLabs: Redefining the Future of R&D Excellence</p>
        </motion.div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col items-start text-left w-full mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h5>Core Values</h5>
          <p className="text-lg md:text-xl text-neutral-300 font-medium tracking-tight">
            A few things you should know about us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {coreValues.map((value, index) => (
            <MagneticItem key={`core-value-${value.title}-${index}`}>
              <motion.div
                className={`group flex flex-row items-center justify-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#00AAFF]/20 ${value.bgColor}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl overflow-hidden bg-transparent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={value.image} alt={value.title} loading="lazy" decoding="async" className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-sm" />
                </div>
                <h3 className={`!text-lg md:!text-xl font-bold tracking-tight !bg-none !animate-none !pb-0 ${value.textColor}`}>
                  {value.title}
                </h3>
              </motion.div>
            </MagneticItem>
          ))}
        </div>
      </section>

      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto overflow-hidden relative z-10">
        <motion.div 
          className="flex flex-col justify-between items-start mb-16 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-end gap-6">
            <div className="flex flex-col text-left flex-1">
              <h5>Our Advantages</h5>
              <h3 className="!text-left !pb-0">Why Work With Us?</h3>
              <p className="text-neutral-300 mt-4 max-w-2xl text-base md:text-lg">
                Driven by expertise, creativity, and reliability, we deliver meaningful results. We focus on understanding client needs to provide tailored solutions and a seamless, professional experience from start to finish.
              </p>
            </div>

            <div className="flex gap-4 shrink-0">
              <button onClick={prevAdv} className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00AAFF]/50 transition-all duration-300 text-white hover:text-[#00AAFF]" aria-label="Previous advantage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextAdv} className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00AAFF]/50 transition-all duration-300 text-white hover:text-[#00AAFF]" aria-label="Next advantage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[480px] w-full flex items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {advantages.map((adv, i) => {
            const diff = (i - advIndex + advantages.length) % advantages.length;
            let position = 2; 
            if (diff === 0) position = 0; 
            else if (diff === 1) position = 1; 
            else if (diff === advantages.length - 1) position = -1;

            const isFocused = position === 0;

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
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute w-[320px] md:w-[420px] h-[400px] p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-500 border border-[#00AAFF] bg-transparent ${isFocused ? "shadow-[0_10px_40px_-10px_rgba(0,170,255,0.3)]" : ""}`}
              >
                <img src={adv.icon} alt={adv.title} loading="lazy" decoding="async" className="w-32 h-32 mb-6 object-contain" />
                <h3 className="!text-2xl font-bold text-[#00AAFF] mb-4 !bg-none !animate-none !pb-0">{adv.title}</h3>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base font-medium">{adv.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="pt-8 pb-24 px-6 max-w-5xl mx-auto relative">
        <motion.div 
          className="text-center mb-16 relative z-10 flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3>A Workplace Designed Around You</h3>
          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            We create an environment where your well-being, comfort, and growth come first—so you can do your best work every day.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4 relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {workplaceItems.map((item, i) => {
            const isOpen = openAcc === i;
            return (
              <div 
                key={`workplace-${i}`} 
                className="rounded-2xl overflow-hidden transition-all duration-300 border backdrop-blur-md"
                style={isOpen ? { backgroundColor: `${item.themeColor}1A`, borderLeft: `4px solid ${item.themeColor}`, borderTop: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' } : { backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <button onClick={() => setOpenAcc(i)} className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors">
                  <h3 className="!text-lg md:!text-xl font-bold transition-colors !bg-none !animate-none !pb-0" style={{ color: isOpen ? item.themeColor : '#ffffff' }}>{item.title}</h3>
                  <div className="shrink-0 ml-4 transition-transform duration-300" style={{ color: isOpen ? item.themeColor : 'rgba(255,255,255,0.5)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-8 items-center px-6 md:px-8 pb-8 pt-0">
                        <div className="flex-1">
                          <p className="mb-6 leading-relaxed font-medium" style={{ color: item.themeColor }}>
                            {item.desc}
                          </p>
                          <ul className="space-y-3">
                            {item.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex items-start gap-3">
                                <svg className="shrink-0 w-6 h-6" style={{ color: item.themeColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span className="text-sm md:text-base font-medium" style={{ color: item.themeColor }}>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                          <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full max-w-[200px] h-auto object-contain drop-shadow-2xl" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 relative z-10 flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3>Hiring Process</h3>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mt-2 pb-6">
            A simple and transparent journey where we review applications, interview candidates, and select the best fit to join our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {hiringSteps.map((step, i) => (
            <motion.div key={`hiring-step-${i}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-start hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00AAFF] shadow-[0_0_12px_2px_rgba(0,170,255,0.8)] animate-pulse" />
                <span className="text-white/60 text-sm font-bold tracking-widest uppercase">{step.step}</span>
              </div>
              <h4 className="mb-4">{step.title}</h4>
              <div className="space-y-4">
                {step.desc.map((p, pIndex) => (
                  <p key={pIndex} className="text-gray-400 text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 relative z-10 flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3>Open Positions</h3>
        </motion.div>

        <div className="flex flex-col relative z-10">
          {openPositions.map((job, index) => (
            <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1 }} className="border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="w-full md:w-1/3">
                <span className="text-white font-medium text-lg">{job.dept}</span>
              </div>
              <div className="w-full md:w-1/3 flex flex-col">
                <h3 className="!text-2xl font-bold text-white !pb-0 !bg-none !animate-none">{job.title}</h3>
                <span className="text-neutral-400 mt-2">{job.details}</span>
              </div>
              <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                <button className="global-btn !py-2 !px-6 w-[120px]">
                  <span>Apply</span>
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 flex justify-center relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <button className="global-btn">
            <span>See All Jobs</span>
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </motion.div>
      </section>
    </main>
  );
}
