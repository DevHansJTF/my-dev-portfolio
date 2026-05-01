import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { TIMELINE } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <header className="pt-12 md:pt-24 border-b border-white/10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 md:col-span-7 lg:col-span-8">
            <FadeIn>
              <h1 className="font-display uppercase text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tighter mb-8">
                Sharp <br />
                <span className="text-foreground/40">Design.</span> <br /> Clean Code.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl text-justify">
                I&apos;m Hans Justin Fernando, a hands-on Web Designer and Frontend Developer. I specialize in crafting
                visually strong, user-friendly websites. Combining a pristine eye for design with deep expertise in
                React, Next.js, and Tailwind CSS, I deliver sharp, tailor made interfaces far removed from generic
                templates
              </p>
            </FadeIn>
          </div>

          <div className="col-span-1 md:col-span-5 lg:col-span-4">
            <FadeIn delay={0.2} direction="left">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden glass-panel rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <Image
                  src="my-image.png"
                  alt="Hans Justin Fernando"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> AVAILABLE FOR WORK
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
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
