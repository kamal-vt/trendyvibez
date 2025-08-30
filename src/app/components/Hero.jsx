"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdStar } from "react-icons/io";

export default function HeroSection() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const handleOverlayError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/h1-rendering.png";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDrift({
        x: (Math.random() - 0.5) * 42,
        y: (Math.random() - 0.5) * 10,
      });
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 10;
    const y = (clientY / innerHeight - 0.5) * 5;
    setMousePosition({ x, y });
    setIsMouseMoving(true);
  };

  const headingLines = [
    "Grow Faster Through",
    "Smarter Marketing"
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden w-full py-8 sm:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover animate-hero-zoom select-none"
          loading="lazy"
        />
      </div>

      {/* Overlay Image */}
      <div
        className="pointer-events-none absolute left-4 sm:left-6 md:left-10 lg:left-16 xl:left-20 bottom-4 sm:bottom-6 md:bottom-10 z-20"
        style={{
          transform: `translate(calc(${mousePosition.x * -12}px + ${drift.x}px), calc(${mousePosition.y * -8}px + ${drift.y}px))`,
        }}
      >
        <img
          src="/h1-rendering.png"
          alt="Decorative overlay"
          className="w-24 sm:w-32 md:w-40 lg:w-44 xl:w-52 opacity-90 mix-blend-screen drop-shadow-xl select-none"
          onError={handleOverlayError}
        />
      </div>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/30 z-10">
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-6 md:gap-10 items-center justify-items-center text-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Heading with per-letter hover */}
            

           <p className="inline-flex items-center text-center justify-center gap-2 px-6 py-3   rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light shadow-lg"> 
  <IoMdStar className="text-[#126be7] text-3xl shadow-2xl" />
  Digital Marketing Agency
  
  <IoMdStar className="text-[#126be7] text-3xl shadow-2xl" /> 
</p> 


            <div className="space-y-3 md:space-y-4">
              <h1 className="font-extrabold leading-tight tracking-tight text-[rem] sm:text-3xl md:text-4xl lg:text-[5.5rem] text-center">
                {headingLines.map((line, lineIndex) => (
                  <span key={lineIndex} className="block whitespace-nowrap">
                    {line.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="inline-block mr-2 sm:mr-3">
                        {word.split("").map((char, i) => {
                          const isMarketing =
                            word.includes("Marketing") &&
                            word.slice(i, i + 9) === "Marketing";
                          return (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                              className={`inline-block cursor-pointer ${
                                isMarketing ? "text-coral-pink" : ""
                              }`}
                            >
                              {char}
                            </motion.span>
                          );
                        })}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 sm:pt-8 justify-center">
              <button
                className="group relative px-8 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 bg-gradient-to-r from-coral-pink to-dusty-rose hover:from-[#932d42] hover:to-[#1f2f77] text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#932d42]/25 hover:scale-105 text-base sm:text-base md:text-lg w-full sm:w-auto min-h-[48px] sm:min-h-0"
                onClick={() => router.push("/lets-talk")}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-3">
                  DISCOVER NOW
                  <svg
                    className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 pb-12 sm:pb-16 border-t border-white/20 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral-pink mb-2">
                  300%
                </div>
                <div className="text-xs sm:text-sm text-light-gray uppercase tracking-wider font-medium leading-tight">
                  Avg. ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-dusty-rose mb-2">
                  180+
                </div>
                <div className="text-xs sm:text-sm text-light-gray uppercase tracking-wider font-medium leading-tight">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-light-gray uppercase tracking-wider font-medium leading-tight">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
