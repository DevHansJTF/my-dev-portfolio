"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", duration = 0.6 }: FadeInProps) {
  const directionOffset = 24;

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: directionOffset, x: 0 };
      case "down":
        return { y: -directionOffset, x: 0 };
      case "left":
        return { x: directionOffset, y: 0 };
      case "right":
        return { x: -directionOffset, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const hiddenState = {
    opacity: 0,
    ...getOffset(),
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: duration,
      ease: [0.25, 0.25, 0, 1] as [number, number, number, number],
      delay: delay,
    },
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
