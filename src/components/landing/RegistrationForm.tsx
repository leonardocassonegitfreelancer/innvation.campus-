import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const translations = {
  en: {
    tagline: "Get a Quote",
    title: "Interested? Ask for a Quote",
    subtitle: "Fill in the form below and our team will get back to you within 24 hours.",
    fields: {
      fullName: "Full Name",
      company: "Company (optional)",
      email: "Email",
      phone: "Phone",
      location: "Location",
      service: "Service",
      howHeard: "How did you hear about us?",
      message: "Message (optional)",
      privacy: "I've read and accept the",
      privacyLink: "Privacy Policy",
    },
    locations: ["Malaga Terrace", "Malaga Palace", "Ancona", "Olbia"],
    services: [
      "Business Registration",
      "Virtual Office",
      "Coworking",
      "Private Office",
      "Meeting Room",
      "Other",
    ],
    howHeardOptions: [
      "Personal connection",
      "Street advertisement",
      "Search engine (Google, Bing, etc.)",
      "Social Media",
      "Other",
    ],
    submit: "Send Request",
    successTitle: "Message Sent!",
    successMsg:
      "Thank you — we'll get back to you within 24 hours.",
    selectPlaceholder: "Select an option",
  },
  es: {
    tagline: "Solicita Información",
    title: "¿Interesado? Pide un Presupuesto",
    subtitle: "Completa el formulario y nuestro equipo te responderá en menos de 24 horas.",
    fields: {
      fullName: "Nombre Completo",
      company: "Empresa (opcional)",
      email: "Correo Electrónico",
      phone: "Teléfono",
      location: "Ubicación",
      service: "Servicio",
      howHeard: "¿Cómo nos conociste?",
      message: "Mensaje (opcional)",
      privacy: "He leído y acepto la",
      privacyLink: "Política de Privacidad",
    },
    locations: ["Terraza Málaga", "Palacio Málaga", "Ancona", "Olbia"],
    services: [
      "Registro de Empresa",
      "Oficina Virtual",
      "Coworking",
      "Oficina Privada",
      "Sala de Reuniones",
      "Otro",
    ],
    howHeardOptions: [
      "Contacto personal",
      "Publicidad en calle",
      "Buscador (Google, Bing, etc.)",
      "Redes Sociales",
      "Otro",
    ],
    submit: "Enviar Solicitud",
    successTitle: "¡Mensaje Enviado!",
    successMsg: "Gracias — te responderemos antes de 24 horas.",
    selectPlaceholder: "Selecciona una opción",
  },
  it: {
    tagline: "Richiedi un Preventivo",
    title: "Interessato? Richiedi un Preventivo",
    subtitle: "Compila il modulo e il nostro team ti risponderà entro 24 ore.",
    fields: {
      fullName: "Nome Completo",
      company: "Azienda (opzionale)",
      email: "Email",
      phone: "Telefono",
      location: "Location",
      service: "Servizio",
      howHeard: "Come ci hai conosciuto?",
      message: "Messaggio (opzionale)",
      privacy: "Ho letto e accetto la",
      privacyLink: "Privacy Policy",
    },
    locations: ["Malaga Terrace", "Malaga Palace", "Ancona", "Olbia"],
    services: [
      "Registrazione Aziendale",
      "Ufficio Virtuale",
      "Coworking",
      "Ufficio Privato",
      "Sala Riunioni",
      "Altro",
    ],
    howHeardOptions: [
      "Contatto personale",
      "Pubblicità stradale",
      "Motore di ricerca (Google, Bing, ecc.)",
      "Social Media",
      "Altro",
    ],
    submit: "Invia Richiesta",
    successTitle: "Messaggio Inviato!",
    successMsg: "Grazie — ti risponderemo entro 24 ore.",
    selectPlaceholder: "Seleziona un'opzione",
  },
};

const inputClass =
  "w-full bg-transparent border-0 border-b border-border/60 focus:border-primary outline-none py-3 font-body text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200";
const selectClass =
  "w-full bg-transparent border-0 border-b border-border/60 focus:border-primary outline-none py-3 font-body text-sm text-foreground transition-colors duration-200 cursor-pointer appearance-none";

export default function RegistrationForm() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es")
    ? "es"
    : location.pathname.startsWith("/it")
    ? "it"
    : "en";
  const t = translations[lang];

  const [submitted, setSubmitted] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only submission for now
    setSubmitted(true);
  };

  return (
    <section id="registration-form" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base">
            {t.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-20 px-8 bg-white border-l-4 border-primary animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              {t.successTitle}
            </h3>
            <p className="font-body text-muted-foreground">{t.successMsg}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 shadow-sm"
          >
            {/* Row 1: Name + Company */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.fullName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.fields.fullName}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.company}
                </label>
                <input
                  type="text"
                  placeholder={t.fields.company}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.email} *
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.fields.email}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+34 / +39..."
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3: Location + Service */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div className="relative">
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.location} *
                </label>
                <select required className={selectClass}>
                  <option value="">{t.selectPlaceholder}</option>
                  {t.locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  {t.fields.service} *
                </label>
                <select required className={selectClass}>
                  <option value="">{t.selectPlaceholder}</option>
                  {t.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: How did you hear */}
            <div className="mb-8">
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                {t.fields.howHeard} *
              </label>
              <select required className={selectClass}>
                <option value="">{t.selectPlaceholder}</option>
                {t.howHeardOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Row 5: Message */}
            <div className="mb-10">
              <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                {t.fields.message}
              </label>
              <textarea
                rows={4}
                placeholder="..."
                className={`${inputClass} resize-none`}
              />
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
                  <a
                    href="/en/privacy"
                    className="text-primary underline underline-offset-2 hover:no-underline"
                  >
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
