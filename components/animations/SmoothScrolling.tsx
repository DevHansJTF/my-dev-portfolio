"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.6,
      // For mobile:
      // Note: Enable smoothTouch only if explicitly requested, as native mobile scroll is usually better
      // but according to the prompt "both for mobile and desktop view", we can try `syncTouch`
      syncTouch: true,
      touchMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
