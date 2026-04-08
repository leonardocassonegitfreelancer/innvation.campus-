import Navbar from "@/components/landing/Navbar";
import FooterES from "@/components/landing/es/FooterES";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Building2, Sun, Wifi, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import terraceHero from "@/assets/terrace-hero.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import serviceCommunity from "@/assets/service-community.jpg";

const services = [
  { img: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.jpg", label: "Espacios de Coworking", icon: Users, href: "/es/coworking" },
  { img: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.jpg", label: "Salas de Reuniones", icon: Building2, href: "/es/salas-de-reuniones" },
  { img: serviceTerrace, label: "Terraza Privada", icon: Sun, href: "/es/terraza-privada" },
  { img: serviceCommunity, label: "Eventos Comunitarios", icon: Wifi, href: "/es/eventos" },
];

const galleryTop = [
  { src: "/lovable-uploads/d002f55d-0b40-4966-a3c1-172cb490f76f.png", alt: "Entrada de Málaga Terrace" },
  { src: "/lovable-uploads/237d9ba8-6193-4e35-a922-d914b6bd9079.jpg", alt: "Área de bar de Málaga Terrace" },
  { src: "/lovable-uploads/d4ee74cf-f799-4dfb-9788-53fa9ece8dd7.jpg", alt: "Interior de Málaga Terrace" },
  { src: terraceCommunity, alt: "Evento comunitario en Málaga Terrace" },
];

const galleryBottom = [
  { src: terraceEvents, alt: "Evento en la azotea de Málaga Terrace" },
  { src: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.jpg", alt: "Coworking en Málaga Terrace" },
  { src: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.jpg", alt: "Sala de reuniones en Málaga Terrace" },
  { src: serviceTerrace, alt: "Terraza privada en Málaga Terrace" },
];

export default function MalagaTerraceES() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Málaga Terrace"
        description="Coworking junto al mar con terraza panorámica en Málaga. Escritorios con vistas al océano, espacios creativos y eventos de networking al atardecer."
        path="/es/malaga-terrace"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-[-15%] w-[130%] h-[130%]">
          <img src={terraceHero} alt="Evento en la azotea de Málaga Terrace" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/70 to-neutral-dark/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <Link to="/es" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-body mb-4 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Malaga Terrace
          </p>
          <h1 className="font-body font-light text-4xl md:text-6xl text-primary-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Junto al Mar
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mt-3 max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Cristal, luz y mar. Energía creativa, colaboración y la libertad que viene de trabajar con el horizonte a la vista.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(160deg, hsl(var(--seaside-bg)), hsl(var(--seaside-bg-cool)))" }}>
        <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6 relative z-10`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Sobre esta ubicación</p>
              <h2 className="font-body font-light text-3xl md:text-4xl text-seaside-text mb-6">Donde el mar se encuentra con tus mejores ideas</h2>
              <p className="font-body text-seaside-muted leading-relaxed mb-6">
                Un espacio moderno diseñado para la energía creativa y la colaboración. Ventanales del suelo al techo enmarcan el Mediterráneo, mientras la terraza en la azotea convierte cada atardecer en una oportunidad de networking. Ya sea que estés lanzando una startup o cerrando un cliente, hazlo con brisa marina y posibilidad.
              </p>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-seaside-text/80">Calle Puerto 14, 29016 Málaga</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-seaside-text/80">Lun–Vie 09:30–18:30</span>
              </div>
              <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 w-fit">
                <Link to="/es/encuentranos#malaga-terrace">Encuéntranos</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img alt="Bar de Innovation Campus Terrace" className="w-full h-80 md:h-[24rem] object-cover" loading="lazy" src="/lovable-uploads/d9d2b368-e5c7-40e9-af7b-7e21ef4e7e61.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + Video */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={galleryRef} className={`scroll-animate ${galleryVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">Explora</p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-16">Dentro de la Terraza</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group" onClick={handlePlayVideo}>
              <video ref={videoRef} src="/videos/malaga-terrace.mp4" className="w-full h-full object-cover md:object-contain" controls={isPlaying} playsInline preload="metadata" onEnded={() => setIsPlaying(false)} />
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
              <div key={img.alt} className="rounded-xl overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-neutral-dark text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Experimenta la Terraza</h2>
          <p className="font-body text-primary-foreground/70 mb-8">Reserva una visita y descubre tu espacio de trabajo junto al mar en Málaga.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
            <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Reservar Visita</a>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">También Disponible en esta ubicación</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Servicios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.label} to={s.href} className="rounded-xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterES />
    </main>
  );
}
