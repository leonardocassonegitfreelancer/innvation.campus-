import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import servicePrivate from "@/assets/service-private.jpg";
import palaceCoworking from "@/assets/palace-coworking.jpg";
import palaceSecondFloor from "@/assets/palace-second-floor.jpg";

const translations = {
  en: { tagline: "Gallery", title: "See Our Offices" },
  es: { tagline: "Galería", title: "Conoce Nuestras Oficinas" },
  it: { tagline: "Galleria", title: "Scopri i Nostri Uffici" },
};

const images = [
  { src: servicePrivate, alt: "Private Office" },
  { src: palaceCoworking, alt: "Office Space" },
  { src: palaceSecondFloor, alt: "Second Floor" },
];

export default function OfficesGallery() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[85%] md:w-[45%] snap-start">
              <img src={img.src} alt={img.alt} className="w-full h-64 md:h-80 object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
