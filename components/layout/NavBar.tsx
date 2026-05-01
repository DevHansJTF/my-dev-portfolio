"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { path: "#home", label: "Home" },
  { path: "#work", label: "Work" },
  { path: "#about", label: "About" },
  { path: "#contact", label: "Contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.path.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(`#${currentSection}`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-6 px-6 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
        {navItems.map((item) => {
          const isActive = activeSection === item.path;

          return (
            <a
              key={item.path}
              href={item.path}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
