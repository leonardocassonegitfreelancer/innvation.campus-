import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceMeeting from "@/assets/service-meeting.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    tagline: "Gallery",
    title: "See Our Spaces",
  },
  es: {
    tagline: "Galería",
    title: "Conoce Nuestros Espacios",
  },
  it: {
    tagline: "Galleria",
    title: "Scopri i Nostri Spazi",
  },
};

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;

const images = [
  { src: getSrc(serviceMeeting), alt: "Conference Room" },
  { src: getSrc(palaceCoworking), alt: "Meeting Space" },
  { src: getSrc(palaceSecondFloor), alt: "Second Floor" },
];

export default function ConferenceGallery({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85%] md:w-[45%] snap-start"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
