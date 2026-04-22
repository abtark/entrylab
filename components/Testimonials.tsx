import React from 'react';
import {
  FaOctopusDeploy,
  FaPagelines,
  FaCentercode,
  FaCloudversify,
  FaDhl,
  FaDropbox,
  FaLinkedin,
  FaFoursquare,
  FaHackerrank,
  FaHubspot,
  FaMagento,
  FaPushed,
  FaStar,
  FaPaperPlane
} from 'react-icons/fa';

// Card Data with absolute positioning for desktop staggered layout
const desktopCards = [
  // Left Side (4 cards vertically stacked & staggered)
  { id: 1, Icon: FaOctopusDeploy, position: 'top-[15%] left-[5%]', delay: '0s' },
  { id: 2, Icon: FaPagelines, position: 'top-[40%] left-[12%]', delay: '1s' },
  { id: 3, Icon: FaCentercode, position: 'top-[65%] left-[6%]', delay: '2s' },
  { id: 4, Icon: FaCloudversify, position: 'top-[25%] left-[20%]', delay: '1.5s' },

  // Center (5 cards spread horizontally in middle area, slight arch)
  { id: 5, Icon: FaDhl, position: 'top-[10%] left-[30%]', delay: '0.5s' },
  { id: 6, Icon: FaDropbox, position: 'top-[5%] left-[42%]', delay: '2.5s' },
  { id: 7, Icon: FaLinkedin, position: 'top-[8%] left-[50%] -translate-x-1/2', delay: '1.2s' },
  { id: 8, Icon: FaPaperPlane, position: 'top-[5%] right-[42%]', delay: '0.8s' },
  { id: 9, Icon: FaFoursquare, position: 'top-[10%] right-[30%]', delay: '2s' },

  // Right Side (4 cards vertically stacked & staggered)
  { id: 10, Icon: FaHackerrank, position: 'top-[25%] right-[20%]', delay: '1.5s' },
  { id: 11, Icon: FaHubspot, position: 'top-[15%] right-[5%]', delay: '0.2s' },
  { id: 12, Icon: FaMagento, position: 'top-[40%] right-[12%]', delay: '2.2s' },
  { id: 13, Icon: FaPushed, position: 'top-[65%] right-[6%]', delay: '0.9s' },
];

export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden py-20 lg:py-32 flex flex-col items-center justify-center font-sans z-0">
      
      {/* Desktop Floating Cards (Hidden on Mobile/Tablet) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10 max-w-7xl mx-auto">
        {desktopCards.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.position} pointer-events-auto`}
            style={{ animation: `float 6s ease-in-out infinite ${card.delay}` }}
          >
            <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-gray-800 text-3xl xl:text-4xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <card.Icon />
            </div>
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto mt-10 lg:mt-32">
        
        {/* Animated Gradient Top Label */}
        <div className="mb-6 inline-block">
          <span className="text-sm md:text-base font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-gradient-text px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            Testimonials
          </span>
        </div>

        {/* Main Title */}
        <h2 className="flex flex-col gap-2 mb-6">
          <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 tracking-tight leading-tight">
            Trusted by top-tier businesses
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 tracking-tight">
            around the world
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          See how professionals use our solutions to optimize and complete their customer journeys with confidence.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-3 bg-blue-600 text-white px-6 md:px-8 py-4 rounded-full text-sm md:text-base font-medium hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1">
          <FaStar className="text-yellow-400 text-lg group-hover:scale-110 transition-transform" />
          <span>Achieved a 4.9 rating for successfully completing projects</span>
        </button>
      </div>

      {/* Mobile & Tablet Cards Grid (Hidden on Desktop) */}
      <div className="lg:hidden w-full max-w-md mx-auto mt-16 px-6 relative z-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
          {desktopCards.map((card) => (
            <div
              key={`mobile-${card.id}`}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-800 text-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              <card.Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 4s linear infinite;
        }
      `}} />
    </section>
  );
}
