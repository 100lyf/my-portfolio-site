"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiUnity,
  SiGit,
} from "react-icons/si";

const About = () => {
  const icons = [
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiUnity,
    SiGit,
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-between px-6 xl:px-20 py-20 bg-transparent"
    >
      {/* ===== TOP SECTION ===== */}
<div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 text-center xl:text-left">
  {/* Left: Animated portrait */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative flex items-center justify-center w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] xl:w-[280px] xl:h-[280px]"
  >
    <Image
      src="/images/me2.png"
      alt="Portrait of Ada"
      fill
      priority
      className="object-cover rounded-full"
      sizes="(max-width: 768px) 220px, 280px"
    />

    {/* Rotating stroke ring */}
    <motion.svg
      className="absolute w-[220px] xl:w-[300px] h-[220px] xl:h-[300px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#ff7a14"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.svg>
  </motion.div>

  {/* Right: Text and Button */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col justify-center max-w-4xl items-center xl:items-start"
  >
    <h2 className="text-3xl font-bold text-[#1a1a33] mb-4">About Me</h2>
    <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
      Hey, I’m Ada a <strong>Front-End Developer and Web Designer</strong> passionate about creating clean, modern, and high-performing web experiences. I work with <strong>React.js, Next.js, Tailwind CSS,</strong>  and <strong> GSAP</strong> to craft smooth, responsive, and visually consistent websites.

      <br></br>With a background in Digital Media Design, I bring a strong sense of UX/UI, accessibility, and visual storytelling to every project. I’ve developed <strong> WordPress sites for local organizations, React-based company websites,</strong>  and <strong>interactive prototypes</strong>  inspired by real-world brands like Apple.

    <br></br>My approach combines design clarity with <strong> clean code</strong>  to create digital products that look great and perform even better.
    </p>

<a
  href="/files/Adaugo Oguoma Resume.pdf"
  download
>
    <Button
      variant="default"
      size="lg"
      className="uppercase flex items-center gap-2 w-fit"
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
      
    </Button>
    </a>
  </motion.div>
</div>

 {/* ===== BOTTOM SECTION (Icons Row) ===== */}
<div className="w-full mt-20">
  <div className="text-center mb-10">
    <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
      🤝 What I Bring to the Table
    </span>
    <h3 className="text-3xl font-bold mt-4 text-[#1a1a33]">
      How I Can Contribute & My Key Skills
    </h3>
  </div>

  {/* Animated Skill Cards */}
  <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
    {[
      { name: "React Developer", icon: SiReact },
      { name: "Web Designer", icon: SiTailwindcss },
      { name: "Interactive Developer", icon: SiJavascript },
      { name: "UI/UX Designer", icon: SiFigma },
      { name: "Project Manager", icon: SiGit },
    ].map(({ name, icon: Icon }, index) => {
      const [userInteracted, setUserInteracted] = React.useState(false);
      const [active, setActive] = React.useState(false);
      const ref = React.useRef(null);
      const inView = require("framer-motion").useInView(ref, { once: false });

      // Auto wave animation (fills → empties → moves to next)
      React.useEffect(() => {
        if (!inView || userInteracted) return;

        const timer = setTimeout(() => {
          setActive(true);
          setTimeout(() => setActive(false), 800); // fill then drain
        }, index * 800); // delay per skill for wave timing

        const loop = setInterval(() => {
          setTimeout(() => {
            setActive(true);
            setTimeout(() => setActive(false), 800);
          }, index * 800);
        }, 800 * 5); // full cycle duration (based on number of skills)

        return () => {
          clearTimeout(timer);
          clearInterval(loop);
        };
      }, [inView, userInteracted, index]);

      return (
        <motion.div
          key={index}
          ref={ref}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          onMouseEnter={() => setUserInteracted(true)}
          onMouseLeave={() => setUserInteracted(false)}
          className="
  relative group
  w-[100px] h-[130px]         /* base: small for mobile */
  sm:w-[150px] sm:h-[190px]   /* small-medium screens */
  lg:w-[180px] lg:h-[220px]   /* large screens */
  rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]
  flex flex-col items-center justify-center
  bg-[#f5f5f5] overflow-hidden
  shadow-md hover:shadow-xl cursor-pointer
"
>
          {/* Fill animation bar */}
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-[#ff7a14] z-0"
            animate={{ height: active ? "100%" : "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Icon (slow bounce loop) */}
          <motion.div
             className="z-10 text-3xl sm:text-5xl lg:text-6xl text-[#1a1a33] group-hover:text-gray-600"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon />
          </motion.div>

          {/* Label */}
          <p className="z-10 mt-4 text-[#1a1a33] group-hover:text-gray-600 font-semibold text-center px-2">
            {name}
          </p>
        </motion.div>
      );
    })}
  </div>
</div>

</section>
  );
};

export default About;
