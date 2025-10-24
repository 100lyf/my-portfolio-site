"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  { id: 1, title: "Route 44 Storage", desc: "Storage company website.", tech: ["CMS","CSS"], image: "/images/route44.png" },
  { id: 2, title: "Church Website", desc: "Community site", tech: ["HTML","WordPress"], image: "/images/church.png" },
  { id: 3, title: "First Communications", desc: "Business site", tech: ["React","Tailwind"], image: "/images/firstcomm.png" },
  { id: 4, title: "My Portfolio", desc: "Personal portfolio", tech: ["NextJs","Framer"], image: "/images/portfolio.png" },
  { id: 5, title: "iPhone 15 Clone", desc: "Product page clone", tech: ["React","GSAP"], image: "/images/iphone15.png" },
  { id: 6, title: "Gem Galaxy Game", desc: "Web game", tech: ["Unity","C#"], image: "/images/gemgalaxy.jpg" },
  { id: 7, title: "Graphic Design", desc: "Branding & visuals", tech: ["PS","Illustrator"], image: "/images/graphic.png" },
];

export default function ProjectCarousel({
  autoplay = true,
  autoplayDelay = 4300,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [autoplay ? Autoplay({ delay: autoplayDelay, stopOnInteraction: true }) : null].filter(Boolean)
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <motion.section
      className="pt-15 pb-24 bg-[#f8f1e9]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-9xl">
        <motion.h2
          className="text-4xl font-extrabold text-[#1a1a33] mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          - Some things I’ve worked on 🧡
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Embla viewport */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex items-stretch gap-6 py-6">
              {projects.map((p, idx) => {
                const len = projects.length;
                const diff = Math.abs(((idx - selectedIndex) % len + len) % len);
                const isCenter = diff === 0;

                return (
                  <motion.div
                    key={p.id}
                    className="embla__slide flex-shrink-0"
                    style={{ minWidth: "360px" }}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={
                        "rounded-3xl overflow-hidden bg-white shadow-md transition-all duration-500 " +
                        (isCenter
                          ? "scale-100 filter-none z-20"
                          : "scale-95 blur-[2px] opacity-60")
                      }
                      style={{ pointerEvents: isCenter ? "auto" : "none" }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-7 text-center">
                        <h3 className="text-lg font-bold text-[#1a1a33]">{p.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                        <div className="flex justify-center gap-2 mt-3 flex-wrap">
                          {p.tech.map((t, i) => (
                            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-[#1a1a33]">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4">
                          <a
                            className={
                              "inline-block px-5 py-2 rounded-full text-sm font-medium transition " +
                              (isCenter
                                ? "bg-[#FF923E] text-white hover:bg-[#ff7a14]"
                                : "bg-transparent border border-[#E6DFD6] text-[#1a1a33]")
                            }
                            href={
                              p.title === "Route 44 Storage"
                                ? "https://route44storage.com/"
                                : p.title === "Church Website"
                                ? "https://saintjohnscathedral.ca/"
                                : p.title === "First Communications"
                                ? "https://firstdigit.com.ng/"
                                : p.title === "iPhone 15 Clone"
                                ? "https://ada-iphone15website.netlify.app/"
                                : p.title === "Gem Galaxy Game"
                                ? "https://play.unity.com/en/games/0848aef1-4dcd-4529-b44a-9e1072c8b687/gem-galaxy"
                                : p.title === "Graphic Design"
                                ? "/graphics"
                                : "#"
                            }
                            target={p.title === "Graphic Design" ? "_self" : "_blank"}

                            rel="noopener noreferrer"
                          >
                            Live View
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="p-3 bg-[#FF923E] text-white rounded-full hover:bg-[#ff7a14] transition"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 bg-[#FF923E] text-white rounded-full hover:bg-[#ff7a14] transition"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .embla { width: 100%; }
        .embla__container { will-change: transform; display: flex; align-items: stretch; }
        .embla__slide { display: block; }
      `}</style>

     

    </motion.section>
  );
}
