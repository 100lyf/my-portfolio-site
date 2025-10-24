"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageTransition = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Run once when the page loads
    const timer = setTimeout(() => setActive(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Allow manual triggers (used by nav)
  useEffect(() => {
    const handleTransition = () => {
      setActive(true);
      setTimeout(() => setActive(false), 1200);
    };

    window.addEventListener("trigger-page-transition", handleTransition);
    return () =>
      window.removeEventListener("trigger-page-transition", handleTransition);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed top-0 left-0 w-full h-full bg-primary z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
