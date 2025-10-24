"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStairTrigger = () => {
      setActive(true);
      setTimeout(() => setActive(false), 1200);
    };

    window.addEventListener("trigger-stairs", handleStairTrigger);
    return () =>
      window.removeEventListener("trigger-stairs", handleStairTrigger);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="stairs"
          className="fixed top-0 left-0 w-full h-full z-[9998] pointer-events-none flex"
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: { delay: 1, duration: 0.6, ease: "easeInOut" },
          }}
        >
          <Stairs />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StairTransition;
