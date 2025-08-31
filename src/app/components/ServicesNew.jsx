import { useState, useEffect, useRef } from "react";
import ParallaxCard from "./ParallaxCard";

export default function ServicesNew() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [magnetX, setMagnetX] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
      
      // Only animate when section is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        const maxMovement = 200; // Maximum pixels to move
        
        setMagnetX(prev => {
          const newX = prev + (scrollDirection * scrollDelta * 0.8);
          // Clamp the movement
          return Math.max(-maxMovement, Math.min(maxMovement, newX));
        });
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const services = [
    {
      icon: "/seoico.png",
      title: "SEO Services",
      short: "Built for search, shaped for dominance we make your brand unmissable.",
      details: [
        "Comprehensive keyword research targeting high-intent searchers.",
        "Technical SEO audit & implementation (site speed, schema, crawlability).",
        "Content gap analysis and content pillar strategy.",
        "Authority-building via link acquisition and PR integration.",
        "Monthly performance reporting with actionable insights.",
        "Competitor intelligence and trend adaptation.",
      ],
      color: "text-white",
    },
    {
      icon: "/paidico.png",
      title: "Paid Advertising",
      short: "We engineer every ad to ignite action sharp and built for instant impact.",
      details: [
        "Audience segmentation and intent-based targeting.",
        "Creative testing (copy + visual) with multivariate experimentation.",
        "Bid strategy tuning for efficiency and scale.",
        "Cross-platform funnel orchestration (awareness → conversion).",
        "Automated budget pacing and alerting.",
        "Post-click experience optimization (landing page synergy).",
      ],
      color: "text-white",
    },
    {
      icon: "/analyticico.png",
      title: "Social Media Management",
      short: "We sculpt your social presence into a living brand that speaks.",
      details: [
        "Brand-aligned content calendar with strategic hooks.",
        "Community engagement and reputation monitoring.",
        "Short-form video & carousel content production.",
        "Platform-tailored growth experiments.",
        "Sentiment tracking and feedback loops.",
        "Monthly audience insights and trend reports.",
      ],
      color: "text-white",
    },
    {
      icon: "/contentico.png",
      title: "Content Strategy",
      short: "Strategic content that inspires action and elevates your brand.",
      details: [
        "Audience persona development and mapping.",
        "Content pillar and cluster planning.",
        "Cross-channel content repurposing roadmap.",
        "Story-driven narrative arcs aligned to customer journey.",
        "Performance-based editorial calendar.",
        "Content ROI modeling and optimization.",
      ],
      color: "text-white",
    },
    {
      icon: "/brandico.png",
      title: "Brand Development",
      short: "We shape brands that speak with clarity and connect with purpose.",
      details: [
        "Brand core discovery (mission, values, voice).",
        "Visual identity and asset system.",
        "Tone & messaging frameworks.",
        "Go-to-market brand positioning playbook.",
        "Customer perception testing.",
        "Brand guidelines for consistency and scaling.",
      ],
      color: "text-white",
    },
    {
      icon: "/reportico.png",
      title: "Analytics & Reporting",
      short: "Precision insights that turn performance into progress.",
      details: [
        "KPI framework tailored to business goals.",
        "Dashboard creation (real-time + historical).",
        "Automated reporting with narrative summaries.",
        "Attribution modeling and funnel leakage analysis.",
        "A/B test tracking & statistical significance.",
        "Quarterly strategic insight reviews.",
      ],
      color: "text-white",
    },
    // {
    //   icon: "/webd.webp",
    //   title: "Web Design",
    //   short: "We built futuristic design which impress and outstand.",
    //   details: [
    //     "Conversion-focused landing pages built to maximize leads.",
    //     "Responsive, mobile-first layouts for every device.",
    //     "Next-gen UI/UX design with smooth animations & interactions.",
    //     "Lightning-fast performance optimized for Core Web Vitals.",
    //     "SEO-ready architecture for better search visibility.",
    //     "Brand-aligned aesthetics with modern visuals.",
    //   ],
    //   color: "text-white",
    // },
    // {
    //   icon: "/wedev.png",
    //   title: "Web Development",
    //   short: "Future-ready  frontend development for growing brands.",
    //   details: [
    //     "Custom-coded solutions tailored to your business needs.",
    //     "Responsive, mobile-first layouts for every device.",
    //     "Scalable architectures ready to grow with your brand.",
    //     "API & third-party integrations for seamless workflows.",
    //     "High-performance optimization ensuring speed & stability.",
    //     "SEO-friendly code structure for better visibility.",
    //     "Ongoing support & feature updates to keep you future-ready.",
    //   ],
    //   color: "text-white",
    // },
    // {
    //   icon: "/deploy.webp",
    //   title: "Deployment",
    //   short: "From code to cloud — we handle smooth deployment.",
    //   details: [
    //     "End-to-end deployment across web, cloud, and mobile platforms.",

    //     "CI/CD pipelines for automated, reliable releases.",
        
    //     "cloud hosting setup (AWS, Azure, GCP, or custom servers).",
        
    //     "Zero-downtime rollouts with rollback safety.",
        
    //     "Environment configuration (dev, staging, production).",
        
    //     "Containerization & orchestration (Docker, Kubernetes)"
    //   ],
    //   color: "text-white",
    // },
  
  ];

  return (
    <section ref={sectionRef} className="text-white py-16 sm:py-20 px-4 sm:px-6 bg-white relative w-full">
      {/* Magnet Image with scroll movement */}
      <div 
        className="absolute top-10 right-1/4 z-10 pointer-events-none"
        style={{
          transform: `translateX(${magnetX}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* <img 
          src="/magnet.png" 
          alt="Magnet decoration" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        /> */}
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl  text-black font-bold mb-4">Services</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We help brands grow smarter, faster, and stronger. Whether you're
            building from scratch or scaling what works, our services are
            crafted to spark real results.
          </p>
        </div>

        {activeIndex !== null ? (
          <div className="mb-12">
            <div className="bg-brand-card backdrop-blur-lg p-10 border border-white/30 shadow-2xl relative rounded-4xl">
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-sm px-3 py-1 bg-[#4A7CCA] rounded-full hover:bg-[#4A7CCA] transition linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  bg-[#4A7CCA]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={services[activeIndex].icon}
                    alt={services[activeIndex].title}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-black">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-black mb-4">
                    {services[activeIndex].short}
                  </p>
                  <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                    {services[activeIndex].details.map((point, i) => (
                      <div
                        key={i}
                        className=" bg-[#4A7CCA] rounded-lg p-4 border border-white/20"
                      >
                        <p className="text-gray-100">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-[minmax(0,1fr)] ">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  className="relative h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  // onClick={() => setActiveIndex(index)}
                >
                  <ParallaxCard intensity={10} className="h-full">
                    <div
                      className={`rounded-2xl p-8  transition-all duration-300 ease-in-out cursor-pointer group  flex flex-col justify-between gap-4 shadow-2xl`}
                      style={{
                        background: 'linear-gradient(135deg, #4A7CCA, #213279)'
                      }}
                    >
                      <div className="h-36 flex items-center justify-center">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-44 h-36 object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {service.title}
                        </h3>
                        <p className="text-white/85 leading-relaxed mt-1 flex-1">
                          {service.short}
                        </p>
                      </div>
                    </div>
                  </ParallaxCard>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
