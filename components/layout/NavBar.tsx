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
          // Element is active if its top is above the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }

      // If user has scrolled to the very bottom, highlight the last section
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 10) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection(`#${currentSection}`);
    };

    // Call it initially to set correct state on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-4 sm:py-6 px-2 sm:px-6 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-center gap-1 sm:gap-2 p-1.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md shadow-2xl transition-all duration-300 w-max mx-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.path;

          return (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.path.substring(1);
                const element = document.getElementById(targetId);
                if (element) {
                  const yOffset = -80; // Offset for sticky navbar
                  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`relative px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${
                isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 tracking-wide">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
