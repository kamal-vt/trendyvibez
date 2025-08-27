// src/components/Blogs.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { blogCards } from '../../data/blogs';

export default function Blogs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const blogs = blogCards;

  return (
    <section 
      id="blogs" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs & Articles</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Quick reads with big impact built to inform, inspire, and drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${blog.color} p-8 rounded-3xl h-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/50' : 'shadow-lg'
              }`}>
                {/* Blog Image/Illustration */}
                <div className="mb-6">
                  {blog.image === "SEO" ? (
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-center relative overflow-hidden">
                      <div className="text-6xl font-bold text-orange-400 mb-4">SEO</div>
                      <div className="flex justify-center space-x-4 text-2xl">
                        <span className="text-yellow-400">♜</span>
                        <span className="text-green-400">💰</span>
                        <span className="text-blue-400">📈</span>
                        <span className="text-white">☁️</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-blue-800 to-purple-700 rounded-2xl p-6 text-center relative overflow-hidden">
                      <div className="text-6xl mb">🎓</div>
                      <div className="text-4xl mb-2">📚</div>
                      <div className="flex justify-center space-x-3 text-xl">
                        
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                    </div>
                  )}
                </div>

                {/* Blog Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="pt-4">
                    <button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={() => router.push(`/blog/${blog.slug}`)}
                    >
                      {blog.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Blogs Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">More Articles Coming Soon</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're constantly creating fresh content to keep you ahead of the curve. 
            {/* Subscribe to our newsletter to be notified when new articles are published. */}
          </p>
          <div className="mt-8">
            {/* <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe to Newsletter
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
} 