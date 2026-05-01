import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col justify-center mt-20 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full">
        <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between relative z-20 mix-blend-difference w-full pointer-events-none">
          <FadeIn delay={0.1} direction="left" className="self-start md:self-auto">
            <h1 className="font-display font-medium uppercase text-[22vw] sm:text-[18vw] md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.75] md:leading-[0.85] tracking-tighter mix-blend-difference text-white">
              FRONT
            </h1>
          </FadeIn>
          <div className="h-[260px] sm:h-[320px] md:hidden w-full"></div>{" "}
          {/* Spacer on mobile for the absolute image */}
          <FadeIn delay={0.2} direction="right" className="self-end md:self-auto">
            <h1 className="font-display font-medium uppercase text-[22vw] sm:text-[18vw] md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.75] md:leading-[0.85] tracking-tighter mix-blend-difference text-white">
              END
            </h1>
          </FadeIn>
        </div>

        {/* Central Image Placeholder - Representing the developer portrait */}
        <div className="col-span-1 md:col-span-6 md:col-start-4 absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[75%] md:w-[60%] h-[320px] sm:h-[400px] md:h-[500px] z-0 opacity-80 hover:opacity-100 transition-opacity duration-700 pointer-events-auto max-w-[calc(100vw-2rem)]">
          <div className="w-full h-full relative rounded-2xl md:rounded-[40px] overflow-hidden bg-surface group">
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl md:rounded-[40px] border border-white/10 group-hover:border-accent/40 transition-colors duration-700 z-10" />
            <Image
              src="/my-image.png"
              alt="Developer Portrait"
              fill
              className="object-cover mix-blend-overlay grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-[1000ms] ease-out scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mt-12 md:mt-32 z-10 w-full pointer-events-none">
          <FadeIn delay={0.4} direction="up" className="max-w-md pointer-events-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span> Web Design / React / Tailwind
            </p>
            <p className="font-display text-white text-lg md:text-xl leading-relaxed text-left sm:text-justify">
              I am a Web Designer and Front-End Developer focused on crafting sharp, brand-aware websites using modern
              workflows. I specialize in Next.js, React, and Tailwind CSS to deliver premium, highly responsive
              experiences rapidly.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up" className="mt-8 md:mt-0 pointer-events-auto">
            <a
              href="#work"
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
