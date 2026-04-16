import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Palace images
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceOutside from "@/assets/palace-outside.webp";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.webp";
import palaceCatering from "@/assets/palace-catering.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";

// Terrace images
import terraceCommunity from "@/assets/terrace-community.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import serviceTerrace from "@/assets/service-terrace.webp";

const palaceGalleryTop = [
  { src: palaceCourtyard, alt: "Málaga Palace courtyard" },
  { src: palaceOutside, alt: "Málaga Palace exterior" },
  { src: palaceEntrance, alt: "Málaga Palace entrance hall" },
  { src: palaceSecondFloor, alt: "Málaga Palace second floor" },
];
const palaceGalleryBottom = [
  { src: palaceSkylight, alt: "Málaga Palace skylight" },
  { src: palaceCoffeeBar, alt: "Málaga Palace coffee bar" },
  { src: palaceCatering, alt: "Málaga Palace catering" },
  { src: palaceCoworking, alt: "Málaga Palace coworking" },
];

const terraceGalleryTop = [
  { src: "/lovable-uploads/d002f55d-0b40-4966-a3c1-172cb490f76f.png", alt: "Málaga Terrace entrance" },
  { src: "/lovable-uploads/237d9ba8-6193-4e35-a922-d914b6bd9079.jpg", alt: "Málaga Terrace bar area" },
  { src: "/lovable-uploads/d4ee74cf-f799-4dfb-9788-53fa9ece8dd7.jpg", alt: "Málaga Terrace interior" },
  { src: terraceCommunity, alt: "Málaga Terrace community" },
];
const terraceGalleryBottom = [
  { src: terraceEvents, alt: "Málaga Terrace rooftop event" },
  { src: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.jpg", alt: "Coworking at Málaga Terrace" },
  { src: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.jpg", alt: "Meeting room at Málaga Terrace" },
  { src: serviceTerrace, alt: "Private terrace" },
];

const videos = {
  palace: "/videos/malaga-palace.mp4",
  terrace: "/videos/malaga-terrace.mp4",
};

export default function CoworkingGallery() {
  const [tab, setTab] = useState<"palace" | "terrace">("palace");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const galleryTop = tab === "palace" ? palaceGalleryTop : terraceGalleryTop;
  const galleryBottom = tab === "palace" ? palaceGalleryBottom : terraceGalleryBottom;
  const videoSrc = videos[tab];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTabSwitch = (newTab: "palace" | "terrace") => {
    if (newTab === tab) return;
    setTab(newTab);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-10`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            Explore
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
            Our Spaces in Málaga
          </h2>

          {/* Toggle */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => handleTabSwitch("palace")}
              className={`py-2.5 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                tab === "palace"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent hover:bg-primary/10"
              }`}
            >
              Málaga Palace
            </button>
            <button
              onClick={() => handleTabSwitch("terrace")}
              className={`py-2.5 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                tab === "terrace"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent hover:bg-primary/10"
              }`}
            >
              Málaga Terrace
            </button>
          </div>
        </div>

        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""}`}>
          {/* Photo Grid Top */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="flex justify-center mb-6">
            <div
              className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group"
              onClick={handlePlayVideo}
            >
              <video
                key={videoSrc}
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover md:object-contain"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <div className="absolute inset-0 bg-neutral-dark/30 flex items-center justify-center transition-opacity group-hover:bg-neutral-dark/40">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Photo Grid Bottom */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryBottom.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
