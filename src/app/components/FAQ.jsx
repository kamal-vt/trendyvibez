export default function FAQ() {
  const faqs = [
    {
      question: "How do you customize strategies for different industries?",
      answer: "We start by understanding your audience, goals, and market landscape then build a tailored plan rooted in real data, not guesswork.",
    },
    {
      question: "Can I choose specific services instead of a full package?",
      answer: "Yes! Our services are modular. You can start with what you need now and scale as your business grows.",
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We work across major digital platforms including Google, Meta (Facebook/Instagram), LinkedIn, YouTube, and emerging channels relevant to your audience.",
    },
    {
      question: "How do you measure campaign success?",
      answer: "Success is measured through key performance indicators (KPIs) aligned with your goals whether that's leads, traffic, conversions, or revenue.",
    },
    {
      question: "Is there a minimum contract term?",
      answer: "We offer flexible plans. While some strategies benefit from 3-6 month commitments, we're happy to discuss options that work for your timeline.",
    },
  ];

  return (
    <section 
      id="faq"
      className="py-20 px-6"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm rounded-xl p-8 border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-gray-300/60 hover:border-gray-300"
            >
              <h3 className="text-xl font-semibold text-red-300 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

              </div>
    </section>
  );
}
