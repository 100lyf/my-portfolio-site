"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = ({ onNavClick }) => {
  return (
    <header className=" w-full z-50 py-3 xl:py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <Image
            src="/images/blacklogo.png"
            alt="Ada"
            width={120}
            height={40}
            priority
          />
        </Link>


        
       {/* desktop nav & hire me button*/}
<div className="hidden xl:flex items-center gap-8">
  <Nav onNavClick={onNavClick} />
  <Button
    onClick={() => {
      // Trigger the same transitions
      window.dispatchEvent(new Event("trigger-stairs"));
      window.dispatchEvent(new Event("trigger-page-transition"));

      // Smooth scroll after animation delay
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 1200); // matches your animation duration
    }}
  >
    Hire Me
  </Button>
</div>


        {/* mobile nav */}
        <div className="xl:hidden">
            <MobileNav onNavClick={onNavClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
