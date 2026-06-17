"use client";

import React from "react";

export default function InteractiveBackground() {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover z-0 opacity-[0.25] pointer-events-none"
      muted
      autoPlay
      loop
      playsInline
    >
      <source src="/video1.mp4" type="video/mp4" />
    </video>
  );
}

