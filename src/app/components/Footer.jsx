"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative rounded-t-[80px] bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#c6186e]/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3d3ed3]/20 blur-[140px]" />

      <div className="relative z-10 container w-10/12 mx-auto px-6 py-8 flex flex-col gap-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Socials */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="w-120px px-4 p-2  rounded-2xl  flex items-center justify-center"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/4.png" 
                  alt="Trendy Vibes Logo"
                  className="object-contain "
                />
              </motion.div>
              {/* <div>
                <p className="text-2xl font-semibold tracking-wide">Trendy Vibes</p>
              </div> */}
            </div>
            <p className="text-white/70 text-m leading-6 max-w-md">
              Follow what lights you up with fearless imagination, shaping your own path without worrying about tradition.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { icon: Twitter, href: "#", color: "hover:text-sky-400" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all ${social.color}`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-widest">
              Categories
            </h4>
            <ul className="space-y-3 text-white/80">
              {[
                { name: "B.Tech", href: "#" },
                { name: "Pharmacy", href: "#" },
                { name: "Degree", href: "#" },
                { name: "MBA", href: "#" },
                { name: "MCA", href: "#" },
                { name: "Agriculture", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 text-white/80">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/services" },
                { name: "Services", href: "/services" },
                { name: "Careers", href: "#" },
                { name: "Contact Us", href: "/lets-talk" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/80" />
                <span className="font-semibold">+91 7207376333</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/80" />
                <span className="text-white/90">hello@trendyvibes.com</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <MapPin size={18} className="mt-1" />
                <span>
                  Cyber Towers, HITEC City, 3rd Floor,
                  <br /> Hyderabad, Telangana, 500081
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© 2025 Trendy Vibes. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Refund Policy</Link>
            <Link href="#" className="hover:text-white">Terms and Conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating Gradient Text for Premium Feel */}
      <div className="absolute bottom-20 right-20 z-0 text-[96px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5 tracking-tighter select-none leading-none">
        TRENDY VIBES
      </div>

      {/* Overlay shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
    </footer>
  );
};

export default Footer;
