import { useState, useEffect, useCallback } from "react";

import palaceEntrance from "@/assets/palace-entrance.jpg";
import historicInterior from "@/assets/historic-interior.jpg";
import palaceCoworking from "@/assets/palace-coworking.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import seasideInterior from "@/assets/seaside-interior.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";

const slides = [
  palaceEntrance,
  historicInterior,
  palaceCoworking,
  terraceCommunity,
  palaceSkylight,
  seasideInterior,
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
    }, 5000);
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
      <div className="absolute inset-0 bg-[hsl(var(--neutral-dark))]/65" />

      {/* Content centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Locations */}
        <p
          className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/60 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
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
          <span className="block text-primary font-body text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-none">
            Innovation<span className="font-light">/</span>Campus
          </span>
          <span className="block text-primary font-body text-sm md:text-base lg:text-lg font-light uppercase tracking-[0.45em] mt-2 md:mt-3">
            Coworking Spaces
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`w-12 h-px bg-primary mx-auto mb-6 md:mb-8 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 w-12" : "opacity-0 w-0"
          }`}
        />

        {/* Tagline */}
        <p
          className={`font-display italic text-lg md:text-xl lg:text-2xl font-light text-white/90 mb-4 leading-snug transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces<br className="hidden md:block" /> into experiences
        </p>

        {/* Services */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-10 md:mb-14 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Offices · Coworking · Events
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className={`inline-flex items-center gap-3 border-b border-white/30 text-white font-body text-xs md:text-sm uppercase tracking-[0.3em] pb-2 hover:border-primary hover:text-primary transition-all duration-500 delay-800 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Find Your Space
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
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
