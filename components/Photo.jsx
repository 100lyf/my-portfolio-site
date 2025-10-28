"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full mt-10 sm:mt-16 xl:mt-0">
      {/* Fade + gentle rise-in entrance with delay */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 1.2, // ⏳ waits before appearing
          duration: 1.8, // slower, smoother
          ease: [0.22, 1, 0.36, 1], // soft “ease-out-back” curve
        }}
        className="relative w-[260px] h-[260px] sm:w-[298px] sm:h-[298px] xl:w-[498px] xl:h-[498px] flex justify-center items-center"
      >
        {/* Floating effect */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative w-full h-full"
        >
 {/* Portrait */}
<div className="absolute inset-0">
  <Image
    src="/images/me2.png"
    alt="Portrait of Ada"
    fill
    priority
    className="object-cover rounded-full shadow-[0_0_100px_40px_var(--accent-glow)] grayscale-[0.2] contrast-[1.1]"
    sizes="(max-width: 768px) 298px, 498px"
  />
</div>

{/* Intense glow */}
<div className="absolute inset-0 rounded-full bg-[var(--accent-glow)] blur-[100px] opacity-90 scale-110 -z-10" />
<div className="absolute inset-0 rounded-full bg-[var(--accent-glow)] blur-[140px] opacity-50 scale-125 -z-20" />

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
