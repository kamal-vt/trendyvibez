"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [showIcon, setShowIcon] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleClick = (elementId, iconType) => {
    setClickedElement(elementId);
    setShowIcon(iconType);
    setTimeout(() => {
      setClickedElement(null);
      setShowIcon(null);
    }, 1000);
  };

  const getIcon = (type) => {
    switch (type) {
      case "home":
        return "🏠";
      case "services":
        return "⚙️";
      case "industries":
        return "🏭";
      case "resources":
        return "📚";
      case "blogs":
        return "📰";
      case "lets-talk":
        return "📍";
      case "hamburger":
        return "☰";
      default:
        return "";
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* Fixed Header */}
      <header className="p-2  bg-white/90 backdrop-blur  supports-backdrop-blur:bg-white/70 text-black shadow ">
        <div className="w-11/12 m-auto flex items-center 3xl:max-w-7xl 3xl:px-8">
          {/* Logo */}
          <div className="w-1/3">
            <Link href="/" className="flex items-center shrink-0 ">
              <img src="/5.png" alt="Trendy Vibe logo" className=" w-42 rounded" loading="lazy" />
              {/* <span className="text-xl md:text-2xl font-extrabold text-[#494949] tracking-tight">Trendy Vibes</span> */}
            </Link></div>

          {/* Desktop Nav */}
          <nav className="w-1/3 hidden md:flex  mx-auto m-2 items-center justify-between gap-8 text-black/90">
            {[
              { href: "/", id: "home", type: "home", label: "Home" },
              { href: "/services", id: "services", type: "services", label: "Services" },
              { href: "/industries", id: "industries", type: "industries", label: "Industries" },
              // { href: "/resources", id: "resources", type: "resources", label: "Resources" },
              // { href: "/blogs", id: "blogs", type: "blogs", label: "Blog" },
              { href: "/lets-talk", id: "lets-talk", type: "lets-talk", label: "Let’s Connect" },
            ].map(({ href, id, type, label }) => (
              <Link
                key={id}
                href={href}
                className={`transition-all duration-300 relative hover:text-[#494949] ${pathname === href ? "text-orange-700 font-extrabold" : "text-[#494949] font-bold"
                  } ${clickedElement === id
                    ? "button-click-animation text-coral-pink scale-95"
                    : ""
                  }`}
                onClick={() => handleClick(id, type)}
              >
                {label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-coral-pink rounded-full transition-all duration-300 ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                {showIcon === type && clickedElement === id && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 icon-animation text-2xl">
                    {getIcon(type)}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden w-1/3 md:flex items-center justify-end gap-4">
            {/* <button aria-label="Search" className="p-2 rounded-lg bg-red-50 border border-red-100 hover:bg-red-100">
              <svg className="w-5 h-5 text-[#494949]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}
            {/* <Link href="/lets-talk" className="px-4 py-2 rounded-xl bg-white text-[#494949] font-semibold hover:bg-slate-100 transition">Get Started</Link> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden ml-auto flex flex-col space-y-1 text-blue-500 p-2 relative ${clickedElement === "hamburger"
                ? "button-click-animation scale-95"
                : ""
              }`}
            onClick={() => {
              toggleMenu();
              handleClick("hamburger", "hamburger");
            }}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-red-600 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-red-600 transition-all ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-red-600 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
            {showIcon === "hamburger" && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 icon-animation text-2xl">
                {getIcon("hamburger")}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white text-black shadow border-b">
          <div className="flex flex-col w-full">
            <nav className="py-2">
              {[
                { href: "/", id: "mobile-home", type: "home", label: "Home" },
                { href: "/services", id: "mobile-services", type: "services", label: "Services" },
                { href: "/industries", id: "mobile-industries", type: "industries", label: "Industries" },
                // { href: "/resources", id: "mobile-resources", type: "resources", label: "Resources" },
                { href: "/lets-talk", id: "mobile-lets-talk", type: "lets-talk", label: "Let’s Connect" },
              ].map(({ href, id, type, label }) => (
                <Link
                  key={id}
                  href={href}
                  className={`block px-6 py-3 text-base font-medium hover:bg-red-50 hover:text-red-600 transition-colors ${clickedElement === id ? "text-red-600" : "text-black"
                    }`}
                  onClick={() => {
                    closeMenu();
                    handleClick(id, type);
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
