import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="flex flex-col min-h-[70vh] justify-center pt-0 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 items-center">
          {/* Left Column - Heading */}
          <div>
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Status: Available
              </p>
              <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-tighter mb-8">
                Let&apos;s <br />
                <span className="text-foreground/40">Connect</span>
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed max-w-md text-justify mb-12 lg:mb-0">
                Whether you need high-volume web design, draft-ready site generation, or precise Next.js, Tailwind, and WordPress
                execution, I&apos;m ready to integrate into your workflow and deliver sharp, brand-aware results.
              </p>
            </FadeIn>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {LINKS.map((link, idx) => (
              <FadeIn key={link.label} delay={idx * 0.1} direction="up">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex flex-row items-center justify-between p-5 md:p-8 rounded-2xl glass-panel border border-white/5 hover:border-accent/40 bg-surface hover:bg-white/5 transition-all duration-500 w-full"
                >
                  <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
                    <div className="text-foreground/40 group-hover:text-accent transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground/50 mb-1 truncate">
                        {link.label}
                      </h2>
                      <p className="font-display text-base sm:text-xl md:text-2xl tracking-tight truncate">
                        {link.value}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 sm:p-4 rounded-full border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors duration-500 shrink-0 ml-4">
                    <ArrowUpRight size={24} />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
