// src/components/LetsTalk.jsx
import { useState } from 'react';

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    main: "hello@trendyvibes.com",
    subtitle: "We'll respond within 24 hours"
  },
  {
    icon: "📞",
    title: "Call Us",
    main: "7207376333",
    subtitle: "Mon-Fri, 9AM-6PM"
  },
  {
    icon: "📍",
    title: "Visit Us",
    main: "Cyber Towers, HITEC City, Hyderabad",
    subtitle: "Schedule an appointment",
    
  },
  {
    icon: "🕒",
    title: "Business Hours",
    main: "Monday-Friday: 9AM-6PM",
    subtitle: "Weekend consultations available"
  }
];

const whyChoose = [
  "4+ years of digital marketing expertise",
  "180+ successful projects completed",
  "98% client satisfaction rate",
  "Dedicated account management",
  "Data-driven strategies that deliver ROI",
  "24/7 support and monitoring"
];

const testimonials = [
  {
    quote: "Trendy Vibes transformed our digital presence completely. ROI increased by 300% in just 6 months!",
    author: "Sarah Johnson",
    // company: "TechStart Inc.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "Professional and results-driven. They delivered beyond our expectations.",
    author: "Mike Chen",
    // company: "GrowthLab",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const ContactCard = ({ icon, title, main, subtitle, button }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-black hover:border-white/40 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl  flex flex-col group">
    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">{icon}</div>
    <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
    <p className="text-lg  text-black mb-1">{main}</p>
    <p className="text-black text-sm mb-4">{subtitle}</p>
    {button && (
      <div className="mt-auto">
        <button className="bg-[var(--tv-accent)] text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          {button}
        </button>
      </div>
    )}
  </div>
);

const Field = ({ label, as, children, ...props }) => (
  <div>
    <label className="block text-sm text-white font-semibold mb-2">{label}</label>
    {as === 'textarea' ? (
      <textarea
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none"
      ></textarea>
    ) : as === 'select' ? (
      <select
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2"
        style={{
          colorScheme: 'dark'
        }}
      >
        {children}
      </select>
    ) : (
      <input
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:border-blue-400 transition-all duration-300"
      />
    )}
  </div>
);

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="lets-talk"
      className="min-h-screen text-black py-10 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl text-black font-bold mb-6">
            Your next big move starts here.
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Whether you're looking to grow, rebrand, or simply do things smarter we're ready to help you make it happen. No fluff, just focused conversations and real solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <ContactCard key={i} {...info} />
          ))}
        </div>

                 {/* Form + Illustration Wrapper */}
         <div
           className="rounded-3xl p-1 border  border-white/20 min-h-[400px] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 "
         >
           <div className="backdrop-blur-sm rounded-3xl p-8 h-full" style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}>
            <div className="grid lg:grid-cols-2 gap-12 ">
              {/* Form */}
              <div className=' rounded-2xl p-4'>
                <h3 className="text-3xl font-bold text-[#ffffff]  mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 placeholder:white ">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Vignesh yadav"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Vignesh@email.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                    />
                    <Field
                      label="Project Budget"
                      name="budget"
                      as="select"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="" className="bg-white text-black">Select budget range</option>
                      <option value="5k-10k" className="bg-white text-black">$5K - $10K</option>
                      <option value="10k-25k" className="bg-white text-black">$10K - $25K</option>
                      <option value="25k-50k" className="bg-white text-black">$25K - $50K</option>
                      <option value="50k+" className="bg-white text-black">$50K+</option>
                    </Field>
                  </div>

                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl "
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Side Content */}
              <div className="space-y-8">
                {/* Quick Contact */}
                {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-2xl font-bold mb-4 text-yellow-400">Quick Contact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📧</div>
                      <div>
                        <p className="font-semibold">hello@trendyvibes.com</p>
                        <p className="text-sm text-gray-300">24/7 support</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📞</div>
                      <div>
                        <p className="font-semibold">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-300">Mon-Fri, 9AM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="font-semibold">Cyber Towers, HITEC City</p>
                        <p className="text-sm text-gray-300">Hyderabad, India</p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Testimonials */}
                <div className="backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20" style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}>
                  <h4 className="text-2xl font-bold mb-4 text-[#ffffff]">What Clients Say</h4>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-[var(--tv-accent)] pl-4">
                        <p className="text-sm italic mb-2">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-sm">{testimonial.author}</p>
                            <p className="text-xs text-gray-300">{testimonial.company}</p>
                          </div>
                          <div className="text-white">{testimonial.rating}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="backdrop-blur-sm rounded-2xl p-6 border border-white/20" style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}>
                  <h4 className="text-xl font-bold mb-4 text-white">Our Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">300%</div>
                      <div className="text-sm text-white">Avg. ROI Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">180+</div>
                      <div className="text-sm text-white">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">98%</div>
                      <div className="text-sm text-white">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">24/7</div>
                      <div className="text-sm text-white">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center text-black">
          <h2 className="text-3xl font-bold text-black mb-8 ">
            Why Choose Trendy Vibes?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white gap-6 ">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl  text-white p-6 border border-white/20 flex items-start gap-4 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl "style={{
                  boxShadow: "0px 10px 20px rgba(48, 43, 99, 0.5)"
                }}
              >
                <div className="text-green-600 text-2xl mt-1 transition-transform duration-300 group-hover:scale-125">✓</div>
                <p className="text-black flex-grow">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Free Strategy Session */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[color:var(--tv-500)]/30">
          <h2 className="text-3xl font-bold text-[var(--tv-accent)] mb-4">
            Free Strategy Session
          </h2>
          <p className="text-xl text-wite mb-8 max-w-2xl mx-auto">
            Claim your free 30-minute strategy session — let's explore your goals
            and map out the smartest path to digital growth.
          </p>
          <button className="group relative px-8 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#4A7CCA]/25 hover:scale-105 text-base sm:text-base md:text-lg w-full sm:w-auto min-h-[48px] sm:min-h-0" style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}>
            <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-3">
              Schedule Free Call
              <svg
                className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
