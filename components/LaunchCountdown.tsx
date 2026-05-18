"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MahjongGridLoader = () => {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.5, rotateY: 90 },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      rotateY: [90, 0, 0, -90],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-8 md:mt-12"
    >
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#00AAFF] rounded-sm shadow-[0_0_10px_rgba(0,170,255,0.5)]"
        />
      ))}
    </motion.div>
  );
};

export default function LaunchCountdown({ children }: { children: React.ReactNode }) {
  const [isLiveDomain, setIsLiveDomain] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const TARGET_DATE = new Date("2026-05-25T12:00:00+06:00").getTime();

  useEffect(() => {
    setIsMounted(true);
    
    const hostname = window.location.hostname;
    if (hostname === "entrylab.net" || hostname === "www.entrylab.net") {
      setIsLiveDomain(true);
    } else {
      setIsLiveDomain(false);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [TARGET_DATE]);

  if (!isMounted || isLiveDomain === null) return null;

  if (!isLiveDomain) {
    return <>{children}</>;
  }

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#050A15] flex flex-col items-center justify-center font-ubuntu text-white overflow-hidden relative selection:bg-[#00AAFF]/30 p-4">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#00AAFF]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes heartbeatBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-heartbeat {
          animation: heartbeatBlink 1s infinite ease-in-out;
        }
      `}} />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
        <div className="mb-10 md:mb-16 animate-heartbeat flex flex-col items-center">
          <Image 
            src="https://iili.io/FC3KC6g.png" 
            alt="EntryLab Logo" 
            width={320} 
            height={96} 
            className="w-48 sm:w-64 md:w-80 h-auto drop-shadow-[0_0_15px_rgba(0,170,255,0.4)] object-contain" 
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center mb-6 md:mb-8 w-full">
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-6 md:mb-10 w-full text-center">
            Remaining <span className="text-[#00AAFF]">{timeLeft.days}</span> Days
          </div>
          
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-[#00AAFF] flex flex-row items-start justify-center gap-1.5 sm:gap-4 md:gap-6 drop-shadow-[0_0_15px_rgba(0,170,255,0.3)]">
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.hours)}</span>
              <span className="text-[10px] sm:text-xs md:text-lg text-white/50 tracking-normal uppercase font-normal mt-1 md:mt-2">hour</span>
            </div>
            
            <span className="animate-heartbeat -translate-y-0.5 sm:-translate-y-1 md:-translate-y-2 mx-0.5 sm:mx-1 md:mx-2 mt-1 md:mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">:</span>
            
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.minutes)}</span>
              <span className="text-[10px] sm:text-xs md:text-lg text-white/50 tracking-normal uppercase font-normal mt-1 md:mt-2">minute</span>
            </div>
            
            <span className="animate-heartbeat -translate-y-0.5 sm:-translate-y-1 md:-translate-y-2 mx-0.5 sm:mx-1 md:mx-2 mt-1 md:mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">:</span>
            
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.seconds)}</span>
              <span className="text-[10px] sm:text-xs md:text-lg text-white/50 tracking-normal uppercase font-normal mt-1 md:mt-2">seconds</span>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-sm sm:text-base md:text-xl font-medium mt-6 md:mt-8 flex flex-col items-center gap-1.5 sm:gap-2">
          <p>Thanks for visiting,</p>
          <p className="flex items-center text-center flex-wrap justify-center">
            <span className="text-[#00AAFF]">entryLab.net</span>&nbsp;website will live on 25 May 2026.
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 ml-2 sm:ml-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AAFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#00AAFF] shadow-[0_0_10px_rgba(0,170,255,1)]"></span>
            </span>
          </p>
        </div>

        <MahjongGridLoader />
      </div>
    </div>
  );
}
