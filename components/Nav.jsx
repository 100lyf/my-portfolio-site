"use client";

import { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { name: "home", id: "home" },
  { name: "about", id: "about" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const navigatingRef = useRef(false);

  const handleClick = async (id) => {
    if (navigatingRef.current) return;
    navigatingRef.current = true;

    // fire both transitions (listening components should trigger on these)
    window.dispatchEvent(new Event("trigger-stairs"));
    window.dispatchEvent(new Event("trigger-page-transition"));

    const ANIM_DELAY_ON_HOME = 600; // time to wait when already on home (ms)
    const ANIM_DELAY_AFTER_PUSH = 900; // time to wait after router.push (ms)

    if (pathname === "/") {
      // already on home — wait for animation then smooth scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        // small follow-up timeout to re-enable clicks after scroll
        setTimeout(() => {
          navigatingRef.current = false;
        }, 400);
      }, ANIM_DELAY_ON_HOME);
    } else {
      // on another page — navigate to home first, then scroll
      // use router.push to go to home
      router.push("/");

      // wait a bit for the home page to mount/paint, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          navigatingRef.current = false;
        }, 400);
      }, ANIM_DELAY_AFTER_PUSH);
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(link.id)}
          className="capitalize font-medium text-[#091434] hover:text-[#FF923E] transition-all"
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
}