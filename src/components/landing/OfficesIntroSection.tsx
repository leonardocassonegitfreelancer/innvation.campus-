import { Building2, CalendarCheck, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Private Offices",
    title: "Your Ideal Workspace Awaits",
    subtitle: "Dedicated offices in the heart of Málaga — fully equipped, flexible terms, and surrounded by an international entrepreneurial community.",
    highlights: [
      { icon: Building2, title: "1,500+ m² of Space", desc: "Offices from 5 m² to large open floors across 4 levels" },
      { icon: Users, title: "2–50 People", desc: "Teams of any size, from solo founders to growing teams" },
      { icon: CalendarCheck, title: "Flexible Terms", desc: "Monthly rolling contracts — no long commitments required" },
    ],
  },
  es: {
    tagline: "Oficinas Privadas",
    title: "Tu Espacio de Trabajo Ideal Te Espera",
    subtitle: "Oficinas dedicadas en el corazón de Málaga — totalmente equipadas, condiciones flexibles y rodeadas de una comunidad empresarial internacional.",
    highlights: [
      { icon: Building2, title: "Más de 1.500 m²", desc: "Oficinas desde 5 m² hasta grandes plantas abiertas en 4 niveles" },
      { icon: Users, title: "2–50 Personas", desc: "Equipos de cualquier tamaño, desde fundadores hasta empresas en crecimiento" },
      { icon: CalendarCheck, title: "Condiciones Flexibles", desc: "Contratos mensuales renovables — sin compromisos a largo plazo" },
    ],
  },
  it: {
    tagline: "Uffici Privati",
    title: "Il Tuo Spazio di Lavoro Ideale Ti Aspetta",
    subtitle: "Uffici dedicati nel cuore di Málaga — completamente attrezzati, termini flessibili e circondati da una comunità imprenditoriale internazionale.",
    highlights: [
      { icon: Building2, title: "Oltre 1.500 m²", desc: "Uffici da 5 m² a grandi open space su 4 livelli" },
      { icon: Users, title: "2–50 Persone", desc: "Team di qualsiasi dimensione, dai fondatori ai team in crescita" },
      { icon: CalendarCheck, title: "Termini Flessibili", desc: "Contratti mensili rinnovabili — nessun impegno a lungo termine" },
    ],
  },
};

export default function OfficesIntroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} relative max-w-6xl mx-auto px-6`}>
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
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
      </div>
    </section>
  );
}
