import { useLang } from "@/lib/lang-context";
import serviceTerrace from "@/assets/service-terrace.webp";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceCommunity from "@/assets/terrace-community.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: { tagline: "Gallery", title: "See Our Terrace" },
  es: { tagline: "Galería", title: "Conoce Nuestra Terraza" },
  it: { tagline: "Galleria", title: "Scopri la Nostra Terrazza" },
};

const images = [
  { src: serviceTerrace, alt: "Private Terrace" },
  { src: terraceBar, alt: "Terrace Bar" },
  { src: terraceCommunity, alt: "Terrace Community" },
];

export default function TerraceGallery() {
  const lang = useLang();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[85%] md:w-[45%] snap-start">
              <img src={_s(img.src)} alt={img.alt} className="w-full h-64 md:h-80 object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
