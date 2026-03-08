import palaceCoworking from "@/assets/palace-coworking.jpg";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";

const images = [
  { src: palaceCoworking, alt: "Open coworking area at Palace" },
  { src: palaceCoffeeBar, alt: "Coffee bar lounge" },
  { src: terraceCommunity, alt: "Community terrace space" },
];

export default function CoworkingGallery() {
  return (
    <section className="py-20 md:py-28 bg-neutral-dark">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          The Spaces
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground text-center mb-12">
          Where You'll Work
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
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
