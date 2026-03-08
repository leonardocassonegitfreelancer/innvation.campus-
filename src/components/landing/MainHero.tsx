import { useState, useEffect, useCallback } from "react";
import claimWhite from "@/assets/claim-white.png";

import palaceEntrance from "@/assets/palace-entrance.jpg";
import palaceCoworking from "@/assets/palace-coworking.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";

const slides = [
  palaceEntrance,
  palaceCoworking,
  terraceCommunity,
  palaceSkylight,
  palaceCourtyard,
];

export default function MainHero() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  return (
    <section className="relative min-h-screen bg-[hsl(var(--neutral-dark))] overflow-hidden">
      {/* Slideshow images */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Innovation Campus space ${i + 1}`}
          style={{
            animationDuration: "7s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "1",
            animationFillMode: "forwards",
            animationName: i === current ? "kenburns" : "none",
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.8s] ease-in-out ${
            i === current
              ? "opacity-100"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--neutral-dark))]/75" />

      {/* Content centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Locations */}
        <p
          className={`font-bebas text-sm md:text-base uppercase tracking-[0.5em] text-white/60 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Málaga · Olbia · Ancona
        </p>

        {/* Brand */}
        <h1
          className={`mb-6 md:mb-8 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={claimWhite}
            alt="Innovation Campus - Coworking Spaces"
            className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          />
        </h1>

        {/* Divider */}
        <div
          className={`w-12 h-px bg-primary mx-auto mb-6 md:mb-8 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 w-12" : "opacity-0 w-0"
          }`}
        />

        {/* Tagline */}
        <p
          className={`font-bebas text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces into experiences
        </p>

        {/* Services */}
        <p
          className={`font-bebas text-sm md:text-base uppercase tracking-[0.4em] text-white/50 mb-10 md:mb-14 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Offices · Coworking · Events
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className={`inline-flex items-center gap-3 backdrop-blur-[10px] bg-primary/80 border border-primary/30 text-primary-foreground font-display text-xs md:text-sm uppercase tracking-[0.3em] px-8 py-3 rounded hover:bg-primary/95 hover:border-primary/50 transition-all duration-500 delay-800 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Find Your Space
        </a>
      </div>

      {/* Slide indicators */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
