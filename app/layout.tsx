import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hans Justin Fernando | Web Designer & Frontend Developer",
  description:
    "Portfolio of a Web Designer and Frontend Engineer specializing in brand-aware, responsive web experiences using React, Next.js, and Tailwind CSS.",
};

import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark scroll-smooth overflow-x-hidden`}
    >
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-accent selection:text-background overflow-x-hidden">
        <NavBar />
        <main className="flex-grow pt-24 pb-16 px-4 md:px-8 lg:px-16 mx-auto w-full max-w-7xl overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
