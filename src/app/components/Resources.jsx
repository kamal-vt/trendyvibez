import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import ParallaxCard from './ParallaxCard';
import TiltCardSection from './TiltCardSection';

export default function Resources() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 1 : -1; // 1 for down, -1 for up
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + currentScrollY;
      const sectionHeight = rect.height;
      
      // Check if section is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate base scale from scroll progress
        const scrollProgress = Math.max(0, Math.min(1, (currentScrollY - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight)));
        let baseScale = 0.8 + (scrollProgress * 0.4);
        
        // Add zoom effect based on scroll direction and intensity
        const zoomIntensity = Math.min(scrollDelta * 0.03, 0.5); // Limit the zoom intensity
        const directionMultiplier = scrollDirection === 1 ? 1 : -0.5; // More zoom in when scrolling down
        
        const finalScale = baseScale + (zoomIntensity * directionMultiplier);
        setZoomScale(Math.max(0.5, Math.min(2.0, finalScale))); // Clamp between 0.5x and 2.0x
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const resources = [
    {
      title: "Blog Articles",
      subtitle: "200+ Insights",
      description: "Fresh perspectives, expert tips, and deep dives into the evolving world of digital marketing.",
      featured: "Mastering Content Trends in 2025",
      icon: "/blogico.png",
      buttonText: "Dive"
    },
    {
      title: "SEO Guides",
      subtitle: "Proven Frameworks",
      description: "Clear, actionable guides to help you climb search rankings and stay competitive in any market.",
      featured: "The Modern SEO Blueprint",
      icon: "/seooico.png",
      buttonText: "Dive"
    },
    {
      title: "Templates",
      subtitle: "Built for Action",
      description: "Plug-and-play templates that save time, streamline planning, and boost productivity.",
      featured: "Digital Launch Plan Template",
      icon: "/tempico.png",
      buttonText: "Dive"
    }
  ];

  return (
    <section ref={sectionRef} className="text-gray-800 py-10 px-6 relative bg-white rounded-4xl" style={{
      // background: 'linear-gradient(120deg, #ef4444, #8b5cf6, #3b82f6)'
    }}>
      {/* Zoom Image */}
      <div 
        className="absolute top-4 left-4 z-10 pointer-events-none"
        style={{
          transform: `scale(${zoomScale})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="/zoom.png" 
          alt="Zoom decoration" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Resources</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore a curated collection of expert content crafted to sharpen your skills, grow your brand, and simplify execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="relative group  cursor-pointer transition-all duration-500 transform hover:scale-110"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <ParallaxCard intensity={10}>
                <div className={`p-8 rounded-2xl  h-full border backdrop-blur-sm transition-all  duration-300 ${
                  hoveredCard === index 
                    ? 'shadow-2xl border-white/40' 
                    : 'bg-[#ffffff] border-gray-200 shadow-lg'
                }`}
                style={{
                  background: hoveredCard === index 
                    ? 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)'
                    : 'white'
                }}>
                  <div className="text-center shadow-sm  mb-6  rounded-2xl  p-2 ">
                    <div className="text-6xl mb-4 filter drop-shadow-lg ">
                      {resource.icon.startsWith('/') ? (
                        <img 
                          src={resource.icon} 
                          alt={resource.title}
                          className="w-24 h-24 mx-auto object-contain"
                        />
                      ) : (
                        resource.icon
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-purple text-gray-800">{resource.title}</h3>
                    <div className="font-bold text-lg mb-4 text-white">
                      {resource.subtitle}
                    </div>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-center text-black">
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <div className="font-bold mb-2 text-gray-800">Featured</div>
                    <div className="text-sm text-black">
                      {resource.featured}
                    </div>
                  </div>

                  <div className="text-center">
                    <button 
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                        hoveredCard === index 
                          ? 'bg-black  hover:bg-white text-white' 
                          : 'bg-black hover:bg-yellow-700 text-white'
                      }`}
                      onClick={() => {
                        if (resource.title === "Blog Articles") {
                          router.push('/blogs');
                        }
                      }}
                    >
                      {resource.buttonText}
                    </button>
                  </div>
                </div>
              </ParallaxCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 