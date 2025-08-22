import { useState } from 'react';
import { useRouter } from 'next/router';
import ParallaxCard from './ParallaxCard';

export default function Resources() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

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
    <section className="text-gray-800 py-10 px-6 bg-cream-100">
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
              className="relative group cursor-pointer transition-all duration-500 transform hover:scale-110"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <ParallaxCard intensity={10}>
                <div className={`p-8 rounded-2xl h-full border backdrop-blur-sm transition-all duration-300 ${
                  hoveredCard === index 
                    ? 'shadow-2xl border-white/40 bg-gradient-to-br from-red-500 via-purple-600 to-blue-500' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}>
                  <div className="text-center shadow-sm  mb-6">
                    <div className="text-6xl mb-4 filter drop-shadow-lg">
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
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                      hoveredCard === index ? 'text-white' : 'text-gray-800'
                    }`}>{resource.title}</h3>
                    <div className={`font-bold text-lg mb-4 transition-all duration-300 ${
                      hoveredCard === index ? 'text-white/90' : 'text-pink-600'
                    }`}>
                      {resource.subtitle}
                    </div>
                  </div>
                  
                  <p className={`mb-6 leading-relaxed text-center transition-all duration-300 ${
                    hoveredCard === index ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <div className={`font-bold mb-2 transition-all duration-300 ${
                      hoveredCard === index ? 'text-white' : 'text-gray-800'
                    }`}>Featured</div>
                    <div className={`text-sm transition-all duration-300 ${
                      hoveredCard === index ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {resource.featured}
                    </div>
                  </div>

                  <div className="text-center">
                    <button 
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                        hoveredCard === index 
                          ? 'bg-white text-gray-800 hover:bg-gray-100' 
                          : 'bg-pink-600 hover:bg-pink-700 text-white'
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