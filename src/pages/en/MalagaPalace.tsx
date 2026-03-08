// Málaga Palace page
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Star, Users, Building2, BookOpen, Calendar, Briefcase, User, Sparkles, Palette, HeartHandshake, PartyPopper } from "lucide-react";
import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palaceEntrance from "@/assets/palace-entrance.jpg";
import palaceSecondFloor from "@/assets/palace-second-floor.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import palaceOutsideFront from "@/assets/palace-outside-front.jpg";
import palaceOutside from "@/assets/palace-outside.jpg";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";
import historicExterior from "@/assets/historic-exterior.jpg";
import historicInterior from "@/assets/historic-interior.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import servicePerks from "@/assets/service-perks.jpg";

const galleryTop = [
  { src: palaceCourtyard, alt: "Málaga Palace courtyard with ornate tiles and balcony" },
  { src: palaceOutside, alt: "Málaga Palace courtyard and exterior" },
  { src: palaceEntrance, alt: "Málaga Palace ornate entrance hall" },
  { src: palaceSecondFloor, alt: "Málaga Palace second floor workspace" },
];
const galleryBottom = [
  { src: palaceOutsideFront, alt: "Málaga Palace exterior front view" },
  { src: historicExterior, alt: "Historic building exterior" },
  { src: historicInterior, alt: "Historic interior details" },
  { src: aboutCampus, alt: "Innovation Campus workspace" },
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
  { img: serviceMeeting, label: "Meeting Rooms", icon: Building2, href: "/en/conference-rooms" },
  { img: servicePrivate, label: "Private Offices", icon: BookOpen, href: "/en/private-offices" },
  { img: serviceCommunity, label: "Community Events", icon: Calendar, href: "/en/events" },
];

export default function MalagaPalace() {
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

      {/* What's Hot */}
      <section className="py-24 md:py-36 bg-background">
        <div ref={hotRef} className={`scroll-animate ${hotVis ? "visible" : ""} max-w-6xl mx-auto px-6`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold text-center">
            Discover
          </p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold text-center mb-12 md:mb-20">
            What's Hot in Málaga Palace
          </h2>

          {/* Tab Buttons */}
          <div className="flex gap-3 mb-12 justify-center">
            <button
              onClick={() => setHotTab("business")}
              className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                hotTab === "business"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent"
              }`}
            >
              For Businesses
            </button>
            <button
              onClick={() => setHotTab("individual")}
              className={`max-w-[200px] py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                hotTab === "individual"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent"
              }`}
            >
              For Individuals
            </button>
          </div>

          {/* Business Content */}
          {hotTab === "business" && (
            <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
                Host Your Event Here
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Briefcase, title: "Business Events", desc: "Product launches, team offsites, and corporate gatherings in stone-walled rooms that impress." },
                  { icon: Palette, title: "Cultural Events", desc: "Art exhibitions, book readings, and creative showcases in a setting that breathes inspiration." },
                  { icon: HeartHandshake, title: "Community Events", desc: "Networking nights, workshops, and meetups that connect the brightest minds in Málaga." },
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
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Make this event unforgettable
                </p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">
                  Select one of our private rooms and let your guests get lost in the heart of Málaga afterwards. They will love it.
                </p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Plan Your Event</a>
                </Button>
              </div>
            </div>
          )}

          {/* Individual Content */}
          {hotTab === "individual" && (
            <div className="animate-fade-in">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
                Become Part of Something Bigger
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Sparkles, title: "Work in a Living Masterpiece", desc: "Your daily office is an 18th-century palace. Stone arches, tiled courtyards, and natural light that fuels creativity." },
                  { icon: Users, title: "Fast-Paced Community", desc: "Surround yourself with founders, freelancers, and creatives who move fast and think big. Your next collaboration starts at the coffee bar." },
                  { icon: Star, title: "Art, History & Hustle", desc: "Steps from the Picasso Museum, immersed in Málaga's cultural heartbeat. Inspiration isn't something you search for — it finds you here." },
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
                <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Your palace awaits
                </p>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">
                  Join a community where ambition meets beauty. Flexible plans, no long-term commitments — just show up and create.
                </p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-8 py-3">
                  <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">Start Your Journey</a>
                </Button>
              </div>
            </div>
          )}
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
