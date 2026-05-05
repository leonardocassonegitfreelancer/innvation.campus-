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
import conferencePicasso from "@/assets/conference-picasso.webp";
import conferenceHalfPicasso from "@/assets/conference-half-picasso.webp";
import conferenceQuarterPicasso from "@/assets/conference-quarter-picasso.webp";
import anconaHero from "@/assets/ancona-hero.webp";
import anconaCoworking from "@/assets/ancona-coworking.webp";
import anconaMeeting from "@/assets/ancona-meeting.webp";
import seasideExterior from "@/assets/seaside-exterior.webp";
import seasideInterior from "@/assets/seaside-interior.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

type Filter = "all" | "malaga-palace" | "malaga-terrace" | "meeting-rooms" | "ancona-olbia";

const photos: { src: string; alt: string; filter: Filter }[] = [
  { src: palaceEntrance, alt: "Entrada Málaga Palace", filter: "malaga-palace" },
  { src: palaceSkylight, alt: "Lucernario Málaga Palace", filter: "malaga-palace" },
  { src: palaceCoworking, alt: "Zona coworking Málaga Palace", filter: "malaga-palace" },
  { src: palaceCourtyard, alt: "Patio Málaga Palace", filter: "malaga-palace" },
  { src: palaceCoffeeBar, alt: "Coffee bar Málaga Palace", filter: "malaga-palace" },
  { src: palaceSecondFloor, alt: "Segunda planta Málaga Palace", filter: "malaga-palace" },
  { src: palaceOutside, alt: "Exterior Málaga Palace", filter: "malaga-palace" },
  { src: palaceOutsideFront, alt: "Entrada principal Málaga Palace", filter: "malaga-palace" },
  { src: palaceBrandingWall, alt: "Pared branding Innovation Campus", filter: "malaga-palace" },
  { src: historicExterior, alt: "Exterior edificio histórico", filter: "malaga-palace" },
  { src: historicInterior, alt: "Interior edificio histórico", filter: "malaga-palace" },
  { src: terraceHero, alt: "Málaga Terrace", filter: "malaga-terrace" },
  { src: terraceEntrance, alt: "Entrada Málaga Terrace", filter: "malaga-terrace" },
  { src: terraceBar, alt: "Bar Málaga Terrace", filter: "malaga-terrace" },
  { src: terraceEvents, alt: "Espacio eventos Málaga Terrace", filter: "malaga-terrace" },
  { src: serviceMeeting, alt: "Sala de reuniones", filter: "meeting-rooms" },
  { src: conferencePicasso, alt: "Sala conferencias Picasso", filter: "meeting-rooms" },
  { src: conferenceHalfPicasso, alt: "Sala Half Picasso", filter: "meeting-rooms" },
  { src: conferenceQuarterPicasso, alt: "Sala quarter", filter: "meeting-rooms" },
  { src: anconaHero, alt: "Innovation Campus Ancona", filter: "ancona-olbia" },
  { src: anconaCoworking, alt: "Coworking Ancona", filter: "ancona-olbia" },
  { src: anconaMeeting, alt: "Sala reuniones Ancona", filter: "ancona-olbia" },
  { src: seasideExterior, alt: "Exterior Olbia", filter: "ancona-olbia" },
  { src: seasideInterior, alt: "Interior Olbia", filter: "ancona-olbia" },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Todos los Espacios" },
  { key: "malaga-palace", label: "Málaga Palace" },
  { key: "malaga-terrace", label: "Málaga Terrace" },
  { key: "meeting-rooms", label: "Salas de Reuniones" },
  { key: "ancona-olbia", label: "Ancona & Olbia" },
];

export default function GallerySpacesES() {
  const [active, setActive] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const displayed = active === "all" ? photos : photos.filter((p) => p.filter === active);

  return (
    <>
      <SEOHead
        title="Galería de Espacios"
        description="Explora nuestros espacios de coworking, salas de reuniones y venues en Málaga, Ancona y Olbia."
        path="/es/galeria/espacios"
      />
      <main className="overflow-x-hidden">
        <Navbar />
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          <img src={_s(palaceCourtyard)} alt="Espacios Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <a href="/es/galeria" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">← Galería</a>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Galería de Espacios</h1>
            <p className="font-body text-lg text-primary-foreground/70 mt-3">Nuestras sedes en España e Italia.</p>
          </div>
        </section>
        <section className="bg-background border-b border-border sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button key={f.key} onClick={() => setActive(f.key)}
                className={`font-body font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors ${active === f.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {f.label}
              </button>
            ))}
          </div>
        </section>
        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {displayed.map((photo) => (
              <div key={photo.src} className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl group" onClick={() => setLightbox(photo.src)}>
                <img src={photo.src} alt={photo.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>
        {lightbox && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setLightbox(null)}>
            <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}
