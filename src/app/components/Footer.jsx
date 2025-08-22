"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Services: ['Digital Marketing', 'SEO', 'Social Media', 'Web Design'],
    Resources: ['Blog', 'Case Studies', 'White Papers', 'Newsletter'],
    Support: ['Help Center', 'Documentation', 'API', 'Status']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
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
              <span className="text-white font-bold text-2xl">Trendy Vibe</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              From strategy to scale, we craft digital experiences that captivate, convert, and keep your audience coming back for more.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>hello@trendyvibes.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
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
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
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
              <p className="text-gray-400">Subscribe to our newsletter for the latest marketing insights.</p>
        </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-coral-pink transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-coral-pink hover:bg-dusty-rose text-white rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Trendy Vibe. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 text-gray-400 ${social.color} transition-colors duration-200`}
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
