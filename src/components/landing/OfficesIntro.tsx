import { Building2, Lock, Scaling } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Dedicated Workspaces",
    title: "Your Private Office",
    subtitle: "Fully furnished private offices in the heart of Málaga, designed for teams that need focus, privacy, and a professional address.",
    highlights: [
      { icon: Building2, title: "Premium Location", desc: "Central Málaga with stunning surroundings" },
      { icon: Lock, title: "24/7 Access", desc: "Secure private entry for your team" },
      { icon: Scaling, title: "Flexible Sizes", desc: "From 2-person pods to 20+ team suites" },
    ],
  },
  es: {
    tagline: "Espacios de Trabajo Dedicados",
    title: "Tu Oficina Privada",
    subtitle: "Oficinas privadas completamente amuebladas en el corazón de Málaga, diseñadas para equipos que necesitan concentración, privacidad y una dirección profesional.",
    highlights: [
      { icon: Building2, title: "Ubicación Premium", desc: "Centro de Málaga con entorno impresionante" },
      { icon: Lock, title: "Acceso 24/7", desc: "Entrada privada y segura para tu equipo" },
      { icon: Scaling, title: "Tamaños Flexibles", desc: "Desde pods de 2 personas hasta suites de 20+" },
    ],
  },
  it: {
    tagline: "Spazi di Lavoro Dedicati",
    title: "Il Tuo Ufficio Privato",
    subtitle: "Uffici privati completamente arredati nel cuore di Málaga, progettati per team che necessitano di concentrazione, privacy e un indirizzo professionale.",
    highlights: [
      { icon: Building2, title: "Posizione Premium", desc: "Centro di Málaga con ambiente straordinario" },
      { icon: Lock, title: "Accesso 24/7", desc: "Ingresso privato e sicuro per il tuo team" },
      { icon: Scaling, title: "Dimensioni Flessibili", desc: "Da pod per 2 persone a suite per 20+" },
    ],
  },
};

export default function OfficesIntro() {
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
