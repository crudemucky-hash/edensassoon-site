"use client";

import { useEffect, useRef, useState } from "react";

export default function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="legacy"
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background decorative element */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-3 select-none pointer-events-none"
        style={{
          fontSize: "clamp(12rem, 30vw, 28rem)",
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "#C9A96E",
          opacity: 0.04,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        Vidal
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

        <div className={`md:col-span-6 relative w-full aspect-[4/5] overflow-hidden transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <img
            src="/images/vidal-book.jpeg"
            alt="Vidal Sassoon autobiography inscription to Eden"
            className="w-full h-full object-cover object-center"
          />
        </div>

          {/* Copy */}
          <div
            className={`md:col-span-6 md:col-start-7 flex flex-col gap-8 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div>
              <p className="section-label mb-4">The Legacy</p>
              <div className="gold-rule mb-8" />
              <h2
                className="font-cormorant font-light text-cream leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Where it<br />
                <em className="text-gold">all began.</em>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
            <p className="font-jost font-light text-stone text-base leading-relaxed">
              Vidal Sassoon taught Eden that beauty is a form of truth-telling. That discipline and generosity aren&apos;t opposites. That the outside matters — but only as a reflection of what&apos;s happening within. She carries that with her. Not as a brand. As a belief.
            </p>
            
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-6 py-2">
              <p className="font-cormorant italic text-cream text-xl md:text-2xl font-light leading-snug">
                &ldquo;My dad believed if you take care of the inside, the outside will take care of itself — except the hair, of course.&rdquo;
              </p>
              <p className="font-jost text-xs text-stone mt-3 tracking-wider">
                — Eden Sassoon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
