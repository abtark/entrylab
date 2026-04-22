'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiGoogle,
  SiMeta,
  SiAmazon,
  SiTesla,
  SiZoom,
  SiRocketdotchat,
  SiLinkedin,
  SiHubspot,
  SiSalesforce,
  SiSamsung,
  SiApple,
  SiDell,
  SiAirbnb,
} from 'react-icons/si';
import { FaStar } from 'react-icons/fa';

interface IconData {
  id: string;
  Icon: IconType;
  positionClasses?: string;
  delay: number;
}

const leftIcons: IconData[] = [
  { id: 'google', Icon: SiGoogle, positionClasses: 'top-[15%] left-[5%]', delay: 0.1 },
  { id: 'meta', Icon: SiMeta, positionClasses: 'top-[40%] left-[15%]', delay: 0.3 },
  { id: 'amazon', Icon: SiAmazon, positionClasses: 'top-[65%] left-[8%]', delay: 0.5 },
  { id: 'tesla', Icon: SiTesla, positionClasses: 'bottom-[10%] left-[20%]', delay: 0.2 },
];

const rightIcons: IconData[] = [
  { id: 'samsung', Icon: SiSamsung, positionClasses: 'top-[20%] right-[10%]', delay: 0.2 },
  { id: 'apple', Icon: SiApple, positionClasses: 'top-[50%] right-[20%]', delay: 0.4 },
  { id: 'dell', Icon: SiDell, positionClasses: 'top-[70%] right-[5%]', delay: 0.6 },
  { id: 'airbnb', Icon: SiAirbnb, positionClasses: 'bottom-[5%] right-[18%]', delay: 0.3 },
];

const centerIcons: IconData[] = [
  { id: 'zoom', Icon: SiZoom, delay: 0.4 },
  { id: 'rocket', Icon: SiRocketdotchat, delay: 0.5 },
  { id: 'linkedin', Icon: SiLinkedin, delay: 0.6 },
  { id: 'hubspot', Icon: SiHubspot, delay: 0.7 },
  { id: 'salesforce', Icon: SiSalesforce, delay: 0.8 },
];

const FloatingCard = ({ Icon, className, delay, isAbsolute = false }: { Icon: IconType; className?: string; delay: number; isAbsolute?: boolean }) => {
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
        className="bg-white p-4 sm:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-3xl text-gray-700 cursor-pointer transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <Icon />
      </motion.div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden py-24 flex flex-col items-center justify-center font-sans">
      
      {leftIcons.map((item) => (
        <FloatingCard
          key={item.id}
          Icon={item.Icon}
          className={item.positionClasses}
          delay={item.delay}
          isAbsolute={true}
        />
      ))}

      {rightIcons.map((item) => (
        <FloatingCard
          key={item.id}
          Icon={item.Icon}
          className={item.positionClasses}
          delay={item.delay}
          isAbsolute={true}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6 block"
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Trusted by top-tier businesses <br className="hidden sm:block" />
          around the world.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          See how professionals use our solutions to optimize and complete their
          customer journeys with confidence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg"
        >
          <FaStar className="text-yellow-400 text-lg" />
          <span>Achieved a 4.9 rating for successfully completing projects.</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none opacity-50 rounded-3xl" />
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 relative z-0">
            {centerIcons.map((item) => (
              <FloatingCard key={item.id} Icon={item.Icon} delay={item.delay} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:hidden flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6"
        >
          {[...leftIcons, ...rightIcons].map((item) => (
            <FloatingCard key={item.id} Icon={item.Icon} delay={item.delay} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
