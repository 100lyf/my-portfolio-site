"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  { name: "home", id: "home" },
  { name: "about", id: "about" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const navigatingRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (id) => {
    if (navigatingRef.current) return;
    navigatingRef.current = true;

    // Trigger your animation events
    window.dispatchEvent(new Event("trigger-stairs"));
    window.dispatchEvent(new Event("trigger-page-transition"));

    const ANIM_DELAY = 700; // faster and smoother (was 1000ms)

    if (pathname === "/") {
      // Scroll directly if already on home
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setOpen(false);
          navigatingRef.current = false;
        }, 300);
      }, ANIM_DELAY);
    } else {
      // If not on home, navigate first
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setOpen(false);
          navigatingRef.current = false;
        }, 300);
      }, 900); // slightly longer to allow page load
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 flex justify-center items-center">
          <Image
            src="/images/blacklogo.png"
            alt="Ada"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col justify-center items-center gap-8 pb-8">
          {links.map((link, idx) => (
            <SheetClose asChild key={idx}>
              <button
                onClick={() => handleNavClick(link.id)}
                className="text-xl capitalize hover:text-accent transition-all"
              >
                {link.name}
              </button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
