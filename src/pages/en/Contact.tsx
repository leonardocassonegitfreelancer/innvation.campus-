import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import conferencePicasso from "@/assets/conference-picasso.webp";
import terraceHero from "@/assets/terrace-hero.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCoworking from "@/assets/palace-coworking.webp";
import palaceBrandingWall from "@/assets/palace-branding-wall.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terraceEvents from "@/assets/terrace-events.webp";
import anconaHero from "@/assets/ancona-hero.webp";
import serviceCommunity from "@/assets/service-community.webp";

const _s = (img: unknown): string =>
  typeof img === "string" ? img : (img as any)?.src ?? "";

const translations = {
  en: {
    tagline: "Get in Touch",
    title: "Contact Us",
    subtitle: "Find the right channel for your enquiry.",
    services: [
      { title: "Meeting Rooms", desc: "Conferences, workshops & events", href: "/en/meeting-rooms", img: conferencePicasso },
      { title: "Private Terrace", desc: "Outdoor events & receptions", href: "/en/private-terrace", img: terraceHero },
      { title: "Private Office", desc: "Dedicated office spaces", href: "/en/private-offices", img: palaceSecondFloor },
      { title: "Coworking", desc: "Flexible desks & memberships", href: "/en/coworking-space", img: palaceCoworking },
      { title: "Business Registration", desc: "Domicile your company", href: "/en/business-registration", img: palaceBrandingWall },
      { title: "Discover Events", desc: "Community & networking events", href: "/en/events", img: serviceCommunity },
    ],
    inquiry: {
      tagline: "General Enquiries",
      title: "Do you have a question?",
      subtitle: "We're here for you. Drop us an email or give us a call — our team replies within 24 hours.",
      mainEmail: "info@innovationcampus.biz",
      mainPhone: "+34 671 44 12 88",
    },
    locations: {
      label: "Our Locations",
      items: [
        { name: "Málaga Palace", sub: "Historic Center", phone: "+34 671 44 12 88", email: "info@innovationcampus.biz", img: palaceCourtyard, map: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga" },
        { name: "Málaga Terrace", sub: "Sea Side", phone: "+34 676 94 39 78", email: "malaga.terrace@innovationcampus.biz", img: terraceEvents, map: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga" },
        { name: "Ancona", sub: "Italy", phone: "+39 338 335 5908", email: "michela@i-campus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Montebello+71+60122+Ancona" },
        { name: "Olbia", sub: "Sardinia", phone: "+39 338 335 5908", email: "olbia@innovationcampus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Georgia+11+07026+Olbia" },
      ],
    },
  },
  es: {
    tagline: "Contáctanos",
    title: "Contacto",
    subtitle: "Encuentra el canal adecuado para tu consulta.",
    services: [
      { title: "Salas de Reuniones", desc: "Conferencias, talleres y eventos", href: "/es/salas-de-reuniones", img: conferencePicasso },
      { title: "Terraza Privada", desc: "Eventos al aire libre y recepciones", href: "/es/terraza-privada", img: terraceHero },
      { title: "Oficina Privada", desc: "Espacios de oficina dedicados", href: "/es/oficinas-privadas", img: palaceSecondFloor },
      { title: "Coworking", desc: "Puestos y membresías flexibles", href: "/es/coworking", img: palaceCoworking },
      { title: "Registro de Empresa", desc: "Domicilia tu empresa", href: "/es/registro-de-empresas", img: palaceBrandingWall },
      { title: "Descubre Eventos", desc: "Eventos de comunidad y networking", href: "/es/eventos", img: serviceCommunity },
    ],
    inquiry: {
      tagline: "Consultas Generales",
      title: "¿Tienes alguna pregunta?",
      subtitle: "Estamos aquí para ti. Escríbenos o llámanos — nuestro equipo responde en 24 horas.",
      mainEmail: "info@innovationcampus.biz",
      mainPhone: "+34 671 44 12 88",
    },
    locations: {
      label: "Nuestras Sedes",
      items: [
        { name: "Málaga Palace", sub: "Centro Histórico", phone: "+34 671 44 12 88", email: "info@innovationcampus.biz", img: palaceCourtyard, map: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga" },
        { name: "Málaga Terrace", sub: "Frente al Mar", phone: "+34 676 94 39 78", email: "malaga.terrace@innovationcampus.biz", img: terraceEvents, map: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga" },
        { name: "Ancona", sub: "Italia", phone: "+39 338 335 5908", email: "michela@i-campus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Montebello+71+60122+Ancona" },
        { name: "Olbia", sub: "Cerdeña", phone: "+39 338 335 5908", email: "olbia@innovationcampus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Georgia+11+07026+Olbia" },
      ],
    },
  },
  it: {
    tagline: "Contattaci",
    title: "Contatti",
    subtitle: "Trova il canale giusto per la tua richiesta.",
    services: [
      { title: "Sale Riunioni", desc: "Conferenze, workshop ed eventi", href: "/it/sale-riunioni", img: conferencePicasso },
      { title: "Terrazza Privata", desc: "Eventi outdoor e ricevimenti", href: "/it/terrazza-privata", img: terraceHero },
      { title: "Ufficio Privato", desc: "Spazi ufficio dedicati", href: "/it/uffici-privati", img: palaceSecondFloor },
      { title: "Coworking", desc: "Postazioni e abbonamenti flessibili", href: "/it/coworking", img: palaceCoworking },
      { title: "Domiciliazione", desc: "Domicilia la tua azienda", href: "/it/registrazione-aziendale", img: palaceBrandingWall },
      { title: "Scopri gli Eventi", desc: "Eventi community e networking", href: "/it/eventi", img: serviceCommunity },
    ],
    inquiry: {
      tagline: "Informazioni Generali",
      title: "Hai una domanda?",
      subtitle: "Siamo qui per te. Scrivici o chiamaci — il nostro team risponde entro 24 ore.",
      mainEmail: "info@innovationcampus.biz",
      mainPhone: "+34 671 44 12 88",
    },
    locations: {
      label: "Le Nostre Sedi",
      items: [
        { name: "Málaga Palace", sub: "Centro Storico", phone: "+34 671 44 12 88", email: "info@innovationcampus.biz", img: palaceCourtyard, map: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga" },
        { name: "Málaga Terrace", sub: "Lungomare", phone: "+34 676 94 39 78", email: "malaga.terrace@innovationcampus.biz", img: terraceEvents, map: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga" },
        { name: "Ancona", sub: "Italia", phone: "+39 338 335 5908", email: "michela@i-campus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Montebello+71+60122+Ancona" },
        { name: "Olbia", sub: "Sardegna", phone: "+39 338 335 5908", email: "olbia@innovationcampus.biz", img: anconaHero, map: "https://maps.google.com/?q=Via+Georgia+11+07026+Olbia" },
      ],
    },
  },
};

export default function Contact({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <main className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-neutral-dark pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
            {t.tagline}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">
            {t.title}
          </h1>
          <p className="font-body text-lg text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Services image grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map((svc) => (
              <a
                key={svc.href}
                href={svc.href}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] block"
              >
                <img
                  src={_s(svc.img)}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <p className="font-body text-xs text-white/60 uppercase tracking-wider mb-1">{svc.desc}</p>
                    <h3 className="font-display font-bold text-xl text-white">{svc.title}</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* General inquiry — big contact */}
      <section className="py-24 bg-neutral-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 font-semibold">
            {t.inquiry.tagline}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            {t.inquiry.title}
          </h2>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto mb-14">
            {t.inquiry.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            <a
              href={`mailto:${t.inquiry.mainEmail}`}
              className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-widest text-white/40">Email</span>
              <span className="font-display font-bold text-xl md:text-2xl text-white">
                {t.inquiry.mainEmail}
              </span>
            </a>

            <div className="hidden sm:block w-px h-16 bg-white/10" />

            <a
              href={`tel:${t.inquiry.mainPhone.replace(/\s/g, "")}`}
              className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-xs uppercase tracking-widest text-white/40">Phone</span>
              <span className="font-display font-bold text-xl md:text-2xl text-white">
                {t.inquiry.mainPhone}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-10 font-semibold text-center">
            {t.locations.label}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.locations.items.map((loc) => (
              <div key={loc.name} className="group rounded-2xl overflow-hidden border border-border bg-background flex flex-col">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={_s(loc.img)}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground">{loc.name}</h3>
                    <p className="font-body text-xs text-muted-foreground">{loc.sub}</p>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                    {loc.phone}
                  </a>
                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                    {loc.email}
                  </a>
                  <a
                    href={loc.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto font-body text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" /> View on map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
