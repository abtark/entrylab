"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  Clock,
  Building,
  Laptop,
  Linkedin,
  Mail,
  Phone,
  X,
} from "lucide-react";

// ==========================================
// DATA SYSTEM
// ==========================================

export type TeamMember = {
  id: number;
  name: string;
  title: string;
  time: string;
  type: "Onsite" | "Remote";
  image: string | null;
};

const TEAM_DATA: TeamMember[] = [
  { id: 1, name: "SM Masum", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSl1ol4.jpg" },
  { id: 2, name: "Nazmul Alam", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSlE84j.jpg" },
  { id: 3, name: "Samir Sakib", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS0ct9I.jpg" },
  { id: 4, name: "Naimul Hasnat", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS0Y6Dg.jpg" },
  { id: 5, name: "Shafayet Ullah", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS01MuI.jpg" },
  { id: 6, name: "Hridoy Sabbir", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS02hBf.jpg" },
  { id: 7, name: "Aminul Islam", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSlqAEG.jpg" },
  { id: 8, name: "Newaz Shihab", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSlEqmP.jpg" },
  { id: 9, name: "Ehshan Shakil", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSlIrxV.jpg" },
  { id: 10, name: "Abir Eman", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS0lp5B.jpg" },
  { id: 11, name: "Shahed Evan", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS0diOX.jpg" },
  { id: 12, name: "Towhid Jihad", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BS0chCb.jpg" },
  { id: 13, name: "Tariqul Rizvi", title: "**********", time: "Full-Time", type: "Onsite", image: "https://iili.io/BSlGIt9.jpg" },
  { id: 14, name: "Misbah Uddin", title: "**********", time: "Full-Time", type: "Onsite", image: null },
  { id: 15, name: "Abdullah Takim", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS0lmJV.jpg" },
  { id: 16, name: "Mohammad Amin", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BSlMjse.jpg" },
  { id: 17, name: "Farshid Evan", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BSllpvS.jpg" },
  { id: 18, name: "Mahmud Omey", title: "**********", time: "Full-Time", type: "Remote", image: null },
  { id: 19, name: "Ashraful Islam", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS00lm7.jpg" },
  { id: 20, name: "Abu Jafar", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BSlld1R.jpg" },
  { id: 21, name: "Emran Kutub", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS03cCb.jpg" },
  { id: 22, name: "Noman Shorif", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS0cgZg.jpg" },
  { id: 23, name: "Fardin Chowdhury", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS00p4f.jpg" },
  { id: 24, name: "Redwanul Karim", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BS0lixe.jpg" },
  { id: 25, name: "Uzzle Alam", title: "**********", time: "Full-Time", type: "Remote", image: "https://iili.io/BSlGyKb.jpg" },
  { id: 26, name: "Nusrat Jahan", title: "**********", time: "Full-Time", type: "Remote", image: null },
  { id: 27, name: "Niki Rahman", title: "**********", time: "Full-Time", type: "Remote", image: null },
  { id: 28, name: "Sunjia Priya", title: "**********", time: "Full-Time", type: "Remote", image: null },
];

type FilterType = "All" | "Onsite" | "Remote";

// ==========================================
// ANIMATION HELPERS
// ==========================================

const getOffset = (index: number, activeIndex: number, total: number) => {
  let offset = (index - activeIndex + total) % total;
  if (offset > Math.floor(total / 2)) {
    offset -= total;
  }
  return offset;
};

const getCardLayoutProps = (offset: number, isHovered: boolean, isMobile: boolean) => {
  const absOffset = Math.abs(offset);

  if (isMobile) {
    if (absOffset === 0) return { x: "0%", scale: 1, opacity: 1, zIndex: 30 };
    if (absOffset === 1) return { x: offset > 0 ? "110%" : "-110%", scale: 0.85, opacity: 0.5, zIndex: 20 };
    return { x: offset > 0 ? "200%" : "-200%", scale: 0.7, opacity: 0, zIndex: 10 };
  }

  if (!isHovered) {
    if (absOffset === 0) return { x: "0%", scale: 1, opacity: 1, zIndex: 30 };
    if (absOffset === 1) return { x: offset > 0 ? "35%" : "-35%", scale: 0.9, opacity: 0.7, zIndex: 20 };
    return { x: offset > 0 ? "60%" : "-60%", scale: 0.8, opacity: 0, zIndex: 10 };
  }

  // Hovered (Expand View - Shows 7 cards)
  if (absOffset === 0) return { x: "0%", scale: 1, opacity: 1, zIndex: 30 };
  if (absOffset === 1) return { x: offset > 0 ? "115%" : "-115%", scale: 0.9, opacity: 0.9, zIndex: 25 };
  if (absOffset === 2) return { x: offset > 0 ? "215%" : "-215%", scale: 0.8, opacity: 0.7, zIndex: 20 };
  if (absOffset === 3) return { x: offset > 0 ? "300%" : "-300%", scale: 0.7, opacity: 0.4, zIndex: 15 };

  return { x: offset > 0 ? "400%" : "-400%", scale: 0.6, opacity: 0, zIndex: 0 };
};

// ==========================================
// COMPONENTS
// ==========================================

const TypewriterText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "inline-block" }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.03,
            ease: "linear",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Teams() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Safe client-side window checking
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredData = TEAM_DATA.filter(
    (member) => filter === "All" || member.type === filter
  );

  // Reset index on filter change
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredData.length);
  }, [filteredData.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  }, [filteredData.length]);

  // Keydown for navigation & modal close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMember && e.key === "Escape") setSelectedMember(null);
      if (!selectedMember) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedMember]);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center py-24 overflow-hidden font-sans">
      {/* SECTION TITLE */}
      <div className="flex flex-col items-center mb-16 z-10">
        <motion.h2
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-[linear-gradient(to_right,#00AAFF,#ffffff,#00AAFF)] bg-[length:200%_auto] text-transparent bg-clip-text pb-2 transform-gpu"
        >
          Meet The Experts
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-1 bg-gradient-to-r from-[#00AAFF] to-transparent rounded-full mt-2"
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-4 mb-20 z-10">
        {(["All", "Onsite", "Remote"] as FilterType[]).map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border transform-gpu
              ${
                filter === btn
                  ? "bg-[#00AAFF]/20 border-[#00AAFF]/50 text-white shadow-[0_0_15px_rgba(0,170,255,0.3)]"
                  : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* CARD DECK CAROUSEL */}
      <div
        className="relative w-full max-w-sm md:max-w-xl h-[400px] flex justify-center items-center perspective-1000"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {filteredData.map((member, index) => {
          const offset = getOffset(index, activeIndex, filteredData.length);
          const { x, scale, opacity, zIndex } = getCardLayoutProps(
            offset,
            isHovered,
            isMobile
          );
          const isCenter = offset === 0;

          return (
            <motion.div
              key={member.id}
              layoutId={`card-container-${member.id}`}
              initial={false}
              animate={{ x, scale, opacity, zIndex }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
                mass: 0.8,
              }}
              style={{ willChange: "transform, opacity" }}
              className={`absolute w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden cursor-pointer group transform-gpu ${
                !isCenter && "pointer-events-none"
              }`}
              onClick={() => isCenter && setSelectedMember(member)}
            >
              <motion.div layoutId={`card-image-${member.id}`} className="relative w-full h-full">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    unoptimized // Bypasses domain checks for Vercel builds!
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5 grayscale transition-all duration-700 ease-out group-hover:grayscale-0">
                    <User className="w-32 h-32 text-white/20" />
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform transition-transform duration-500 group-hover:translate-y-0 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00AAFF] font-medium text-sm">{member.title}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* NAVIGATION ARROWS */}
      <div className="flex gap-6 mt-16 z-10">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform-gpu hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform-gpu hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg transform-gpu"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedMember.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#111] backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,170,255,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 flex flex-col items-center">
                {/* Modal Image */}
                <motion.div
                  layoutId={`card-image-${selectedMember.id}`}
                  className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#00AAFF]/30 shadow-[0_0_30px_rgba(0,170,255,0.2)] mb-8 shrink-0"
                >
                  {selectedMember.image ? (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      unoptimized // Bypasses domain checks
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/10">
                      <User className="w-16 h-16 text-white/40" />
                    </div>
                  )}
                </motion.div>

                {/* Staggered Content */}
                <div className="w-full flex flex-col gap-4 text-white">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 text-xl font-bold"
                  >
                    <User className="w-5 h-5 text-[#00AAFF]" />
                    <TypewriterText text={selectedMember.name} delay={0.2} />
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <Briefcase className="w-5 h-5 text-[#00AAFF]" />
                    <TypewriterText text={selectedMember.title} delay={0.4} />
                  </motion.div>

                  {/* Time */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <Clock className="w-5 h-5 text-[#00AAFF]" />
                    <TypewriterText text={selectedMember.time} delay={0.6} />
                  </motion.div>

                  {/* Type */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    {selectedMember.type === "Onsite" ? (
                      <Building className="w-5 h-5 text-[#00AAFF]" />
                    ) : (
                      <Laptop className="w-5 h-5 text-[#00AAFF]" />
                    )}
                    <TypewriterText text={selectedMember.type} delay={0.8} />
                  </motion.div>
                </div>

                {/* Contact Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="w-full flex justify-center gap-6 mt-10 pt-6 border-t border-white/10"
                >
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Mail, href: "#" },
                    { icon: Phone, href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#00AAFF] hover:border-[#00AAFF]/50 hover:bg-[#00AAFF]/10 transition-all duration-300 transform-gpu hover:-translate-y-1"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
