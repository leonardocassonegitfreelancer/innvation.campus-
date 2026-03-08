import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, BookOpen, Coffee } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palaceEntrance from "@/assets/palace-entrance.jpg";
import historicInt from "@/assets/historic-interior.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceRegistration from "@/assets/service-registration.jpg";

const highlights = [
  "Stone-walled meeting rooms",
  "Library corner",
  "Courtyard garden",
  "Steps from Picasso Museum",
  "18th-century restored building",
  "Artisan coffee bar",
];

const services = [
  { img: serviceCoworking, label: "Coworking Spaces", icon: Users },
  { img: serviceMeeting, label: "Meeting Rooms", icon: Building2 },
  { img: servicePrivate, label: "Private Offices", icon: BookOpen },
  { img: serviceRegistration, label: "Business Registration", icon: Coffee },
];

export default function MalagaPalace() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();

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
          background: "linear-gradient(170deg, hsl(30 25% 85%), hsl(25 30% 82%), hsl(35 20% 88%))",
        }}
      >
        <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
                About this location
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                A palace reborn for the modern mind
              </h2>
              <p className="font-body text-neutral-dark/80 leading-relaxed mb-6">
                Nestled in a restored 18th-century building, this space wraps you in centuries of history.
                Stone arches frame your morning coffee; courtyard light filters through your afternoon focus session.
                Every detail — from the hand-laid tiles to the iron balustrades — reminds you that great work
                deserves a great setting.
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
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={historicInt}
                alt="Málaga Palace interior with stone walls"
                className="w-full h-80 md:h-[24rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-12">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full bg-neutral-dark/10 text-neutral-dark/80"
              >
                <Star className="w-3 h-3 text-primary" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            Available at this location
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.label} className="rounded-xl overflow-hidden bg-card border border-border group">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
                </div>
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
            <a href="/#contact">Book a Visit</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
