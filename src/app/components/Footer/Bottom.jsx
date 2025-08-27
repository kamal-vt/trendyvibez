import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-500" },
  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
];

const Bottom = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 pt-6">
      <p className="text-white/60 text-sm ">
        © 2025 <span className="text-white font-semibold">Trendy Vibe</span>. All rights reserved.
      </p>

      <div className="flex gap-4">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all ${social.color}`}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
