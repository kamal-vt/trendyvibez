import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Let's Talk", href: "/lets-talk" },
  ],
  Services: [
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Paid Advertising", href: "/services#paid" },
    { name: "Social Media", href: "/services#social" },
    { name: "Content Strategy", href: "/services#content" },
    { name: "Brand Development", href: "/services#brand" },
  ],
};

const Content = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {/* Company */}
      <div className="mx-auto">
        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest border-l-4 pl-3 border-gradient-to-r from-[#c6186e] to-[#6a35b5]">
          Company
        </h4>
        <ul className="space-y-2.5">
          {footerLinks.Company.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="mx-auto">
        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest border-l-4 pl-3 border-gradient-to-r from-[#6a35b5] to-[#3d3ed3]">
          Services
        </h4>
        <ul className="space-y-2.5">
          {footerLinks.Services.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="mx-auto">
        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest border-l-4 pl-3 border-gradient-to-r from-[#c6186e] to-[#3d3ed3]">
          Contact
        </h4>
        <div className="space-y-3 text-white/80 text-sm">
          <div className="flex items-center gap-3">
            <Phone size={18} /> <span className="font-bold">7207376333</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} /> <span>hello@trendyvibes.com</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-1" />{" "}
            <span>
              Cyber Towers, HITEC City,
              <br /> Hyderabad, Telangana, 500081
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
