import { Sun, UtensilsCrossed, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Exclusive Outdoor Space",
    title: "Events Under the Sky",
    subtitle: "Our private rooftop terrace offers a stunning setting for corporate events, team celebrations, and networking with panoramic views of Málaga.",
    highlights: [
      { icon: Sun, title: "Rooftop Views", desc: "Panoramic views over the city skyline" },
      { icon: UtensilsCrossed, title: "Full Catering", desc: "Custom menus from our partner chefs" },
      { icon: Users, title: "Up to 100 Guests", desc: "Flexible setup for any occasion" },
    ],
  },
  es: {
    tagline: "Espacio Exterior Exclusivo",
    title: "Eventos Bajo el Cielo",
    subtitle: "Nuestra terraza privada en la azotea ofrece un entorno impresionante para eventos corporativos, celebraciones de equipo y networking con vistas panorámicas de Málaga.",
    highlights: [
      { icon: Sun, title: "Vistas desde la Azotea", desc: "Vistas panorámicas del horizonte urbano" },
      { icon: UtensilsCrossed, title: "Catering Completo", desc: "Menús personalizados de nuestros chefs" },
      { icon: Users, title: "Hasta 100 Invitados", desc: "Montaje flexible para cualquier ocasión" },
    ],
  },
  it: {
    tagline: "Spazio Esterno Esclusivo",
    title: "Eventi Sotto il Cielo",
    subtitle: "La nostra terrazza privata sul tetto offre un ambiente straordinario per eventi aziendali, celebrazioni di team e networking con viste panoramiche su Málaga.",
    highlights: [
      { icon: Sun, title: "Vista dal Tetto", desc: "Viste panoramiche sullo skyline della città" },
      { icon: UtensilsCrossed, title: "Catering Completo", desc: "Menu personalizzati dai nostri chef partner" },
      { icon: Users, title: "Fino a 100 Ospiti", desc: "Configurazione flessibile per ogni occasione" },
    ],
  },
};

export default function TerraceIntro() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} relative max-w-6xl mx-auto px-6`}>
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t.title}</h2>
          <p className="font-body text-lg text-primary-foreground/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.highlights.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="font-body text-primary-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
