import { useState, useEffect, useRef } from "react";

export default function MainHero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-coworking.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Top line */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="h-px w-12 md:w-20 bg-white/30" />
          <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50">
            Málaga · Olbia · Ancona
          </p>
          <span className="h-px w-12 md:w-20 bg-white/30" />
        </div>

        {/* Brand name */}
        <h1
          className={`mb-6 md:mb-8 transition-all duration-1200 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none">
            Innovation
          </span>
          <span className="block mt-1 md:mt-2">
            <span className="text-primary text-7xl md:text-9xl lg:text-[10rem] font-display font-bold leading-none">/</span>
            <span className="font-body text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-widest leading-none">
              Campus
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-body text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-3 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces into experiences
        </p>

        {/* Service line */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/35 mb-12 md:mb-16 transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Offices · Coworking · Events
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className={`group inline-flex items-center gap-3 border border-white/20 text-white font-body text-sm md:text-base uppercase tracking-[0.3em] px-10 py-4 rounded-none hover:bg-white hover:text-black transition-all duration-500 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Find Your Space
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
