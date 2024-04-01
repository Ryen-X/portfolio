"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During the covid-19 pandemic in{" "}
        <span className="font-medium">2020</span>, I decided to pursue my
        passion for programming. I enrolled in various coding bootcamps and learned{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I&apos;m also familiar with TypeScript and Prisma. I&apos;m always looking to
        learn new technologies.{" "}
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        making videos for YouTube, watching movies, and sometimes martial arts (although not so frequently). I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I&apos;m currently
        learning about{" "}
        <span className="font-medium">advanced physics and senior year highschool maths</span>. I&apos;m also
        learning how to play piano.
      </p>
    </motion.section>
  );
}