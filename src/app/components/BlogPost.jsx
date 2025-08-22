// src/components/BlogPost.jsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getBlogBySlug, allBlogs } from '../../data/blogs';

export default function BlogPost({ blog }) {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);

  const currentBlog = getBlogBySlug(blog);

  if (!currentBlog) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Blog Not Found</h1>
          <p className="text-gray-300 mb-8">The blog you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/blogs')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Blogs
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-gray-300">
            <button 
              onClick={() => router.push('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => router.push('/blogs')}
              className="hover:text-white transition-colors"
            >
              Blogs
            </button>
            <span>/</span>
            <span className="text-white">{currentBlog.title}</span>
          </div>
        </nav>

        {/* Blog Content */}
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: currentBlog.content }}
        />

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(allBlogs).map(([slug, data]) => {
              if (slug !== blog) {
                return (
                  <div 
                    key={slug}
                    className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 cursor-pointer"
                    onClick={() => router.push(`/blog/${slug}`)}
                  >
                    <h3 className="text-lg font-bold mb-2 text-white">{data.title}</h3>
                    <p className="text-gray-300 text-sm">{data.excerpt}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </section>
      </div>
    </section>
  );
} 