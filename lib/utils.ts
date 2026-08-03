import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(y);
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}
