"use client";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";
import About from "@/app/about/page";
import Work from "@/app/work/page";
import Contact from "@/app/contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth">
      {/* Hero Section */}
      <motion.section
  id="home"
  className="w-full min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-12"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col xl:flex-row items-center justify-between pb-18 xl:pb-48 xl:pt-13 pt-8">
            
            {/* Text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <motion.div
                 initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="h1 mb-6">
                  Hello, I'm <span className="text-accent">Ada</span>
                </h1>
              </motion.div>

              <motion.h3
                className="text-animation"
                 initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
              >
                I'm a <span></span>
              </motion.h3>

              <motion.p
                className="max-w-[500px] mb-9 text-black/80"
                 initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.7  , duration: 0.7, ease: "easeOut" }}
              >
                I love creating beautiful digital user experiences and I am
                proficient in various programming languages and technologies.
              </motion.p>

              {/* Button and Socials */}
              <motion.div
                className="flex flex-col xl:flex-row items-center gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.7, ease: "easeOut" }}
              >
                <Button
  variant="default"
  size="lg"
  className="uppercase flex items-center gap-2"
  onClick={() => {
    // Trigger your transitions (optional)
    window.dispatchEvent(new Event("trigger-stairs"));
    window.dispatchEvent(new Event("trigger-page-transition"));

    // Scroll smoothly to #work after a short delay
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  }}
>
  <span>See My Work</span>
  <FaArrowDown className="text-xl" />
</Button>


                <Social
                  containerStyles="flex gap-6 items-center"
                  iconStyles="
                    w-9 h-9 
                    border-2 
                    border-[var(--accent)] 
                    rounded-full 
                    flex justify-center items-center 
                    text-[var(--accent)] 
                    text-base
                  "
                />
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              className="order-1 xl:order-none mb-8 xl:mb-0"
               initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.1, duration: 0.7, ease: "easeOut" }}
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Other Sections */}
      <section id="about" className="bg-[#EFE7DC] w-full min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-12">
        <About />
      </section>

      <section id="work" className="w-full min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-12">
        <Work />
      </section>

      <section id="contact" className="bg-[#EFE7DC] w-full min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-12">
        <Contact />
      </section>
    </main>
  );
}
