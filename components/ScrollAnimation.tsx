"use client";

import React from "react";
import { motion } from "framer-motion";

export type AnimationType =
  | "fade_from_bottom"
  | "fade_from_top"
  | "fade_from_left"
  | "fade_from_right"
  | "fade_in"
  | "rotate_up";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = "fade_from_bottom",
  duration = 1.2,
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const getVariants = () => {
    switch (animation) {
      case "fade_from_bottom":
        return {
          hidden: { y: 80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case "fade_from_top":
        return {
          hidden: { y: -80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case "fade_from_left":
        return {
          hidden: { x: -80, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "fade_from_right":
        return {
          hidden: { x: 80, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case "fade_in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "rotate_up":
        return {
          hidden: { y: 100, rotate: 6, opacity: 0 },
          visible: { y: 0, rotate: 0, opacity: 1 },
        };
      default:
        return {
          hidden: { y: 80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      variants={getVariants()}
      transition={{
        duration: duration,
        ease: [0.25, 1, 0.5, 1], // Smooth quad/power out ease
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
