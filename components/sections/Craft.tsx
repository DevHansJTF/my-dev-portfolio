"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { MoveRight } from "lucide-react";
import { CRAFT } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
export function Craft() {
  return (
    <section className="mb-0 mt-0 md:mb-24 md:mt-24">
      <FadeIn>
        <div className="border-t border-white/10 pt-8 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-5">
            <h2 className="font-display text-4xl tracking-tight mb-8">Design & Build</h2>
            <p className="text-foreground/60 text-base leading-relaxed mb-8 text-justify max-w-sm">
              Creating compelling websites requires a sharp eye for layout and the technical skills to execute. I build
              draft-ready structures efficiently, refining them into responsive, pristine interfaces.
            </p>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="font-mono text-xs uppercase tracking-widest text-accent hover:text-white transition-colors flex items-center gap-2 w-fit"
            >
              Read Philosophy <MoveRight size={14} />
            </a>
          </div>

          <div className="col-span-1 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {CRAFT.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[24px] glass-panel group hover:bg-white/5 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="text-foreground/30 group-hover:text-accent transition-colors mb-8">{item.icon}</div>
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
