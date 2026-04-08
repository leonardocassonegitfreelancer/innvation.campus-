import Navbar from "@/components/landing/Navbar";
import FooterIT from "@/components/landing/it/FooterIT";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, BookOpen, Calendar, Play } from "lucide-react";
import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palaceEntrance from "@/assets/palace-entrance.jpg";
import palaceSecondFloor from "@/assets/palace-second-floor.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import palaceOutside from "@/assets/palace-outside.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";
import palaceSkylight from "@/assets/palace-skylight.jpg";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.jpg";
import palaceCatering from "@/assets/palace-catering.jpg";
import palaceCoworking from "@/assets/palace-coworking.jpg";

const galleryTop = [
  { src: palaceCourtyard, alt: "Cortile del Málaga Palace con piastrelle ornamentali" },
  { src: palaceOutside, alt: "Esterno del Málaga Palace" },
  { src: palaceEntrance, alt: "Ingresso ornamentale del Málaga Palace" },
  { src: palaceSecondFloor, alt: "Secondo piano del Málaga Palace" },
];
const galleryBottom = [
  { src: palaceSkylight, alt: "Lucernario del Málaga Palace" },
  { src: palaceCoffeeBar, alt: "Coffee bar del Málaga Palace" },
  { src: palaceCatering, alt: "Catering ed eventi del Málaga Palace" },
  { src: palaceCoworking, alt: "Area coworking del Málaga Palace" },
];

const services = [
  { img: serviceCoworking, label: "Spazi Coworking", icon: Users, href: "/it/coworking" },
  { img: serviceMeeting, label: "Sale Riunioni", icon: Building2, href: "/it/sale-riunioni" },
  { img: servicePrivate, label: "Uffici Privati", icon: BookOpen, href: "/it/uffici-privati" },
  { img: serviceCommunity, label: "Eventi della Comunità", icon: Calendar, href: "/it/eventi" },
];

export default function MalagaPalaceIT() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) { videoRef.current.play(); setIsPlaying(true); }
  };

  return (
    <main className="overflow-x-hidden">
      <SEOHead title="Málaga Palace" description="Coworking in un palazzo restaurato del XVIII secolo nel centro storico di Málaga. Muri in pietra, giardino con cortile e a pochi passi dal Museo Picasso." path="/it/malaga-palace" />
      <Navbar />

      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <img src={palaceEntrance} alt="Ingresso storico del Málaga Palace" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <Link to="/it" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />Torna alla Home
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold">Malaga Palace</p>
          <h1 className="font-display italic text-4xl md:text-6xl font-bold text-primary-foreground">Centro Storico</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">Dove secoli di storia incontrano l'ambizione moderna. Lavoro profondo, pensiero strategico e conversazioni che contano.</p>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "linear-gradient(170deg, hsl(35 30% 92%), hsl(30 25% 90%), hsl(40 20% 93%))" }}>
        <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Informazioni su questa sede</p>
              <h2 className="font-display italic text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Un palazzo rinato per la mente moderna</h2>
              <p className="font-body text-neutral-dark/80 leading-relaxed mb-6">Situato in un edificio restaurato del XVIII secolo vicino al Museo Picasso, questo spazio ti avvolge in secoli di storia.<br />Perfetto per lavoro profondo, pensiero strategico e conversazioni che contano.</p>
              <div className="flex items-start gap-3 mb-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="font-body text-sm text-neutral-dark/70">Calle Álamos 7, 29012 Málaga</span></div>
              <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="font-body text-sm text-neutral-dark/70">Lun–Ven 8:00–22:00 · Sab 9:00–18:00</span></div>
              <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 w-fit"><Link to="/it/trovaci#malaga-palace">Trovaci</Link></Button>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden"><img src={palaceSecondFloor} alt="Secondo piano del Málaga Palace" className="w-full h-[60vh] md:h-[24rem] object-cover" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div ref={galleryRef} className={`scroll-animate ${galleryVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">Esplora</p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-16">Dentro il Palazzo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">{galleryTop.map((img) => (<div key={img.alt} className="rounded-xl overflow-hidden group"><img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /></div>))}</div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group" onClick={handlePlayVideo}>
              <video ref={videoRef} src="/videos/malaga-palace.mp4" className="w-full h-full object-cover md:object-contain" controls={isPlaying} playsInline preload="metadata" onEnded={() => setIsPlaying(false)} />
              {!isPlaying && (<div className="absolute inset-0 bg-neutral-dark/30 flex items-center justify-center transition-opacity group-hover:bg-neutral-dark/40"><div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform group-hover:scale-110"><Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" /></div></div>)}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">{galleryBottom.map((img) => (<div key={img.alt} className="rounded-xl overflow-hidden group"><img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /></div>))}</div>
        </div>
      </section>

      <section className="py-16 bg-neutral-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Vivi il Palazzo</h2>
          <p className="font-body text-primary-foreground/70 mb-8">Prenota una visita e scopri il tuo nuovo spazio di lavoro nel cuore di Málaga.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3"><a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Prenota una Visita</a></Button>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">Disponibile Anche in Questa Sede</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Servizi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s) => (<Link key={s.label} to={s.href} className="rounded-xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-shadow"><div className="h-44 overflow-hidden"><img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /></div><div className="p-4 flex items-center gap-3"><s.icon className="w-5 h-5 text-primary shrink-0" /><span className="font-body text-sm font-medium text-foreground">{s.label}</span></div></Link>))}</div>
        </div>
      </section>

      <FooterIT />
    </main>
  );
}
