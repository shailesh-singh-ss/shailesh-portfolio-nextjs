"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { idx: "01", name: "home", href: "hero" },
  { idx: "02", name: "work", href: "experience" },
  { idx: "03", name: "about", href: "about" },
  { idx: "04", name: "stack", href: "skills" },
  { idx: "05", name: "projects", href: "projects" },
  { idx: "06", name: "contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href);
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - 120 <= 0) current = id;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-700"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between font-mono text-sm">
          <button
            type="button"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 text-bone-200 hover:text-lime-400 transition-colors"
          >
            <span className="text-lime-400">$</span>
            <span className="hidden sm:inline">shailesh@zykrr</span>
            <span className="sm:hidden">~$</span>
            <span className="text-bone-500">:~</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-3 py-1.5 transition-colors ${
                    isActive ? "text-lime-400" : "text-bone-400 hover:text-bone-100"
                  }`}
                >
                  <span className="text-ink-500 mr-1">[{item.idx}]</span>
                  <span>~/{item.name}</span>
                  {isActive && (
                    <span
                      className="absolute -left-0.5 top-1/2 -translate-y-1/2 text-lime-400"
                      aria-hidden
                    >
                      ▌
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden text-bone-200 p-2 hover:text-lime-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-ink-700 pt-3 space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-1.5 px-2 font-mono text-sm transition-colors ${
                    isActive
                      ? "text-lime-400 bg-lime-400/[0.06]"
                      : "text-bone-300 hover:text-lime-400"
                  }`}
                >
                  <span className="text-ink-500 mr-2">[{item.idx}]</span>
                  ~/{item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
