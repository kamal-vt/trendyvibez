'use client';

import { useState, useCallback, useRef } from 'react';
import TiltCard from './TiltCard';

export default function TiltCardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 → 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 → 1

    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 });
    setHoverIndex(null);
  }, []);

  const images = [
    { src: '/e1.png', title: 'We Understand', subtitle: 'Insights that Inspire Growth' },
    { src: '/e2.png', title: 'We Create', subtitle: 'Ideas that Spark Engagement' },
    { src: '/e3.png', title: 'We Design', subtitle: 'Experiences that Resonate' },
    { src: '/e4.png', title: 'We Implement', subtitle: 'Strategies that Drive Impact' },
    { src: '/e5.png', title: 'We Scale', subtitle: 'Brands that Leave a Mark' }
  ];

  const getCardOffset = () => {
    // Make all cards respond equally to mouse movement
    const depthFactor = 1;
    const maxTranslate = 30;
    const x = mousePosition.x * maxTranslate * depthFactor;
    const y = mousePosition.y * maxTranslate * depthFactor;
    return { x, y };
  };

  return (
    <section className="py-16 sm:py-10 px-4 sm:px-6 bg-white  border-[#c0c0c0] w-full">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            How we work
          </h2>
          <p className="text-xl sm:text-xl text-black w-11/12 mx-auto px-4">
          We Understand → We Discuss → We Create → We Implement → We Scale
          </p>
        </div>

        {/* Desktop: Overlapping cards with tilt effect */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-11/12 m-auto hidden md:flex justify-center items-center min-h-[300px]"
        >
          {images.map((img, idx) => {
            const { x, y } = getCardOffset();
            const baseOffset = (idx - (images.length - 1) / 2) * 200; // symmetric spread from center
            const rotation = (idx - (images.length - 1) / 2) * 5;

            // --- Neighbor influence calculation ---
            let scale = 1;
            if (hoverIndex === idx) {
              scale = 1.05; // full hover card
            } else if (hoverIndex === idx - 1 || hoverIndex === idx + 1) {
              scale = 1.0375; // 75% of effect for neighbors
            }

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                className="absolute left-1/2 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
                style={{
                  transform: `translate(-50%, 0) translate3d(${x + baseOffset}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`,
                  zIndex: images.length - idx,
                }}
              >
                <TiltCard imageSrc={img.src} />
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical stack of cards */}
        <div className="md:hidden space-y-6 px-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {img.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
