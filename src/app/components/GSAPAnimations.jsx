// src/components/GSAPAnimations.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPAnimations({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    // Text animations for headings
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      gsap.fromTo(heading, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Paragraph animations
    const paragraphs = container.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
      gsap.fromTo(paragraph,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Card animations (for resource cards, service cards, etc.)
    const cards = container.querySelectorAll('.bg-gradient-to-br, .bg-white\\/10');
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Button animations
    const buttons = container.querySelectorAll('button');
    buttons.forEach((button, index) => {
      gsap.fromTo(button,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Grid animations (for resource grids, service grids, etc.)
    const grids = container.querySelectorAll('.grid');
    grids.forEach((grid) => {
      const gridItems = grid.querySelectorAll('div');
      gridItems.forEach((item, index) => {
        gsap.fromTo(item,
          {
            y: 40,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
        });
      });
    });

    // Image animations
    const images = container.querySelectorAll('img');
    images.forEach((image, index) => {
      gsap.fromTo(image,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Icon animations (for emoji icons and custom icons)
    const icons = container.querySelectorAll('.text-6xl, .text-4xl, .text-2xl');
    icons.forEach((icon, index) => {
      gsap.fromTo(icon,
        {
          scale: 0.5,
          opacity: 0,
          rotation: -10
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Section entrance animations
    const sections = container.querySelectorAll('section');
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
} 