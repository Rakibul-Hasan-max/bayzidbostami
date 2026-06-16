"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Cpu,
  Layers,
  MessageSquare,
  DollarSign,
  Mail,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "services", label: "Specializations", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "portfolio", label: "Portfolio", icon: Layers },
  { id: "testimonial", label: "Testimonials", icon: MessageSquare },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function RightNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // triggers when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Vertical Menu */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 border border-zinc-800 bg-[#191919] rounded-full py-6 px-3.5 z-40">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 outline-none"
              aria-label={item.label}
            >
              <Icon
                className={`w-4 h-4 transition-colors duration-300 ${
                  isActive ? "text-[#28e98c]" : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              />

              {/* Tooltip */}
              <div className="absolute right-14 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#1c1c1c] border border-zinc-800 text-[10px] tracking-widest uppercase text-white px-3 py-1.5 rounded-md shadow-2xl pointer-events-none whitespace-nowrap origin-right">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Menu */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 border border-zinc-800 bg-[#191919]/90 backdrop-blur-md rounded-full px-5 py-3.5 flex items-center gap-4 max-w-[90vw] overflow-x-auto shadow-2xl z-40 scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="flex items-center justify-center p-2 rounded-full min-w-8 min-h-8"
              aria-label={item.label}
            >
              <Icon
                className={`w-[17px] h-[17px] transition-colors duration-300 ${
                  isActive ? "text-[#28e98c]" : "text-zinc-500"
                }`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
