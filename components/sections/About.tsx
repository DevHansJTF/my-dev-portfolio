"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { TIMELINE } from "@/lib/data";
import { useState } from "react";

export function About() {
  const [isImageActive, setIsImageActive] = useState(false);

  return (
    <section id="about" className="scroll-mt-32">
      <header className="pt-0 md:pt-24 border-b border-white/10 pb-8 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 md:col-span-7 lg:col-span-8">
            <FadeIn>
              <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none tracking-tighter mb-8">
                Sharp <br />
                <span className="text-foreground/40">Design.</span> <br /> Clean Code.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl text-justify mb-8 md:mb-0">
                I&apos;m Hans Justin Fernando, a hands-on Frontend Developer and Web Designer. I specialize in crafting
                visually strong, user-friendly websites. Combining a pristine eye for design with deep expertise in
                React, Next.js, and Tailwind CSS, I deliver sharp, tailor made interfaces far removed from generic
                templates
              </p>
            </FadeIn>
          </div>

          <div className="col-span-1 md:col-span-5 lg:col-span-4 mt-8 md:mt-0">
            <FadeIn delay={0.2} direction="up">
              <div
                className={`relative w-full max-w-[300px] sm:max-w-[400px] mx-auto md:max-w-none aspect-[3/4] md:aspect-[3/4] rounded-2xl overflow-hidden glass-panel transition-transform duration-700 ease-out group cursor-pointer md:cursor-auto ${isImageActive ? "rotate-0" : "rotate-2 md:hover:rotate-0"}`}
                onClick={() => setIsImageActive(!isImageActive)}
              >
                <div
                  className={`absolute inset-0 rounded-2xl border transition-colors duration-700 z-10 ${
                    isImageActive ? "border-accent/40" : "border-white/10 md:group-hover:border-accent/40"
                  }`}
                />
                <Image
                  src="/my-image.png"
                  alt="Hans Justin Fernando"
                  fill
                  className={`object-cover transition-all duration-[1000ms] ease-out ${
                    isImageActive
                      ? "grayscale-0 scale-105"
                      : "grayscale scale-100 md:group-hover:grayscale-0 md:group-hover:scale-105"
                  }`}
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent z-20">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> AVAILABLE FOR WORK
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mt-12 md:mt-16">
        <div className="lg:col-span-4">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-tight top-32 sticky">Experience & Education</h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {TIMELINE.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-white/5 relative group">
                <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="w-32 flex-shrink-0 pt-1">
                  <span className="font-mono text-2xl text-foreground/30 group-hover:text-accent transition-colors">
                    {item.year}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                  <h4 className="text-accent font-medium mb-4">{item.company}</h4>
                  <p className="text-foreground/60 leading-relaxed text-justify">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
