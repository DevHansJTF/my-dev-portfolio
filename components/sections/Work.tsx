import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="scroll-mt-32">
      <header className="pt-12 md:pt-24 border-b border-white/10 pb-12 mb-16">
        <FadeIn>
          <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none tracking-tighter mb-6">
            Selected
            <br />
            <span className="text-foreground/40">Work</span>
          </h1>
          <p className="max-w-xl text-foreground/60 text-lg leading-relaxed text-left sm:text-justify mb-12">
            An archive of websites and digital experiences. Focused on original design, robust React/Next.js execution,
            and pristine responsive layouts tailored for international audiences.
          </p>
        </FadeIn>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 lg:gap-y-24">
        {PROJECTS.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 0.1} className={`group relative ${idx % 2 !== 0 ? "md:mt-24" : ""}`}>
            <a
              href={"link" in project ? project.link : "#"}
              target={"link" in project ? "_blank" : undefined}
              rel={"link" in project ? "noopener noreferrer" : undefined}
              className="block h-full"
            >
              <div className="relative w-full overflow-hidden rounded-[32px] bg-surface mb-6 aspect-[4/5] border border-white/5 group-hover:border-white/10 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Year Badge */}
                <div className="absolute top-6 right-6 font-mono text-[10px] bg-background/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-foreground/70">
                  {project.year}
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-foreground/60 text-sm mb-6 max-w-sm leading-relaxed text-left sm:text-justify">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 text-foreground/50 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border border-white/10 text-accent hidden sm:block">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
