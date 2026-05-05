import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const translations = {
  en: {
    tagline: "Get a Quote",
    title: "Request Your Office",
    subtitle: "Tell us what you need and we'll get back to you within 24 hours with a personalised proposal.",
    fields: {
      fullName: "Full Name",
      company: "Company (optional)",
      email: "Email",
      phone: "Phone",
      location: "Preferred Location",
      seats: "Number of Seats Needed",
      size: "Desired Size (sqm)",
      howHeard: "How did you hear about us?",
      message: "Tell us about the office space you need (optional)",
      privacy: "I've read and accept the",
      privacyLink: "Privacy Policy",
    },
    locations: ["Málaga Palace", "Málaga Terrace", "Ancona", "Olbia", "No preference"],
    howHeardOptions: [
      "Personal connection",
      "Street advertisement",
      "Search engine (Google, Bing, etc.)",
      "Social Media",
      "Other",
    ],
    submit: "Send Request",
    successTitle: "Request Sent!",
    successMsg: "Thank you — we'll get back to you within 24 hours with a personalised proposal.",
    selectPlaceholder: "Select an option",
  },
  es: {
    tagline: "Solicita un Presupuesto",
    title: "Solicita tu Oficina",
    subtitle: "Cuéntanos lo que necesitas y te responderemos en menos de 24 horas con una propuesta personalizada.",
    fields: {
      fullName: "Nombre Completo",
      company: "Empresa (opcional)",
      email: "Correo Electrónico",
      phone: "Teléfono",
      location: "Ubicación Preferida",
      seats: "Número de Puestos Necesarios",
      size: "Tamaño Deseado (m²)",
      howHeard: "¿Cómo nos conociste?",
      message: "Cuéntanos sobre la oficina que necesitas (opcional)",
      privacy: "He leído y acepto la",
      privacyLink: "Política de Privacidad",
    },
    locations: ["Málaga Palace", "Málaga Terrace", "Ancona", "Olbia", "Sin preferencia"],
    howHeardOptions: [
      "Contacto personal",
      "Publicidad en calle",
      "Buscador (Google, Bing, etc.)",
      "Redes Sociales",
      "Otro",
    ],
    submit: "Enviar Solicitud",
    successTitle: "¡Solicitud Enviada!",
    successMsg: "Gracias — te responderemos antes de 24 horas con una propuesta personalizada.",
    selectPlaceholder: "Selecciona una opción",
  },
  it: {
    tagline: "Richiedi un Preventivo",
    title: "Richiedi il Tuo Ufficio",
    subtitle: "Dicci cosa cerchi e ti risponderemo entro 24 ore con una proposta personalizzata.",
    fields: {
      fullName: "Nome Completo",
      company: "Azienda (opzionale)",
      email: "Email",
      phone: "Telefono",
      location: "Location Preferita",
      seats: "Numero di Postazioni Necessarie",
      size: "Dimensione Desiderata (m²)",
      howHeard: "Come ci hai conosciuto?",
      message: "Raccontaci dello spazio ufficio che cerchi (opzionale)",
      privacy: "Ho letto e accetto la",
      privacyLink: "Privacy Policy",
    },
    locations: ["Málaga Palace", "Málaga Terrace", "Ancona", "Olbia", "Nessuna preferenza"],
    howHeardOptions: [
      "Contatto personale",
      "Pubblicità stradale",
      "Motore di ricerca (Google, Bing, ecc.)",
      "Social Media",
      "Altro",
    ],
    submit: "Invia Richiesta",
    successTitle: "Richiesta Inviata!",
    successMsg: "Grazie — ti risponderemo entro 24 ore con una proposta personalizzata.",
    selectPlaceholder: "Seleziona un'opzione",
  },
};

const inputClass =
  "w-full bg-transparent border-0 border-b border-border/60 focus:border-primary outline-none py-3 font-body text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200";
const selectClass =
  "w-full bg-transparent border-0 border-b border-border/60 focus:border-primary outline-none py-3 font-body text-sm text-foreground transition-colors duration-200 cursor-pointer appearance-none";

export default function OfficesQuoteForm({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  const [submitted, setSubmitted] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="offices-form" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {submitted ? (
          <div className="text-center py-20 px-8 bg-white border-l-4 border-primary animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">{t.successTitle}</h3>
            <p className="font-body text-muted-foreground">{t.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-sm">
            {/* Row 1: Name + Company */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.fullName} *
                </label>
                <input type="text" required className={inputClass} placeholder={t.fields.fullName} />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.company}
                </label>
                <input type="text" className={inputClass} placeholder={t.fields.company} />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.email} *
                </label>
                <input type="email" required className={inputClass} placeholder={t.fields.email} />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.phone} *
                </label>
                <input type="tel" required className={inputClass} placeholder="+34 / +39..." />
              </div>
            </div>

            {/* Row 3: Location + Seats */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.location} *
                </label>
                <select required className={selectClass}>
                  <option value="">{t.selectPlaceholder}</option>
                  {t.locations.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.seats}
                </label>
                <input type="number" min="1" className={inputClass} placeholder="e.g. 4" />
              </div>
            </div>

            {/* Row 4: Size + How heard */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.size}
                </label>
                <input type="number" min="1" className={inputClass} placeholder="e.g. 20" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.howHeard} *
                </label>
                <select required className={selectClass}>
                  <option value="">{t.selectPlaceholder}</option>
                  {t.howHeardOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                {t.fields.message}
              </label>
              <textarea rows={4} className={`${inputClass} resize-none`} placeholder="..." />
            </div>

            {/* Privacy + Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-1 accent-primary w-4 h-4 shrink-0"
                />
                <span className="font-body text-sm text-muted-foreground">
                  {t.fields.privacy}{" "}
                  <a href={lang === "en" ? "/en/privacy" : `/${lang}/privacidad`} className="text-primary underline underline-offset-2 hover:no-underline">
                    {t.fields.privacyLink}
                  </a>
                </span>
              </label>
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest px-10 gap-2 shrink-0"
              >
                <Send className="w-4 h-4" />
                {t.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
