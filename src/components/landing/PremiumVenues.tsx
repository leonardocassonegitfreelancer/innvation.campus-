import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import serviceTerrace from "@/assets/service-terrace.jpg";
import palaceEntrance from "@/assets/palace-entrance.jpg";

const translations = {
  en: {
    tagline: "Signature Locations",
    title: "Our Premium Venues",
    venues: [
      {
        name: "Málaga Terrace",
        desc: "An expansive rooftop overlooking the historic city center. Ideal for sunset mixers, corporate celebrations, and open-air networking.",
        capacity: "Up to 80 Guests",
        img: serviceTerrace,
      },
      {
        name: "Málaga Palace",
        desc: "A beautifully restored historic building featuring high ceilings, elegant molding, and state-of-the-art audiovisual capabilities.",
        capacity: "Up to 120 Guests",
        img: palaceEntrance,
      }
    ]
  },
  es: {
    tagline: "Ubicaciones Exclusivas",
    title: "Nuestros Espacios Premium",
    venues: [
      {
        name: "Terraza Málaga",
        desc: "Una amplia azotea con vistas al centro histórico. Ideal para eventos al atardecer, celebraciones corporativas y networking.",
        capacity: "Hasta 80 Invitados",
        img: serviceTerrace,
      },
      {
        name: "Palacio Málaga",
        desc: "Un edificio histórico bellamente restaurado con techos altos, molduras elegantes y capacidades audiovisuales de última generación.",
        capacity: "Hasta 120 Invitados",
        img: palaceEntrance,
      }
    ]
  },
  it: {
    tagline: "Location Esclusive",
    title: "I Nostri Spazi Premium",
    venues: [
      {
        name: "Málaga Terrace",
        desc: "Un'ampia terrazza panoramica che si affaccia sul centro storico. Ideale per aperitivi al tramonto, celebrazioni aziendali e networking.",
        capacity: "Fino a 80 Ospiti",
        img: serviceTerrace,
      },
      {
        name: "Málaga Palace",
        desc: "Un edificio storico finemente restaurato con soffitti alti, modanature eleganti e sistemi audiovisivi all'avanguardia.",
        capacity: "Fino a 120 Ospiti",
        img: palaceEntrance,
      }
    ]
  }
};

export default function PremiumVenues() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-24 bg-neutral-100" id="venues">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-20`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="space-y-24">
          {t.venues.map((venue, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <div key={venue.name} className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center`}>
                <div className={`animate-fade-in ${isReverse ? 'md:order-2' : ''}`}>
                  <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    {venue.name}
                  </h3>
                  <p className="font-body text-lg text-foreground/70 mb-8 leading-relaxed">
                    {venue.desc}
                  </p>

                  <div className="inline-block bg-white px-6 py-4 shadow-sm border-l-4 border-primary">
                    <p className="font-body text-xs uppercase tracking-widest text-foreground/60 mb-1">Capacity</p>
                    <p className="font-display text-xl font-bold text-primary">{venue.capacity}</p>
                  </div>
                </div>

                <div className={`relative aspect-[4/3] w-full animate-scale-in ${isReverse ? 'md:order-1' : ''}`}>
                  <div className={`absolute bg-white shadow-xl ${isReverse ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} inset-0 z-0`}></div>
                  <img
                    src={venue.img}
                    alt={venue.name}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
