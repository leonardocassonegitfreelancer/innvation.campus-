import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import serviceCommunity from "@/assets/service-community.jpg";
import terraceHero from "@/assets/terrace-hero.jpg";

const translations = {
  en: {
    eyebrow: "Innovation Campus",
    title: "Host Your\nEvent",
    subtitle: "From corporate conferences to creative workshops — bring your vision to life in our unique spaces.",
    cta: "Explore Spaces",
  },
  es: {
    eyebrow: "Innovation Campus",
    title: "Organiza\nTu Evento",
    subtitle: "Desde conferencias corporativas hasta talleres creativos — da vida a tu visión en nuestros espacios únicos.",
    cta: "Explorar Espacios",
  },
  it: {
    eyebrow: "Innovation Campus",
    title: "Organizza\nil Tuo Evento",
    subtitle: "Da conferenze aziendali a workshop creativi — dai vita alla tua visione nei nostri spazi unici.",
    cta: "Scopri gli Spazi",
  },
};

export default function EventHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  const scrollToSpaces = () => {
    document.getElementById("event-spaces")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <img
          src={terraceHero}
          alt="Innovation Campus event spaces"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
      >
        <p className="font-body text-xs uppercase tracking-[0.4em] text-white/60 mb-6">
          {t.eyebrow}
        </p>
        <h1
          className="font-display font-bold text-white leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
        >
          {t.title.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
        <p className="font-body text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
          {t.subtitle}
        </p>
        <button
          onClick={scrollToSpaces}
          className="font-body text-xs uppercase tracking-[0.3em] text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          {t.cta}
        </button>
      </motion.div>

    </section>
  );
}
