// src/components/Industries.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Industries() {
  const [hoveredCard, setHoveredCard] = useState(null);


  const industries = [
    {
      title: "Technology & SaaS",
      description:
        "We craft high-impact marketing for tech pioneers and SaaS disruptors turning complex solutions into simple.",
      metrics: ["150+ Visionary Brands Partnered", "+300% Growth Achieved"],
      caseStudy:
        "Engineered a 300% surge in user acquisition for a fintech startup through precision-led strategy.",
      icon: "⚙️",
      // color: "from-pink-500 to-purple-600",
    },
    {
      title: "E-commerce & Retail",
      description:
        "We blend creativity with data to build seamless shopping journeys that spark interest, drive action.",
      metrics: ["200+ Clients Elevated", "+250% Average Growth"],
      caseStudy:
        "Elevated a fashion retailer's online revenue by 250% through precision targeting .",
      icon: "🛍️",
      // color: "from-red-500 to-orange-500",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "We create trusted strategies that elevate care brands and connect them with the people who need them most.",
      metrics: ["80+ Practices Guided", "+180% Patient Growth"],
      caseStudy:
        "Drove a 180% rise in patient appointments for a dental clinic through locally-focused outreach.",
      icon: "💚",
      // color: "from-emerald-400 to-green-600",
    },
    {
      title: "Education",
      description:
        "Empowering educational institutions with tailored campaigns that connect with learners, enhance engagement.",
      metrics: ["60+ Educators Partnered", "+120% Enrollment Growth"],
      caseStudy:
        "Achieved a 120% increase in student enrollment for an online university through data-driven targeting.",
      icon: "🎓",
      // color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Automotive",
      description:
        "Tailored digital strategies that boost dealership traffic and put your automotive brand in the fast lane.",
      metrics: ["45+ Clients Accelerated", "500+ Qualified Leads Monthly"],
      caseStudy:
        "Generated over 500 qualified leads per month for a car dealership through targeted campaigns.",
      icon: "🚗",
      // color: "from-red-500 to-orange-600",
    },
    {
      title: "Real Estate",
      description:
        "Strategic digital solutions that elevate listings, attract serious buyers, and help real estate professionals close faster.",
      metrics: ["90+ Clients Empowered", "85% Inventory Sold"],
      caseStudy:
        "Enabled a property developer to sell 85% of their inventory in 6 months with high-impact visuals.",
      icon: "🏠",
      // color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="industries"
      className="relative min-h-screen bg-white px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-6 py-3  backdrop-blur-md rounded-full border border-black/20 mb-6" >
            <span className="text-sm text-black font-medium">
              🏭 Industry Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Industries We Empower
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            We craft digital strategies that adapt to your industry, connect with your
            audience, and move your brand forward.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group rounded-3xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`p-8 rounded-3xl bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-xl backdrop-blur-lg border border-white/20 transition-all duration-300 ${
                  hoveredCard === index ? "shadow-2xl shadow-white/20" : ""
                }`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                </div>

                <p className="mb-6 text-white/90 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-3 mb-6">
                  {industry.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="text-sm font-semibold text-white/90 bg-white/10 px-3 py-2 rounded-xl border border-white/10"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-white/80 bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="font-semibold text-white">Case Study:</span>{" "}
                  {industry.caseStudy}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* background glow elements */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[140px]" />
    </section>
  );
}
