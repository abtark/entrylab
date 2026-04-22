"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const reviews = [
  {
    name: "Daniel Carter",
    role: "VP of Data Operations",
    review: "The team demonstrated exceptional analytical capability and precision in handling complex datasets. Their structured approach to web research and data validation significantly enhanced our decision-making processes. Delivery timelines were met with consistency and professionalism.",
    rating: 5,
    avatar: "https://iili.io/B49UNNj.png"
  },
  {
    name: "Olivia Bennett",
    role: "CFO",
    review: "I was particularly impressed by the accuracy and reliability of the data analysis provided. The reporting was clear, well-organized, and actionable. Their ability to extract meaningful insights from large data volumes is commendable.",
    rating: 5,
    avatar: "https://iili.io/B49sj14.png"
  },
  {
    name: "Liam Foster",
    role: "CEO",
    review: "An outstanding engagement overall. The team showcased deep expertise in both data analytics and targeted web research. Their insights directly contributed to strategic improvements across our organization.",
    rating: 5,
    avatar: "https://iili.io/B49UwAb.png"
  },
  {
    name: "Sophie Laurent",
    role: "General Manager",
    review: "The level of professionalism and analytical rigor was excellent. Their web research outputs were comprehensive and well-structured, supporting our operational planning effectively.",
    rating: 4,
    avatar: "https://iili.io/B49shBf.png"
  },
  {
    name: "Ethan Hughes",
    role: "EVP",
    review: "Highly satisfied with the quality of data interpretation and reporting. The team demonstrated strong technical competence and delivered consistently accurate results under tight timelines.",
    rating: 5,
    avatar: "https://iili.io/B49UVK7.png"
  },
  {
    name: "Amelia Clarke",
    role: "Assistant General Manager",
    review: "A highly reliable partner for data-driven initiatives. Their attention to detail and methodical research approach ensured high-quality outputs throughout the engagement.",
    rating: 5,
    avatar: "https://iili.io/B49sWLG.png"
  },
  {
    name: "Noah Schneider",
    role: "Chief Strategy Officer",
    review: "Their ability to align data insights with strategic objectives was particularly valuable. The web research was thorough, and the analytical outputs were both relevant and actionable.",
    rating: 5,
    avatar: "https://iili.io/B49UEV2.png"
  },
  {
    name: "Isabella Rossi",
    role: "VP of Marketing Analytics",
    review: "The team provided well-structured datasets and insightful analysis that supported our campaign optimization efforts. Their research depth and clarity in reporting stood out.",
    rating: 5,
    avatar: "https://iili.io/B49s07I.png"
  },
  {
    name: "Jack Thompson",
    role: "COO",
    review: "Operational efficiency improved significantly due to their precise data handling and validation processes. Their analytical framework is robust and dependable.",
    rating: 5,
    avatar: "https://iili.io/B49Ult4.png"
  },
  {
    name: "Emily Watson",
    role: "Chief Experience Officer",
    review: "The team delivered high-quality insights supported by credible and well-documented web research. Their professionalism and consistency were evident throughout the project.",
    rating: 5,
    avatar: "https://iili.io/B49sldN.png"
  },
  {
    name: "Lucas Meyer",
    role: "General Manager",
    review: "A strong demonstration of data expertise. The team delivered structured, accurate, and highly usable datasets that integrated seamlessly into our internal systems.",
    rating: 5,
    avatar: "https://iili.io/B49UcNf.png"
  },
  {
    name: "Grace Mitchell",
    role: "VP of HR Analytics",
    review: "Their analytical outputs were clear, precise, and aligned with our internal metrics. The web research component added significant contextual value to our analysis.",
    rating: 5,
    avatar: "https://iili.io/B49sagp.png"
  },
  {
    name: "Henry Walker",
    role: "CFO",
    review: "Exceptional accuracy in financial data analysis and benchmarking research. Their insights contributed meaningfully to our forecasting and planning activities.",
    rating: 4,
    avatar: "https://iili.io/B49UY9s.png"
  },
  {
    name: "Chloe Dubois",
    role: "AGM",
    review: "The team maintained a high standard of data integrity and delivered well-validated research outputs. Their structured methodology ensured reliability at every stage.",
    rating: 5,
    avatar: "https://iili.io/B49s7qv.png"
  },
  {
    name: "Oliver Brown",
    role: "CEO",
    review: "An excellent experience overall. The depth of analysis and quality of research exceeded expectations, providing clear strategic advantages.",
    rating: 5,
    avatar: "https://iili.io/B49U5Sn.png"
  },
  {
    name: "Mia Wilson",
    role: "VP of Sales Analytics",
    review: "The insights generated were directly applicable to our sales optimization strategies. Their data models and research inputs were both accurate and practical.",
    rating: 5,
    avatar: "https://iili.io/B49sAXa.png"
  },
  {
    name: "William Taylor",
    role: "EVP",
    review: "Highly professional execution with strong analytical depth. The team handled complex data requirements efficiently and delivered high-value insights.",
    rating: 5,
    avatar: "https://iili.io/B49URcX.png"
  },
  {
    name: "Ava Johnson",
    role: "General Manager",
    review: "A dependable and technically proficient team. Their web research and data analysis capabilities consistently met our expectations.",
    rating: 5,
    avatar: "https://iili.io/B49sImF.png"
  },
  {
    name: "Benjamin Scott",
    role: "COO",
    review: "Their structured approach to data processing and validation ensured accuracy and reliability. The outputs were delivered in a clear and actionable format.",
    rating: 5,
    avatar: "https://iili.io/B49UAFt.png"
  },
  {
    name: "Ella Martin",
    role: "CXO",
    review: "The overall quality of data analysis and research was strong. While the deliverables were accurate and useful, slightly more frequent progress updates would further enhance the experience.",
    rating: 4,
    avatar: "https://iili.io/B49sx5P.png"
  }
];

// --- Animation Variants ---
const textRevealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const textRevealItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Components ---

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-green-500" : "text-neutral-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const MarqueeCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex w-[350px] min-w-[350px] flex-col justify-between gap-6 rounded-xl border border-white/5 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
    <div className="flex items-center justify-between">
      <svg
        className="h-8 w-8 text-blue-500/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <StarRating rating={review.rating} />
    </div>
    <p className="text-sm leading-relaxed text-gray-300">"{review.review}"</p>
    <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="h-10 w-10 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <h4 className="text-sm font-semibold text-white">{review.name}</h4>
        <p className="text-xs text-gray-400">{review.role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = reviews[currentIndex];
  const prevAvatarIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextAvatarIndex = (currentIndex + 1) % reviews.length;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-24 text-white">
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: text-gradient 4s linear infinite;
        }
      `}} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Area --- */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            variants={textRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={textRevealItem}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md">
                <span className="drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">⭐</span>
                Achieved 4.9 rating for successfully completing projects.
              </div>
            </motion.div>

            {/* Note: Main heading excluded from scroll reveal per requirements */}
            <h2 className="animate-gradient-text mt-4 bg-gradient-to-r from-blue-500 via-blue-200 to-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
              Testimonials
            </h2>

            <motion.p variants={textRevealItem} className="mt-2 text-lg text-gray-400">
              From our community
            </motion.p>
          </motion.div>
        </div>

        {/* --- Main 2-Column Section --- */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          
          {/* Left Column */}
          <motion.div
            variants={textRevealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.h3 variants={textRevealItem} className="text-3xl font-bold leading-tight md:text-4xl">
              Words of praise from others <br className="hidden md:block" />
              <span className="text-gray-400">about our presence</span>
            </motion.h3>
            
            <motion.p variants={textRevealItem} className="mt-6 max-w-md text-lg text-gray-400">
              See how professionals use our solutions to optimize and complete their customer journeys with confidence.
            </motion.p>

            <motion.div variants={textRevealItem} className="mt-10 flex gap-4">
              <button
                onClick={prevSlide}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:text-blue-400"
                aria-label="Previous testimonial"
              >
                <svg className="h-6 w-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:text-blue-400"
                aria-label="Next testimonial"
              >
                <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Review Card */}
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl sm:p-10"
              >
                <div className="mb-6 flex items-start justify-between">
                  <svg className="h-10 w-10 text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <StarRating rating={activeReview.rating} />
                </div>
                
                <p className="mb-10 text-lg leading-relaxed text-gray-200 md:text-xl">
                  "{activeReview.review}"
                </p>

                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div>
                    <h4 className="text-lg font-bold text-white">{activeReview.name}</h4>
                    <p className="text-sm text-gray-400">{activeReview.role}</p>
                  </div>

                  {/* 3 Avatars Section */}
                  <div className="flex items-center gap-3">
                    <img
                      src={reviews[prevAvatarIndex].avatar}
                      alt="Previous"
                      className="h-10 w-10 scale-75 rounded-full object-cover opacity-30 blur-[1px] transition-all duration-500"
                    />
                    <div className="relative rounded-full rounded-full border-2 border-blue-500 p-0.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <img
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        className="h-14 w-14 scale-100 rounded-full object-cover opacity-100 transition-all duration-500"
                      />
                    </div>
                    <img
                      src={reviews[nextAvatarIndex].avatar}
                      alt="Next"
                      className="h-10 w-10 scale-75 rounded-full object-cover opacity-30 blur-[1px] transition-all duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- Marquee Section --- */}
      <div className="relative mt-32 flex w-full flex-col gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1: Right to Left */}
        <div className="flex w-full">
          <motion.div
            className="flex min-w-max gap-6 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {[...reviews.slice(0, 10), ...reviews.slice(0, 10)].map((review, idx) => (
              <MarqueeCard key={`row1-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-full">
          <motion.div
            className="flex min-w-max gap-6 pr-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {[...reviews.slice(10, 20), ...reviews.slice(10, 20)].map((review, idx) => (
              <MarqueeCard key={`row2-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
