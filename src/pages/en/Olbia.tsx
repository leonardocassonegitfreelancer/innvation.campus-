import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Send, Instagram, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import seasideImg from "@/assets/seaside-interior.jpg";
import aboutImage from "@/assets/about-campus.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceRegistration from "@/assets/service-registration.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import servicePerks from "@/assets/service-perks.jpg";

const navLinks = [
  { label: "The Campus", href: "/#about" },
  { label: "Services", href: "#services" },
  { label: "Málaga", href: "/#locations" },
  { label: "Áncora", href: "/en/ancora" },
  { label: "Olbia", href: "/en/olbia" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const businessServices = [
  { img: serviceMeeting, label: "Private Conference Rooms", subtitle: "With catering option", href: "/en/conference-rooms" },
  { img: serviceTerrace, label: "Private Terrace", subtitle: "With catering option", href: "/en/private-terrace" },
  { img: servicePrivate, label: "Private Offices", subtitle: "Different sizes available", href: "/en/private-offices" },
  { img: serviceRegistration, label: "Business Registration", subtitle: "Relocate to Spain or Italy", href: "/en/business-registration" },
];

const individualServices = [
  { img: serviceCoworking, label: "Coworking Space", subtitle: "Plans & prices", href: "/en/coworking-space" },
  { img: serviceCommunity, label: "Community Events", subtitle: "New and past", href: "/en/events" },
  { img: serviceAcademy, label: "Academy", subtitle: "Get better day by day", href: "/en/academy" },
  { img: servicePerks, label: "Member Perks", subtitle: "Discounts & offers for our members", href: "/en/benefits" },
];

const faqs = [
  {
    q: "Where is Innovation Campus Olbia located?",
    a: "Our Olbia location is in Sardinia's vibrant Costa Smeralda area, offering a Mediterranean workspace experience unlike any other.",
  },
  {
    q: "Can I use my membership across all locations?",
    a: "Yes! All memberships give you access to Olbia, Málaga, and Áncora spaces. Work from whichever location suits your needs.",
  },
  {
    q: "Do you offer day passes?",
    a: "Absolutely. We offer single-day passes and a free trial day so you can experience the space before committing.",
  },
  {
    q: "What makes Olbia special?",
    a: "Olbia offers the magic of Sardinia — crystal-clear waters, Mediterranean cuisine, and a growing international community of digital nomads and entrepreneurs.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, convenient parking is available near our Olbia location with easy access from the airport and city center.",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-neutral-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-1 text-white">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight">Innovation</span>
            <span className="text-primary font-display text-2xl md:text-3xl font-bold">/</span>
            <span className="font-body text-xl md:text-2xl font-light tracking-wide">Campus</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm animate-pulse-red">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-neutral-dark/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white text-lg font-body transition-colors">
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function ServiceCard({ img, label, subtitle, href }: { img: string; label: string; subtitle: string; href: string }) {
  return (
    <Link to={href} className="group relative aspect-[4/5] rounded-xl overflow-hidden block">
      <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-body font-bold text-sm md:text-base uppercase tracking-wider text-primary-foreground">{label}</h3>
        <p className="font-body text-xs md:text-sm text-primary-foreground/70 mt-1">{subtitle}</p>
      </div>
    </Link>
  );
}

export default function Olbia() {
  const [loaded, setLoaded] = useState(false);
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation();
  const { ref: aboutRef2, isVisible: aboutVis2 } = useScrollAnimation();
  const { ref: servRef, isVisible: servVis } = useScrollAnimation(0.1);
  const { ref: locRef, isVisible: locVis } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVis } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVis } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVis } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<"business" | "individual">("business");

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mobileCards = activeTab === "business" ? businessServices : individualServices;

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={seasideImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className={`font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mb-6 md:mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Sardinia · Italy
          </p>
          <h1 className={`mb-4 md:mb-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">Innovation</span>
            <span className="text-primary text-6xl md:text-8xl lg:text-9xl font-display font-bold">/</span>
            <span className="font-body text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-wide">Campus</span>
          </h1>
          <p className={`font-body text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-4 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Where Sardinia inspires your best work
          </p>
          <p className={`font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 mb-10 md:mb-14 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Olbia · Sardinia · Italy
          </p>
          <a href="#contact" className={`inline-block bg-primary text-primary-foreground font-body text-sm md:text-base uppercase tracking-[0.3em] px-10 py-4 rounded-md hover:bg-primary/90 transition-all duration-500 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Find Your Space
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div ref={aboutRef2} className={`scroll-animate ${aboutVis2 ? "visible" : ""} w-full md:w-1/2`}>
              <img src={aboutImage} alt="Innovation Campus Olbia workspace" className="w-full h-auto rounded-lg" />
            </div>
            <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""} w-full md:w-1/2`} style={{ transitionDelay: "0.15s" }}>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Olbia</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6 uppercase text-secondary bg-inherit font-medium" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SARDINIA'S GATEWAY TO INNOVATION
              </h2>
              <div className="w-12 h-[3px] bg-primary mb-6" />
              <div className="space-y-4 font-body text-base leading-relaxed text-historic-muted">
                <p className="text-secondary">
                  Innovation Campus Olbia brings world-class coworking to the heart of Sardinia. Where the emerald waters of Costa Smeralda meet a vibrant community of international professionals.
                </p>
                <p className="text-secondary">
                  Our Olbia space is designed for those who believe great work happens in inspiring environments. Mediterranean light, island energy, and a community that spans continents.
                </p>
                <p className="font-display text-xl text-primary font-semibold pt-2">
                  Island life, global ambition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={servRef} className={`scroll-animate ${servVis ? "visible" : ""} text-center mb-12 md:mb-20`}>
            <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold">What We Offer</p>
            <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold">Services</h2>
          </div>
          <div className="md:hidden">
            <div className="flex gap-3 mb-8 justify-center">
              <button onClick={() => setActiveTab("business")} className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === "business" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>For Businesses</button>
              <button onClick={() => setActiveTab("individual")} className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === "individual" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>For Individuals</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mobileCards.map((s) => <ServiceCard key={s.label} {...s} />)}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="mb-20">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">For Businesses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {businessServices.map((s) => <ServiceCard key={s.label} {...s} />)}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">For Individuals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {individualServices.map((s) => <ServiceCard key={s.label} {...s} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-5xl mx-auto px-6 text-center" ref={quoteRef}>
          <div className={`scroll-animate ${quoteVis ? "visible" : ""}`}>
            <div className="text-primary text-6xl md:text-8xl font-display leading-none mb-6">"</div>
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-white/90 leading-snug italic">
              The island teaches you
              <br />
              to think <span className="text-primary not-italic font-bold">bigger</span>.
              <br />
              This is Olbia.
            </blockquote>
            <div className="mt-10 w-16 h-[2px] bg-primary mx-auto" />
            <p className="font-body text-white/40 text-sm mt-6 uppercase tracking-widest">Innovation/Campus</p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={locRef} className={`scroll-animate ${locVis ? "visible" : ""} text-center mb-16`}>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Location</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Olbia, <span className="text-primary">Sardinia</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--seaside-bg)), hsl(var(--seaside-bg-cool)))" }}>
              <div className="relative h-80 md:h-[28rem] overflow-hidden">
                <img src={aboutImage} alt="Innovation Campus Olbia" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1 font-semibold">Olbia</p>
                <h3 className="font-body font-light text-seaside-text text-3xl md:text-4xl font-bold">Costa Smeralda</h3>
                <p className="font-body text-sm leading-relaxed mb-6 text-seaside-muted mt-4">
                  A modern workspace in the heart of Sardinia's most international area. Crystal waters, Mediterranean cuisine, and a growing community of global professionals make Olbia the perfect base for inspired work.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-seaside-text/80">Olbia, Sardinia, Italy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-seaside-text/80">Mon–Fri 8:00–20:00 · Sat 9:00–14:00</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Coworking desks", "Meeting rooms", "Rooftop terrace", "Mediterranean views"].map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 font-body text-xs px-3 py-1.5 rounded-full bg-seaside-text/10 text-seaside-text/80">
                      <Star className="w-3 h-3 text-primary" />{h}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="inline-block mt-8 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-primary/90 transition-all duration-300">
                  Book a visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={faqRef} className={`scroll-animate ${faqVis ? "visible" : ""} text-center mb-12`}>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Questions & Answers</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-36 bg-gradient-to-br from-seaside-bg via-neutral-dark to-historic-bg">
        <div className="max-w-2xl mx-auto px-6">
          <div ref={contactRef} className={`scroll-animate ${contactVis ? "visible" : ""}`}>
            <div className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Get in Touch</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Start your journey in Olbia</h2>
              <p className="font-body mt-4 text-white/60">Book a tour, ask a question, or just say hello.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you soon."); }} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-sm text-white/60">Name</Label>
                  <Input required placeholder="Your name" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary" />
                </div>
                <div>
                  <Label className="font-body text-sm text-white/60">Email</Label>
                  <Input type="email" required placeholder="you@example.com" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary" />
                </div>
              </div>
              <div>
                <Label className="font-body text-sm text-white/60">Message</Label>
                <Textarea placeholder="Tell us what you're looking for..." rows={4} className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2" size="lg">
                <Send className="w-4 h-4" />Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-dark text-white/60 font-body">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="font-display text-xl font-bold text-white">Innovation</span>
                <span className="text-primary text-2xl font-display font-bold">/</span>
                <span className="font-body text-xl font-light text-white">Campus</span>
              </div>
              <p className="text-sm leading-relaxed">Coworking spaces across Spain and Italy. Three cities. One community of creators, builders, and dreamers.</p>
              <div className="flex gap-4 mt-6">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-white text-lg font-light mb-4">Olbia</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Olbia, Sardinia, Italy</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>olbia@innovationcampus.it</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} Innovation/Campus. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}