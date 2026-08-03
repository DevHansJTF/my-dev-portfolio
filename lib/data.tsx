import { Code2, Layers, Cpu, Mail, Palette } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export const CRAFT = [
  {
    icon: <Code2 size={32} strokeWidth={1} />,
    title: "Frontend Engineering",
    description:
      "Translating sophisticated designs into pristine, responsive HTML/CSS using React, Next.js, and Tailwind.",
  },
  {
    icon: <Layers size={32} strokeWidth={1} />,
    title: "Visual & UI Design",
    description:
      "Crafting sharp, original layouts that communicate brand identity effectively without relying on generic templates.",
  },
  {
    icon: <Cpu size={32} strokeWidth={1} />,
    title: "High-Velocity Workflows",
    description:
      "Leveraging AI-assisted tools to build robust, draft-ready site structures daily while maintaining code quality.",
  },
  {
    icon: <Palette size={32} strokeWidth={1} />,
    title: "Professional Standards",
    description:
      "Adhering to accessibility, performance, and best practices to ensure interfaces are not just beautiful but highly functional.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Lumina Furniture Services",
    description: "An elegant, editorial-style e-commerce platform designed for a luxury furniture brand.",
    slug: "lumina-furniture",
    image: "/lumina-home-goods.png",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    year: "2026",
    link: "https://lumina-furniture-services.vercel.app/",
  },
  {
    id: 2,
    title: "Apex Bus Rental",
    description: "A professional, highly responsive booking platform engineered for premium fleet transit.",
    slug: "apex-bus-rental",
    image: "/apex-bus-rental.png",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    year: "2026",
    link: "https://apex-bus-rental.vercel.app/",
  },
  {
    id: 3,
    title: "Build-It Premium Construction",
    description:
      "An enterprise-grade digital platform engineered to bring transparency and precision to the commercial construction sector.",
    slug: "build-it-construction",
    image: "/build-it-construction.png",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    year: "2026",
    link: "https://buildit-construction.vercel.app/",
  },
  {
    id: 4,
    title: "Magnified Memories",
    description:
      "A robust photobooth desktop application featuring customizable themes, smooth animations, and a highly responsive interface built with Electron and Next.js.",
    slug: "magnified-memories",
    image: "/magnified-memories.png",
    stack: ["Electron", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
    year: "2026",
    link: "https://devhansjtf-dslr-photobooth.vercel.app/",
  },
  {
    id: 5,
    title: "Sevetech",
    description: "A modern, highly responsive digital platform and web presence for Sevetech.",
    slug: "sevetech",
    image: "/sevetech.png",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    link: "https://sevetech.dev/",
  },
  {
    id: 6,
    title: "Roast & Brew",
    description:
      "A premium coffee shop website featuring an elegant, inviting design tailored for coffee enthusiasts.",
    slug: "roast-and-brew",
    image: "/roast-and-brew.png",
    stack: ["WordPress", "WooCommerce", "Elementor", "Simply Static"],
    year: "2026",
    link: "https://wordpress-roast-and-brew.vercel.app/",
  },
  {
    id: 7,
    title: "Aura Acoustics",
    description:
      "A sophisticated platform for high-end audio equipment and acoustic solutions.",
    slug: "aura-acoustics",
    image: "/aura-acoustics.png",
    stack: ["WordPress", "Elementor", "Simply Static"],
    year: "2026",
    link: "https://aura-acoustics-wp.vercel.app/",
  },
  {
    id: 8,
    title: "Snapfolia Leaf Identification",
    description:
      "An intuitive, nature-inspired platform designed to assist in leaf identification and environmental research",
    slug: "snapfolia-leaf-identification",
    image: "/snapfolia.png",
    stack: ["Next.js", "Tailwind CSS"],
    year: "2023",
    link: "https://snapfolia.vercel.app/",
  },
];

export const TIMELINE = [
  {
    year: "2026",
    title: "Freelance Software Developer",
    company: "Magnified Memories",
    description: "Engineered a robust desktop photobooth application using Electron and Next.js. Implemented customizable themes, state management with Zustand, and smooth animations for a highly responsive user experience.",
  },
  {
    year: "2025",
    title: "Bachelor of Science in Computer Science",
    company: "First Asia Institute of Technology and Humanities",
    description: "Dean's Lister with a 1.25 GPA. Focused concentrations in Web Development & Mobile App Development.",
  },
  {
    year: "2025",
    title: "Back-End Developer Intern (Ruby on Rails)",
    company: "Digiteer Inc. (Makati City)",
    description:
      "Developed backend modules and dashboards, including database schema design, validation, and system output testing. Participated in project meetings to gather requirements, define features, and manage active development tasks.",
  },
  {
    year: "2024",
    title: "Software Development Engineering Intern",
    company: "FAITH Colleges",
    description:
      "Led front-end development and collaborated with cross-functional backend and AI teams to integrate complex system features. Gathered system requirements and incorporated stakeholder feedback to align capabilities with user needs.",
  },
  {
    year: "2024",
    title: "Freelance Web & Mobile App Developer",
    company: "Independent Consultant",
    description:
      "Collaborated directly with clients to gather requirements and seamlessly implement feature enhancements. Engineered full front-end experiences, iterating heavily on UI/UX based on usability requirements and user feedback.",
  },
  {
    year: "2022",
    title: "Foundational Web Development",
    company: "Early Beginnings",
    description:
      "Commenced my programming journey by learning HTML, CSS, and JavaScript, establishing the core building blocks for responsive layouts and web architecture.",
  },
];

export const LINKS = [
  { label: "Email", value: "devhansjtf@gmail.com", icon: <Mail size={20} />, href: "mailto:devhansjtf@gmail.com" },
  { label: "GitHub", value: "DevHansJTF", icon: <GithubIcon size={20} />, href: "https://github.com/DevHansJTF" },
  {
    label: "LinkedIn",
    value: "Hans Justin Fernando",
    icon: <LinkedinIcon size={20} />,
    href: "https://www.linkedin.com/in/hans-justin-fernando-423379240/",
  },
];
