import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Star } from "lucide-react";
import historicExt from "@/assets/historic-exterior.jpg";
import seasideExt from "@/assets/terrace-community.jpg";

const locations = [
{
  name: "Historic Center",
  tagline: "Malaga palace",
  img: historicExt,
  alt: "Historic Málaga old town street with golden light",
  address: "Calle Álamos 7 29012, Málaga",
  hours: "Mon – Fri 09:30–18:30 · 24/7",
  highlights: ["4 Floors", "2 Rooftop terraces", "Bar", "24/7", "Fast internet"],
  desc: "Nestled in a restored 18th-century building near the Picasso Museum, this space wraps you in centuries of history. Perfect for deep work, strategic thinking, and conversations that matter.",
  theme: "historic" as const
},
{
  name: "Seaside",
  tagline: "Malaga TERRACE",
  img: seasideExt,
  alt: "Rooftop terrace community event at Innovation Campus Málaga",
  address: "Calle Puerto 14 29016, Málaga",
  hours: "Mon–Fri 9.30–18.30 · 24/7",
  highlights: ["Panoramic rooftop terrace", "Ocean-view desks", "Open-plan creative zone", "Beachfront location"],
  desc: "Glass, light, and sea. A modern space designed for creative energy, collaboration, and the kind of freedom that only comes from working with the horizon in view.",
  theme: "seaside" as const
}];


export default function LocationsSection() {
  const { ref: titleRef, isVisible: titleVis } = useScrollAnimation();

  return (
    <section id="locations" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`scroll-animate ${titleVis ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            Our Malaga Locations
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Two worlds{" "}<br className="md:hidden" /><span className="text-primary">Your choice</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc) =>
          <LocationCard key={loc.name} {...loc} />
          )}
        </div>
      </div>
    </section>);

}

function LocationCard({
  name, tagline, img, alt, address, hours, highlights, desc, theme
}: (typeof locations)[0]) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isHistoric = theme === "historic";

  return (
    <div
      ref={ref}
      className={`${isHistoric ? "scroll-animate-left" : "scroll-animate-right"} ${isVisible ? "visible" : ""} rounded-2xl overflow-hidden group flex flex-col ${isHistoric ? "stone-texture-bg" : "sea-wave-bg"}`}
      >
      
      {/* Image */}
      <div className="relative h-80 md:h-[28rem] overflow-hidden z-10">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          loading="lazy" />
        
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
        <div className="mb-4">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1 font-semibold">
            {tagline}
          </p>
          <h3
            className={`${isHistoric ? "font-display italic text-neutral-dark" : "font-body font-light text-seaside-text"} text-3xl md:text-4xl font-bold`}>
            
            {name}
          </h3>
        </div>
        <p
          className={`font-body text-sm leading-relaxed mb-6 ${
          isHistoric ? "text-neutral-dark/80" : "text-seaside-text"}`
          }>
          
          {desc}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-neutral-dark/70" : "text-seaside-text"}`}>
              {address}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-neutral-dark/70" : "text-seaside-text"}`}>
              {hours}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {highlights.map((h) =>
          <span
            key={h}
            className={`inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full ${
            isHistoric ?
            "bg-neutral-dark/10 text-neutral-dark/80" :
            "bg-seaside-text/10 text-seaside-text"}`
            }>
            
              <Star className="w-3 h-3 text-primary" />
              {h}
            </span>
          )}
        </div>

        <div className="mt-auto pt-8">
          <a
            href={isHistoric ? "/en/malaga-palace" : "/en/malaga-terrace"}
            className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-300">
            See more
          </a>
        </div>
      </div>
    </div>);

}