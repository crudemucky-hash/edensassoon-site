"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">

        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">About</p>
          <div className="gold-rule mb-16" />
        </div>

        {/* Portrait */}
        <div className={`relative w-1/2 aspect-[3/4] overflow-hidden transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <img
            src="/images/eden-portrait.jpeg"
            alt="Eden Sassoon"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bio — her words, her cadence */}
        <div className={`flex flex-col gap-8 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <h2 className="font-cormorant font-light text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            I&apos;m not here to pretend<br />
            <em className="text-gold">I have it all figured out.</em>
          </h2>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            I&apos;m just a girl, a woman, a mother, a daughter, a sister, a sober human, a seeker — trying to share the truth from my heart to yours.
          </p>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            I&apos;ve lived enough life to know that the mess is not always the thing we need to hide. Sometimes the mess is the doorway. Sometimes the heartbreak, the addiction, the fear, the body shame, the grief, the aging, the falling apart, the starting over — that is where the real beauty begins.
          </p>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            I grew up in a world where beauty mattered. My father changed beauty. My mother embodied it. And I was born into the phrase: <em className="text-cream">&ldquo;If you don&apos;t look good, we don&apos;t look good.&rdquo;</em>
          </p>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            So yes, I understand the outside. The pressure. The mirror. The comparison. The wanting to be chosen. The wanting to be enough.
          </p>

          <p className="font-cormorant italic text-gold text-xl md:text-2xl font-light leading-snug max-w-2xl">
            &ldquo;No outside fix will ever fill the search for self-love.&rdquo;
          </p>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            As a breast implant illness survivor, I speak because I know what it feels like to not trust your own body — to search for answers, to feel dismissed, to wonder if you&apos;re crazy, and to finally realize your body has been talking to you the whole time.
          </p>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            Today, my work is not about fixing anyone. It&apos;s about being of service. It&apos;s about taking everything I&apos;ve walked through — the beauty, the pain, the mistakes, the recovery, the laughter, the loss, the love, the aging, the motherhood, the body stuff, the God stuff, the starting over again and again — and giving it away with honesty.
          </p>

          <div className="border-l-2 border-gold pl-6 py-2 my-4">
            <p className="font-cormorant italic text-cream text-xl md:text-2xl font-light leading-snug">
              Am I enough? Am I lovable? Can I begin again?<br />
              Can I tell the truth and still be held?
            </p>
          </div>

          <p className="font-jost font-light text-stone text-base md:text-lg leading-relaxed max-w-2xl">
            My answer today is yes. Yes, you are enough. Yes, we can surrender the old stories. Yes, we can show up exactly as we are — raw, healing, laughing, crying, becoming.
          </p>

          <p className="font-cormorant italic text-gold text-2xl md:text-3xl font-light leading-snug">
            That is Messy Sexy Real.
          </p>
        </div>
      </div>
    </section>
  );
}