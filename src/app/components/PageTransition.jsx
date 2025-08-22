// src/components/PageTransition.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageTransition({ children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const page = pageRef.current;
    if (!page) return;

    // Page entrance animation
    gsap.fromTo(page,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          // Clear the transform so fixed-positioned elements (like the navbar) use the viewport
          gsap.set(page, { clearProps: "transform" });
        }
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      {children}
    </div>
  );
} 