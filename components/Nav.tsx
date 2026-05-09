"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Legacy", href: "#legacy" },
    { label: "Podcasts", href: "#podcasts" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-sm border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a
            href="#"
            className="font-cormorant text-cream text-xl md:text-2xl tracking-widest2 font-light hover:text-gold transition-colors duration-300"
          >
            EDEN SASSOON
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-jost text-xs tracking-widest2 uppercase text-stone hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cormorant text-cream text-4xl italic font-light hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
