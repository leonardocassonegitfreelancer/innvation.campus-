import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Clock, Star } from "lucide-react";
import historicExt from "@/assets/historic-exterior.jpg";
import seasideExt from "@/assets/seaside-exterior.jpg";

const locations = [
  {
    id: "historic-card",
    name: "Historic Center",
    tagline: "Where depth lives",
    img: historicExt,
    alt: "Historic Málaga old town street with golden light",
    address: "Calle Granada 42, Centro Histórico, Málaga",
    hours: "Mon–Fri 8:00–22:00 · Sat 9:00–18:00",
    highlights: ["Stone-walled meeting rooms", "Library corner", "Courtyard garden", "Steps from Picasso Museum"],
    desc: "Nestled in a restored 18th-century building, this space wraps you in centuries of history. Perfect for deep work, strategic thinking, and conversations that matter.",
    theme: "historic" as const,
  },
  {
    id: "seaside-card",
    name: "Seaside",
    tagline: "Where ideas fly",
    img: seasideExt,
    alt: "Modern seaside building overlooking Mediterranean in Málaga",
    address: "Paseo Marítimo 15, La Malagueta, Málaga",
    hours: "Mon–Fri 7:00–22:00 · Sat–Sun 9:00–20:00",
    highlights: ["Panoramic rooftop terrace", "Ocean-view desks", "Open-plan creative zone", "Beachfront location"],
    desc: "Glass, light, and sea. A modern space designed for creative energy, collaboration, and the kind of freedom that only comes from working with the horizon in view.",
    theme: "seaside" as const,
  },
];

export default function LocationsSection() {
  const { ref: titleRef, isVisible: titleVis } = useScrollAnimation();

  return (
    <section id="locations" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className={`scroll-animate ${titleVis ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            Our Locations
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Two worlds. <span className="text-primary">Your choice.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc) => (
            <LocationCard key={loc.name} {...loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  id, name, tagline, img, alt, address, hours, highlights, desc, theme,
}: (typeof locations)[0]) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isHistoric = theme === "historic";

  return (
    <div
      id={id}
      ref={ref}
      className={`${isHistoric ? "scroll-animate-left" : "scroll-animate-right"} ${isVisible ? "visible" : ""} rounded-2xl overflow-hidden group`}
      style={{
        background: isHistoric
          ? "linear-gradient(180deg, hsl(var(--historic-bg)), hsl(var(--historic-bg-warm)))"
          : "linear-gradient(180deg, hsl(var(--seaside-bg)), hsl(var(--seaside-bg-cool)))",
      }}
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 ${
            isHistoric
              ? "bg-gradient-to-t from-historic-bg via-transparent"
              : "bg-gradient-to-t from-seaside-bg via-transparent"
          }`}
        />
        <div className="absolute bottom-6 left-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1">
            {tagline}
          </p>
          <h3
            className={`${isHistoric ? "font-display italic" : "font-body font-light"} text-3xl md:text-4xl font-bold ${
              isHistoric ? "text-historic-text" : "text-seaside-text"
            }`}
          >
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p
          className={`font-body text-sm leading-relaxed mb-6 ${
            isHistoric ? "text-historic-muted" : "text-seaside-muted"
          }`}
        >
          {desc}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-historic-text/80" : "text-seaside-text/80"}`}>
              {address}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className={`font-body text-sm ${isHistoric ? "text-historic-text/80" : "text-seaside-text/80"}`}>
              {hours}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className={`inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full ${
                isHistoric
                  ? "bg-historic-text/10 text-historic-text/80"
                  : "bg-seaside-text/10 text-seaside-text/80"
              }`}
            >
              <Star className="w-3 h-3 text-primary" />
              {h}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block mt-8 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-300"
        >
          Book a visit
        </a>
      </div>
    </div>
  );
}
