import React from "react";
import { ArrowDown } from "lucide-react";

export default function RoundSpin() {
  return (
    <div className="relative w-36 h-36 flex items-center justify-center group">
      {/* Rotating SVG Text */}
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* Visible outer circular border */}
          <circle cx="50" cy="50" r="52" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="transparent" />
          
          <path
            id="circlePath"
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="transparent"
          />
          <text className="text-[10px] font-medium tracking-[0.2em] uppercase" fill="#ffffff">
            <textPath href="#circlePath" startOffset="0%">
              my projects • my projects •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Arrow Button (No background/border in the original design) */}
      <a
        href="#portfolio"
        className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-all duration-300 z-10"
        aria-label="Scroll to Portfolio"
      >
        <ArrowDown className="w-8 h-8 stroke-[1.5]" />
      </a>
    </div>
  );
}
