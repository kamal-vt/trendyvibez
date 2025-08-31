"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="rounded-t-[30px] sm:rounded-t-[50px] pt-10 b-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #4A7CCA, #213279)' }}>
      {/* Background Glows as part of the layout */}
      <div className="flex justify-between items-center ">
        <div className="w-[400px]  rounded-full bg-white/10 blur-[120px]" />
        <div className="w-[400px] rounded-full bg-white/10 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-white/90">
          {/* Column 1: Logo + Socials */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              className="w-[160px] sm:w-[200px] p-2 rounded-2xl flex items-center justify-center mb-6 ml-4 md:ml-6"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/4.png" alt="Trendy Vibes Logo" className="object-contain" loading="lazy" />
            </motion.div>

            <div className="flex items-center gap-3 sm:gap-4 ml-4 md:ml-6">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/trendy-vibes", color: "hover:text-blue-600" },
                { icon: Facebook, href: "https://www.facebook.com/trendyvibes", color: "hover:text-blue-500" },
                { icon: Instagram, href: "https://www.instagram.com/trendyvibes", color: "hover:text-pink-500" },
                { icon: Twitter, href: "https://twitter.com/trendyvibes", color: "hover:text-sky-400" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all ${social.color}`}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold mb-6 mt-2 uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Industries", href: "/industries" },
                  // { name: "Resources", href: "/resources" },
                  { name: "Contact Us", href: "/lets-talk" },
                  { name: "Privacy policy", href: "/" },
                  { name: "Refund policy", href: "/" },
                  { name: "Terms and conditions", href: "/" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold mb-6 mt-2 uppercase tracking-widest">
                Services
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Seo",
                  "Social media management",
                  "Brand development",
                  "Content strategy",
                  "Analytics",
                  "Web design",
                ].map((name) => (
                  <li key={name}>
                    <Link href="/services" className="hover:text-white/80 transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col justify-between ">
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest mt-2">
                Contact Us
              </h4>
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white/70 mt-2" />
                  <span>+91 7207376333</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white/70" />
                  <span>trendyvibez.in@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-white/70" />
                  <span>
                    Cyber Towers,<br />
                    3rd Quadrant, 1st Floor, HITEC City,<br />
                    Hyderabad, Telangana - 500081
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-5 sm:mt-12 pt-6 border-t border-white/10 flex flex-col items-center justify-between gap-4 text-white text-xs md:text-sm">
          <p>© 2025 Trendy Vibes. All rights reserved.</p>
          {/* <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Refund Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
