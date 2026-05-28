import { CheckCircle } from "lucide-react";

type ServiceKey = "event" | "private-office" | "coworking" | "business-registration" | "general";

const content: Record<"en" | "es" | "it", Record<ServiceKey, { heading: string; message: string; cta: string; ctaHref: string }>> = {
  en: {
    "event": {
      heading: "We'll be in touch!",
      message: "Thanks for your interest in hosting your event at Innovation Campus. Our team will reach out within 1 business day to discuss your needs.",
      cta: "Explore our spaces",
      ctaHref: "/en/private-terrace",
    },
    "private-office": {
      heading: "We'll be in touch!",
      message: "Thanks for your interest in a private office. Our team will contact you within 1 business day to discuss availability and pricing.",
      cta: "View private offices",
      ctaHref: "/en/private-offices",
    },
    "coworking": {
      heading: "We'll be in touch!",
      message: "Thanks for your interest in coworking at Innovation Campus. Our team will reach out within 1 business day.",
      cta: "See plans & pricing",
      ctaHref: "/en/coworking-space",
    },
    "business-registration": {
      heading: "We'll be in touch!",
      message: "Thanks for your interest in registering your business with us. Our team will contact you within 1 business day.",
      cta: "Learn about registration",
      ctaHref: "/en/business-registration",
    },
    "general": {
      heading: "Message received!",
      message: "Thanks for reaching out to Innovation Campus. We'll get back to you within 1 business day.",
      cta: "Back to homepage",
      ctaHref: "/",
    },
  },
  es: {
    "event": {
      heading: "¡Te contactaremos pronto!",
      message: "Gracias por tu interés en organizar tu evento en Innovation Campus. Nuestro equipo te contactará en 1 día laborable.",
      cta: "Ver nuestros espacios",
      ctaHref: "/es/terraza-privada",
    },
    "private-office": {
      heading: "¡Te contactaremos pronto!",
      message: "Gracias por tu interés en una oficina privada. Nuestro equipo te contactará en 1 día laborable para hablar de disponibilidad y precios.",
      cta: "Ver oficinas privadas",
      ctaHref: "/es/oficinas-privadas",
    },
    "coworking": {
      heading: "¡Te contactaremos pronto!",
      message: "Gracias por tu interés en el coworking de Innovation Campus. Nuestro equipo te contactará en 1 día laborable.",
      cta: "Ver planes y precios",
      ctaHref: "/es/coworking",
    },
    "business-registration": {
      heading: "¡Te contactaremos pronto!",
      message: "Gracias por tu interés en registrar tu empresa con nosotros. Nuestro equipo te contactará en 1 día laborable.",
      cta: "Más sobre registros",
      ctaHref: "/es/registro-de-empresas",
    },
    "general": {
      heading: "¡Mensaje recibido!",
      message: "Gracias por contactar con Innovation Campus. Te responderemos en 1 día laborable.",
      cta: "Volver al inicio",
      ctaHref: "/es",
    },
  },
  it: {
    "event": {
      heading: "Ti contatteremo presto!",
      message: "Grazie per il tuo interesse nell'organizzare il tuo evento a Innovation Campus. Il nostro team ti contatterà entro 1 giorno lavorativo.",
      cta: "Scopri i nostri spazi",
      ctaHref: "/it/terrazza-privata",
    },
    "private-office": {
      heading: "Ti contatteremo presto!",
      message: "Grazie per il tuo interesse negli uffici privati. Il nostro team ti contatterà entro 1 giorno lavorativo per discutere disponibilità e prezzi.",
      cta: "Vedi uffici privati",
      ctaHref: "/it/uffici-privati",
    },
    "coworking": {
      heading: "Ti contatteremo presto!",
      message: "Grazie per il tuo interesse nel coworking di Innovation Campus. Il nostro team ti contatterà entro 1 giorno lavorativo.",
      cta: "Piani e prezzi",
      ctaHref: "/it/coworking",
    },
    "business-registration": {
      heading: "Ti contatteremo presto!",
      message: "Grazie per il tuo interesse nella registrazione aziendale. Il nostro team ti contatterà entro 1 giorno lavorativo.",
      cta: "Scopri la registrazione",
      ctaHref: "/it/registrazione-aziendale",
    },
    "general": {
      heading: "Messaggio ricevuto!",
      message: "Grazie per aver contattato Innovation Campus. Ti risponderemo entro 1 giorno lavorativo.",
      cta: "Torna alla home",
      ctaHref: "/it",
    },
  },
};

export default function ThankYouContact({
  lang = "en",
  service = "general",
}: {
  lang?: "en" | "es" | "it";
  service?: ServiceKey;
}) {
  const c = content[lang][service] ?? content[lang]["general"];

  return (
    <main className="min-h-screen bg-neutral-dark flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center py-24">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-8" strokeWidth={1.5} />
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          {c.heading}
        </h1>
        <p className="font-body text-lg text-white/60 mb-10 leading-relaxed">
          {c.message}
        </p>
        <a
          href={c.ctaHref}
          className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm px-8 py-4 rounded-md hover:bg-primary/90 transition-colors"
        >
          {c.cta}
        </a>
      </div>
    </main>
  );
}
