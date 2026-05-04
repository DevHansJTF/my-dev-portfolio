import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-display font-medium text-lg tracking-tight">DevHansJTF</p>
          <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
            Frontend Developer & Web Designer
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/DevHansJTF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hans-justin-fernando-423379240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center font-mono text-[10px] text-foreground/40">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent relative flex overflow-hidden">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
          </span>
          AVAILABLE FOR WORK
        </p>
      </div>
    </footer>
  );
}
