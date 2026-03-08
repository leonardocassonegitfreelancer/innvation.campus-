import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, Sun, Wifi } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import terraceBar from "@/assets/terrace-bar.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";
import seasideInt from "@/assets/seaside-interior.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import serviceCommunity from "@/assets/service-community.jpg";

const highlights = [
"Panoramic rooftop terrace",
"Ocean-view desks",
"Open-plan creative zone",
"Beachfront location",
"Sunset networking events",
"High-speed fiber WiFi"];


const services = [
{ img: serviceCoworking, label: "Coworking Spaces", icon: Users },
{ img: serviceMeeting, label: "Meeting Rooms", icon: Building2 },
{ img: serviceTerrace, label: "Private Terrace", icon: Sun },
{ img: serviceCommunity, label: "Community Events", icon: Wifi }];


export default function MalagaTerrace() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVis } = useScrollAnimation();

  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Málaga Terrace"
        description="Seaside coworking with panoramic rooftop terrace in Málaga. Ocean-view desks, creative open-plan spaces, and beachfront networking events."
        path="/en/malaga-terrace" />
      
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <img src={terraceEvents} alt="Málaga Terrace rooftop event" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/70 to-neutral-dark/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-body mb-4 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Malaga TERRACE
          </p>
          <h1 className="font-body font-light text-4xl md:text-6xl text-primary-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Seaside
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mt-3 max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Glass, light, and sea. Creative energy, collaboration, and the freedom that comes from working with the horizon in view.
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
                About this location
              </p>
              <h2 className="font-body font-light text-3xl md:text-4xl text-seaside-text mb-6">
                Where the sea meets your best ideas
              </h2>
              <p className="font-body text-seaside-muted leading-relaxed mb-6">
                A modern space designed for creative energy and collaboration. Floor-to-ceiling windows
                frame the Mediterranean, while the rooftop terrace turns every sunset into a networking opportunity.
                Whether you're launching a startup or landing a client, do it with salt air and possibility.
              </p>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-seaside-text/80">
                  Paseo Marítimo 15, La Malagueta, Málaga
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-seaside-text/80">
                  Mon–Fri 7:00–22:00 · Sat–Sun 9:00–20:00
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img

                alt="Innovation Campus Terrace bar"
                className="w-full h-80 md:h-[24rem] object-cover"
                loading="lazy" src="/lovable-uploads/d9d2b368-e5c7-40e9-af7b-7e21ef4e7e61.png" />
              
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-12">
            {highlights.map((h) =>
            <span
              key={h}
              className="inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full bg-seaside-text/10 text-seaside-text/80">
              
                <Star className="w-3 h-3 text-primary" />
                {h}
              </span>
            )}
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
            {services.map((s) =>
            <div key={s.label} className="rounded-xl overflow-hidden bg-card border border-border group">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Experience the Terrace
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Book a visit and discover your seaside workspace in Málaga.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
            <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Book a Visit</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>);

}