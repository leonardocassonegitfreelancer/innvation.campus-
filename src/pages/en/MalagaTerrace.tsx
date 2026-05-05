import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, Building2, Sun, Wifi, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import terraceBar from "@/assets/terrace-bar.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import terraceHero from "@/assets/terrace-hero.webp";
import terraceEntrance from "@/assets/terrace-entrance.webp";
import terraceCommunity from "@/assets/terrace-community.webp";
import seasideInt from "@/assets/seaside-interior.webp";
import serviceCoworking from "@/assets/service-coworking.webp";
import serviceMeeting from "@/assets/service-meeting.webp";
import serviceTerrace from "@/assets/service-terrace.webp";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const highlights = [
  "Panoramic rooftop terrace",
  "Ocean-view desks",
  "Open-plan creative zone",
  "Beachfront location",
  "Sunset networking events",
  "High-speed fiber WiFi"];


const services = [
  { img: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.webp", label: "Coworking Spaces", icon: Users, href: "/en/coworking-space" },
  { img: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.webp", label: "Meeting Rooms", icon: Building2, href: "/en/meeting-rooms" },
  { img: serviceTerrace, label: "Private Terrace", icon: Sun, href: "/en/private-terrace" },
  { img: serviceCommunity, label: "Community Events", icon: Wifi, href: "/en/events" }];


const galleryTop = [
  { src: "/lovable-uploads/d002f55d-0b40-4966-a3c1-172cb490f76f.webp", alt: "Málaga Terrace entrance and reception" },
  { src: "/lovable-uploads/237d9ba8-6193-4e35-a922-d914b6bd9079.webp", alt: "Málaga Terrace bar area" },
  { src: "/lovable-uploads/d4ee74cf-f799-4dfb-9788-53fa9ece8dd7.webp", alt: "Málaga Terrace interior workspace" },
  { src: terraceCommunity, alt: "Málaga Terrace community event" }];

const galleryBottom = [
  { src: terraceEvents, alt: "Málaga Terrace rooftop event" },
  { src: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.webp", alt: "Coworking space at Málaga Terrace" },
  { src: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.webp", alt: "Meeting room at Málaga Terrace" },
  { src: serviceTerrace, alt: "Private terrace at Málaga Terrace" }];


const translations = {
  en: {
    back: "Back to Home",
    eyebrow: "Malaga TERRACE",
    heroTitle: "Seaside",
    heroSubtitle: "Glass, light, and sea. Creative energy, collaboration, and the freedom that comes from working with the horizon in view.",
    about: {
      eyebrow: "About this location",
      title: "Where the sea meets your best ideas",
      description: "A modern space designed for creative energy and collaboration. Floor-to-ceiling windows frame the Mediterranean, while the rooftop terrace turns every sunset into a networking opportunity.\n\nWhether you're launching a startup or landing a client, do it with salt air and possibility.",
      findUs: "Find Us",
      address: "Calle Puerto 14, 29016 Málaga",
      hours: "Mon–Fri 09:30–18:30",
    },
    gallery: {
      eyebrow: "Explore",
      title: "Inside the Terrace",
    },
    cta: {
      title: "Experience the Terrace",
      subtitle: "Book a visit and discover your seaside workspace in Málaga.",
      button: "Book a Visit",
    },
    services: {
      eyebrow: "Also Available at this location",
      title: "Services",
      items: [
        { label: "Coworking Spaces", href: "/en/coworking-space" },
        { label: "Meeting Rooms", href: "/en/meeting-rooms" },
        { label: "Private Terrace", href: "/en/private-terrace" },
        { label: "Community Events", href: "/en/events" },
      ]
    }
  },
  es: {
    back: "Volver al inicio",
    eyebrow: "Málaga TERRACE",
    heroTitle: "Junto al Mar",
    heroSubtitle: "Cristal, luz y mar. Energía creativa, colaboración y la libertad que surge de trabajar con el horizonte a la vista.",
    about: {
      eyebrow: "Sobre esta ubicación",
      title: "Donde el mar se encuentra con tus mejores ideas",
      description: "Un espacio moderno diseñado para la energía creativa y la colaboración. Ventanales de suelo a techo enmarcan el Mediterráneo, mientras que la terraza en la azotea convierte cada atardecer en una oportunidad de networking.\n\nYa sea que estés lanzando una startup o cerrando un trato, hazlo con el aire del mar y la posibilidad.",
      findUs: "Encuéntranos",
      address: "Calle Puerto 14, 29016 Málaga",
      hours: "Lun–Vie 09:30–18:30",
    },
    gallery: {
      eyebrow: "Explorar",
      title: "Dentro de Terrace",
    },
    cta: {
      title: "Vive la experiencia Terrace",
      subtitle: "Reserva una visita y descubre tu espacio de trabajo junto al mar en Málaga.",
      button: "Reservar Visita",
    },
    services: {
      eyebrow: "También disponible en esta ubicación",
      title: "Servicios",
      items: [
        { label: "Espacios de Coworking", href: "/es/coworking" },
        { label: "Salas de Reuniones", href: "/es/salas-de-reuniones" },
        { label: "Terraza Privada", href: "/es/terraza-privada" },
        { label: "Eventos Comunitarios", href: "/es/eventos" },
      ]
    }
  },
  it: {
    back: "Torna alla Home",
    eyebrow: "Malaga TERRACE",
    heroTitle: "Sul Mare",
    heroSubtitle: "Vetro, luce e mare. Energia creativa, collaborazione e la libertà che deriva dal lavorare con l'orizzonte in vista.",
    about: {
      eyebrow: "Su questa location",
      title: "Dove il mare incontra le tue migliori idee",
      description: "Uno spazio moderno progettato per l'energia creativa e la collaborazione. Vetrate a tutta altezza incorniciano il Mediterraneo, mentre la terrazza sul tetto trasforma ogni tramonto in un'opportunità di networking.\n\nChe tu stia lanciando una startup o incontrando un cliente, fallo con l'aria di mare e la possibilità.",
      findUs: "Trovaci",
      address: "Calle Puerto 14, 29016 Málaga",
      hours: "Lun–Ven 09:30–18:30",
    },
    gallery: {
      eyebrow: "Esplora",
      title: "Dentro la Terrace",
    },
    cta: {
      title: "Vivi l'esperienza Terrace",
      subtitle: "Prenota una visita e scopri il tuo spazio di lavoro sul mare a Málaga.",
      button: "Prenota una Visita",
    },
    services: {
      eyebrow: "Disponibile anche in questa location",
      title: "Servizi",
      items: [
        { label: "Spazi di Coworking", href: "/it/coworking" },
        { label: "Sale Riunioni", href: "/it/sale-riunioni" },
        { label: "Terrazza Privata", href: "/it/terrazza-privata" },
        { label: "Eventi Comunitari", href: "/it/eventi" },
      ]
    }
  }
};

export default function MalagaTerrace({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const t = translations[lang];
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const serviceIcons = [Users, Building2, Sun, Wifi];

  return (
    <main className="overflow-x-hidden pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-[-15%] w-[130%] h-[130%]">
            <img src={_s(terraceHero)} alt="Málaga Terrace rooftop event" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/70 to-neutral-dark/30" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
            <a href={lang === "en" ? "/" : `/${lang}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-body mb-4 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </a>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {t.eyebrow}
            </p>
            <h1 className="font-body font-light text-4xl md:text-6xl text-primary-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              {t.heroTitle}
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 mt-3 max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {t.heroSubtitle}
            </p>
          </div>
        </section>

        {/* About */}
        <section
          className="py-20 md:py-28"
          style={{
            background: "linear-gradient(160deg, hsl(var(--seaside-bg)), hsl(var(--seaside-bg-cool)))"
          }}>

          <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6 relative z-10`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                  {t.about.eyebrow}
                </p>
                <h2 className="font-body font-light text-3xl md:text-4xl text-seaside-text mb-6">
                  {t.about.title}
                </h2>
                <p className="font-body text-seaside-muted leading-relaxed mb-6 whitespace-pre-line">
                  {t.about.description}
                </p>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-seaside-text/80">
                    {t.about.address}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-seaside-text/80">
                    {t.about.hours}
                  </span>
                </div>
                <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 w-fit">
                  <a href={lang === "en" ? "/en/find-us#malaga-terrace" : `/${lang}/encuentranos#malaga-terrace`}>{t.about.findUs}</a>
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  alt="Innovation Campus Terrace bar"
                  className="w-full h-80 md:h-[24rem] object-cover"
                  loading="lazy"
                  src="/lovable-uploads/d9d2b368-e5c7-40e9-af7b-7e21ef4e7e61.webp" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery + Video */}
        <section className="py-20 md:py-28 bg-background">
          <div ref={galleryRef} className={`scroll-animate ${galleryVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
            <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">
              {t.gallery.eyebrow}
            </p>
            <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-16">
              {t.gallery.title}
            </h2>

            {/* Photo Grid Top */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              {galleryTop.map((img) =>
                <div key={img.alt} className="rounded-xl overflow-hidden group">
                  <img src={_s(img.src)} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              )}
            </div>

            {/* Video */}
            <div className="flex justify-center mb-6">
              <div
                className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group"
                onClick={handlePlayVideo}>
                <video
                  ref={videoRef}
                  src="/videos/malaga-terrace.mp4"
                  className="w-full h-full object-cover md:object-contain"
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  onEnded={() => setIsPlaying(false)} />
                {!isPlaying &&
                  <div className="absolute inset-0 bg-neutral-dark/30 flex items-center justify-center transition-opacity group-hover:bg-neutral-dark/40">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" />
                    </div>
                  </div>
                }
              </div>
            </div>

            {/* Photo Grid Bottom */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryBottom.map((img) =>
                <div key={img.alt} className="rounded-xl overflow-hidden group">
                  <img src={_s(img.src)} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 bg-neutral-dark text-center overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }} />
          <div className="relative max-w-2xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {t.cta.title}
            </h2>
            <p className="font-body text-primary-foreground/70 mb-8">
              {t.cta.subtitle}
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
              <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">{t.cta.button}</a>
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
              {t.services.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t.services.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.services.items.map((s, i) => {
                const Icon = serviceIcons[i];
                const serviceImg = services[i].img;
                return (
                  <a key={s.label} href={s.href} className="rounded-xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-shadow">
                    <div className="h-44 overflow-hidden">
                      <img src={_s(serviceImg)} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-4 flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
    </main>
  );
}
