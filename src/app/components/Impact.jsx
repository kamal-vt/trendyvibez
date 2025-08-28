import { useState, useEffect, useRef } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const rollRef = useRef(null);
  const rollLeftRef = useRef(null);

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

        if (rect.bottom > 0 && rect.top < windowHeight) {
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const currentScrollY = window.scrollY;

          let scrollProgress = 0;
          if (sectionTop <= 0 && rect.bottom >= windowHeight) {
            scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
          } else if (sectionTop > 0) {
            scrollProgress = 0;
          } else if (rect.bottom < windowHeight) {
            scrollProgress = 1;
          } else {
            scrollProgress = Math.abs(sectionTop) / sectionHeight;
          }

          scrollProgress = Math.max(0, Math.min(1, scrollProgress));

          const maxBottomPosition = sectionHeight - 90;
          const currentTopPosition = scrollProgress * maxBottomPosition;

          const scrollDelta = currentScrollY - lastScrollY;
          const rotationSpeed = 0.5;
          totalRotation += scrollDelta * rotationSpeed;
          totalRotationLeft += scrollDelta * rotationSpeed;

          imageContainer.style.top = `${currentTopPosition}px`;
          rollRef.current.style.transform = `rotate(${totalRotation}deg)`;

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
      className="py-16 sm:py-20 px-4 sm:px-6 mt-5 bg-cream-100 relative w-full"
    >
      {/* Rolling image on the right */}
      <div className="absolute right-4 sm:right-8 top-0 z-10 pointer-events-none">
        <img
          ref={rollRef}
          src="/roll.png"
          alt="Rolling element"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-100 ease-out"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

      {/* Rolling image on the left */}
      <div className="absolute left-4 sm:left-8 top-0 z-10 pointer-events-none">
        <img
          ref={rollLeftRef}
          src="/roll.png"
          alt="Rolling element"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-100 ease-out"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

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
                  ? 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)'
                  : 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
              }}
            >
              <div className="p-6 m-4 min-h-[200px] flex flex-col justify-center">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold mb-4 ${item.color}`}>
                      {item.value}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
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
