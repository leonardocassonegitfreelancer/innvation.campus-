import palaceCoworking from "@/assets/palace-coworking.jpg";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { src: palaceCoworking, alt: "Area coworking aperta al Palace" },
  { src: palaceCoffeeBar, alt: "Zona caffè e bar" },
  { src: terraceCommunity, alt: "Spazio comunitario sulla terrazza" },
];

export default function CoworkingGalleryIT() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-28 bg-neutral-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-12`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            Gli Spazi
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Dove Lavorerai
          </h2>
        </div>

        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""} grid sm:grid-cols-3 gap-4`}>
          {images.map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
