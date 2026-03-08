import { useState, useEffect, useRef } from "react";

export default function MainHero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-[hsl(var(--neutral-dark))] overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2s] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/hero-intro.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--neutral-dark))]/60" />

      {/* Content centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Locations */}
        <p
          className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/40 mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
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
          className={`font-display italic text-lg md:text-xl lg:text-2xl font-light text-white/70 mb-4 leading-snug transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We turn workspaces<br className="hidden md:block" /> into experiences
        </p>

        {/* Services */}
        <p
          className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 mb-10 md:mb-14 transition-all duration-1000 delay-700 ${
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
    </section>
  );
}
