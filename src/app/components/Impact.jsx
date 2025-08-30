import { useState, useEffect, useRef } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Dynamically detect navbar height
    const getNavbarHeight = () => {
      // Try to find navbar element and get its height
      const navbar = document.querySelector('nav') || document.querySelector('[role="navigation"]') || document.querySelector('.navbar') || document.querySelector('header');
      if (navbar) {
        return navbar.offsetHeight;
      }
      // Fallback: try to detect by looking for elements that might be the navbar
      const possibleNavbar = document.querySelector('[class*="nav"], [class*="header"], [class*="menu"]');
      if (possibleNavbar) {
        return possibleNavbar.offsetHeight;
      }
      // Default fallback if no navbar found
      return 80; // Conservative default
    };

    // Set initial navbar height
    setNavbarHeight(getNavbarHeight());

    const handleScroll = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if entire section has scrolled past the viewport
        if (sectionRect.bottom <= 0) {
          // Section is completely out of view, hide images
          setShowImages(false);
          setIsFixed(false);
          return;
        }
        
        // Show images when section comes back into view
        if (sectionRect.bottom > 0) {
          setShowImages(true);
        }
        
        // Check if section is scrolled up enough to make images fixed
        // Use actual navbar height + buffer to prevent overlap
        const bufferSpace = 20; // Extra buffer space
        if (sectionRect.top <= (navbarHeight + bufferSpace)) {
          // Section is scrolled up, make images fixed below navbar
          setIsFixed(true);
        } else {
          // Section is in normal position, keep images absolute within section
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const impactGroups = [
    {
      items: [
        {
          title: "Increased Organic Traffic",
          value: "300%",
          description: "Average organic traffic growth across all client campaigns",
          color: "text-yellow-300"
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
          color: "text-yellow-300"
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
          color: "text-yellow-300"
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
      className="py-8 sm:py-3 px-4 sm:px-6 mt-3 bg-cream-100 relative w-full"
    >
      {/* Rolling images with dynamic navbar height positioning */}
      {showImages && (
        <>
          <div 
            className={`${isFixed ? 'fixed' : 'absolute'} ${isFixed ? 'top-4' : 'top-4'} left-4 sm:left-8 z-50 pointer-events-none transition-all duration-300 ease-out`}
            style={isFixed ? { top: `${navbarHeight + 80}px` } : {}}
          >
            <img
              src="/roll.png"
              alt="Rolling element"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </div>

          <div 
            className={`${isFixed ? 'fixed' : 'absolute'} ${isFixed ? 'top-4' : 'top-4'} right-4 sm:right-8 z-50 pointer-events-none transition-all duration-300 ease-out`}
            style={isFixed ? { top: `${navbarHeight + 80}px` } : {}}
          >
            <img
              src="/roll.png"
              alt="Rolling element"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-spin"
              style={{ animationDuration: '6s' }}
            />
          </div>
        </>
      )}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden"></div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Proven. Precise. Powerful.
        </h2>

        {/* 3 columns grid centered with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-8 md:px-12">
          {impactGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredIndex === groupIndex
                  ? 'shadow-2xl scale-105'
                  : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(groupIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === groupIndex
                  ? 'text-white'
                  : 'linear-gradient(135deg, #4A7CCA, #213279)'
              }}
            >
              <div className="p-6 m-4 min-h-[200px] flex flex-col justify-center">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold mb-4 ${item.color}`}>
                      {item.value}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white">
                      {item.description}
                    </p>

                    {itemIndex < group.items.length - 1 && (
                      <div className="my-4 h-px bg-gray-300"></div>
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
