"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Achievements", href: "achievements" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    console.log(`Navigation clicked: ${href}`);
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => handleNavClick("hero")}
          >
            &lt;Shailesh/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
