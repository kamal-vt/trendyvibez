import { useState, useEffect, useRef } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [opacity, setOpacity] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Detect navbar height dynamically
    const getNavbarHeight = () => {
      const navbar = document.querySelector('nav, [role="navigation"], .navbar, header');
      return navbar ? navbar.offsetHeight : 80;
    };
    setNavbarHeight(getNavbarHeight());

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const buffer = 20; // extra space below navbar

      // Images appear/disappear based on section visibility
      if (sectionRect.bottom <= 0 || sectionRect.top >= window.innerHeight) {
        setShowImages(false);
      } else {
        setShowImages(true);
      }

      // Stick images below navbar when scrolling down
      if (sectionRect.top <= navbarHeight + buffer && sectionRect.bottom > navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Fade images near bottom of section
      if (sectionRect.bottom <= navbarHeight + 100) {
        const fade = Math.max(0, (sectionRect.bottom - navbarHeight) / 100);
        setOpacity(fade);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  const impactGroups = [
    {
      items: [
        { title: "Increased Organic Traffic", value: "300%", description: "Average organic traffic growth across all client campaigns", color: "text-yellow-300" },
        { title: "Improved Conversion Rates", value: "250%", description: "Higher conversion rates through optimized user experience", color: "text-green-600" }
      ]
    },
    {
      items: [
        { title: "Enhanced Brand Visibility", value: "400%", description: "Improved brand recognition and market presence", color: "text-yellow-300" },
        { title: "ROI Improvement", value: "180%", description: "Average return on investment for marketing spend", color: "text-orange-600" }
      ]
    },
    {
      items: [
        { title: "Customer Engagement", value: "320%", description: "Increased customer engagement and interaction rates", color: "text-yellow-300" },
        { title: "Social Media Growth", value: "350%", description: "Significant growth in social media followers and interactions", color: "text-pink-500" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 sm:py-3 px-4 sm:px-6 mt-3 bg-cream-100 relative w-full">
      {/* Rolling images */}
      {showImages && (
        <>
          <div
            className={`${isFixed ? 'fixed' : 'absolute'} left-4 sm:left-8 z-50 pointer-events-none transition-all duration-300 ease-out`}
            style={{ top: isFixed ? `${navbarHeight+20}px` : '1rem', opacity }}
          >
            <img src="/roll.png" alt="Rolling element" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div
            className={`${isFixed ? 'fixed' : 'absolute'} right-4 sm:right-8 z-50 pointer-events-none transition-all duration-300 ease-out`}
            style={{ top: isFixed ? `${navbarHeight+20}px` : '1rem', opacity }}
          >
            <img src="/roll.png" alt="Rolling element" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </>
      )}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden"></div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Proven. Precise. Powerful.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-8 md:px-12">
          {impactGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredIndex === groupIndex ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(groupIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === groupIndex ? 'text-white' : 'linear-gradient(135deg, #4A7CCA, #213279)'
              }}
            >
              <div className="p-6 m-4 min-h-[200px] flex flex-col justify-center">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold mb-4 ${item.color}`}>{item.value}</div>
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white">{item.description}</p>
                    {itemIndex < group.items.length - 1 && <div className="my-4 h-px bg-gray-300"></div>}
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
