'use client';

import { useState, useEffect, useRef } from 'react';
import TiltCard from './TiltCard';

export default function TiltCardSection() {
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [lastMouseTime, setLastMouseTime] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const currentPosition = { x: e.clientX, y: e.clientY };
      
      if (lastMouseTime > 0) {
        const timeDelta = currentTime - lastMouseTime;
        const distance = Math.sqrt(
          Math.pow(currentPosition.x - lastMousePosition.x, 2) + 
          Math.pow(currentPosition.y - lastMousePosition.y, 2)
        );
        const speed = distance / timeDelta; // pixels per millisecond
        setMouseSpeed(speed);
      }
      
      setMousePosition(currentPosition);
      setLastMousePosition(currentPosition);
      setLastMouseTime(currentTime);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lastMousePosition, lastMouseTime]);

  const images = [
    { 
      src: '/images/seoimg.jpg', 
      title: 'SEO Optimization', 
      subtitle: 'Search Engine Excellence' 
    },
    { 
      src: '/images/paidimg.jpg', 
      title: 'Paid Advertising', 
      subtitle: 'Targeted Campaigns' 
    },
    { 
      src: '/images/socialimg.jpg', 
      title: 'Social Media', 
      subtitle: 'Community Building' 
    },
    { 
      src: '/images/contentimg.jpg', 
      title: 'Content Strategy', 
      subtitle: 'Strategic Storytelling' 
    },
    { 
      src: '/images/brandimg.jpg', 
      title: 'Brand Development', 
      subtitle: 'Identity Creation' 
    }
  ];

  const getCardDispersion = (index: number) => {
    const baseGap = 32; // 8 * 4 (gap-8)
    const dispersionFactor = Math.min(mouseSpeed * 2, 100); // Cap at 100px
    const angle = (index / images.length) * 2 * Math.PI;
    const radius = dispersionFactor;
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      scale: 1 + (dispersionFactor / 200) // Slight scale effect
    };
  };

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-[#c0c0c0]">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our core services through interactive cards that showcase our digital marketing expertise.
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="relative flex flex-wrap justify-center items-center gap-8 min-h-[300px]"
        >
          {images.map((img, idx) => {
            const dispersion = getCardDispersion(idx);
            return (
              <TiltCard
                key={idx}
                imageSrc={img.src}
                // title={img.title}
                // subtitle={img.subtitle}
                className="transition-all duration-300 ease-out"
                style={{
                  transform: `translate(${dispersion.x}px, ${dispersion.y}px) scale(${dispersion.scale})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
