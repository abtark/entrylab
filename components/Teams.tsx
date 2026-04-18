"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

type MemberType = "Onsite" | "Remote";
type FilterType = "All" | MemberType;

interface Member {
  id: number;
  name: string;
  title: string;
  time: string;
  type: MemberType;
  imgLink: string;
}

const membersData: Member[] = [
  { id: 1, name: "SM Masum", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BSl1ol4.jpg" },
  { id: 2, name: "Nazmul Alam", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BSlE84j.jpg" },
  { id: 3, name: "Samir Sakib", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS0ct9I.jpg" },
  { id: 4, name: "Naimul Hasnat", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS0Y6Dg.jpg" },
  { id: 5, name: "Shafayet Ullah", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS01MuI.jpg" },
  { id: 6, name: "Hridoy Sabbir", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS02hBf.jpg" },
  { id: 7, name: "Aminul Islam", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BgKx7Q1.jpg" },
  { id: 8, name: "Newaz Shihab", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BSlEqmP.jpg" },
  { id: 9, name: "Ehshan Shakil", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BSlIrxV.jpg" },
  { id: 10, name: "Abir Eman", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS0lp5B.jpg" },
  { id: 11, name: "Shahed Evan", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS0diOX.jpg" },
  { id: 12, name: "Towhid Jihad", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BS0chCb.jpg" },
  { id: 13, name: "Tariqul Rizvi", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BSlGIt9.jpg" },
  { id: 14, name: "Misbah Uddin", title: "**********", time: "Full-Time", type: "Onsite", imgLink: "https://iili.io/BgInITu.jpg" },
  { id: 15, name: "Abdullah Takim", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS0lmJV.jpg" },
  { id: 16, name: "Mohammad Amin", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BSlMjse.jpg" },
  { id: 17, name: "Farshid Evan", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BSllpvS.jpg" },
  { id: 18, name: "Mahmud Omey", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BgICXd7.jpg" },
  { id: 19, name: "Ashraful Islam", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS00lm7.jpg" },
  { id: 20, name: "Abu Jafar", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BSlld1R.jpg" },
  { id: 21, name: "Emran Kutub", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS03cCb.jpg" },
  { id: 22, name: "Noman Shorif", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS0cgZg.jpg" },
  { id: 23, name: "Fardin Chowdhury", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS00p4f.jpg" },
  { id: 24, name: "Redwanul Karim", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BS0lixe.jpg" },
  { id: 25, name: "Uzzle Alam", title: "**********", time: "Full-Time", type: "Remote", imgLink: "https://iili.io/BSlGyKb.jpg" },
  { id: 26, name: "Nusrat Jahan", title: "**********", time: "Full-Time", type: "Remote", imgLink: "Use User Icon" },
  { id: 27, name: "Niki Rahman", title: "**********", time: "Full-Time", type: "Remote", imgLink: "Use User Icon" },
  { id: 28, name: "Sunjia Priya", title: "**********", time: "Full-Time", type: "Remote", imgLink: "Use User Icon" },
];

const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);
const LaptopIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
);
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const CloseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const MagneticCard = ({ 
  member, 
  isActive, 
  onClick 
}: { 
  member: Member; 
  isActive: boolean; 
  onClick: () => void 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 80, damping: 30 });
  const springY = useSpring(y, { stiffness: 80, damping: 30 });

  const imgPx = useSpring(useMotionValue(0), { stiffness: 90, damping: 25 });
  const imgPy = useSpring(useMotionValue(0), { stiffness: 90, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    x.set((rawX - centerX) * 0.08);
    y.set((rawY - centerY) * 0.08);

    imgPx.set((rawX - centerX) * -0.02);
    imgPy.set((rawY - centerY) * -0.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    imgPx.set(0);
    imgPy.set(0);
  };

  const fastEase = [0.22, 1, 0.36, 1];

  return (
    <div
      ref={cardRef}
      className={`w-full h-full p-4 rounded-2xl border border-white/20 bg-white/5 flex flex-col items-center justify-center relative ${
        isActive ? "cursor-pointer backdrop-blur-xl" : "cursor-default"
      }`}
      onMouseMove={isActive ? handleMouseMove : undefined}
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={isActive ? handleMouseLeave : undefined}
      onClick={() => isActive && onClick()}
    >
      <motion.div 
        layoutId={`shared-img-container-${member.id}`}
        transition={{ duration: 0.35, ease: fastEase }}
        className="w-full h-full rounded-xl overflow-hidden relative shadow-lg bg-black/40 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none z-10" />

        {member.imgLink === "Use User Icon" ? (
          <motion.div 
            initial={false}
            animate={{ 
                scale: isActive ? (isHovered ? 1.03 : 1) : 0.95,
            }}
            transition={{ duration: 0.3, ease: fastEase }}
            className={`w-full h-full flex items-center justify-center bg-white/10 transition-colors duration-300 ${isHovered && isActive ? 'text-[#00AAFF]' : 'text-gray-400 grayscale'}`}
          >
            <UserIcon className="w-20 h-20" />
          </motion.div>
        ) : (
          <motion.img
            src={member.imgLink}
            alt={member.name}
            style={{ x: imgPx, y: imgPy }}
            initial={false}
            animate={{
              scale: isActive ? (isHovered ? 1.05 : 1) : 0.95,
              filter: isActive && isHovered ? "grayscale(0%)" : "grayscale(100%)"
            }}
            transition={{ duration: 0.3, ease: fastEase }}
            className="w-full h-full max-w-none object-cover"
          />
        )}
      </motion.div>

      <AnimatePresence>
        {isActive && isHovered && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-50">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.25, ease: fastEase }}
              style={{ x: springX, y: springY }}
              className="bg-black/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <p className="text-white font-medium whitespace-nowrap text-sm tracking-wide">{member.name}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Teams() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = useMemo(() => {
    if (filter === "All") return membersData;
    return membersData.filter((m) => m.type === filter);
  }, [filter]);

  const total = filteredMembers.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -400) next();
    else if (swipe > 50 || velocity.x > 400) prev();
  };

  const positions = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  
  const fastEase = [0.22, 1, 0.36, 1];
  const iosSpring = { type: "spring", stiffness: 150, damping: 22, mass: 0.8 };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: iosSpring },
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050A15] overflow-hidden py-24 flex flex-col items-center justify-center font-sans antialiased text-white selection:bg-blue-500/30">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AAFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center mb-16 flex flex-col items-center px-4">
        <motion.h2 
          animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] text-transparent bg-clip-text"
        >
          Meet The Experts
        </motion.h2>
        <div className="h-1 w-16 bg-[#00AAFF] mt-4 rounded-full" />
        <p className="mt-6 max-w-2xl text-white/70 text-center text-md md:text-lg leading-relaxed font-medium">
          Meet a team of highly skilled professionals, each bringing expertise and dedication to deliver strategic insights, innovative solutions, and reliable support for achieving long-term success.
        </p>
      </div>

      <div className="z-10 flex gap-4 mb-12 relative">
        {["All", "Onsite", "Remote"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as FilterType)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
              filter === f ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {filter === f && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-white/10 border border-white/40 rounded-full shadow-[0_0_20px_rgba(0,170,255,0.3)] -z-10"
                transition={{ duration: 0.3, ease: fastEase }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[1400px] h-[400px] md:h-[480px] flex items-center justify-center z-10 perspective-[1200px]">
        {total > 0 &&
          positions.map((offset) => {
            const index = (activeIndex + offset + total) % total;
            const member = filteredMembers[index];

            let xPos = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 50;

            if (offset === -1) { xPos = "-30%"; scale = 0.9; opacity = 0.4; zIndex = 40; }
            else if (offset === 1) { xPos = "30%"; scale = 0.9; opacity = 0.4; zIndex = 40; }
            else if (offset === -2) { xPos = "-55%"; scale = 0.8; opacity = 0.25; zIndex = 30; }
            else if (offset === 2) { xPos = "55%"; scale = 0.8; opacity = 0.25; zIndex = 30; }
            else if (offset === -3) { xPos = "-75%"; scale = 0.7; opacity = 0.15; zIndex = 20; }
            else if (offset === 3) { xPos = "75%"; scale = 0.7; opacity = 0.15; zIndex = 20; }
            else if (offset === -4) { xPos = "-90%"; scale = 0.6; opacity = 0.08; zIndex = 10; }
            else if (offset === 4) { xPos = "90%"; scale = 0.6; opacity = 0.08; zIndex = 10; }

            const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
            if (isMobile) {
              if (Math.abs(offset) >= 1) { opacity = 0; }
            }

            return (
              <motion.div
                key={`${member.id}-${offset}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xPos,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 1,
                }}
                className={`absolute w-[240px] h-[340px] md:w-[320px] md:h-[440px] transform-gpu ${
                  opacity === 0 ? "pointer-events-none" : "cursor-grab active:cursor-grabbing"
                }`}
              >
                <div className={`w-full h-full ${offset === 0 ? "pointer-events-auto" : "pointer-events-none"}`}>
                  <MagneticCard 
                    member={member} 
                    isActive={offset === 0} 
                    onClick={() => setSelectedMember(member)} 
                  />
                </div>
              </motion.div>
            );
          })}
      </div>

      <div className="z-20 flex gap-6 mt-12 relative">
        <button
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 ease-out backdrop-blur-md relative z-50"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 ease-out backdrop-blur-md relative z-50"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: fastEase }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedMember(null)}
            />

            <motion.div
              layoutId={`modal-${selectedMember.id}`}
              className="relative w-full max-w-md bg-[#0a1122] border border-[#00AAFF] backdrop-blur-2xl rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,170,255,0.4)] flex flex-col items-center z-10 overflow-hidden transform-gpu"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={iosSpring}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 text-[#00AAFF]/70 hover:text-[#00AAFF] bg-[#00AAFF]/10 p-2 rounded-full hover:bg-[#00AAFF]/20 transition-all duration-150 ease-out hover:scale-110"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <motion.div 
                layoutId={`shared-img-container-${selectedMember.id}`}
                transition={iosSpring}
                className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#00AAFF]/50 mb-6 shadow-[0_0_20px_rgba(0,170,255,0.2)] bg-black/50 shrink-0 flex items-center justify-center"
              >
                {selectedMember.imgLink === "Use User Icon" ? (
                  <div className="w-full h-full flex items-center justify-center text-[#00AAFF]">
                    <UserIcon className="w-16 h-16" />
                  </div>
                ) : (
                  <img
                    src={selectedMember.imgLink}
                    alt={selectedMember.name}
                    className="w-full h-full max-w-none object-cover"
                  />
                )}
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full flex flex-col items-center justify-center space-y-3 text-center"
              >
                <motion.div variants={itemReveal} className="flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center gap-3">
                      <UserIcon className="w-5 h-5 text-[#00AAFF]" />
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] text-transparent bg-clip-text tracking-wide">
                        {selectedMember.name}
                      </h3>
                  </div>
                </motion.div>

                <motion.div variants={itemReveal} className="flex items-center justify-center gap-3">
                  <BriefcaseIcon className="w-5 h-5 text-[#00AAFF]" />
                  <p className="text-lg font-semibold text-[#00AAFF]">{selectedMember.title}</p>
                </motion.div>

                <motion.div variants={itemReveal} className="flex items-center justify-center gap-3">
                  <ClockIcon className="w-4 h-4 text-[#00AAFF]" />
                  <p className="text-md font-medium text-[#00AAFF]">{selectedMember.time}</p>
                </motion.div>

                <motion.div variants={itemReveal} className="flex items-center justify-center gap-3 pb-6">
                  {selectedMember.type === "Onsite" ? (
                    <BuildingIcon className="w-4 h-4 text-[#00AAFF]" />
                  ) : (
                    <LaptopIcon className="w-4 h-4 text-[#00AAFF]" />
                  )}
                  <p className="text-md font-medium text-[#00AAFF]">{selectedMember.type}</p>
                </motion.div>

                <motion.div variants={itemReveal} className="flex items-center gap-6 pt-4 border-t border-white/10 w-full justify-center">
                  <button className="p-3 rounded-full bg-[#00AAFF]/10 border border-[#00AAFF]/20 hover:bg-[#00AAFF] text-[#00AAFF] hover:text-white transition-all duration-150 ease-out hover:scale-110 shadow-[0_0_15px_rgba(0,170,255,0.1)]">
                    <LinkedInIcon className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-[#00AAFF]/10 border border-[#00AAFF]/20 hover:bg-[#00AAFF] text-[#00AAFF] hover:text-white transition-all duration-150 ease-out hover:scale-110 shadow-[0_0_15px_rgba(0,170,255,0.1)]">
                    <MailIcon className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-[#00AAFF]/10 border border-[#00AAFF]/20 hover:bg-[#00AAFF] text-[#00AAFF] hover:text-white transition-all duration-150 ease-out hover:scale-110 shadow-[0_0_15px_rgba(0,170,255,0.1)]">
                    <PhoneIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
