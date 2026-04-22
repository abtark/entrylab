'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface IconData {
  id: string;
  name: string;
  src: string;
  positionClasses?: string;
  delay: number;
}

// --- Standard W3C SVG Star Icon (replaces FaStar) ---
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-yellow-400"
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// --- Data ---
// Note: We use the hex code 4B5563 (Tailwind gray-600) directly in the CDN URL to color the SVGs.

// 1. Left Side Icons (Desktop Staggered)
const leftIcons: IconData[] = [
  { id: 'google', name: 'Google', src: 'https://cdn.simpleicons.org/google/4B5563', positionClasses: 'top-[15%] left-[5%]', delay: 0.1 },
  { id: 'meta', name: 'Meta', src: 'https://cdn.simpleicons.org/meta/4B5563', positionClasses: 'top-[40%] left-[15%]', delay: 0.3 },
  { id: 'amazon', name: 'Amazon', src: 'https://cdn.simpleicons.org/amazon/4B5563', positionClasses: 'top-[65%] left-[8%]', delay: 0.5 },
  { id: 'tesla', name: 'Tesla', src: 'https://cdn.simpleicons.org/tesla/4B5563', positionClasses: 'bottom-[10%] left-[20%]', delay: 0.2 },
];

// 2. Right Side Icons (Desktop Staggered)
const rightIcons: IconData[] = [
  { id: 'samsung', name: 'Samsung', src: 'https://cdn.simpleicons.org/samsung/4B5563', positionClasses: 'top-[20%] right-[10%]', delay: 0.2 },
  { id: 'apple', name: 'Apple', src: 'https://cdn.simpleicons.org/apple/4B5563', positionClasses: 'top-[50%] right-[20%]', delay: 0.4 },
  { id: 'dell', name: 'Dell', src: 'https://cdn.simpleicons.org/dell/4B5563', positionClasses: 'top-[70%] right-[5%]', delay: 0.6 },
  { id: 'airbnb', name: 'Airbnb', src: 'https://cdn.simpleicons.org/airbnb/4B5563', positionClasses: 'bottom-[5%] right-[18%]', delay: 0.3 },
];

// 3. Center Cluster Icons
const centerIcons: IconData[] = [
  { id: 'zoominfo', name: 'ZoomInfo', src: 'https://cdn.simpleicons.org/zoominfo/4B5563', delay: 0.4 },
  { id: 'rocket', name: 'RocketReach', src: 'https://cdn.simpleicons.org/rocketdotchat/4B5563', delay: 0.5 },
  { id: 'linkedin', name: 'LinkedIn', src: 'https://cdn.simpleicons.org/linkedin/4B5563', delay: 0.6 },
  { id: 'hubspot', name: 'HubSpot', src: 'https://cdn.simpleicons.org/hubspot/4B5563', delay: 0.7 },
  { id: 'salesforce', name: 'Salesforce', src: 'https://cdn.simpleicons.org/salesforce/4B5563', delay: 0.8 },
];

// --- Sub-Components ---
const FloatingCard = ({ src, name, className, delay, isAbsolute = false }: { src: string; name: string; className?: string; delay: number; isAbsolute?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={isAbsolute ? `absolute hidden lg:block ${className}` : className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="bg-white p-4 sm:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        {/* Using standard img tags for standard SVGs avoids needing Next config updates */}
        <img 
          src={src} 
          alt={name} 
          title={name}
          className="w-8 h-8 object-contain" 
        />
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden py-24 flex flex-col items-center justify-center font-sans">
      
      {/* Desktop Floating Left Icons */}
      {leftIcons.map((item) => (
        <FloatingCard
          key={item.id}
          src={item.src}
          name={item.name}
          className={item.positionClasses}
          delay={item.delay}
          isAbsolute={true}
        />
      ))}

      {/* Desktop Floating Right Icons */}
      {rightIcons.map((item) => (
        <FloatingCard
          key={item.id}
          src={item.src}
          name={item.name}
          className={item.positionClasses}
          delay={item.delay}
          isAbsolute={true}
        />
      ))}

      {/* Center Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        
        {/* Top Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6 block"
        >
          Testimonials
        </motion.span>

        {/* 2-Line Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Trusted by top-tier businesses <br className="hidden sm:block" />
          around the world.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          See how professionals use our solutions to optimize and complete their
          customer journeys with confidence.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          <StarIcon />
          <span>Achieved a 4.9 rating for successfully completing projects.</span>
        </motion.button>

        {/* Center 5 Icons Cluster */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none opacity-50 rounded-3xl" />
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 relative z-0">
            {centerIcons.map((item) => (
              <FloatingCard key={item.id} src={item.src} name={item.name} delay={item.delay} />
            ))}
          </div>
        </motion.div>

        {/* Mobile-only Left & Right Icons Render (Hidden on Desktop) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:hidden flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6"
        >
          {[...leftIcons, ...rightIcons].map((item) => (
            <FloatingCard key={item.id} src={item.src} name={item.name} delay={item.delay} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
