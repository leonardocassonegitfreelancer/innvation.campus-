import { Users, Monitor, UtensilsCrossed } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const locations = {
  en: [
    { label: "Historic Center", address: "Calle Álamos 7, 29012 Málaga" },
    { label: "Sea Side", address: "Calle Puerto 14, 29016 Málaga" },
  ],
  es: [
    { label: "Centro Histórico", address: "Calle Álamos 7, 29012 Málaga" },
    { label: "Frente al Mar", address: "Calle Puerto 14, 29016 Málaga" },
  ],
  it: [
    { label: "Centro Storico", address: "Calle Álamos 7, 29012 Málaga" },
    { label: "Lungomare", address: "Calle Puerto 14, 29016 Málaga" },
  ],
};

const translations = {
  en: {
    tagline: "Professional Meeting Spaces",
    title: "Host Meetings That Matter",
    subtitle: "From intimate brainstorms to large presentations, our conference rooms are designed for productivity and impact.",
    highlights: [
      { icon: Users, title: "Up to 80 People", desc: "Flexible room sizes for any meeting" },
      { icon: Monitor, title: "Premium Tech", desc: "Projectors, microphones & whiteboards" },
      { icon: UtensilsCrossed, title: "Catering Available", desc: "Quality food improves satisfaction by 3x" },
    ],
  },
  es: {
    tagline: "Espacios de Reuniones Profesionales",
    title: "Organiza Reuniones que Importan",
    subtitle: "Desde lluvias de ideas íntimas hasta grandes presentaciones, nuestras salas están diseñadas para la productividad.",
    highlights: [
      { icon: Users, title: "Hasta 80 Personas", desc: "Tamaños flexibles para cualquier reunión" },
      { icon: Monitor, title: "Tecnología Premium", desc: "Proyectores, micrófonos y pizarras" },
      { icon: UtensilsCrossed, title: "Catering Disponible", desc: "La comida de calidad mejora la satisfacción 3x" },
    ],
  },
  it: {
    tagline: "Spazi per Riunioni Professionali",
    title: "Organizza Riunioni che Contano",
    subtitle: "Da brainstorming intimi a grandi presentazioni, le nostre sale sono progettate per produttività e impatto.",
    highlights: [
      { icon: Users, title: "Fino a 80 Persone", desc: "Sale flessibili per ogni riunione" },
      { icon: Monitor, title: "Tecnologia Premium", desc: "Proiettori, microfoni e lavagne" },
      { icon: UtensilsCrossed, title: "Catering Disponibile", desc: "Il cibo di qualità migliora la soddisfazione 3x" },
    ],
  },
};

export default function ConferenceIntro({ lang: langProp }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = langProp ?? (location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en");
  const t = translations[lang];
  const locs = locations[lang];

  return (
    <section className="relative py-8 md:py-10 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} relative max-w-6xl mx-auto px-6`}>
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.12em] md:tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-body text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
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

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mt-12 pt-10 border-t border-white/10">
          {locs.map((loc) => (
            <div key={loc.label} className="flex items-center gap-2 text-primary-foreground/50">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-body text-sm">
                <span className="text-primary-foreground/80 font-semibold">{loc.label}</span>
                {" — "}
                {loc.address}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
