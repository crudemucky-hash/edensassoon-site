"use client";

import ContactForm from "@/components/ContactForm";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    platform: "Instagram",
    handle: "@edensassoon",
    link: "https://www.instagram.com/edensassoon/",
  },
  {
    platform: "X / Twitter",
    handle: "@sassEden",
    link: "https://x.com/sasseden",
  },
];

export default function Connect() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="connect"
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-cream"
    >
      {/* Background watermark */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem, 25vw, 22rem)",
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "#8a6f3e",
          opacity: 0.05,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        Connect
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Left — main CTA */}
          <div className={`md:col-span-6 flex flex-col gap-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="section-label mb-4">Connect</p>
              <div className="gold-rule mb-8" />
              <h2
                className="font-cormorant font-normal text-ink leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                From my heart<br />
                <em className="text-gold">to yours.</em>
              </h2>
            </div>

            <p className="font-jost text-warm-gray text-lg md:text-xl leading-relaxed max-w-sm">
              Wanna connect with Eden? Send her a message here and she'll get back to you.
            </p>

            <ContactForm />
          </div>

          {/* Right — socials */}
          <div className={`md:col-span-5 md:col-start-8 flex flex-col gap-2 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="section-label mb-6 mt-1">Follow Along</p>
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social flex items-center justify-between py-5 border-b border-ink/15 hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-jost text-sm text-warm-gray tracking-wider uppercase">
                    {s.platform}
                  </span>
                  <span className="font-cormorant text-ink text-2xl font-light group-hover/social:text-gold transition-colors duration-300">
                    {s.handle}
                  </span>
                </div>
                <span className="text-warm-gray group-hover/social:text-gold group-hover/social:translate-x-1 transition-all duration-300 text-xl">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}