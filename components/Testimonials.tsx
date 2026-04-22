'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface IconData {
  id: string;
  name: string;
  svg: JSX.Element;
  positionClasses?: string;
  delay: number;
}

// --- Icons (embedded standard W3C-compliant SVGs) ---
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

const allIconsData: IconData[] = [
  // --- Cluster 1: Left Side (4 icons, vertical staggered) ---
  { id: 'google', name: 'Google', delay: 0.1, positionClasses: 'lg:top-[12%] lg:left-[5%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg> },
  { id: 'meta', name: 'Meta', delay: 0.2, positionClasses: 'lg:top-[38%] lg:left-[15%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256s256-114.6 256-256zM137.4 344.6c-48.5-48.5-48.5-127.3 0-175.8 48.5-48.5 127.3-48.5 175.8 0 48.5 48.5 48.5 127.3 0 175.8s-127.3 48.5-175.8 0zm207.1 0c-48.5 48.5-127.3 48.5-175.8 0s-48.5-127.3 0-175.8 127.3-48.5 175.8 0s48.5 127.3 0 175.8z"/></svg> },
  { id: 'amazon', name: 'Amazon', delay: 0.3, positionClasses: 'lg:top-[62%] lg:left-[8%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499.7 201.2C499.7 220 488 231.8 468.2 231.8c-19.8 0-31.5-11.8-31.5-30.6 0-18.8 11.7-30.6 31.5-30.6s31.5 11.8 31.5 30.6zm-119.7 33.6c-45.9 0-80.1 27-80.1 63.3s34.2 63.3 80.1 63.3 80.1-27 80.1-63.3S425.9 234.8 380 234.8zm39.6 153.2c-1.1 1.1-2.2 2.2-3.3 3.3.6.6 1.2 1.1 1.8 1.7-16.1 18.2-33 32.2-49.6 42.1-16.7 10-33.6 14.9-50.6 14.9-38.3 0-71.1-14.8-98.3-44.4-27.1-29.6-40.7-65.7-40.7-108.4s13.6-78.8 40.7-108.4c27.1-29.6 60-44.4 98.3-44.4s71.1 14.8 98.3 44.4c17.5 19.1 29 40.7 34.6 64.9H294.6c2.8 15.6 9 29.8 18.7 42.7H380c.3.1.6.2.9.3zm-39.6-118.8c0-11.8-11.7-21.3-26.1-21.3-14.4 0-26.1 9.5-26.1 21.3s11.7 21.3 26.1 21.3c14.4 0 26.1-9.5 26.1-21.3zm12.3 83.1h-21.3c2.7-15.6-2.2-29.8-14.8-42.7l-30.6 42.7H164.3c3.9-1.9 7.8-3.9 11.7-5.9.3-.1.6-.2.9-.3-.8-1.7-1.6-3.4-2.4-5.1h-44.4c.1-.8.2-1.7.3-2.5h-21.3c3.9-.3 7.8-.5 11.7-.8.3.1.6.1.9.1l-.8.8H61.8l-1.6.2H21.3c13.2 0 24.3-10.7 24.3-23.7h-.1l-.1-.2H.1v21.3c0 23.7 19.3 43 43 43H416c14.4 0 26.1-9.5 26.1-21.3z"/></svg> },
  { id: 'tesla', name: 'Tesla', delay: 0.4, positionClasses: 'lg:bottom-[8%] lg:left-[22%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM137.4 330.6l10.8-51.2 56.5-121.7s16.7-32.9 33.6-32.9 33.6 32.9 33.6 32.9l56.5 121.7 10.8 51.2h33.6l10.8-51.2L356.5 208.9s16.7-32.9 33.6-32.9c11.7 0 22.8 5.7 30 15 15.6 15.6 15.6 41 0 56.6l-85.3 85.3 85.3 85.3c15.6 15.6 15.6 41 0 56.6s-41 15.6-56.6 0l-85.3-85.3-85.3 85.3c-15.6 15.6-41 15.6-56.6 0s-15.6-41 0-56.6l85.3-85.3-85.3-85.3c-15.6-15.6-15.6-41 0-56.6l85.3-85.3z"/></svg> },
  
  // --- Cluster 2: Center (5 icons, slightly emphasized) ---
  { id: 'zoom', name: 'ZoomInfo', delay: 0.5, positionClasses: 'lg:top-[22%] lg:left-[calc(50%-100px)] lg:rotate-[-8deg]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm166.3 351.4L330.7 202.9c-4.4-1.1-8.9-.7-13.1 1.2L256 216l-61.6-11.9c-4.2-1.9-8.7-2.3-13.1-1.2l-91.6 156.5c-4.1 7.1-1.6 16.2 5.5 20.3s16.2 1.6 20.3-5.5l75.4-128.8 61.6 11.9c4.2 1.9 8.7 2.3 13.1 1.2l61.6-11.9 75.4 128.8c4.1 7.1 13.2 9.6 20.3 5.5 7.1-4.1 9.6-13.2 5.5-20.3zM256 296l30.8-6c3.1-.6 5.8-1 8.2-.1v16c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V237.1c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7-19.3 43-43 43h-30.8c-23.7 0-43-19.3-43-43v-22.9c0-2.4 1.5-4.6 3.7-5.5l61.6-11.9 61.6 11.9c2.2.9 3.7 3.1 3.7 5.5zm114.1-171L256 142.1l-114.1 17.1c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V165c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5zM256 376c3.1-.6 5.8-1 8.2-.1v16c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43v-22.9c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5z"/></svg> },
  { id: 'rocket', name: 'RocketReach', delay: 0.6, positionClasses: 'lg:top-[12%] lg:right-[calc(50%-100px)] lg:rotate-[10deg]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M380 256c0 10.7-6.9 19.8-16.5 23h-81.2l-41 123.6-26.4 12.3 8-135.9h-81.2c-10.7 0-19.8-6.9-23-16.5v-81.2l-123.6-41 12.3-26.4 135.9 8v-81.2c0-10.7 6.9-19.8 16.5-23h81.2l41-123.6 26.4-12.3-8 135.9h81.2c10.7 0 19.8 6.9 23 16.5v81.2l123.6 41-12.3 26.4-135.9-8zM302 230l-41 123.6-13.2 6.1-41-123.6H130.6l-123.6-41 6.1-13.2 123.6-41V130.6l41-123.6 13.2-6.1 41 123.6H302l123.6 41-6.1 13.2-123.6 41V230zm-41-41c0-10.7-6.9-19.8-16.5-23h-81.2l-41 123.6-26.4 12.3 8-135.9h-81.2c-10.7 0-19.8-6.9-23-16.5v-81.2l-123.6-41 12.3-26.4 135.9 8v-81.2c0-10.7 6.9-19.8 16.5-23h81.2l41-123.6 26.4-12.3-8 135.9h81.2c10.7 0 19.8 6.9 23 16.5v81.2l123.6 41-12.3 26.4-135.9-8z"/></svg> },
  { id: 'linkedin', name: 'LinkedIn', delay: 0.7, positionClasses: 'lg:top-[33%] lg:left-[calc(50%-10px)] lg:rotate-[-5deg]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> },
  { id: 'hubspot', name: 'HubSpot', delay: 0.8, positionClasses: 'lg:bottom-[22%] lg:right-[calc(50%-5px)] lg:rotate-[8deg]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 32H96C60.7 32 32 60.7 32 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm-33.2 243c-21.3 0-38.5-17.3-38.5-38.5S363.3 198.2 382.8 198.2c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm-66.4-118.8c0 1.9-.8 3.6-2.2 4.9L256 182.2l-58.2-1.2h21.3c2.7-15.6-2.2-29.8-14.8-42.7l-30.6 42.7H164.3c3.9-1.9 7.8-3.9 11.7-5.9.3-.1.6-.2.9-.3-.8-1.7-1.6-3.4-2.4-5.1h-44.4c.1-.8.2-1.7.3-2.5h-21.3c3.9-.3 7.8-.5 11.7-.8.3.1.6.1.9.1l-.8.8H61.8l-1.6.2H21.3c13.2 0 24.3-10.7 24.3-23.7h-.1l-.1-.2H.1v21.3c0 23.7 19.3 43 43 43H416c14.4 0 26.1-9.5 26.1-21.3z"/></svg> },
  { id: 'salesforce', name: 'Salesforce', delay: 0.9, positionClasses: 'lg:bottom-[2%] lg:left-[calc(50%+40px)]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M632 176c0 1.9-.8 3.6-2.2 4.9L256 182.2l-58.2-1.2h21.3c2.7-15.6-2.2-29.8-14.8-42.7l-30.6 42.7H164.3c3.9-1.9 7.8-3.9 11.7-5.9.3-.1.6-.2.9-.3-.8-1.7-1.6-3.4-2.4-5.1h-44.4c.1-.8.2-1.7.3-2.5h-21.3c3.9-.3 7.8-.5 11.7-.8.3.1.6.1.9.1l-.8.8H61.8l-1.6.2H21.3c13.2 0 24.3-10.7 24.3-23.7h-.1l-.1-.2H.1v21.3c0 23.7 19.3 43 43 43H416c14.4 0 26.1-9.5 26.1-21.3zM416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> },
  
  // --- Cluster 3: Right Side (4 icons, vertical staggered) ---
  { id: 'samsung', name: 'Samsung', delay: 1.0, positionClasses: 'lg:top-[15%] lg:right-[5%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM137.4 344.6c-48.5-48.5-48.5-127.3 0-175.8 48.5-48.5 127.3-48.5 175.8 0 48.5 48.5 48.5 127.3 0 175.8s-127.3 48.5-175.8 0zm207.1 0c-48.5 48.5-127.3 48.5-175.8 0s-48.5-127.3 0-175.8 127.3-48.5 175.8 0s48.5 127.3 0 175.8zM256 296l30.8-6c3.1-.6 5.8-1 8.2-.1v16c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V237.1c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7-19.3 43-43 43h-30.8c-23.7 0-43-19.3-43-43v-22.9c0-2.4 1.5-4.6 3.7-5.5l61.6-11.9 61.6 11.9c2.2.9 3.7 3.1 3.7 5.5zm114.1-171L256 142.1l-114.1 17.1c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V165c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5z"/></svg> },
  { id: 'apple', name: 'Apple', delay: 1.1, positionClasses: 'lg:top-[38%] lg:right-[15%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 0 184.8 0 273.6 0 401.4 83 502.6 148.8 502.6c31.7 0 53.5-19.7 88.3-19.7 33.6 0 56 18.3 88.3 18.3 51.6 0 77-51 77-51-1.3-2.6-37.2-14.3-37.2-51.2zM216 111.4l56-3.7 41-123.6-26.4-12.3-8 135.9h-81.2l-41 123.6-26.4 12.3 8-135.9h81.2c10.7 0 19.8-6.9 23-16.5l-123.6-41 12.3-26.4 135.9 8z"/></svg> },
  { id: 'dell', name: 'Dell', delay: 1.2, positionClasses: 'lg:top-[60%] lg:right-[8%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM137.4 344.6c-48.5-48.5-48.5-127.3 0-175.8 48.5-48.5 127.3-48.5 175.8 0 48.5 48.5 48.5 127.3 0 175.8s-127.3 48.5-175.8 0zm207.1 0c-48.5 48.5-127.3 48.5-175.8 0s-48.5-127.3 0-175.8 127.3-48.5 175.8 0s48.5 127.3 0 175.8zM256 296l30.8-6c3.1-.6 5.8-1 8.2-.1v16c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V237.1c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7-19.3 43-43 43h-30.8c-23.7 0-43-19.3-43-43v-22.9c0-2.4 1.5-4.6 3.7-5.5l61.6-11.9 61.6 11.9c2.2.9 3.7 3.1 3.7 5.5zm114.1-171L256 142.1l-114.1 17.1c-2.2.9-3.7 3.1-3.7 5.5v22.9c0 23.7 19.3 43 43 43h30.8c23.7 0 43-19.3 43-43V165c0-2.4-1.5-4.6-3.7-5.5l-61.6-11.9-61.6 11.9c-2.2.9-3.7 3.1-3.7 5.5z"/></svg> },
  { id: 'airbnb', name: 'Airbnb', delay: 1.3, positionClasses: 'lg:bottom-[5%] lg:right-[20%]',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 32H96C60.7 32 32 60.7 32 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm-33.2 243c-21.3 0-38.5-17.3-38.5-38.5S363.3 198.2 382.8 198.2c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zM318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 0 184.8 0 273.6 0 401.4 83 502.6 148.8 502.6c31.7 0 53.5-19.7 88.3-19.7 33.6 0 56 18.3 88.3 18.3 51.6 0 77-51 77-51-1.3-2.6-37.2-14.3-37.2-51.2zM216 111.4l56-3.7 41-123.6-26.4-12.3-8 135.9h-81.2l-41 123.6-26.4 12.3 8-135.9h81.2c10.7 0 19.8-6.9 23-16.5l-123.6-41 12.3-26.4 135.9 8z"/></svg> },
];

// --- Sub-Components ---
const FloatingCard = ({ svg, name, className, delay, isDesktopSpecific = false }: { svg: JSX.Element; name: string; className?: string; delay: number; isDesktopSpecific?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`${isDesktopSpecific ? `absolute hidden lg:block ${className}` : className} group`}
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
        {React.cloneElement(svg, {
          className: 'w-8 h-8 fill-gray-600 transition-colors group-hover:fill-gray-900',
        })}
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden py-16 sm:py-24 lg:py-32 flex flex-col items-center justify-center font-sans">
      
      {/* Absolute Staggered Desktop Icons Mapping (matches image positions) */}
      {allIconsData.map((item) => (
        item.positionClasses && (
          <FloatingCard
            key={item.id}
            svg={item.svg}
            name={item.name}
            className={item.positionClasses}
            delay={item.delay}
            isDesktopSpecific={true}
          />
        )
      ))}

      {/* Center Content Area (Title, Subtitle, CTA, Responsive Icon Groups) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        
        {/* Top Label (with gradient text animation) */}
        <div className="w-full flex justify-center mb-6 block lg:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg font-bold tracking-widest uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-white bg-clip-text text-transparent shimmer-effect"
          >
            Testimonials
          </motion.h1>
        </div>

        {/* 2-Line Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Trusted by top-tier businesses <br className="hidden md:block" />
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
          className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg mb-16 lg:mb-0"
        >
          <StarIcon />
          <span>Achieved a 4.9 rating for successfully completing projects.</span>
        </motion.button>

        {/* Responsive Icon Groups (Hidden on Large Desktop, visible on tablet/mobile) */}
        <div className="flex flex-wrap lg:hidden justify-center items-center gap-6 mt-8">
          {/* Group 1: Left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            {allIconsData.slice(0, 4).map((item) => (
              <FloatingCard key={item.id} svg={item.svg} name={item.name} delay={item.delay} />
            ))}
          </motion.div>

          {/* Group 2: Center Cluster */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-6 scale-105"
          >
            {allIconsData.slice(4, 9).map((item) => (
              <FloatingCard key={item.id} svg={item.svg} name={item.name} delay={item.delay} />
            ))}
          </motion.div>

          {/* Group 3: Right */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            {allIconsData.slice(9, 13).map((item) => (
              <FloatingCard key={item.id} svg={item.svg} name={item.name} delay={item.delay} />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Tailwind CSS custom animation keyframes defined in a style tag */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-effect {
          background-size: 200% auto;
          animation: shimmer 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
