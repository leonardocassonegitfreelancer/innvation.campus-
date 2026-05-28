import { useLang } from "@/lib/lang-context";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const galleryGlob = import.meta.glob('@/assets/terrace-gallery-*.webp', { eager: true });
const galleryPhotos: string[] = Object.keys(galleryGlob)
  .sort()
  .map((k) => _s(galleryGlob[k]));

const translations = {
  en: { tagline: "Gallery", title: "See Our Terrace" },
  es: { tagline: "Galería", title: "Conoce Nuestra Terraza" },
  it: { tagline: "Galleria", title: "Scopri la Nostra Terrazza" },
};

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
          {galleryPhotos.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[85%] md:w-[45%] snap-start">
              <img src={src} alt={`Málaga Terrace ${i + 1}`} className="w-full h-64 md:h-80 object-cover rounded-xl" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
