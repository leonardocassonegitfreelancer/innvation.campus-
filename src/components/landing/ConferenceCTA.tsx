import LeadForm from "./LeadForm";

const headings = {
  en: {
    label: "Get in Touch",
    title: "Ready to book your space?",
    subtitle: "Tell us what you need and we'll get back to you within 24 hours.",
  },
  es: {
    label: "Contáctanos",
    title: "¿Listo para reservar tu espacio?",
    subtitle: "Cuéntanos qué necesitas y te responderemos en 24 horas.",
  },
  it: {
    label: "Contattaci",
    title: "Pronto a prenotare il tuo spazio?",
    subtitle: "Raccontaci cosa cerchi e ti risponderemo entro 24 ore.",
  },
};

interface ConferenceCTAProps {
  lang?: "en" | "es" | "it";
  defaultService?: string;
  titleOverride?: { en: string; es: string; it: string };
  subtitleOverride?: { en: string; es: string; it: string };
}

export default function ConferenceCTA({
  lang = "en",
  defaultService = "",
  titleOverride,
  subtitleOverride,
}: ConferenceCTAProps = {}) {
  const h = headings[lang];
  const title = titleOverride ? titleOverride[lang] : h.title;
  const subtitle = subtitleOverride ? subtitleOverride[lang] : h.subtitle;

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-neutral-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/G%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">{h.label}</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">{title}</h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">{subtitle}</p>
        </div>
        <LeadForm lang={lang} embedded defaultService={defaultService} />
      </div>
    </section>
  );
}
