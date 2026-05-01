import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Craft } from "@/components/sections/Craft";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Work />
      <Craft />
      <About />
      <Contact />
    </div>
  );
}
