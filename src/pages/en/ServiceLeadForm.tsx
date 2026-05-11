import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

type ServiceKey = "meeting-rooms" | "private-terrace" | "private-office" | "coworking" | "business-registration" | "general";

const thankYouBase: Record<"en" | "es" | "it", string> = {
  en: "/en/thank-you",
  es: "/es/gracias",
  it: "/it/grazie",
};

const content: Record<"en" | "es" | "it", Record<ServiceKey, { title: string; desc: string; back: string; backHref: string }>> = {
  en: {
    "meeting-rooms": { title: "Meeting Room Enquiry", desc: "Tell us about your event and we'll get back to you within 24 hours with availability and a tailored proposal.", back: "Back to Meeting Rooms", backHref: "/en/meeting-rooms" },
    "private-terrace": { title: "Private Terrace Enquiry", desc: "Tell us about your event and we'll get back to you within 24 hours with a tailored proposal.", back: "Back to Private Terrace", backHref: "/en/private-terrace" },
    "private-office": { title: "Private Office Enquiry", desc: "Tell us about your team and we'll get back to you within 24 hours with availability and pricing.", back: "Back to Private Offices", backHref: "/en/private-offices" },
    "coworking": { title: "Coworking Enquiry", desc: "Tell us about yourself and we'll help you find the right plan.", back: "Back to Coworking", backHref: "/en/coworking-space" },
    "business-registration": { title: "Business Registration Enquiry", desc: "Tell us about your company and we'll walk you through the registration process.", back: "Back to Business Registration", backHref: "/en/business-registration" },
    "general": { title: "Get in Touch", desc: "Send us your question and we'll get back to you within 24 hours.", back: "Back", backHref: "/" },
  },
  es: {
    "meeting-rooms": { title: "Consulta Sala de Reuniones", desc: "Cuéntanos sobre tu evento y te responderemos en 24 horas con disponibilidad y una propuesta personalizada.", back: "Volver a Salas de Reuniones", backHref: "/es/salas-de-reuniones" },
    "private-terrace": { title: "Consulta Terraza Privada", desc: "Cuéntanos sobre tu evento y te responderemos en 24 horas con una propuesta personalizada.", back: "Volver a la Terraza Privada", backHref: "/es/terraza-privada" },
    "private-office": { title: "Consulta Oficina Privada", desc: "Cuéntanos sobre tu equipo y te responderemos en 24 horas con disponibilidad y precios.", back: "Volver a Oficinas Privadas", backHref: "/es/oficinas-privadas" },
    "coworking": { title: "Consulta Coworking", desc: "Cuéntanos sobre ti y te ayudaremos a encontrar el plan adecuado.", back: "Volver al Coworking", backHref: "/es/coworking" },
    "business-registration": { title: "Consulta Registro de Empresa", desc: "Cuéntanos sobre tu empresa y te guiaremos en el proceso de registro.", back: "Volver al Registro", backHref: "/es/registro-de-empresas" },
    "general": { title: "Contáctanos", desc: "Envíanos tu pregunta y te responderemos en 24 horas.", back: "Volver", backHref: "/es" },
  },
  it: {
    "meeting-rooms": { title: "Richiesta Sala Riunioni", desc: "Raccontaci del tuo evento e ti risponderemo entro 24 ore con disponibilità e una proposta su misura.", back: "Torna alle Sale Riunioni", backHref: "/it/sale-riunioni" },
    "private-terrace": { title: "Richiesta Terrazza Privata", desc: "Raccontaci del tuo evento e ti risponderemo entro 24 ore con una proposta su misura.", back: "Torna alla Terrazza Privata", backHref: "/it/terrazza-privata" },
    "private-office": { title: "Richiesta Ufficio Privato", desc: "Raccontaci del tuo team e ti risponderemo entro 24 ore con disponibilità e prezzi.", back: "Torna agli Uffici Privati", backHref: "/it/uffici-privati" },
    "coworking": { title: "Richiesta Coworking", desc: "Raccontaci di te e ti aiuteremo a trovare il piano giusto.", back: "Torna al Coworking", backHref: "/it/coworking" },
    "business-registration": { title: "Richiesta Registrazione Aziendale", desc: "Raccontaci della tua azienda e ti guideremo nel processo di registrazione.", back: "Torna alla Registrazione", backHref: "/it/registrazione-aziendale" },
    "general": { title: "Contattaci", desc: "Inviaci la tua domanda e ti risponderemo entro 24 ore.", back: "Indietro", backHref: "/it" },
  },
};

const labels: Record<"en" | "es" | "it", { name: string; email: string; company: string; phone: string; message: string; send: string; sending: string }> = {
  en: { name: "Full Name", email: "Work Email", company: "Company", phone: "Phone", message: "How can we help?", send: "Send Enquiry", sending: "Sending..." },
  es: { name: "Nombre completo", email: "Email de trabajo", company: "Empresa", phone: "Teléfono", message: "¿En qué podemos ayudarte?", send: "Enviar consulta", sending: "Enviando..." },
  it: { name: "Nome completo", email: "Email lavorativa", company: "Azienda", phone: "Telefono", message: "Come possiamo aiutarti?", send: "Invia richiesta", sending: "Invio..." },
};

const inputCls = "w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors";
const labelCls = "font-body text-sm font-semibold text-foreground block mb-1.5";

const eventServices = new Set<ServiceKey>(["meeting-rooms", "private-terrace"]);

export default function ServiceLeadForm({
  lang = "en",
  service,
}: {
  lang?: "en" | "es" | "it";
  service: ServiceKey;
}) {
  const c = content[lang][service];
  const l = labels[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const spaceSlug =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("space") ?? ""
      : "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          company: fd.get("company"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          service,
          space: spaceSlug || undefined,
        }),
      });
    } finally {
      const slug = eventServices.has(service) ? "event" : service;
      window.location.href = `${thankYouBase[lang]}/${slug}`;
    }
  };

  return (
    <main className="pt-20 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href={c.backHref} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> {c.back}
        </a>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{c.title}</h1>
        <p className="font-body text-muted-foreground mb-10">{c.desc}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{l.name}</label>
              <input name="name" required type="text" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{l.email}</label>
              <input name="email" required type="email" className={inputCls} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{l.company}</label>
              <input name="company" type="text" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{l.phone}</label>
              <input name="phone" type="tel" className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>{l.message}</label>
            <textarea name="message" rows={5} className={inputCls + " resize-none"} />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? l.sending : l.send}
          </button>
        </form>
      </div>
    </main>
  );
}
