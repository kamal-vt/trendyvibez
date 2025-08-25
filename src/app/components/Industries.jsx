// src/components/Industries.jsx
import { useState } from 'react';

export default function Industries() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      title: "Technology & SaaS",
      description: "We craft high-impact marketing for tech pioneers and SaaS disruptors turning complex solutions into simple.",
      metrics: ["150+ Visionary Brands Partnered", "+300% Growth Achieved"],
      caseStudy: "Engineered a 300% surge in user acquisition for a fintech startup through precision-led strategy .",
      icon: "⚙️",
      color: "white",
      backgroundColor: "white "
    },
    {
      title: "E-commerce & Retail",
      description: "We blend creativity with data to build seamless shopping journeys that spark interest, drive action.",
      metrics: ["200+ Clients Elevated", "+250% Average Growth"],
      caseStudy: "Elevated a fashion retailer's online revenue by 250% through precision targeting and tailored user experiences.",
      icon: "🛍️",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Healthcare & Wellness",
      description: "We create trusted strategies that elevate care brands and connect them with the people who need them most.",
      metrics: ["80+ Practices Guided", "+180% Patient Growth"],
      caseStudy: "Drove a 180% rise in patient appointments for a dental clinic through locally-focused outreach and experience-driven campaigns.",
      icon: "💚",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Education",
      description: "Empowering educational institutions with tailored campaigns that connect with learners, enhance engagement.",
      metrics: ["60+ Educators Partnered", "+120% Enrollment Growth"],
      caseStudy: "Achieved a 120% increase in student enrollment for an online university through data-driven targeting and compelling content.",
      icon: "🎓",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Automotive",
      description: "Tailored digital strategies that boost dealership traffic, generate quality leads,put your automotive brand in the fast lane.",
      metrics: ["45+ Clients Accelerated", "500+ Qualified Leads Monthly"],
      caseStudy: "Generated over 500 qualified leads per month for a car dealership through targeted campaigns and conversion-optimized funnels.",
      icon: "🚗",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Real Estate",
      description: "Strategic digital solutions that elevate listings, attract serious buyers, and help real estate professionals close faster.",
      metrics: ["90+ Clients Empowered", "85% Inventory Sold"],
      caseStudy: "Enabled a property  to sell 85% of their inventory in just 6 months through targeted outreach and high-impact visuals.",
      icon: "🏠",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section 
      id="industries" 
      className="min-h-screen bg-white text-white px-4 sm:px-6 py-12 md:py-20 relative"
    >
      {/* Background decorative elements */}
      {/* <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-2xl h-7 bg-[var(--tv-accent)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--tv-500)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10 ">
        <div className="text-center mb-8">
          <div className="inline-flex items-center  px-4 py-2 md:px-6 md:py-3 mt-6 md:mt-8 bg-[#c0c0c0] backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
            <span className="text-sm text-white font-medium">🏭 Industry Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Industries</h2>
          <p className="text-base md:text-xl text-black max-w-3xl md:max-w-4xl mx-auto leading-relaxed mt-3">
            We craft digital strategies that adapt to your industry, connect with your audience, and move your brand forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 sm:p-4 md:p-5 gap-4 sm:gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 border-black transform md:hover:scale-105`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-[#c0c0c0] p-5 sm:p-6 md:p-8 rounded-3xl border-white/20 backdrop-blur-sm transition-all duration-300 card-hover ${
                hoveredCard === index ? 'shadow-2xl shadow-accent' : 'shadow-brand'
              }`}>
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-3xl md:text-4xl mb-4 md:mb-6 filter bg-[#c0c0c0] drop-shadow-lg animate-float">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-orange-500">{industry.title}</h3>
                </div>
                
                <p className="mb-6 md:mb-8 leading-relaxed bg-[#c0c0c0] text-black text-sm sm:text-base md:text-lg">
                  {industry.description}
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 bg-[#c0c0c0]">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs sm:text-sm font-semibold text-black bg-white/5 px-3 py-2 rounded-xl border-white/10">
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="text-xs sm:text-sm text-black bg-white/5 p-4 sm:p-5 m-3 sm:m-5 rounded-xl border-white/10">
                  <span className="font-semibold text-black">Case Study:</span> {industry.caseStudy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 