"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsYoutube } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczMmmWT7Rvuv1mE6g_Z4wBAt1CppCdNkv5ddqz5VgOL4niSVZaYMmyJDmCgOihhfOhFL6sk6ElHiEAI4Za5RBlAfKIrsuH7N8-ZtMZOF62wntK5dJ_oRBILDdJYTIoUxH3kRPUM6EkZB3Cm8320OyOvjzfEPnQhN4cHHRQD6R0qMK2rv1M1KHaQmdvYaqsBkpM0Xmk7v8akos162d8hiF7CR-kyv3cYnc9CWY5IOUd71j1B8chGAbTmpoZU3YnOMre3XE2hIXZ9kh2mUwncrrK0SDeAC0ytgvNeVrKeBEaWqebK-TV9tb2Oh1V-eMM-ZKbiMf-wt1y0q0S6MIDJ9klx1J2F4FXvnbOCc_6Abe28BUwegIKG4g-JPS5swlwcsLzKVB2qLRiBkWblI4wM3fZUblsQVAERprzbA_2SYc2RLLDZHqp7w7ER-lCfcGH5iHMmSeqGt6z95uTZA8EdMeukpciI4OYa3aAZTIsyROE0IaD78gtXrW9-vhjQq1B1CccKChwNHPfCSqu6k5qHqL6Q8tCXdn2XANe2pR4gorzoOaGpNrDzA9vCL013SldFC-u-eU_tNbiOCALTiDESPv3K7bx0AuvaUy2awrkUL-YIvSzabUbhNZFHyofWJFoQECM7Y3duWW-c7ceewbG_G122QDhxAAS30_qIAriCKjD3ENCcJHgaeSRnUrzkiXOMMN8ZoFWAQBugrEoWC5MC0uhCowasXO_yaVbhYCYs4a9asFQGUtxuQkEUSzArmjw4Mj7_Nv8tFzu6KCW_eemeDbGOyfnkd-_7HK40VGdSPXFJ_g216mdTORJ8WT4RYGiMFV0TUNz7nl4lBQFycOiOS27ERGabHoJtLJXVJEyC9bPnc8gdq6QP1lpZ7z1x-MWtWys1a2kEarYkz3_us-WFI6H3Z=w736-h736-s-no-gm?authuser=0"
              alt="Aaryan pfp"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Aaryan.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">4+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My coding main is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/VSCode.exe"
          download
        >
          My IDE{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://youtube.com/@RyenX/"
          target="_blank"
        >
          <BsYoutube />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Ryen-X/portfolio/"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}