// src/components/Features.jsx
const features = [
    { title: 'SEO Optimization', desc: 'Improve visibility on search engines.' },
    { title: 'Social Media', desc: 'Engage your audience effectively.' },
    { title: 'Paid Ads', desc: 'Maximize ROI on ad spend.' },
    { title: 'Content Marketing', desc: 'Create compelling content that converts.' },
    { title: 'Email Campaigns', desc: 'Build lasting relationships with your audience.' },
    { title: 'Analytics & Reporting', desc: 'Track performance and optimize results.' },
  ];
  
  export default function Features() {
    return (
      <section id="features" className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map(f => (
              <div key={f.title} className="space-y-2">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  