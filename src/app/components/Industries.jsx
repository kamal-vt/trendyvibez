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
    },
    {
      title: "E-commerce & Retail",
      description:
        "We blend creativity with data to build seamless shopping journeys that spark interest, drive action.",
      metrics: ["200+ Clients Elevated", "+250% Average Growth"],
      caseStudy:
        "Elevated a fashion retailer's online revenue by 250% through precision targeting.",
      icon: "🛍️",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "We create trusted strategies that elevate care brands and connect them with the people who need them most.",
      metrics: ["80+ Practices Guided", "+180% Patient Growth"],
      caseStudy:
        "Drove a 180% rise in patient appointments for a dental clinic through locally-focused outreach.",
      icon: "💚",
    },
    {
      title: "Education",
      description:
        "Empowering educational institutions with tailored campaigns that connect with learners, enhance engagement.",
      metrics: ["60+ Educators Partnered", "+120% Enrollment Growth"],
      caseStudy:
        "Achieved a 120% increase in student enrollment for an university through data-driven targeting.",
      icon: "🎓",
    },
    {
      title: "Automotive",
      description:
        "Tailored digital strategies that boost dealership traffic and put your automotive brand in the fast lane.",
      metrics: ["45+ Clients Accelerated", "500+ Qualified Leads Monthly"],
      caseStudy:
        "Generated over 500 leads per month for a car dealership through targeted campaigns.",
      icon: "🚗",
    },
    {
      title: "Real Estate",
      description:
        "Strategic digital solutions that elevate and attract serious buyers, and help real estate professionals close faster.",
      metrics: ["90+ Clients Empowered", "85% Inventory Sold"],
      caseStudy:
        "Enabled a property developer to sell 85% of their inventory in 6 months with high-impact visuals.",
      icon: "🏠",
    },
    // New industries
    {
      title: "Finance & Banking",
      description:
        "Driving growth for financial institutions with campaigns that build trust and convert prospects into clients.",
      metrics: ["120+ Campaigns Delivered", "+200% Lead Conversion"],
      caseStudy:
        "Increased loan applications by 200% for a bank through segmented digital campaigns.",
      icon: "💳",
    },
    {
      title: "Travel & Hospitality",
      description:
        "We create engaging marketing experiences that inspire travelers and boost bookings for resorts, agencies.",
      metrics: ["70+ Destinations Promoted", "+180% Bookings Growth"],
      caseStudy:
        "Boosted hotel bookings by 180% using targeted social campaigns and experiential storytelling.",
      icon: "✈️",
    },
    {
      title: "Food & Beverage",
      description:
        "We help restaurants, brands, and food services build appetizing campaigns that drive loyalty and sales.",
      metrics: ["100+ Brands Served", "+150% Customer Engagement"],
      caseStudy:
        "Increased online orders for a restaurant chain by 150% through influencer collaborations.",
      icon: "🍔",
    },
    {
      title: "Media & Entertainment",
      description:
        "Promoting events, and productions with campaigns that captivate audiences and maximize reach.",
      metrics: ["50+ Projects Launched", "+300% Audience Growth"],
      caseStudy:
        "Doubled viewership for a streaming platform through targeted digital marketing campaigns.",
      icon: "🎬",
    },
    {
      title: "Sports & Fitness",
      description:
        "We elevate sports brands and fitness programs with campaigns that engage fans and drive memberships.",
      metrics: ["40+ Clubs & Gyms", "+220% Membership Growth"],
      caseStudy:
        "Achieved 220% growth in gym memberships for a local chain using performance campaigns.",
      icon: "🏋️‍♂️",
    },
    {
      title: " Social Impact",
      description:
        "Creating campaigns that raise awareness, drive donations,amplify the mission of social organizations.",
      metrics: ["60+ Causes Supported", "+300% Fundraising Impact"],
      caseStudy:
        "Raised 300% more donations for a charity through integrated social campaigns.",
      icon: "🌍",
    },
  ];
  

  return (
    <section
      id="industries"
      className="relative min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md rounded-full border border-black/20 mb-4 sm:mb-6" >
            <span className="text-xs sm:text-sm text-black font-medium">
              🏭 Industry Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Industries We Empower
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed px-4">
            We craft digital strategies that adapt to your industry, connect with your
            audience, and move your brand forward.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group rounded-3xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-xl backdrop-blur-lg border border-white/20 transition-all duration-300 ${
                  hoveredCard === index ? "shadow-2xl shadow-white/20" : ""
                }`}
              >
                <div className="text-center mb-6">
                  <div className="text-3xl sm:text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold">{industry.title}</h3>
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
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px]  rounded-full blur-[140px]" />
    </section>
  );
}
