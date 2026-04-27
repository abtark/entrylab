import React, { MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticItemProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticItem = ({ children, className = "" }: MagneticItemProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX * 0.15);
    y.set(mouseY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

export default function Careers() {
  const coreValues = [
    {
      title: "Accountability",
      image: "https://iili.io/BPj2VPS.png",
      bgColor: "bg-[#FEF9C3]",
      textColor: "text-[#CA8A04]",
    },
    {
      title: "Responsibility",
      image: "https://iili.io/BPhgOUF.png",
      bgColor: "bg-[#DBEAFE]",
      textColor: "text-[#2563EB]",
    },
    {
      title: "Sustainability",
      image: "https://iili.io/BPhgrVp.png",
      bgColor: "bg-[#DCFCE7]",
      textColor: "text-[#16A34A]",
    },
    {
      title: "Transparency",
      image: "https://iili.io/BPhgmx4.png",
      bgColor: "bg-[#FFEDD5]",
      textColor: "text-[#EA580C]",
    },
  ];

  const marqueeImages = [
    "https://iili.io/BPINPee.jpg",
    "https://iili.io/BPINLzb.jpg",
    "https://iili.io/BPINDqQ.jpg",
    "https://iili.io/BPIO971.jpg",
    "https://iili.io/BPIO3hJ.jpg",
    "https://iili.io/BPIOn2I.jpg",
    "https://iili.io/BPIOAQf.jpg",
    "https://iili.io/BPIOlY7.jpg",
    "https://iili.io/BPIO1pe.jpg",
    "https://iili.io/BPIOXCx.jpg",
    "https://iili.io/BPIOkyF.jpg",
    "https://iili.io/BPIO4GR.jpg",
  ];

  const doubledMarquee = [...marqueeImages, ...marqueeImages];

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden font-sans selection:bg-[#00AAFF] selection:text-white pb-24">
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <motion.div
          className="relative px-8 py-4 mb-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,170,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text drop-shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #00AAFF, #ffffff, #00AAFF)",
              backgroundSize: "200% auto",
            }}
            animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          >
            CAREER AT ENTRYLAB
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto space-y-2 text-lg md:text-xl text-neutral-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>Innovators Wanted; Join the EntryLabs Revolution.</p>
          <p>Our philosophy is simple; hire great people and give them the resources and support to do their best work.</p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <MagneticItem key={`core-value-${value.title}-${index}`}>
              <motion.div
                className={`group flex items-center gap-6 p-6 rounded-3xl cursor-pointer transition-shadow duration-500 shadow-lg hover:shadow-2xl ${value.bgColor}`}
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center shadow-inner"
                  variants={{
                    hover: { scale: 1.1 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img src={value.image} alt={value.title} className="w-16 h-16 object-contain drop-shadow-md" />
                </motion.div>
                <h3 className={`text-3xl font-bold tracking-tight ${value.textColor}`}>
                  {value.title}
                </h3>
              </motion.div>
            </MagneticItem>
          ))}
        </div>
      </section>

      <section className="py-24 relative w-full overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8 w-max will-change-transform items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {doubledMarquee.map((src, index) => (
            <div
              key={`marquee-img-${index}`}
              className={`relative shrink-0 w-[300px] md:w-[450px] aspect-[3/2] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${
                index % 2 === 0 ? "-translate-y-6" : "translate-y-6"
              }`}
            >
              <img
                src={src}
                alt={`Gallery visual ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
