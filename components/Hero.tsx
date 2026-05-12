"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/eden-hero.jpeg"
          alt="Eden Sassoon"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>

      {/* Warm cream wash at very top */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-transparent" />

      {/* Dark warm zone at bottom — text always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/75 to-transparent" />

      {/* Subtle left vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 lg:px-24">
        <p
          className="section-label-light mb-6 opacity-0-init animate-fade-up delay-1"
          style={{ animationFillMode: "forwards" }}
        >
          Messy · Sexy · Real
        </p>

        <h1
          className="font-cormorant font-light text-cream leading-none mb-6 opacity-0-init animate-fade-up delay-2"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", animationFillMode: "forwards" }}
        >
          Eden
          <br />
          <span className="italic text-gold">Sassoon</span>
        </h1>

        <div
          className="gold-rule mb-6 opacity-0-init animate-fade-up delay-3"
          style={{ animationFillMode: "forwards" }}
        />

        <p
          className="font-cormorant italic text-cream text-2xl md:text-3xl font-light max-w-md opacity-0-init animate-fade-up delay-4"
          style={{ animationFillMode: "forwards" }}
        >
          The mess is not always the thing we need to hide.
        </p>
      </div>

      <style jsx>{`
        @keyframes growLine {
          from { height: 24px; opacity: 0.4; }
          to { height: 56px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}