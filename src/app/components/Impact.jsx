import { useState } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      color: "text-purple-600"
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
      color: "text-blue-400"
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
      className="py-20 px-6 bg-cream-100" 
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 p-[2px] animate-pulse">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-75 blur-sm"></div>
              </div>
              
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
                    <div className={`text-5xl md:text-6xl font-bold mb-3 ${
                      hoveredIndex === groupIndex ? 'text-white' : item.color
                    }`}>
                      {item.value}
                    </div>
                    <h3 className={`text-lg md:text-xl font-semibold mb-2 ${
                      hoveredIndex === groupIndex ? 'text-white' : 'text-gray-800'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${
                      hoveredIndex === groupIndex ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    
                    {itemIndex < group.items.length - 1 && (
                      <div className={`my-6 h-px ${
                        hoveredIndex === groupIndex ? 'bg-white/30' : 'bg-gray-300'
                      }`}></div>
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