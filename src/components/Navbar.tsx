"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Vision", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Basic scroll spy
      const sections = [...navLinks.map(link => link.name.toLowerCase()), "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4",
        scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
      )}
    >
      <div className="container mx-auto flex justify-center">
        <div
          className={cn(
            "flex w-full max-w-sm items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:hidden",
            scrolled || menuOpen
              ? "bg-navy-900/90 backdrop-blur-md border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              : "bg-navy-900/40 border-white/5 backdrop-blur-sm"
          )}
        >
          <a
            href="#home"
            className="text-sm font-bold tracking-wide text-white"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Gopikrishnan D
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition-colors hover:border-electric-blue hover:text-electric-blue"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav
          className={cn(
            "hidden items-center gap-1 px-4 py-3 rounded-full transition-all duration-500 md:flex lg:gap-3 lg:px-6",
            scrolled
              ? "bg-navy-900/80 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              : "bg-transparent"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors lg:px-4 lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {activeSection === link.name.toLowerCase() && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="ml-1 px-4 py-2 text-sm font-bold bg-white text-navy-900 rounded-full hover:bg-electric-blue hover:text-navy-900 hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all lg:ml-2 lg:px-5 lg:text-base"
          >
            Contact
          </a>
        </nav>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-3 grid w-full max-w-sm gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-md md:hidden"
        >
          {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                activeSection === link.name.toLowerCase()
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
