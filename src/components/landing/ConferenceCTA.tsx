import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    title: "Book Your Meeting Room",
    subtitle: "Get in touch to reserve your space or request a personalized quote.",
    cta: "Request a Quote",
  },
  es: {
    title: "Reserva Tu Sala de Reuniones",
    subtitle: "Contáctanos para reservar tu espacio o solicitar un presupuesto personalizado.",
    cta: "Solicitar Presupuesto",
  },
  it: {
    title: "Prenota la Tua Sala Riunioni",
    subtitle: "Contattaci per prenotare il tuo spazio o richiedere un preventivo personalizzato.",
    cta: "Richiedi Preventivo",
  },
};

export default function ConferenceCTA() {
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
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-3xl mx-auto px-6 text-center relative`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          {t.title}
        </h2>
        <p className="font-body text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
          {t.subtitle}
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-body uppercase tracking-widest text-sm"
        >
          <a href="/#contact">{t.cta}</a>
        </Button>
      </div>
    </section>
  );
}
