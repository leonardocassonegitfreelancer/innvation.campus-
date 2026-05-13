import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceOutside from "@/assets/palace-outside.webp";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.webp";
import palaceCatering from "@/assets/palace-catering.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import serviceTerrace from "@/assets/service-terrace.webp";
import img_terrace_reception from "@/assets/terrace-reception.webp";
import img_terrace_cafe from "@/assets/terrace-cafe.webp";
import img_terrace_interior from "@/assets/terrace-interior.webp";
import img_terrace_coworking_alt from "@/assets/terrace-coworking-alt.webp";
import img_terrace_meeting_alt from "@/assets/terrace-meeting-alt.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const palaceTop = [
  { src: palaceCourtyard, alt: "Patio del Málaga Palace" },
  { src: palaceOutside, alt: "Exterior del Málaga Palace" },
  { src: palaceEntrance, alt: "Entrada del Málaga Palace" },
  { src: palaceSecondFloor, alt: "Segunda pianta del Málaga Palace" },
];
const palaceBottom = [
  { src: palaceSkylight, alt: "Claraboya del Málaga Palace" },
  { src: palaceCoffeeBar, alt: "Cafetería del Málaga Palace" },
  { src: palaceCatering, alt: "Catering del Málaga Palace" },
  { src: palaceCoworking, alt: "Coworking del Málaga Palace" },
];
const terraceTop = [
  { src: _s(img_terrace_reception), alt: "Entrada Málaga Terrace" },
  { src: _s(img_terrace_cafe), alt: "Bar Málaga Terrace" },
  { src: _s(img_terrace_interior), alt: "Interior Málaga Terrace" },
  { src: terraceCommunity, alt: "Comunidad Málaga Terrace" },
];
const terraceBottom = [
  { src: terraceEvents, alt: "Evento en la azotea" },
  { src: _s(img_terrace_coworking_alt), alt: "Coworking en Málaga Terrace" },
  { src: _s(img_terrace_meeting_alt), alt: "Sala de reuniones Málaga Terrace" },
  { src: serviceTerrace, alt: "Terraza privada" },
];

const videos = { palace: "/videos/malaga-palace.mp4", terrace: "/videos/malaga-terrace.mp4" };

export default function CoworkingGalleryES() {
  const [tab, setTab] = useState<"palace" | "terrace">("palace");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const galleryTop = tab === "palace" ? palaceTop : terraceTop;
  const galleryBottom = tab === "palace" ? palaceBottom : terraceBottom;

  const handlePlayVideo = () => { videoRef.current?.play(); setIsPlaying(true); };
  const handleTabSwitch = (t: "palace" | "terrace") => {
    if (t === tab) return;
    setTab(t); setIsPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-10`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Explorar</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-8">Nuestros Espacios en Málaga</h2>
          <div className="flex gap-3 justify-center">
            <button onClick={() => handleTabSwitch("palace")} className={`py-2.5 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${tab === "palace" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent hover:bg-primary/10"}`}>Málaga Palace</button>
            <button onClick={() => handleTabSwitch("terrace")} className={`py-2.5 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${tab === "terrace" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent hover:bg-primary/10"}`}>Málaga Terrace</button>
          </div>
        </div>
        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group aspect-[4/3]">
                <img src={_s(img.src)} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group" onClick={handlePlayVideo}>
              <video key={videos[tab]} ref={videoRef} src={videos[tab]} className="w-full h-full object-cover md:object-contain" controls={isPlaying} playsInline preload="metadata" onEnded={() => setIsPlaying(false)} />
              {!isPlaying && (
                <div className="absolute inset-0 bg-neutral-dark/30 flex items-center justify-center transition-opacity group-hover:bg-neutral-dark/40">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryBottom.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group aspect-[4/3]">
                <img src={_s(img.src)} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
