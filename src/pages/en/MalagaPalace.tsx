// Málaga Palace page
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, BookOpen, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import serviceMeeting from "@/assets/service-meeting.webp";
import servicePrivate from "@/assets/service-private.webp";
import serviceCoworking from "@/assets/service-coworking.webp";
import serviceCommunity from "@/assets/service-community.webp";
import palaceOutsideFront from "@/assets/palace-outside-front.webp";
import palaceOutside from "@/assets/palace-outside.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import palaceSkylight from "@/assets/palace-skylight.webp";
import palaceCoffeeBar from "@/assets/palace-coffee-bar.webp";
import palaceCatering from "@/assets/palace-catering.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";

const galleryTop = [
  { src: palaceCourtyard, alt: "Málaga Palace courtyard with ornate tiles and balcony" },
  { src: palaceOutside, alt: "Málaga Palace courtyard and exterior" },
  { src: palaceEntrance, alt: "Málaga Palace ornate entrance hall" },
  { src: palaceSecondFloor, alt: "Málaga Palace second floor workspace" },
];
const galleryBottom = [
  { src: palaceSkylight, alt: "Málaga Palace skylight and atrium view" },
  { src: palaceCoffeeBar, alt: "Málaga Palace coffee bar" },
  { src: palaceCatering, alt: "Málaga Palace catering and events" },
  { src: palaceCoworking, alt: "Málaga Palace coworking area" },
];
const highlights = [
  "Stone-walled meeting rooms",
  "Library corner",
  "Courtyard garden",
  "Steps from Picasso Museum",
  "18th-century restored building",
  "Artisan coffee bar",
];

const services = [
  { img: serviceCoworking, label: "Coworking Spaces", icon: Users, href: "/en/coworking-space" },
  { img: serviceMeeting, label: "Meeting Rooms", icon: Building2, href: "/en/meeting-rooms" },
  { img: servicePrivate, label: "Private Offices", icon: BookOpen, href: "/en/private-offices" },
  { img: serviceCommunity, label: "Community Events", icon: Calendar, href: "/en/events" },
];

export default function MalagaPalace() {
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
        title="Málaga Palace"
        description="Coworking in a restored 18th-century palace in Málaga's historic center. Stone walls, courtyard garden, and steps from Picasso Museum."
        path="/en/malaga-palace"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <img src={palaceEntrance} alt="Málaga Palace historic entrance with ornate tiles and marble columns" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold">
            Malaga palace
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl font-bold text-primary-foreground">
            Historic Center
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">
            Where centuries of history meet modern ambition. Deep work, strategic thinking, and conversations that matter.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "linear-gradient(170deg, hsl(35 30% 92%), hsl(30 25% 90%), hsl(40 20% 93%))",
        }}
      >
        <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            <div>
               <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                About this location
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                A palace reborn for the modern mind
              </h2>
              <p className="font-body text-neutral-dark/80 leading-relaxed mb-6">
                Nestled in a restored 18th-century building near the Picasso Museum, this space wraps you in centuries of history.
                <br />
                Perfect for deep work, strategic thinking, and conversations that matter.
              </p>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-neutral-dark/70">
                  Calle Álamos 7 29012, Málaga
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-neutral-dark/70">
                  Mon–Fri 8:00–22:00 · Sat 9:00–18:00
                </span>
              </div>
              <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 w-fit">
                <Link to="/en/find-us#malaga-palace">Find Us</Link>
              </Button>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={palaceSecondFloor}
                alt="Málaga Palace second floor with Innovation Campus branding"
                className="w-full h-[60vh] md:h-[24rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Gallery + Video */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={galleryRef} className={`scroll-animate ${galleryVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">
            Explore
          </p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-16">
            Inside the Palace
          </h2>

          {/* Photo Grid Top */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Video */}
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

          {/* Photo Grid Bottom */}
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
      <section className="py-16 bg-neutral-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Experience the Palace
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Book a visit and discover your new workspace in the heart of Málaga.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
            <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Book a Visit</a>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            Also Available at this location
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Services
          </h2>
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

      <Footer />
    </main>
  );
}
