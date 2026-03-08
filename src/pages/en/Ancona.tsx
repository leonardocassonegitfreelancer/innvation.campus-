import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Building2, GraduationCap, Briefcase, Monitor, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import anconaHero from "@/assets/ancona-hero.jpg";
import anconaCoworking from "@/assets/ancona-coworking.jpg";
import anconaMeeting from "@/assets/ancona-meeting.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import serviceRegistration from "@/assets/service-registration.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import serviceVirtual from "@/assets/service-virtual.jpg";

const services = [
  { img: serviceCoworking, label: "Coworking Spaces", icon: Users },
  { img: serviceMeeting, label: "Meeting Rooms & Event Spaces", icon: Building2 },
  { img: servicePrivate, label: "Private Offices", icon: Briefcase },
  { img: serviceAcademy, label: "Academy", icon: GraduationCap },
  { img: serviceVirtual, label: "Virtual Office", icon: Monitor },
  { img: serviceRegistration, label: "Business Registration", icon: FileText },
];

const stats = [
  { value: "8", label: "Desks" },
  { value: "0", label: "Private offices" },
  { value: "0", label: "Meeting rooms" },
  { value: "1", label: "Members" },
];

export default function Ancona() {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation(0.1);
  const { ref: servRef, isVisible: servVis } = useScrollAnimation(0.1);
  const { ref: contactRef, isVisible: contactVis } = useScrollAnimation(0.1);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={anconaHero}
          alt="Ancona port city panoramic view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            Ancona
          </h1>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""}`}>
            <p className="font-body text-sm text-muted-foreground line-through text-center mb-2">
              Innovation Campus Ancona
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Innovation Campus Ancona
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-3 mb-8">
                  <li className="font-body text-foreground">
                    <a href="#" className="underline hover:text-primary transition-colors">• Coworking in Ancona</a>
                  </li>
                  <li className="font-body text-foreground">
                    <a href="#" className="underline hover:text-primary transition-colors">• Beautiful to live and work in Ancona</a>
                  </li>
                  <li className="font-body text-foreground">
                    <a href="#" className="underline hover:text-primary transition-colors">• A great and big work company</a>
                  </li>
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest">
                  <a href="#contact-ancona">Book your visit</a>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={anconaCoworking} alt="Innovation Campus Ancona coworking space" className="w-full h-72 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coworking Info Strip */}
      <section className="bg-neutral-dark py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2">
                Innovation Campus Ancona
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Coworking Space in Ancona
              </h3>
              <div className="flex gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                    <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-lg font-semibold text-primary-foreground mb-3">
                IN/C Ancona coworking
              </h4>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                A modern and professionally designed coworking space in the historical center of Ancona, at walking distance from all the amenities and main landmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={servRef} className={`scroll-animate ${servVis ? "visible" : ""}`}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.label} className="group relative aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-body font-bold text-xs md:text-sm uppercase tracking-wider text-primary-foreground">
                      {s.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-ancona" className="py-20 md:py-28 bg-neutral-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={contactRef} className={`scroll-animate ${contactVis ? "visible" : ""} text-center`}>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Visit Innovation Campus Ancona
            </h2>
            <p className="font-body text-primary-foreground/60 mb-8">
              Come see our coworking space in the heart of Ancona.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">Centro Storico, Ancona</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">Mon–Fri 9:00–19:00</span>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest px-8" size="lg">
              Book a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}