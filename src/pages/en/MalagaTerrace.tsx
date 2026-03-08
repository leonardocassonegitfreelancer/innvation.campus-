import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, Sun, Wifi, Play, Briefcase, Palette, HeartHandshake, PartyPopper, Sparkles, Waves, Compass } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState } from "react";
import terraceBar from "@/assets/terrace-bar.jpg";
import terraceEvents from "@/assets/terrace-events.jpg";
import terraceHero from "@/assets/terrace-hero.jpg";
import terraceEntrance from "@/assets/terrace-entrance.jpg";
import terraceCommunity from "@/assets/terrace-community.jpg";
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
{ img: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.jpg", label: "Coworking Spaces", icon: Users, href: "/en/coworking-space" },
{ img: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.jpg", label: "Meeting Rooms", icon: Building2, href: "/en/conference-rooms" },
{ img: serviceTerrace, label: "Private Terrace", icon: Sun, href: "/en/private-terrace" },
{ img: serviceCommunity, label: "Community Events", icon: Wifi, href: "/en/events" }];


const galleryTop = [
{ src: "/lovable-uploads/d002f55d-0b40-4966-a3c1-172cb490f76f.png", alt: "Málaga Terrace entrance and reception" },
{ src: "/lovable-uploads/237d9ba8-6193-4e35-a922-d914b6bd9079.jpg", alt: "Málaga Terrace bar area" },
{ src: "/lovable-uploads/d4ee74cf-f799-4dfb-9788-53fa9ece8dd7.jpg", alt: "Málaga Terrace interior workspace" },
{ src: terraceCommunity, alt: "Málaga Terrace community event" }];

const galleryBottom = [
{ src: terraceEvents, alt: "Málaga Terrace rooftop event" },
{ src: "/lovable-uploads/abec2e73-ccdf-40fa-b924-c31203f7fd86.jpg", alt: "Coworking space at Málaga Terrace" },
{ src: "/lovable-uploads/122af4dc-98a0-42f9-b087-a116c12ebf64.jpg", alt: "Meeting room at Málaga Terrace" },
{ src: serviceTerrace, alt: "Private terrace at Málaga Terrace" }];


export default function MalagaTerrace() {
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
        title="Málaga Terrace"
        description="Seaside coworking with panoramic rooftop terrace in Málaga. Ocean-view desks, creative open-plan spaces, and beachfront networking events."
        path="/en/malaga-terrace" />
      

      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-[-15%] w-[130%] h-[130%]">
          <img src={terraceHero} alt="Málaga Terrace rooftop event" className="w-full h-full object-cover" />
        </div>
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
                  Calle Puerto 14, 29016 Málaga
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-seaside-text/80">
                  Mon–Fri 09:30–18:30
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                alt="Innovation Campus Terrace bar"
                className="w-full h-80 md:h-[24rem] object-cover"
                loading="lazy"
                src="/lovable-uploads/d9d2b368-e5c7-40e9-af7b-7e21ef4e7e61.png" />
              
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-12">
            {highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-card text-sm font-body text-seaside-text">
                <Star className="w-3.5 h-3.5 text-primary" /> {h}
              </span>
            )
            )}



            )}
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
            Inside the Terrace
          </h2>

          {/* Photo Grid Top */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
            {galleryTop.map((img) =>
            <div key={img.alt} className="rounded-xl overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
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
                <img src={img.src} alt={img.alt} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Hot */}
      <section className="py-24 md:py-36" style={{ background: "linear-gradient(160deg, hsl(var(--seaside-bg)), hsl(var(--seaside-bg-cool)))" }}>
        <div ref={hotRef} className={`scroll-animate ${hotVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">
            Discover
          </p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-20">
            What's Hot in Málaga Terrace
          </h2>

          {/* Tab Buttons */}
          <div className="flex gap-3 mb-12 justify-center">
            <button
              onClick={() => setHotTab("business")}
              className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
              hotTab === "business" ?
              "bg-primary text-primary-foreground" :
              "border border-primary text-primary bg-transparent"}`
              }>
              
              For Businesses
            </button>
            <button
              onClick={() => setHotTab("individual")}
              className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
              hotTab === "individual" ?
              "bg-primary text-primary-foreground" :
              "border border-primary text-primary bg-transparent"}`
              }>
              
              For Individuals
            </button>
          </div>

          {/* Business Content */}
          {hotTab === "business" &&
          <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
                Host Your Event Here
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
              { icon: Briefcase, title: "Corporate Retreats", desc: "Team offsites with ocean views, product launches on the rooftop, and strategy sessions where the Mediterranean does the brainstorming." },
              { icon: Palette, title: "Creative Showcases", desc: "Sunset exhibitions, open-air presentations, and brand activations that leave a lasting impression against the coastline." },
              { icon: HeartHandshake, title: "Networking Events", desc: "Rooftop mixers, after-work drinks, and community gatherings where deals happen between the waves and the sunset." }].
              map((item) =>
              <div key={item.title} className="border border-border rounded-xl p-6 hover:border-primary/40 transition-colors bg-card">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
              )}
              </div>
              <div className="border border-primary/20 rounded-xl p-8 text-center bg-card">
                <PartyPopper className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Your event deserves a rooftop
                </p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">
                  Book the terrace for your next corporate event. Sunset views, sea breeze, and a venue your guests won't forget.
                </p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <Link to="/en/host-your-event">Plan Your Event</Link>
                </Button>
              </div>
            </div>
          }

          {/* Individual Content */}
          {hotTab === "individual" &&
          <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
                Become a Coworker
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
              { icon: Waves, title: "Work with the Sea", desc: "Ocean-view desks, natural light flooding through floor-to-ceiling glass, and a breeze that clears your mind between deep work sessions." },
              { icon: Compass, title: "Explore & Connect", desc: "A community of digital nomads, remote workers, and local creators. Your next co-founder might be sharing your table at the rooftop bar." },
              { icon: Sparkles, title: "Sunset State of Mind", desc: "End every workday watching the sun dip into the Mediterranean. It's not just a perk — it's a lifestyle that fuels your best work." }].
              map((item) =>
              <div key={item.title} className="border border-border rounded-xl p-6 hover:border-primary/40 transition-colors bg-card">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
              )}
              </div>
              <div className="border border-primary/20 rounded-xl p-8 text-center bg-card">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Your seaside desk awaits
                </p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">
                  Join a vibrant community of creators and doers. Flexible plans, ocean views, and the freedom to work your way.
                </p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Start Your Journey</a>
                </Button>
              </div>
            </div>
          }
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

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div ref={servicesRef} className={`scroll-animate ${servicesVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            Also Available at this location
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) =>
            <Link key={s.label} to={s.href} className="rounded-xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground">{s.label}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}