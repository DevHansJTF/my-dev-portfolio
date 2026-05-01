import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="flex flex-col min-h-[70vh] justify-center pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column - Heading */}
          <div>
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Status: Available
              </p>
              <h1 className="font-display uppercase text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tracking-tighter mb-8">
                Let&apos;s <br />
                <span className="text-foreground/40">Connect</span>
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed max-w-md text-left sm:text-justify">
                Whether you need high-volume web design, draft-ready site generation, or precise Next.js and Tailwind
                execution, I&apos;m ready to integrate into your workflow and deliver sharp, brand-aware results.
              </p>
            </FadeIn>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col gap-6">
            {LINKS.map((link, idx) => (
              <FadeIn key={link.label} delay={idx * 0.1} direction="left">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between p-6 md:p-8 rounded-2xl glass-panel border border-white/5 hover:border-accent/40 bg-surface hover:bg-white/5 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-foreground/40 group-hover:text-accent transition-colors">{link.icon}</div>
                    <div>
                      <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-1">
                        {link.label}
                      </h2>
                      <p className="font-display text-2xl tracking-tight">{link.value}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-full border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors duration-500">
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
