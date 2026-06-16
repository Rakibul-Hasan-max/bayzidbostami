"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafiq Ahmed",
    role: "BSc Engineering Student, BUET",
    quote:
      "Bostami Education completely changed how I understood Thermodynamics. Bayzid bhai's way of breaking down complex topics into simple visuals is unmatched. His videos helped me score the highest in my batch!",
  },
  {
    name: "Nusrat Jahan",
    role: "Mechanical Engineering Graduate",
    quote:
      "The CAD and SolidWorks tutorials on Bostami Education are incredibly detailed. I went from a complete beginner to confidently designing machine parts in just 3 months. Highly recommended for all ME students.",
  },
  {
    name: "Ariful Islam",
    role: "YouTube Subscriber & Working Professional",
    quote:
      "I've been following Bayzid's channel for 2 years now. His content on Fluid Mechanics and Heat Transfer is top-notch. The production quality and depth of explanation rivals any paid course out there.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [currentIndex, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [goNext]);

  const t = testimonials[currentIndex];

  return (
    <div className="relative bg-[#191919] border border-zinc-800 rounded-[20px] p-8 md:p-12">
      {/* Quote Icon */}
      <div className="mb-8">
        <Quote className="w-10 h-10 text-[#28e98c] opacity-40" />
      </div>

      {/* Quote Text */}
      <p
        className={`text-lg md:text-xl font-light text-zinc-300 leading-relaxed mb-10 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author info + Navigation */}
      <div className="flex items-center justify-between">
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <h4 className="text-[15px] font-medium text-white">{t.name}</h4>
          <p className="text-[13px] text-zinc-500 font-light mt-0.5">{t.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-[#28e98c] hover:text-[#28e98c] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-[#28e98c] hover:text-[#28e98c] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#28e98c]"
                : "w-4 bg-zinc-700 hover:bg-zinc-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
