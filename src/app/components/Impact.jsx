import { useState, useEffect, useRef } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const rollRef = useRef(null);
  const rollLeftRef = useRef(null);

  // Handle scroll events for the rolling animation
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let totalRotation = 0;
    let totalRotationLeft = 0;
    
    const handleScroll = () => {
      if (sectionRef.current && rollRef.current && rollLeftRef.current) {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageContainer = rollRef.current.parentElement;
        const imageContainerLeft = rollLeftRef.current.parentElement;
        
        // Only animate when the section is in view
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const currentScrollY = window.scrollY;
          
          // Calculate scroll progress within the section only
          let scrollProgress = 0;
          
          if (sectionTop <= 0 && rect.bottom >= windowHeight) {
            // Section is fully in view, calculate progress based on how much we've scrolled through it
            scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
          } else if (sectionTop > 0) {
            // Section is entering from bottom
            scrollProgress = 0;
          } else if (rect.bottom < windowHeight) {
            // Section is exiting from top
            scrollProgress = 1;
          } else {
            // Section is partially visible
            scrollProgress = Math.abs(sectionTop) / sectionHeight;
          }
          
          // Clamp progress between 0 and 1
          scrollProgress = Math.max(0, Math.min(1, scrollProgress));
          
          // Calculate the vertical position within the section (top to bottom)
          const maxTopPosition = 0; // Start at top
          const maxBottomPosition = sectionHeight - 80; // End near bottom (accounting for image height)
          const currentTopPosition = scrollProgress * maxBottomPosition;
          
          // Calculate continuous rotation based on scroll direction and amount
          const scrollDelta = currentScrollY - lastScrollY;
          const rotationSpeed = 2 // Adjust this value to control rotation speed
          totalRotation += scrollDelta * rotationSpeed;
          totalRotationLeft += scrollDelta * rotationSpeed;
          
          // Apply both position and continuous rotation for right image
          imageContainer.style.top = `${currentTopPosition}px`;
          rollRef.current.style.transform = `rotate(${totalRotation}deg)`;
          
          // Apply both position and continuous rotation for left image
          imageContainerLeft.style.top = `${currentTopPosition}px`;
          rollLeftRef.current.style.transform = `rotate(${totalRotationLeft}deg)`;
          
          lastScrollY = currentScrollY;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const impactGroups = [
    {
      items: [
    {
      title: "Increased Organic Traffic",
      value: "300%",
      description: "Average organic traffic growth across all client campaigns",
      color: "text-blue-600"
    },
    {
      title: "Improved Conversion Rates",
      value: "250%",
      description: "Higher conversion rates through optimized user experience",
      color: "text-green-600"
        }
      ]
    },
    {
      items: [
    {
      title: "Enhanced Brand Visibility",
      value: "400%",
      description: "Improved brand recognition and market presence",
      color: "text-blue-600"
    },
    {
      title: "ROI Improvement",
      value: "180%",
      description: "Average return on investment for marketing spend",
      color: "text-orange-600"
        }
      ]
    },
    {
      items: [
    {
      title: "Customer Engagement",
      value: "320%",
      description: "Increased customer engagement and interaction rates",
      color: "text-blue-600"
    },
        {
          title: "Social Media Growth",
      value: "350%",
      description: "Significant growth in social media followers and interactions",
      color: "text-pink-500"
        }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 mt-5 bg-cream-100 relative" 
    >
      {/* Rolling image on the right side */}
      <div className="absolute right-8 top-0 z-10 pointer-events-none">
        <img
          ref={rollRef}
          src="/roll.png"
          alt="Rolling element"
          className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-100 ease-out"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

      {/* Rolling image on the left side */}
      <div className="absolute left-8 top-0 z-10 pointer-events-none">
        <img
          ref={rollLeftRef}
          src="/roll.png"
          alt="Rolling element"
          className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-100 ease-out"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative">
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 p-[2px] animate-pulse">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-75 blur-sm"></div>
              </div> */}
              
              <div className="relative rounded-2xl overflow-hidden">
                {/* <video 
                  className="w-full aspect-video rounded-2xl"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/why.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Proven. Precise. Powerful.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impactGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredIndex === groupIndex 
                  ? 'shadow-2xl scale-105' 
                  : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(groupIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === groupIndex 
                  ? 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)'
                  : 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
              }}
            >
              <div className="p-8">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <div className={`text-5xl md:text-6xl font-bold mb-3 ${item.color}`}>
                      {item.value}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                    
                    {itemIndex < group.items.length - 1 && (
                      <div className="my-6 h-px bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 