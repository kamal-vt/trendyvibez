'use client';

import { useState, useEffect, useRef } from 'react';
import TiltCard from './TiltCard';

export default function TiltCardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetNormRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentNormRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [normOffset, setNormOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = ((e.clientX - cx) / (rect.width / 2)); // -1..1
      const ny = ((e.clientY - cy) / (rect.height / 2)); // -1..1
      // Clamp to safe range
      targetNormRef.current.x = Math.max(-1, Math.min(1, nx));
      targetNormRef.current.y = Math.max(-1, Math.min(1, ny));
      startRAF();
    };

    const onMouseLeave = () => {
      targetNormRef.current = { x: 0, y: 0 };
      startRAF();
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const startRAF = () => {
    if (rafRef.current != null) return;
    const step = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentNormRef.current.x = lerp(currentNormRef.current.x, targetNormRef.current.x, 0.1);
      currentNormRef.current.y = lerp(currentNormRef.current.y, targetNormRef.current.y, 0.1);
      setNormOffset({ ...currentNormRef.current });

      const dx = Math.abs(currentNormRef.current.x - targetNormRef.current.x);
      const dy = Math.abs(currentNormRef.current.y - targetNormRef.current.y);
      if (dx + dy < 0.002) {
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const images = [
    { 
      src: '/d1.jpg', 
      title: 'SEO Optimization', 
      subtitle: 'Search Engine Excellence' 
    },
    { 
      src: '/d2.jpg', 
      title: 'Paid Advertising', 
      subtitle: 'Targeted Campaigns' 
    },
    { 
      src: '/d3.jpg', 
      title: 'Social Media', 
      subtitle: 'Community Building' 
    },
    { 
      src: '/d4.jpg', 
      title: 'Content Strategy', 
      subtitle: 'Strategic Storytelling' 
    },
    { 
      src: '/d6.jpg', 
      title: 'Brand Development', 
      subtitle: 'Identity Creation' 
    }
  ];

  const getCardOffset = (index: number) => {
    const depthFactor = (index + 1) / images.length; // 0..1
    const maxTranslate = 40; // px
    const x = normOffset.x * maxTranslate * depthFactor;
    const y = normOffset.y * maxTranslate * depthFactor;
    return { x, y };
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
            const { x, y } = getCardOffset(idx);
            return (
              <div
                key={idx}
                className="transition-transform duration-200 ease-out"
                style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
              >
                <TiltCard
                  imageSrc={img.src}
                  // title={img.title}
                  // subtitle={img.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
