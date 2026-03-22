import Navbar from "@/components/landing/Navbar";
import FooterES from "@/components/landing/es/FooterES";
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
  { src: palaceCourtyard, alt: "Patio del Málaga Palace con azulejos ornamentales" },
  { src: palaceOutside, alt: "Exterior del Málaga Palace" },
  { src: palaceEntrance, alt: "Entrada ornamental del Málaga Palace" },
  { src: palaceSecondFloor, alt: "Segunda planta del Málaga Palace" },
];
const galleryBottom = [
  { src: palaceSkylight, alt: "Claraboya del Málaga Palace" },
  { src: palaceCoffeeBar, alt: "Cafetería del Málaga Palace" },
  { src: palaceCatering, alt: "Catering y eventos del Málaga Palace" },
  { src: palaceCoworking, alt: "Área de coworking del Málaga Palace" },
];

const services = [
  { img: serviceCoworking, label: "Espacios de Coworking", icon: Users, href: "/es/coworking" },
  { img: serviceMeeting, label: "Salas de Reuniones", icon: Building2, href: "/es/salas-de-conferencias" },
  { img: servicePrivate, label: "Oficinas Privadas", icon: BookOpen, href: "/es/oficinas-privadas" },
  { img: serviceCommunity, label: "Eventos Comunitarios", icon: Calendar, href: "/es/eventos" },
];

export default function MalagaPalaceES() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVis } = useScrollAnimation();
  const { ref: hotRef, isVisible: hotVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();
  const [hotTab, setHotTab] = useState<"business" | "individual">("business");
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
        title="Málaga Palace"
        description="Coworking en un palacio restaurado del siglo XVIII en el centro histórico de Málaga. Muros de piedra, jardín con patio y a pasos del Museo Picasso."
        path="/es/malaga-palace"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <img src={palaceEntrance} alt="Entrada histórica del Málaga Palace" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <Link to="/es" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold">
            Malaga Palace
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl font-bold text-primary-foreground">
            Centro Histórico
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
            Donde siglos de historia se encuentran con la ambición moderna. Trabajo profundo, pensamiento estratégico y conversaciones que importan.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(170deg, hsl(35 30% 92%), hsl(30 25% 90%), hsl(40 20% 93%))" }}>
        <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                Sobre esta ubicación
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Un palacio renacido para la mente moderna
              </h2>
              <p className="font-body text-neutral-dark/80 leading-relaxed mb-6">
                Ubicado en un edificio restaurado del siglo XVIII cerca del Museo Picasso, este espacio te envuelve en siglos de historia.
                <br />
                Perfecto para trabajo profundo, pensamiento estratégico y conversaciones que importan.
              </p>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-neutral-dark/70">Calle Álamos 7, 29012 Málaga</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-neutral-dark/70">Lun–Vie 8:00–22:00 · Sáb 9:00–18:00</span>
              </div>
              <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 w-fit">
                <Link to="/es/encuentranos#malaga-palace">Encuéntranos</Link>
              </Button>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden">
              <img src={palaceSecondFloor} alt="Segunda planta del Málaga Palace" className="w-full h-[60vh] md:h-[24rem] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + Video */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={galleryRef} className={`scroll-animate ${galleryVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">Explora</p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-16">Dentro del Palacio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm aspect-[9/16] md:max-w-5xl md:aspect-video bg-neutral-dark rounded-xl overflow-hidden cursor-pointer group" onClick={handlePlayVideo}>
              <video ref={videoRef} src="/videos/malaga-palace.mp4" className="w-full h-full object-cover md:object-contain" controls={isPlaying} playsInline preload="metadata" onEnded={() => setIsPlaying(false)} />
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

      {/* What's Hot */}
      <section className="py-24 md:py-36" style={{ background: "linear-gradient(170deg, hsl(35 30% 92%), hsl(30 25% 90%), hsl(40 20% 93%))" }}>
        <div ref={hotRef} className={`scroll-animate ${hotVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">Descubre</p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-20">Lo Mejor de Málaga Palace</h2>
          <div className="flex gap-3 mb-12 justify-center">
            <button onClick={() => setHotTab("business")} className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${hotTab === "business" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>
              Para Empresas
            </button>
            <button onClick={() => setHotTab("individual")} className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${hotTab === "individual" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>
              Para Individuos
            </button>
          </div>

          {hotTab === "business" && (
            <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">Organiza Tu Evento Aquí</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Briefcase, title: "Eventos Corporativos", desc: "Lanzamientos de productos, retiros de equipo y reuniones corporativas en salas con muros de piedra que impresionan." },
                  { icon: Palette, title: "Eventos Culturales", desc: "Exposiciones de arte, lecturas de libros y showcases creativos en un entorno que respira inspiración." },
                  { icon: HeartHandshake, title: "Eventos Comunitarios", desc: "Noches de networking, talleres y encuentros que conectan las mentes más brillantes de Málaga." },
                ].map((item) => (
                  <div key={item.title} className="border border-border rounded-xl p-6 hover:border-primary/40 transition-colors bg-card">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="border border-primary/20 rounded-xl p-8 text-center bg-card">
                <PartyPopper className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">Haz tu evento inolvidable</p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">Selecciona una de nuestras salas privadas y deja que tus invitados se pierdan en el corazón de Málaga después. Les encantará.</p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <Link to="/es/organiza-tu-evento">Planifica Tu Evento</Link>
                </Button>
              </div>
            </div>
          )}

          {hotTab === "individual" && (
            <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">Sé Parte de Algo Más Grande</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Sparkles, title: "Trabaja en una Obra Maestra", desc: "Tu oficina diaria es un palacio del siglo XVIII. Arcos de piedra, patios con azulejos y luz natural que alimenta la creatividad." },
                  { icon: Users, title: "Comunidad Dinámica", desc: "Rodéate de fundadores, freelancers y creativos que se mueven rápido y piensan en grande. Tu próxima colaboración empieza en la cafetería." },
                  { icon: Star, title: "Arte, Historia y Empuje", desc: "A pasos del Museo Picasso, inmerso en el latido cultural de Málaga. La inspiración no es algo que busques — aquí te encuentra." },
                ].map((item) => (
                  <div key={item.title} className="border border-border rounded-xl p-6 hover:border-primary/40 transition-colors bg-card">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="border border-primary/20 rounded-xl p-8 text-center bg-card">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">Tu palacio te espera</p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">Únete a una comunidad donde la ambición se encuentra con la belleza. Planes flexibles, sin compromisos a largo plazo — solo aparece y crea.</p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Comienza Tu Viaje</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Experimenta el Palacio</h2>
          <p className="font-body text-primary-foreground/70 mb-8">Reserva una visita y descubre tu nuevo espacio de trabajo en el corazón de Málaga.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
            <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Reservar Visita</a>
          </Button>
        </div>
      </section>

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
