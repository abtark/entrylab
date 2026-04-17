'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Briefcase,
  Clock,
  Building,
  Monitor,
  Linkedin,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

// ==========================================
// DATA TYPES & PAYLOAD
// ==========================================

type TeamMember = {
  id: number;
  name: string;
  title: string;
  time: string;
  type: 'Onsite' | 'Remote';
  img: string | null;
};

const teamData: TeamMember[] = [
  { id: 1, name: 'SM Masum', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSl1ol4.jpg' },
  { id: 2, name: 'Nazmul Alam', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSlE84j.jpg' },
  { id: 3, name: 'Samir Sakib', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS0ct9I.jpg' },
  { id: 4, name: 'Naimul Hasnat', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS0Y6Dg.jpg' },
  { id: 5, name: 'Shafayet Ullah', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS01MuI.jpg' },
  { id: 6, name: 'Hridoy Sabbir', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS02hBf.jpg' },
  { id: 7, name: 'Aminul Islam', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSlqAEG.jpg' },
  { id: 8, name: 'Newaz Shihab', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSlEqmP.jpg' },
  { id: 9, name: 'Ehshan Shakil', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSlIrxV.jpg' },
  { id: 10, name: 'Abir Eman', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS0lp5B.jpg' },
  { id: 11, name: 'Shahed Evan', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS0diOX.jpg' },
  { id: 12, name: 'Towhid Jihad', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BS0chCb.jpg' },
  { id: 13, name: 'Tariqul Rizvi', title: '**********', time: 'Full-Time', type: 'Onsite', img: 'https://iili.io/BSlGIt9.jpg' },
  { id: 14, name: 'Misbah Uddin', title: '**********', time: 'Full-Time', type: 'Onsite', img: null },
  { id: 15, name: 'Abdullah Takim', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS0lmJV.jpg' },
  { id: 16, name: 'Mohammad Amin', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BSlMjse.jpg' },
  { id: 17, name: 'Farshid Evan', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BSllpvS.jpg' },
  { id: 18, name: 'Mahmud Omey', title: '**********', time: 'Full-Time', type: 'Remote', img: null },
  { id: 19, name: 'Ashraful Islam', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS00lm7.jpg' },
  { id: 20, name: 'Abu Jafar', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BSlld1R.jpg' },
  { id: 21, name: 'Emran Kutub', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS03cCb.jpg' },
  { id: 22, name: 'Noman Shorif', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS0cgZg.jpg' },
  { id: 23, name: 'Fardin Chowdhury', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS00p4f.jpg' },
  { id: 24, name: 'Redwanul Karim', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BS0lixe.jpg' },
  { id: 25, name: 'Uzzle Alam', title: '**********', time: 'Full-Time', type: 'Remote', img: 'https://iili.io/BSlGyKb.jpg' },
  { id: 26, name: 'Nusrat Jahan', title: '**********', time: 'Full-Time', type: 'Remote', img: null },
  { id: 27, name: 'Niki Rahman', title: '**********', time: 'Full-Time', type: 'Remote', img: null },
  { id: 28, name: 'Sunjia Priya', title: '**********', time: 'Full-Time', type: 'Remote', img: null },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const typingItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Teams() {
  const [filter, setFilter] = useState<'All' | 'Onsite' | 'Remote'>('All');
  const [filteredData, setFilteredData] = useState<TeamMember[]>(teamData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringDeck, setIsHoveringDeck] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const newData = filter === 'All' ? teamData : teamData.filter((m) => m.type === filter);
    setFilteredData(newData);
    setActiveIndex(0);
  }, [filter]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  // Calculates the relative position of a card for the 3D deck effect
  const getCardStyle = (index: number) => {
    const total = filteredData.length;
    let diff = index - activeIndex;

    // Shortest path circular logic
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);

    // Mobile fallback: Just show the active card
    if (isMobile) {
      return {
        x: diff === 0 ? 0 : diff > 0 ? '100%' : '-100%',
        scale: diff === 0 ? 1 : 0.8,
        opacity: diff === 0 ? 1 : 0,
        zIndex: diff === 0 ? 10 : 0,
        pointerEvents: diff === 0 ? 'auto' : ('none' as const),
      };
    }

    // Default: 3 cards visible. Hover: 7 cards visible.
    const maxVisible = isHoveringDeck ? 3 : 1; 
    const isVisible = absDiff <= maxVisible;

    // Positioning calculations
    const baseSpacing = isHoveringDeck ? 180 : 120;
    const xPos = diff * baseSpacing * (isHoveringDeck ? 1 : Math.max(0.6, 1 - absDiff * 0.2));
    const scale = 1 - absDiff * 0.15;
    const opacity = isVisible ? 1 - absDiff * 0.15 : 0;
    const zIndex = 20 - absDiff;

    return {
      x: xPos,
      scale: diff === 0 && isHoveringDeck ? 1.05 : scale,
      opacity,
      zIndex,
      pointerEvents: isVisible ? 'auto' : ('none' as const),
      rotateY: diff !== 0 ? (diff > 0 ? -5 : 5) : 0,
    };
  };

  return (
    <section className="relative w-full min-h-screen bg-neutral-950 py-20 overflow-hidden flex flex-col items-center select-none font-sans text-white">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full transform-gpu" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00AAFF] via-white to-[#00AAFF] bg-[length:200%_auto] animate-gradient-x">
          Meet The Experts
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-1 bg-gradient-to-r from-transparent via-[#00AAFF] to-transparent rounded-full"
        />
      </div>

      {/* Filter Buttons */}
      <div className="relative z-10 flex space-x-4 mb-20 bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-white/10">
        {(['All', 'Onsite', 'Remote'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform-gpu ${
              filter === cat ? 'text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {filter === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Carousel Deck Section */}
      <div className="relative z-10 w-full max-w-7xl h-[450px] flex items-center justify-center perspective-[1200px]">
        <div
          className="relative w-full h-full flex items-center justify-center"
          onMouseEnter={() => setIsHoveringDeck(true)}
          onMouseLeave={() => setIsHoveringDeck(false)}
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((member, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    rotateY: style.rotateY,
                  }}
                  transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.8 }}
                  className="absolute w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl cursor-pointer overflow-hidden transform-gpu will-change-transform shadow-[0_8px_32px_rgba(0,0,0,0.3)] group"
                  style={{ pointerEvents: style.pointerEvents as React.CSSProperties['pointerEvents'] }}
                  onClick={() => {
                    if (isActive) setSelectedMember(member);
                    else setActiveIndex(index);
                  }}
                >
                  {/* Card Content */}
                  <motion.div layoutId={`card-image-container-${member.id}`} className="w-full h-full relative">
                    {member.img ? (
                      <motion.img
                        layoutId={`card-image-${member.id}`}
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-800/50 transition-all duration-500 grayscale group-hover:grayscale-0">
                        <User size={80} className="text-neutral-500 group-hover:text-[#00AAFF] transition-colors duration-500" />
                      </div>
                    )}
                    
                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Basic Info on Card */}
                    <div className="absolute bottom-0 left-0 w-full p-6 transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[#00AAFF] text-sm font-medium">{member.title}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex items-center justify-center space-x-6 mt-12">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md group"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md group"
        >
          <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-image-container-${selectedMember.id}`}
              className="relative w-full max-w-md bg-neutral-900/80 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform-gpu will-change-transform"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 flex flex-col items-center">
                {/* Circular Profile Image Transition */}
                <motion.div
                  layoutId={`card-image-${selectedMember.id}`}
                  className="w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden mb-8 shadow-lg shadow-black/50"
                  style={{ borderRadius: '9999px' }}
                >
                  {selectedMember.img ? (
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                      <User size={48} className="text-neutral-400" />
                    </div>
                  )}
                </motion.div>

                {/* Staggered Text Info */}
                <motion.div
                  variants={typingContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col items-center space-y-4 w-full"
                >
                  <motion.div variants={typingItem} className="flex items-center space-x-3 text-2xl font-bold">
                    <User className="w-5 h-5 text-[#00AAFF]" />
                    <span>{selectedMember.name}</span>
                  </motion.div>

                  <motion.div variants={typingItem} className="flex items-center space-x-3 text-lg text-neutral-300">
                    <Briefcase className="w-5 h-5 text-[#00AAFF]" />
                    <span>{selectedMember.title}</span>
                  </motion.div>

                  <motion.div variants={typingItem} className="flex items-center space-x-3 text-neutral-400">
                    <Clock className="w-4 h-4 text-[#00AAFF]" />
                    <span>{selectedMember.time}</span>
                  </motion.div>

                  <motion.div variants={typingItem} className="flex items-center space-x-3 text-neutral-400">
                    {selectedMember.type === 'Onsite' ? (
                      <Building className="w-4 h-4 text-[#00AAFF]" />
                    ) : (
                      <Monitor className="w-4 h-4 text-[#00AAFF]" />
                    )}
                    <span>{selectedMember.type}</span>
                  </motion.div>

                  {/* Social / Contact Icons */}
                  <motion.div
                    variants={typingItem}
                    className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-white/10 w-full"
                  >
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#00AAFF] hover:text-white text-neutral-400 transition-all border border-white/10 group">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#00AAFF] hover:text-white text-neutral-400 transition-all border border-white/10 group">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#00AAFF] hover:text-white text-neutral-400 transition-all border border-white/10 group">
                      <Phone className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}} />
    </section>
  );
}
