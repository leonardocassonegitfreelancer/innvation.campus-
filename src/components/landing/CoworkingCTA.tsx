import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const translations = {
  en: {
    title: "Ready to Start?",
    description: "Book a free tour of our spaces, we'll help you find the right plan.",
    button: "Book a Tour"
  },
  es: {
    title: "¿Listo para empezar?",
    description: "Reserva una visita gratuita a nuestros espacios, te aiutaremos a encontrar el plan adecuado.",
    button: "Reservar Visita"
  },
  it: {
    title: "Pronto per Iniziare?",
    description: "Prenota un tour gratuito dei nostri spazi, ti aiuteremo a trovare il piano giusto.",
    button: "Prenota un Tour"
  }
};

export default function CoworkingCTA({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-3xl mx-auto px-6 text-center relative`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          {t.title}
        </h2>
        <p className="font-body text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
          {t.description}
        </p>

        <Button asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-body uppercase tracking-widest text-sm">
          <a
            href="https://members.innovationcampus.biz/tours/locations"
            target="_blank"
            rel="noopener noreferrer">
            {t.button}
          </a>
        </Button>
      </div>
    </section>);
}