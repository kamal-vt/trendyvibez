// src/components/Testimonials.jsx
const testimonials = [
    { name: 'Alice', quote: 'Fantastic results and great support!' },
    { name: 'Bob', quote: 'Our traffic doubled in three months.' },
  ];
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-black text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map(t => (
              <div key={t.name} className="text-center">
                <p className="text-xl italic mb-4">"{t.quote}"</p>
                <span className="font-semibold">– {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  