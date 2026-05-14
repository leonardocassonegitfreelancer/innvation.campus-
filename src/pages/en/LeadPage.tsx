import LeadForm from "@/components/landing/LeadForm";
import EventLeadCapture from "@/pages/en/EventLeadCapture";

const serviceMap: Record<string, string> = {
  "meeting-rooms": "conference",
  "private-terrace": "terrace",
  "private-office": "office",
  "coworking": "coworking",
  "business-registration": "bizreg",
  "general": "other",
};

const heroContent: Record<string, Record<"en" | "es" | "it", { tagline: string; title: string; subtitle: string }>> = {
  conference: {
    en: { tagline: "Meeting Rooms", title: "Book a Meeting Room", subtitle: "Check availability and request a tailored quote for your event." },
    es: { tagline: "Salas de Reuniones", title: "Reserva una Sala", subtitle: "Consulta disponibilidad y solicita un presupuesto para tu evento." },
    it: { tagline: "Sale Riunioni", title: "Prenota una Sala", subtitle: "Verifica disponibilità e richiedi un preventivo per il tuo evento." },
  },
  terrace: {
    en: { tagline: "Private Terrace", title: "Book the Terrace", subtitle: "Outdoor events, receptions and private gatherings by the sea." },
    es: { tagline: "Terraza Privada", title: "Reserva la Terraza", subtitle: "Eventos al aire libre, recepciones y celebraciones junto al mar." },
    it: { tagline: "Terrazza Privata", title: "Prenota la Terrazza", subtitle: "Eventi all'aperto, ricevimenti e feste private sul lungomare." },
  },
  office: {
    en: { tagline: "Private Offices", title: "Rent a Private Office", subtitle: "Dedicated office spaces for your team — flexible terms, premium environment." },
    es: { tagline: "Oficinas Privadas", title: "Alquila una Oficina Privada", subtitle: "Espacios dedicados para tu equipo — condiciones flexibles, entorno premium." },
    it: { tagline: "Uffici Privati", title: "Affitta un Ufficio Privato", subtitle: "Spazi dedicati per il tuo team — termini flessibili, ambiente premium." },
  },
  coworking: {
    en: { tagline: "Coworking", title: "Join the Coworking", subtitle: "Flexible desks and memberships — work alongside a growing community." },
    es: { tagline: "Coworking", title: "Únete al Coworking", subtitle: "Puestos y membresías flexibles — trabaja junto a una comunidad en crecimiento." },
    it: { tagline: "Coworking", title: "Unisciti al Coworking", subtitle: "Postazioni e abbonamenti flessibili — lavora in una comunità in crescita." },
  },
  bizreg: {
    en: { tagline: "Business Registration", title: "Domicile Your Company", subtitle: "Relocate or register your business in Spain or Italy — we handle the process." },
    es: { tagline: "Registro de Empresas", title: "Domicilia tu Empresa", subtitle: "Traslada o registra tu empresa en España o Italia — nos encargamos del proceso." },
    it: { tagline: "Registrazione Aziendale", title: "Domicilia la Tua Azienda", subtitle: "Trasferisci o registra la tua azienda in Spagna o Italia — gestiamo noi il processo." },
  },
  other: {
    en: { tagline: "Get in Touch", title: "How Can We Help?", subtitle: "Our team will get back to you within 24 hours." },
    es: { tagline: "Contáctanos", title: "¿En qué podemos ayudarte?", subtitle: "Nuestro equipo te responderá en 24 horas." },
    it: { tagline: "Contattaci", title: "Come possiamo aiutarti?", subtitle: "Il nostro team ti risponderà entro 24 ore." },
  },
};

export default function LeadPage({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const spaceSlug = params.get("space") ?? "";

  const serviceParam = params.get("service") ?? "general";

  if (spaceSlug) {
    return <EventLeadCapture lang={lang} />;
  }
  const defaultService = serviceMap[serviceParam] ?? "other";
  const hero = (heroContent[defaultService] ?? heroContent.other)[lang];

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-neutral-dark pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
            {hero.tagline}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
            {hero.title}
          </h1>
          <p className="font-body text-lg text-white/60 mt-4 max-w-xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <LeadForm lang={lang} embedded defaultService={defaultService} />
      </div>

    </main>
  );
}
