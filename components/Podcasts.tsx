"use client";

import { useEffect, useRef, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";

const podcasts = [
  {
    title: "Messy Sexy Real",
    handle: "Coming Soon",
    description:
      "Unfiltered conversations about life, love, sobriety, and the beautiful mess of being human. No filters. No PR polish. Just Eden.",
    link: null,
    linkLabel: null,
    comingSoon: true,
  },
  {
    title: "Taste of Recovery",
    handle: "Available Now",
    description:
      "Stories from the other side of addiction. A space for honesty, hope, and the ongoing work of choosing yourself — one day at a time.",
    link: "https://podcasts.apple.com/us/podcast/taste-of-recovery-podcast/id1732786298",
    linkLabel: "Listen on Apple Podcasts",
    comingSoon: false,
  },
];

export default function Podcasts() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="podcasts"
      ref={ref}
      style={{ backgroundColor: "#0a0908" }}
      className="py-28 md:py-40 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-label mb-4">Listen</p>
          <div className="gold-rule mb-6" />
          <h2
            className="font-cormorant font-light text-cream leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            The Podcasts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {podcasts.map((pod, i) => (
            <div
              key={pod.title}
              className={`group relative p-10 md:p-14 border border-white/8 hover:border-gold/30 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 100}ms` }}
            >
              <div className="mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 10a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <p className="section-label text-stone mb-3">{pod.handle}</p>
              <h3 className="font-cormorant text-cream font-light text-2xl md:text-3xl mb-5 group-hover:text-gold transition-colors duration-500">
                {pod.title}
              </h3>
              <p className="font-jost font-light text-stone text-sm leading-relaxed mb-8">
                {pod.description}
              </p>

              {pod.comingSoon ? (
                <WaitlistForm />
              ) : pod.link ? (
                <a
                  href={pod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/link"
                >
                  <span className="font-jost text-xs tracking-widest2 uppercase text-stone group-hover/link:text-gold transition-colors duration-300">
                    {pod.linkLabel}
                  </span>
                  <span className="w-8 h-px bg-stone group-hover/link:bg-gold group-hover/link:w-12 transition-all duration-300" />
                </a>
              ) : null}

              <div className="absolute inset-0 bg-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
