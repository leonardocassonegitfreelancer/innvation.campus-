import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";

import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceOutside from "@/assets/palace-outside.webp";
import palaceOutsideFront from "@/assets/palace-outside-front.webp";
import palaceBrandingWall from "@/assets/palace-branding-wall.webp";
import historicExterior from "@/assets/historic-exterior.webp";
import historicInterior from "@/assets/historic-interior.webp";
import terraceHero from "@/assets/terrace-hero.webp";
import terraceEntrance from "@/assets/terrace-entrance.webp";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import serviceMeeting from "@/assets/service-meeting.webp";
import conferencePicasso from "@/assets/big-conference-room-01.webp";
const conferenceHalfPicasso = "/placeholder.svg";
const conferenceQuarterPicasso = "/placeholder.svg";
import anconaHero from "@/assets/ancona-hero.webp";
import anconaCoworking from "@/assets/ancona-coworking.webp";
import anconautoMeeting from "@/assets/ancona-meeting.webp";
import seasideExterior from "@/assets/seaside-exterior.webp";
import seasideInterior from "@/assets/seaside-interior.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

type Filter = "all" | "malaga-palace" | "malaga-terrace" | "meeting-rooms" | "ancona-olbia";

const photos: { src: string; alt: string; filter: Filter }[] = [
  { src: palaceEntrance, alt: "Málaga Palace entrance", filter: "malaga-palace" },
  { src: palaceSkylight, alt: "Málaga Palace skylight", filter: "malaga-palace" },
  { src: palaceCoworking, alt: "Málaga Palace coworking area", filter: "malaga-palace" },
  { src: palaceCourtyard, alt: "Málaga Palace courtyard", filter: "malaga-palace" },
  { src: palaceCoffeeBar, alt: "Málaga Palace coffee bar", filter: "malaga-palace" },
  { src: palaceSecondFloor, alt: "Málaga Palace second floor", filter: "malaga-palace" },
  { src: palaceOutside, alt: "Málaga Palace exterior", filter: "malaga-palace" },
  { src: palaceOutsideFront, alt: "Málaga Palace front entrance", filter: "malaga-palace" },
  { src: palaceBrandingWall, alt: "Innovation Campus branding wall", filter: "malaga-palace" },
  { src: historicExterior, alt: "Historic building exterior", filter: "malaga-palace" },
  { src: historicInterior, alt: "Historic building interior", filter: "malaga-palace" },
  { src: terraceHero, alt: "Málaga Terrace hero", filter: "malaga-terrace" },
  { src: terraceEntrance, alt: "Málaga Terrace entrance", filter: "malaga-terrace" },
  { src: terraceBar, alt: "Málaga Terrace bar area", filter: "malaga-terrace" },
  { src: terraceEvents, alt: "Málaga Terrace events space", filter: "malaga-terrace" },
  { src: serviceMeeting, alt: "Meeting room", filter: "meeting-rooms" },
  { src: conferencePicasso, alt: "Picasso conference room", filter: "meeting-rooms" },
  { src: conferenceHalfPicasso, alt: "Half Picasso conference room", filter: "meeting-rooms" },
  { src: conferenceQuarterPicasso, alt: "Quarter conference room", filter: "meeting-rooms" },
  { src: anconaHero, alt: "Ancona Innovation Campus", filter: "ancona-olbia" },
  { src: anconaCoworking, alt: "Ancona coworking space", filter: "ancona-olbia" },
  { src: anconautoMeeting, alt: "Ancona meeting room", filter: "ancona-olbia" },
  { src: seasideExterior, alt: "Olbia seaside exterior", filter: "ancona-olbia" },
  { src: seasideInterior, alt: "Olbia interior", filter: "ancona-olbia" },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Spaces" },
  { key: "malaga-palace", label: "Málaga Palace" },
  { key: "malaga-terrace", label: "Málaga Terrace" },
  { key: "meeting-rooms", label: "Meeting Rooms" },
  { key: "ancona-olbia", label: "Ancona & Olbia" },
];

const translations = {
  en: {
    back: "Gallery",
    title: "Spaces Gallery",
    subtitle: "Our locations across Spain and Italy.",
    filters: [
      { key: "all", label: "All Spaces" },
      { key: "malaga-palace", label: "Málaga Palace" },
      { key: "malaga-terrace", label: "Málaga Terrace" },
      { key: "meeting-rooms", label: "Meeting Rooms" },
      { key: "ancona-olbia", label: "Ancona & Olbia" },
    ],
    backLink: "/en/gallery"
  },
  es: {
    back: "Galería",
    title: "Galería de Espacios",
    subtitle: "Nuestras ubicaciones en España e Italia.",
    filters: [
      { key: "all", label: "Todos los espacios" },
      { key: "malaga-palace", label: "Málaga Palace" },
      { key: "malaga-terrace", label: "Málaga Terrace" },
      { key: "meeting-rooms", label: "Salas de reuniones" },
      { key: "ancona-olbia", label: "Ancona y Olbia" },
    ],
    backLink: "/es/galeria"
  },
  it: {
    back: "Galleria",
    title: "Galleria Spazi",
    subtitle: "Le nostre location in Spagna e Italia.",
    filters: [
      { key: "all", label: "Tutti gli spazi" },
      { key: "malaga-palace", label: "Málaga Palace" },
      { key: "malaga-terrace", label: "Málaga Terrace" },
      { key: "meeting-rooms", label: "Sale riunioni" },
      { key: "ancona-olbia", label: "Ancona & Olbia" },
    ],
    backLink: "/it/galleria"
  }
};

export default function GallerySpaces({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const [active, setActive] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const t = translations[lang];
  const displayed = active === "all" ? photos : photos.filter((p) => p.filter === active);

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <img src={_s(palaceCourtyard)} alt="Innovation Campus spaces" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <a href={t.backLink} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            ← {t.back}
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{t.title}</h1>
          <p className="font-body text-lg text-primary-foreground/70 mt-3">{t.subtitle}</p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 flex-wrap">
          {t.filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key as Filter)}
              className={`font-body font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors ${
                active === f.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {displayed.map((photo) => (
            <div
              key={photo.src}
              className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl group"
              onClick={() => setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
        </div>
      )}
    </main>
  );
}
