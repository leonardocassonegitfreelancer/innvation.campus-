import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    back: "Back to Home",
    title: "Gallery",
    subtitle: "Our spaces and community moments.",
    spaces: {
      title: "Spaces",
      desc: "Coworking, meeting rooms & venues",
      cta: "Browse spaces →",
      link: "/en/gallery/spaces"
    },
    events: {
      title: "Events",
      desc: "Networking, workshops & talks",
      cta: "Browse events →",
      link: "/en/gallery/events"
    }
  },
  es: {
    back: "Volver al inicio",
    title: "Galería",
    subtitle: "Nuestros espacios y momentos de comunidad.",
    spaces: {
      title: "Espacios",
      desc: "Coworking, salas de reuniones y eventos",
      cta: "Ver espacios →",
      link: "/es/galeria/espacios"
    },
    events: {
      title: "Eventos",
      desc: "Networking, talleres y charlas",
      cta: "Ver eventos →",
      link: "/es/galeria/eventos"
    }
  },
  it: {
    back: "Torna alla Home",
    title: "Galleria",
    subtitle: "I nostri spazi e momenti di comunità.",
    spaces: {
      title: "Spazi",
      desc: "Coworking, sale riunioni e location",
      cta: "Sfoglia gli spazi →",
      link: "/it/galleria/spazi"
    },
    events: {
      title: "Eventi",
      desc: "Networking, workshop e talk",
      cta: "Sfoglia gli eventi →",
      link: "/it/galleria/eventi"
    }
  }
};

export default function Gallery({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <img src={_s(palaceCourtyard)} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a href={lang === "en" ? "/" : `/${lang}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{t.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70 mt-3">{t.subtitle}</p>
        </div>
      </section>

      {/* Two cards */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href={t.spaces.link} className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img src={_s(palaceCourtyard)} alt={t.spaces.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">{t.spaces.title}</h2>
                <p className="font-body text-sm text-primary-foreground/70">{t.spaces.desc}</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-card">
              <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">{t.spaces.cta}</span>
            </div>
          </a>

          <a href={t.events.link} className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img src={_s(serviceCommunity)} alt={t.events.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">{t.events.title}</h2>
                <p className="font-body text-sm text-primary-foreground/70">{t.events.desc}</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-card">
              <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">{t.events.cta}</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
