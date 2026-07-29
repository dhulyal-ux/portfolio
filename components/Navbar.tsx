"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-charcoal/5 bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        {/* Initials mark */}
        <a
          href="#top"
          className={`font-serif text-xl font-semibold tracking-tight transition-colors ${
            scrolled || open ? "text-ember" : "text-cream"
          }`}
          aria-label="Deeksha Hulyal — back to top"
        >
          DH
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ember ${
                  scrolled ? "text-charcoal/70" : "text-cream/85"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-btn transition-colors md:hidden ${
            scrolled || open ? "text-ember" : "text-cream"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`h-[2px] rounded-full bg-current transition-all duration-300 ${
                open ? "w-6 translate-y-[7px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`h-[2px] w-4 rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] rounded-full bg-current transition-all duration-300 ${
                open ? "w-6 -translate-y-[7px] -rotate-45" : "w-5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-charcoal/5 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-btn px-3 py-3 text-base font-medium text-charcoal/80 transition-colors hover:bg-olive/5 hover:text-olive"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
