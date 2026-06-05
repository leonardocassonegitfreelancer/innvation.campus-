import { useState, useEffect, useCallback, useRef } from "react";
import claimWhite from "@/assets/claim-white.webp";

import palaceEntrance    from "@/assets/palace-entrance.webp";
import palaceCoworking   from "@/assets/palace-coworking.webp";
import terraceCommunity  from "@/assets/terrace-community.webp";
import palaceSkylight    from "@/assets/palace-skylight.webp";
import palaceCourtyard   from "@/assets/palace-courtyard.webp";
// @ts-ignore — Vite resolves MP4 assets to URL strings
import heroVideoUrl      from "@/assets/hero section malaga palace mobile.mp4";

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;
const claimSrc = getSrc(claimWhite);

const slides = [
  palaceEntrance,
  palaceCoworking,
  terraceCommunity,
  palaceSkylight,
  palaceCourtyard,
].map(getSrc);

export interface MainHeroProps {
  lang?: "en" | "es" | "it";
}

const translations = {
  en: {
    line1: "In the heart of",
    city: "Málaga,",
    line2: "where ambition",
    meets: "meets the sea.",
    alt: "Innovation Campus space",
    ariaLabel: "Go to slide",
    explore: "Explore Services",
    exploreHref: "#services",
    contact: "Contact Us",
    contactHref: "/en/contact"
  },
  es: {
    line1: "En el corazón de",
    city: "Málaga,",
    line2: "donde la ambición",
    meets: "encuentra el mar.",
    alt: "Espacio de Innovation Campus",
    ariaLabel: "Ir a diapositiva",
    explore: "Explorar Servicios",
    exploreHref: "#services",
    contact: "Contáctanos",
    contactHref: "/es/contacto"
  },
  it: {
    line1: "Nel cuore di",
    city: "Málaga,",
    line2: "dove l'ambizione",
    meets: "incontra il mare.",
    alt: "Spazio Innovation Campus",
    ariaLabel: "Vai alla slide",
    explore: "Scopri i Servizi",
    exploreHref: "#services",
    contact: "Contattaci",
    contactHref: "/it/contatti"
  }
};

export default function MainHero({ lang = "en" }: MainHeroProps) {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const sectionRef    = useRef<HTMLElement>(null);
  const imgLayerRef   = useRef<HTMLDivElement>(null);
  const contentRef    = useRef<HTMLDivElement>(null);
  const tilt        = useRef({ x: 0, y: 0 });
  const rafId         = useRef(0);

  const t = translations[lang];

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

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

  const applyTransform = useCallback(() => {
    if (!imgLayerRef.current || !sectionRef.current) return;
    const scrolled  = window.scrollY;
    const sectionH  = sectionRef.current.offsetHeight;
    const progress  = Math.min(scrolled / sectionH, 1);
    const parallaxY = progress * sectionH * 0.28;
    const { x, y }  = tilt.current;
    imgLayerRef.current.style.transform =
      `perspective(1400px) rotateX(${x}deg) rotateY(${y}deg) translateY(${parallaxY}px) scale(1.12)`;
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(${parallaxY * 0.12}px)`;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(applyTransform);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyTransform]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const r  = section.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width  - 0.5;
      const ny = (e.clientY - r.top)  / r.height - 0.5;
      tilt.current = { x: ny * -5, y: nx * 7 };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(applyTransform);
    };
    const onLeave = () => {
      tilt.current = { x: 0, y: 0 };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(applyTransform);
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [applyTransform]);

  useEffect(() => {
    const onOrientation = (e: DeviceOrientationEvent) => {
      const beta  = e.beta  ?? 0;
      const gamma = e.gamma ?? 0;
      tilt.current = {
        x: Math.max(-5, Math.min(5, (beta - 45) * 0.18)),
        y: Math.max(-5, Math.min(5, gamma * 0.18)),
      };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(applyTransform);
    };
    window.addEventListener("deviceorientation", onOrientation);
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [applyTransform]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[hsl(var(--neutral-dark))] overflow-hidden"
    >
      <div
        ref={imgLayerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "perspective(1400px) scale(1.12)", transformOrigin: "center center" }}
      >
        {/* Mobile: video */}
        <video
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        >
          <source src={typeof heroVideoUrl === "string" ? heroVideoUrl : (heroVideoUrl as any).src ?? heroVideoUrl} type="video/mp4" />
        </video>

        {/* Desktop: image slideshow */}
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${t.alt} ${i + 1}`}
            style={{
              animationDuration: "7s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "1",
              animationFillMode: "forwards",
              animationName: i === current ? "kenburns" : "none",
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1.8s] ease-in-out hidden md:block ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Top gradient — keeps navbar readable when transparent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 25%)" }} />
      {/* Left-side dark veil */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)" }} />
      {/* Bottom gradient — heavier on mobile for video readability */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 65%, transparent 80%)" }} />
      {/* Film grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }} />

      {/* Content — left-aligned, anchored to bottom */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-end items-start text-left px-8 md:px-16 pb-20 md:pb-28 will-change-transform max-w-3xl"
      >
        {/* Claim */}
        <h1
          className={`font-display italic text-white/95 leading-[1.15] transition-all duration-[1.8s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{
            fontSize: "clamp(1.75rem, 6vw, 4.2rem)",
            textShadow: "0 1px 20px rgba(0,0,0,0.7)",
            transitionDelay: "420ms",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            fontWeight: 400,
          }}
        >
          {t.line1}
          <br />
          <span className="text-primary not-italic font-semibold">{t.city}</span>
          <br />
          {t.line2}
          <br />
          <span className="text-primary font-semibold">{t.meets}</span>
        </h1>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-3 mt-10 transition-all duration-[1.5s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "850ms", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <a
            href={t.exploreHref}
            className="inline-block px-7 py-3.5 bg-primary text-primary-foreground font-body text-[11px] font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
          >
            {t.explore}
          </a>
          <a
            href={t.contactHref}
            className="inline-block px-7 py-3.5 border border-white/50 text-white font-body text-[11px] font-bold uppercase tracking-[0.18em] hover:border-white hover:bg-white/10 transition-all"
          >
            {t.contact}
          </a>
        </div>
      </div>

      {/* Slide dots — bottom right, desktop only */}
      <div className={`hidden md:flex absolute bottom-8 right-10 z-20 gap-2 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[2px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary" : "w-4 bg-white/30 hover:bg-white/50"}`}
            aria-label={`${t.ariaLabel} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
