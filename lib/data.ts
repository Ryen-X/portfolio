import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projec from "@/public/projec.png";
import project from "@/public/project.png";
import projects from "@/public/projects.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    
    title: 'rxai.vercel.app',
    description:
      "I worked as a full-stack developer on this startup project for a few days. Users can receive summarized articles from blog posts in matter of seconds.",
    tags: ["React", "Vite.js", "Rapid API", "Tailwind", "Redux"],
    imageUrl: projec,
  },
  {
    title: "(W.I.P) rxcomms.vercel.app",
    description:
      "Communicate with people easier and faster than ever! RX Comms is a lightweight app good for handling large requests to servers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ClerkAuth"],
    imageUrl: project,
  },
  {
    title: "(W.I.P) rxmeetings.vercel.app",
    description:
      "A video call meeting app similar to Zoom and Google Meet, focusing on faster performance and more secure database.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: projects,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Vite.js",
  "Redux",
  "ClerkAuth",
  "Rapid API",
  "Framer Motion",
] as const;
