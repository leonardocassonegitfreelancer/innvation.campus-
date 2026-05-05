import Navbar from "@/components/landing/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Building2, GraduationCap, Briefcase, Monitor, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import anconaHero from "@/assets/ancona-hero.webp";
import anconaCoworking from "@/assets/ancona-coworking.webp";
import anconaMeeting from "@/assets/ancona-meeting.webp";
import serviceCoworking from "@/assets/service-coworking.webp";
import servicePrivate from "@/assets/service-private.webp";
import serviceAcademy from "@/assets/service-academy.webp";
import serviceRegistration from "@/assets/service-registration.webp";
import serviceMeeting from "@/assets/service-meeting.webp";
import serviceVirtual from "@/assets/service-virtual.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

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

const translations = {
  en: {
    hero: "Ancona",
    about: {
      eyebrow: "Innovation Campus Ancona",
      title: "Innovation Campus Ancona",
      list: [
        "Coworking in Ancona",
        "Beautiful to live and work in Ancona",
        "A great and big work company",
      ],
      book: "Book your visit",
    },
    strip: {
      eyebrow: "Innovation Campus Ancona",
      title: "Our Coworking Space in Ancona",
      subtitle: "IN/C Ancona coworking",
      description: "A modern and professionally designed coworking space in the historical center of Ancona, at walking distance from all the amenities and main landmarks.",
      stats: [
        { value: "8", label: "Desks" },
        { value: "0", label: "Private offices" },
        { value: "0", label: "Meeting rooms" },
        { value: "1", label: "Members" },
      ]
    },
    services: {
      title: "Services",
      items: [
        "Coworking Spaces",
        "Meeting Rooms & Event Spaces",
        "Private Offices",
        "Academy",
        "Virtual Office",
        "Business Registration",
      ]
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Visit Innovation Campus Ancona",
      subtitle: "Come see our coworking space in the heart of Ancona.",
      address: "Centro Storico, Ancona",
      hours: "Mon–Fri 9:00–19:00",
      button: "Book a Visit",
    }
  },
  es: {
    hero: "Ancona",
    about: {
      eyebrow: "Innovation Campus Ancona",
      title: "Innovation Campus Ancona",
      list: [
        "Coworking en Ancona",
        "Hermoso para vivir y trabajar en Ancona",
        "Una gran empresa de trabajo",
      ],
      book: "Reserva tu visita",
    },
    strip: {
      eyebrow: "Innovation Campus Ancona",
      title: "Nuestro espacio de Coworking en Ancona",
      subtitle: "IN/C Ancona coworking",
      description: "Un espacio de coworking moderno y diseñado profesionalmente en el centro histórico de Ancona, a poca distancia de todos los servicios y monumentos principales.",
      stats: [
        { value: "8", label: "Puestos" },
        { value: "0", label: "Oficinas privadas" },
        { value: "0", label: "Salas de reuniones" },
        { value: "1", label: "Miembros" },
      ]
    },
    services: {
      title: "Servicios",
      items: [
        "Espacios de Coworking",
        "Salas de Reuniones y Eventos",
        "Oficinas Privadas",
        "Academia",
        "Oficina Virtual",
        "Registro de Empresas",
      ]
    },
    contact: {
      eyebrow: "Ponte en Contacto",
      title: "Visita Innovation Campus Ancona",
      subtitle: "Ven a conocer nuestro espacio de coworking en el corazón de Ancona.",
      address: "Centro Histórico, Ancona",
      hours: "Lun–Vie 9:00–19:00",
      button: "Reservar Visita",
    }
  },
  it: {
    hero: "Ancona",
    about: {
      eyebrow: "Innovation Campus Ancona",
      title: "Innovation Campus Ancona",
      list: [
        "Coworking ad Ancona",
        "Bello vivere e lavorare ad Ancona",
        "Una grande azienda di lavoro",
      ],
      book: "Prenota la tua visita",
    },
    strip: {
      eyebrow: "Innovation Campus Ancona",
      title: "Il nostro spazio di Coworking ad Ancona",
      subtitle: "IN/C Ancona coworking",
      description: "Uno spazio di coworking moderno e dal design professionale nel centro storico di Ancona, a pochi passi da tutti i servizi e dai principali monumenti.",
      stats: [
        { value: "8", label: "Scrivanie" },
        { value: "0", label: "Uffici privati" },
        { value: "0", label: "Sale riunioni" },
        { value: "1", label: "Membri" },
      ]
    },
    services: {
      title: "Servizi",
      items: [
        "Spazi di Coworking",
        "Sale Riunioni e Spazi Eventi",
        "Uffici Privati",
        "Accademia",
        "Ufficio Virtuale",
        "Registrazione Aziendale",
      ]
    },
    contact: {
      eyebrow: "Mettiti in Contatto",
      title: "Visita Innovation Campus Ancona",
      subtitle: "Vieni a vedere il nostro spazio di coworking nel cuore di Ancona.",
      address: "Centro Storico, Ancona",
      hours: "Lun–Ven 9:00–19:00",
      button: "Prenota una Visita",
    }
  }
};

export default function Ancona({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref: aboutRef, isVisible: aboutVis } = useScrollAnimation(0.1);
  const { ref: servRef, isVisible: servVis } = useScrollAnimation(0.1);
  const { ref: contactRef, isVisible: contactVis } = useScrollAnimation(0.1);
  const t = translations[lang];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={_s(anconaHero)}
          alt="Ancona port city panoramic view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            {t.hero}
          </h1>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={aboutRef} className={`scroll-animate ${aboutVis ? "visible" : ""}`}>
            <p className="font-body text-sm text-muted-foreground text-center mb-2">
              {t.about.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t.about.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-3 mb-8">
                  {t.about.list.map((item, idx) => (
                    <li key={idx} className="font-body text-foreground italic">
                      • {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest">
                  <a href="#contact-ancona">{t.about.book}</a>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={_s(anconaCoworking)} alt="Innovation Campus Ancona coworking space" className="w-full h-72 object-cover" />
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
                {t.strip.eyebrow}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                {t.strip.title}
              </h3>
              <div className="flex gap-6 mb-8">
                {t.strip.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                    <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-lg font-semibold text-primary-foreground mb-3">
                {t.strip.subtitle}
              </h4>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {t.strip.description}
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
              {t.services.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {services.map((s, idx) => (
                <div key={idx} className="group relative aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src={_s(s.img)}
                    alt={t.services.items[idx]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-body font-bold text-xs md:text-sm uppercase tracking-wider text-primary-foreground">
                      {t.services.items[idx]}
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
              {t.contact.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="font-body text-primary-foreground/60 mb-8">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">{t.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">{t.contact.hours}</span>
              </div>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest px-8" size="lg">
              <a href="https://members.innovationcampus.biz/tours/locations" target="_blank" rel="noopener noreferrer">{t.contact.button}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}