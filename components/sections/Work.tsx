import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="scroll-mt-32">
      <header className="pt-0 md:pt-24 border-b border-white/10 pb-8 md:pb-12 mb-8 md:mb-16">
        <FadeIn>
          <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none tracking-tighter mb-6">
            Selected
            <br />
            <span className="text-foreground/40">Work</span>
          </h1>
          <p className="max-w-xl text-foreground/60 text-lg leading-relaxed text-justify mb-12">
            An archive of websites and digital experiences. Focused on original design, robust React/Next.js execution,
            and pristine responsive layouts tailored for international audiences.
          </p>
        </FadeIn>
      </header>

      <div className="flex flex-col gap-y-24 md:gap-y-32">
        {PROJECTS.map((project, idx) => {
          return (
            <FadeIn key={project.id} delay={0.1} className="group relative">
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight group-hover:text-accent transition-colors">
                    <a
                      href={"link" in project ? project.link : "#"}
                      target={"link" in project ? "_blank" : undefined}
                      rel={"link" in project ? "noopener noreferrer" : undefined}
                    >
                      {project.title}
                    </a>
                  </h2>
                  <p className="text-foreground/60 text-base md:text-lg mb-6 leading-relaxed text-justify">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/10 text-foreground/50 bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={"link" in project ? project.link : "#"}
                    target={"link" in project ? "_blank" : undefined}
                    rel={"link" in project ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors w-fit"
                  >
                    View Project <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 relative">
                  <a
                    href={"link" in project ? project.link : "#"}
                    target={"link" in project ? "_blank" : undefined}
                    rel={"link" in project ? "noopener noreferrer" : undefined}
                    className="block relative w-full overflow-hidden rounded-[24px] bg-surface aspect-[4/3] md:aspect-video border border-white/5 group-hover:border-white/10 transition-colors"
                  >
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
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 font-mono text-[10px] bg-background/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-foreground/70">
                      {project.year}
                    </div>
                  </a>
                </div>

              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
