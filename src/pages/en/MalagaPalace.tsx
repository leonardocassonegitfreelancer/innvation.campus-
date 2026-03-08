// Málaga Palace page
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, BookOpen, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palaceEntrance from "@/assets/palace-entrance.jpg";
import palaceSecondFloor from "@/assets/palace-second-floor.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceCommunity from "@/assets/service-community.jpg";

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
  { img: serviceMeeting, label: "Meeting Rooms", icon: Building2, href: "/en/conference-rooms" },
  { img: servicePrivate, label: "Private Offices", icon: BookOpen, href: "/en/private-offices" },
  { img: serviceCommunity, label: "Community Events", icon: Calendar, href: "/en/events" },
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
              <Link to="/en/find-us" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 mt-4 transition-colors font-semibold">
                <MapPin className="w-4 h-4" />
                Find us there →
              </Link>
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

      <Footer />
    </main>
  );
}
