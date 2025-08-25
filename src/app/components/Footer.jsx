"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'Home', href: '/' },
      { name: 'About ', href: '/services' },
      { name: 'Industries', href: '/industries' },
      { name: 'Let\'s Talk', href: '/lets-talk' }
    ],
    Services: [
      { name: 'All Services', href: '/services' },
      { name: 'SEO Optimization', href: '/services#seo' },
      { name: 'Paid Advertising', href: '/services#paid' },
      { name: 'Social Media', href: '/services#social' },
      { name: 'Content Strategy', href: '/services#content' },
      { name: 'Brand Development', href: '/services#brand' }
    ],
    Resources: [
      { name: 'Blog Articles', href: '/blogs' },
      // { name: 'Resources', href: '/resources' },
      // { name: 'Case Studies', href: '/resources#case-studies' },
      // { name: 'Marketing Guides', href: '/resources#guides' }
    ],
    Industries: [
      { name: 'All Industries', href: '/industries' },
      { name: 'Technology', href: '/industries#tech' },
      { name: 'Healthcare', href: '/industries#healthcare' },
      { name: 'E-commerce', href: '/industries#ecommerce' },
      { name: 'Finance', href: '/industries#finance' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/trendyvibe', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/trendyvibe', color: 'hover:text-sky-500' },
    { icon: Instagram, href: 'https://instagram.com/trendyvibe', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: 'https://linkedin.com/company/trendyvibe', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-[#873999] text-white rounded-2xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-coral-pink to-dusty-rose rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TV</span>
              </div>
              <span className="text-orange-600 font-bold text-2xl">Trendy Vibe</span>
            </motion.div>
            
            <p className="text-black mb-6 leading-relaxed">
              From strategy to scale, we craft digital experiences that captivate, convert, and keep your audience coming back for more.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Mail size={16} />
                <span>hello@trendyvibes.com</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Phone size={16} />
                <span>7207376333</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <MapPin size={16} />
                <span>Cyber Towers, HITEC City, Hyderabad, Telangana, 500081</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-black hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-black">Subscribe to our newsletter for the latest marketing insights.</p>
        </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 text-black bg-white border border-black rounded-l-lg focus:outline-none rounded-2xl focus:border-coral-pink transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-coral-pink hover:bg-dusty-rose text-black rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            © 2024 Trendy Vibe. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 text-black ${social.color} transition-colors duration-200`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
