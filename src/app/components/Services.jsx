"use client";
import React, { useState } from "react";
import ServicesCoursal from "./Services/servicescoursal";

const servicesData = [
  {
    title: "SEO",
    tagline: "Boost your search visibility",
    stat: "ROI: 200%+",
    description:
      "SEO improves your website visibility, drives quality traffic, and increases your long-term revenue.",
    illustration: "/images/s.png",
    features: [
      "Increased online visibility",
      "Higher quality traffic",
      "Optimized user experience",
      "Sustainable long-term ROI",
    ],
  },
  {
    title: "Paid Advertising",
    tagline: "Get immediate results",
    stat: "Instant Leads",
    description:
      "Paid advertising delivers instant exposure, leads, and measurable results across Google, social media, and display networks.",
    illustration: "/images/ads.png",
    features: [
      "Instant visibility and reach",
      "Precise audience targeting",
      "Scalable traffic",
      "Data-driven decisions",
    ],
  },
  {
    title: "Social Media Management",
    tagline: "Build your brand online",
    stat: "Engagement + Growth",
    description:
      "Social media management ensures consistent posting, audience engagement, and community building.",
    illustration: "/images/sm.png",
    features: [
      "Stronger brand identity",
      "Increased engagement",
      "Optimized experience",
      "Sustainable ROI",
    ],
  },
  {
    title: "Brand Development",
    tagline: "Define your identity",
    stat: "Brand Equity",
    description:
      "Brand development shapes perception, builds trust, and differentiates your business in a crowded market.",
    illustration: "/images/br.png",
    features: [
      "Defined identity and positioning",
      "Increased recognition",
      "Emotional connection",
      "Aligned internal culture",
    ],
  },
  {
    title: "Content Strategy",
    tagline: "Deliver the right message",
    stat: "Conversions + Leads",
    description:
      "A content strategy aligns your messaging to your audience, ensuring every piece drives value.",
    illustration: "/images/contentimg.jpg",
    features: [
      "Clear messaging",
      "Targeted content",
      "Improved SEO",
      "Stronger customer relationships",
    ],
  },
  {
    title: "Analytics & Reporting",
    tagline: "Data-driven decisions",
    stat: "Insights = Growth",
    description:
      "Analytics provides insights across campaigns, channels, and website performance to optimize results.",
    illustration: "/images/anal.png",
    features: [
      "Performance clarity",
      "Data-driven decisions",
      "Customer behavior insights",
      "Real-time monitoring",
    ],
  },
];

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      {/* Sticky Carousel Section */}
      <div className="relative mt-[120px] max-w-6xl mx-auto space-y-20 p-2 m-2">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="sticky top-[120px] rounded-3xl p-6 md:p-12 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Illustration */}
              <div className="flex items-center justify-center object-contain">
                {service.illustration.startsWith("/") ? (
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                    <img
                      src={service.illustration}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center text-6xl">
                    {service.illustration}
                  </div>
                )}
              </div>

              {/* Right - Content */}
              <div className="flex flex-col justify-start space-y-4 text-white">
                <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                <p className="text-lg">{service.tagline}</p>
                <div className="text-xl font-bold text-coral-pink">{service.stat}</div>
                <p className="text-gray-200 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white/10 p-2 rounded-lg"
                    >
                      <span className="text-coral-pink">⭐</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            {/* <div className="flex justify-center mt-6 space-x-3">
              {servicesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "bg-coral-pink shadow-lg scale-110"
                      : "bg-gray-300 hover:bg-coral-pink"
                  }`}
                />
              ))}
            </div> */}
          </div>
        ))}
      </div>

      {/* Full ServicesCoursal Component */}
      <div className="">
        <ServicesCoursal />
      </div>
    </div>
  );
};

export default ServicesPage;
