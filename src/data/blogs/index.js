// src/data/blogs/index.js
import { seoReimaginedBlog } from './seo-reimagined.js';
import { powerSkillsBlog } from './power-skills-2025.js';

// Blog cards data for the main blogs page
export const blogCards = [
  {
    title: seoReimaginedBlog.title,
    description: seoReimaginedBlog.excerpt,
    image: "SEO",
    buttonText: "Peek Inside",
    color: "from-orange-500 to-red-600",
    icon: "🔍",
    slug: seoReimaginedBlog.slug
  },
  {
    title: powerSkillsBlog.title,
    description: powerSkillsBlog.excerpt,
    image: "Skills",
    buttonText: "Peek Inside",
    color: "from-blue-500 to-purple-600",
    icon: "🎓",
    slug: powerSkillsBlog.slug
  }
];

// All blog data for individual pages
export const allBlogs = {
  [seoReimaginedBlog.slug]: seoReimaginedBlog,
  [powerSkillsBlog.slug]: powerSkillsBlog
};

// Get blog by slug
export const getBlogBySlug = (slug) => {
  return allBlogs[slug] || null;
};

// Get all blog slugs for static generation
export const getAllBlogSlugs = () => {
  return Object.keys(allBlogs);
}; 