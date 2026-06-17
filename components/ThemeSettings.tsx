"use client";

import React, { useState, useEffect } from "react";
import { Settings, X } from "lucide-react";

export default function ThemeSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { name: "Green", value: "#28e98c" },
    { name: "Yellow", value: "#e4af12" },
    { name: "Orange", value: "#fe6f1d" },
    { name: "Light Blue", value: "#14c5fd" },
    { name: "Grey", value: "#c0c0c0" },
    { name: "Blue", value: "#1338f3" },
    { name: "Red", value: "#f31313" },
    { name: "Pink", value: "#ff99cc" }
  ];

  const changeColor = (color: string) => {
    document.documentElement.style.setProperty("--accent", color);
  };

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed top-4 right-4 lg:top-8 lg:left-8 lg:right-auto z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#191919] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent transition-all duration-300 group shadow-lg"
          aria-label="Theme Settings"
        >
          <Settings className="w-4 h-4 lg:w-5 lg:h-5 animate-[spin_4s_linear_infinite]" />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#191919] border-l border-zinc-800 z-[60] p-8 sm:p-12 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl font-light text-white">Configuration</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div>
          <p className="text-xs text-zinc-500 font-medium mb-6 tracking-widest uppercase">
            Colors
          </p>
          <div className="flex flex-wrap gap-4">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => changeColor(c.value)}
                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-white transition-all flex items-center justify-center ring-2 ring-transparent focus:outline-none"
                style={{ backgroundColor: c.value }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
