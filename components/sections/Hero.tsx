"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const [isImageActive, setIsImageActive] = useState(false);

  return (
    <section id="home" className="relative md:min-h-[80vh] flex flex-col justify-start md:justify-center mt-8 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between relative z-20 mix-blend-difference w-full pointer-events-none">
          <FadeIn delay={0.1} direction="left" className="self-start md:self-auto w-full">
            <h1 className="font-display font-medium uppercase text-[18vw] sm:text-[15vw] md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.75] md:leading-[0.85] tracking-tighter mix-blend-difference text-white">
              FRONT
            </h1>
          </FadeIn>
          <div className="h-[20px] sm:h-[80px] md:hidden w-full"></div> {/* Spacer on mobile for the absolute image */}
          <FadeIn delay={0.2} direction="right" className="self-end md:self-auto text-right w-full">
            <h1 className="font-display font-medium uppercase text-[18vw] sm:text-[15vw] md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.75] md:leading-[0.85] tracking-tighter mix-blend-difference text-white">
              END
            </h1>
          </FadeIn>
        </div>

        {/* Central Image Placeholder - Representing the developer portrait */}
        <div
          className="col-span-1 md:col-span-6 md:col-start-4 absolute top-[40%] sm:top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] max-w-[260px] sm:max-w-[320px] md:max-w-none md:w-[60%] h-[340px] sm:h-[400px] md:h-[500px] z-0 opacity-80 hover:opacity-100 transition-opacity duration-700 pointer-events-auto cursor-pointer md:cursor-auto"
          onClick={() => setIsImageActive(!isImageActive)}
        >
          <div className="w-full h-full relative rounded-2xl md:rounded-[40px] overflow-hidden bg-surface group">
            {/* Decorative border */}
            <div
              className={`absolute inset-0 rounded-2xl md:rounded-[40px] border transition-colors duration-700 z-10 ${
                isImageActive ? "border-accent/40" : "border-white/10 md:group-hover:border-accent/40"
              }`}
            />
            <Image
              src="/my-image.png"
              alt="Developer Portrait"
              fill
              className={`object-cover transition-all duration-[1000ms] ease-out ${
                isImageActive
                  ? "grayscale-0 mix-blend-normal scale-105"
                  : "mix-blend-overlay grayscale scale-100 md:group-hover:grayscale-0 md:group-hover:mix-blend-normal md:group-hover:scale-105"
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-32 z-10 w-full pointer-events-none">
          <FadeIn delay={0.4} direction="up" className="max-w-md pointer-events-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span> Web Design / React / WordPress
            </p>
            <p className="font-display text-white text-lg md:text-xl leading-relaxed text-justify">
              I am a Frontend Developer and Web Designer focused on crafting sharp, brand-aware websites using modern
              workflows. I specialize in Next.js, React, Tailwind CSS, and custom WordPress solutions to deliver premium, highly responsive
              experiences rapidly.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up" className="mt-8 md:mt-0 pointer-events-auto">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="group flex items-center gap-4 border border-white/10 rounded-full px-6 py-4 hover:bg-white/5 transition-colors uppercase font-mono text-xs tracking-wider"
            >
              View Selected Work
              <span className="bg-foreground text-background rounded-full p-2 group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                <MoveRight size={14} />
              </span>
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[150px] pointer-events-none" />
    </section>
  );
}
