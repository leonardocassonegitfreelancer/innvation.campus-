import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";

import serviceCommunity from "@/assets/service-community.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import palaceCatering from "@/assets/palace-catering.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";
import terraceBar from "@/assets/terrace-bar.jpg";

type Filter = "all" | "networking" | "workshop" | "talk";

const photos: { src: string; alt: string; filter: Filter }[] = [
  { src: serviceCommunity, alt: "Community event at Innovation Campus", filter: "networking" },
  { src: terraceEvents, alt: "Events at Málaga Terrace", filter: "networking" },
  { src: terraceCommunity, alt: "Community networking session", filter: "networking" },
  { src: palaceCatering, alt: "Catering at Innovation Campus event", filter: "networking" },
  { src: palaceCourtyard, alt: "Outdoor event at Málaga Palace", filter: "talk" },
  { src: terraceBar, alt: "Networking drinks at Málaga Terrace", filter: "workshop" },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Events" },
  { key: "networking", label: "Networking" },
  { key: "workshop", label: "Workshops" },
  { key: "talk", label: "Talks" },
];

export default function GalleryEventsEN() {
  const [active, setActive] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const displayed = active === "all" ? photos : photos.filter((p) => p.filter === active);

  return (
    <>
      <SEOHead
        title="Events Gallery — Innovation Campus"
        description="Photos from community events, networking nights, workshops and talks at Innovation Campus Málaga."
        path="/en/gallery/events"
      />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          <img src={serviceCommunity} alt="Innovation Campus events" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <a href="/en/gallery" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
              ← Gallery
            </a>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Events Gallery</h1>
            <p className="font-body text-lg text-primary-foreground/70 mt-3">Moments from our community events.</p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-background border-b border-border sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
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

        <Footer />
      </main>
    </>
  );
}
