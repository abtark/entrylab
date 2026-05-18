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
      className="grid grid-cols-3 gap-2 mt-12"
    >
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="w-4 h-4 md:w-6 md:h-6 bg-[#00AAFF] rounded-sm shadow-[0_0_10px_rgba(0,170,255,0.5)]"
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
    <div className="min-h-screen bg-[#050A15] flex flex-col items-center justify-center font-ubuntu text-white overflow-hidden relative selection:bg-[#00AAFF]/30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AAFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

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

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <div className="mb-16 animate-heartbeat flex flex-col items-center">
          <Image 
            src="https://iili.io/FC3fr7f.png" 
            alt="EntryLab Icon" 
            width={80} 
            height={80} 
            className="drop-shadow-[0_0_20px_rgba(0,170,255,0.6)] object-contain mb-4" 
          />
          <Image 
            src="https://iili.io/FC3KC6g.png" 
            alt="EntryLab Logo" 
            width={200} 
            height={60} 
            className="drop-shadow-[0_0_15px_rgba(0,170,255,0.4)] object-contain" 
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="text-xl md:text-3xl font-medium tracking-wider">
            <span className="text-[#00AAFF] font-bold">{timeLeft.days}</span> days remaining 
            <span className="text-gray-400 mx-2">&amp;</span>
          </div>
          
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-[#00AAFF] flex items-center justify-center gap-1 md:gap-2 drop-shadow-[0_0_15px_rgba(0,170,255,0.3)]">
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="text-sm md:text-lg text-white/50 tracking-normal uppercase font-normal ml-1">hour</span>
            <span className="animate-heartbeat -translate-y-1 md:-translate-y-2 mx-1 md:mx-2">:</span>
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="text-sm md:text-lg text-white/50 tracking-normal uppercase font-normal ml-1">minute</span>
            <span className="animate-heartbeat -translate-y-1 md:-translate-y-2 mx-1 md:mx-2">:</span>
            <span>{formatTime(timeLeft.seconds)}</span>
            <span className="text-sm md:text-lg text-white/50 tracking-normal uppercase font-normal ml-1 mr-3">seconds</span>
            <span className="text-xl md:text-3xl text-white font-medium tracking-wider normal-case">remaining</span>
          </div>
        </div>

        <p className="text-gray-400 text-lg md:text-xl font-medium mt-6">
          Thanks for visiting, <span className="text-[#00AAFF]">entrylab.net</span> will live at 25 May 2026
        </p>

        <MahjongGridLoader />
      </div>
    </div>
  );
}
