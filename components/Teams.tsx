"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

// --- Types ---
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

// --- Data ---
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

// --- Icons ---
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

/* ---------- Magnetic Card (OPTIMIZED) ---------- */
const MagneticCard = ({ member, isActive, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // ✅ ONLY active card uses spring
  const springX = isActive ? useSpring(x, { stiffness: 80, damping: 30 }) : x;
  const springY = isActive ? useSpring(y, { stiffness: 80, damping: 30 }) : y;

  const imgPx = useMotionValue(0);
  const imgPy = useMotionValue(0);

  const fastEase = [0.22, 1, 0.36, 1];

  const handleMouseMove = (e: any) => {
    if (!isActive || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.08;

    x.set(offsetX);
    y.set(offsetY);

    imgPx.set(offsetX * -0.25);
    imgPy.set(offsetY * -0.25);
  };

  const handleLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    imgPx.set(0);
    imgPy.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      onClick={() => isActive && onClick()}
      className={`w-full h-full p-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center ${
        isActive ? "cursor-pointer" : ""
      }`}
    >
      <motion.div
        layoutId={`card-${member.id}`} // ✅ FIXED
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <motion.img
          src={member.imgLink}
          alt={member.name}
          style={{ x: imgPx, y: imgPy }}
          animate={{
            scale: isActive && isHovered ? 1.05 : 1,
            filter: isActive && isHovered ? "grayscale(0%)" : "grayscale(100%)",
          }}
          transition={{ duration: 0.3, ease: fastEase }}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hover Name */}
      <AnimatePresence>
        {isActive && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ x: springX, y: springY }}
            className="absolute bottom-6 bg-black/80 px-4 py-1 rounded-full text-sm"
          >
            {member.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- MAIN ---------- */
export default function Teams() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return membersData;
    return membersData.filter((m) => m.type === filter);
  }, [filter]);

  const total = filtered.length;

  const next = () => setActiveIndex((p) => (p + 1) % total);
  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);

  const positions = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  return (
    <section className="py-24 bg-[#050A15] text-white flex flex-col items-center">

      {/* HEADER (animation pause when modal open) */}
      <motion.h2
        animate={
          selectedMember
            ? {}
            : { backgroundPosition: ["200% 50%", "0% 50%"] }
        }
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        className="text-5xl font-bold bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] text-transparent bg-clip-text"
      >
        Meet The Experts
      </motion.h2>

      {/* CAROUSEL */}
      <div className="relative w-full h-[450px] flex justify-center items-center mt-16">
        {positions.map((offset) => {
          const index = (activeIndex + offset + total) % total;
          const member = filtered[index];

          const isFar = Math.abs(offset) > 2;

          let x = offset * 260;
          let scale = offset === 0 ? 1 : 0.85;
          let opacity = offset === 0 ? 1 : 0.3;

          if (isFar) opacity = 0;

          if (isMobile && offset !== 0) opacity = 0;

          return (
            <motion.div
              key={offset}
              drag={offset === 0 ? "x" : false} // ✅ FIX
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
              animate={isFar ? false : { x, scale, opacity }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute w-[260px] h-[340px]"
            >
              <MagneticCard
                member={member}
                isActive={offset === 0}
                onClick={() => setSelectedMember(member)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* MODAL (SUPER SMOOTH) */}
      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              layoutId={`card-${selectedMember.id}`} // ✅ MATCHED
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a1122] p-10 rounded-3xl text-center w-[320px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={selectedMember.imgLink}
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />

              <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
              <p className="text-white/70">{selectedMember.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
