import { useLocation } from "react-router-dom";
import { Clock } from "lucide-react";

const translations = {
  en: {
    tagline: "Member Benefits",
    title: "Coming Soon",
    subtitle: "We're working on exclusive partnerships and offers for our members. Check back soon.",
  },
  es: {
    tagline: "Ventajas para Miembros",
    title: "Próximamente",
    subtitle: "Estamos trabajando en acuerdos exclusivos y ofertas para nuestros miembros. Vuelve pronto.",
  },
  it: {
    tagline: "Vantaggi per i Membri",
    title: "Coming Soon",
    subtitle: "Stiamo lavorando a partnership ed offerte esclusive per i nostri membri. Torna presto.",
  },
};

export default function PartnersGrid({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
          {t.tagline}
        </p>
        <div className="flex items-center justify-center mb-6">
          <Clock className="w-10 h-10 text-primary/60" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          {t.title}
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
}
