import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import ConferenceBookingFields, { type ConferenceBookingFieldsHandle } from "./ConferenceBookingFields";

const translations = {
  en: {
    sectionLabel: "Get in Touch",
    title: "Book Your Meeting Room",
    subtitle: "Ask a question, check availability or request a personalized quote.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    company: "Company Name",
    companyPlaceholder: "Your company",
    phone: "Phone Number (with country code)",
    phonePlaceholder: "+34 600 000 000",
    locationLabel: "Which location interests you?",
    locations: [
      { value: "historic" as const, label: "Historic Centers" },
      { value: "seaside" as const, label: "Seaside" },
      { value: "both" as const, label: "Both" },
    ],
    serviceLabel: "What are you looking for?",
    servicePlaceholder: "Select a service",
    services: [
      { value: "conference", label: "I want to book a conference room" },
      { value: "terrace", label: "I want to book a private rooftop terrace" },
      { value: "office", label: "I want to rent a private office" },
      { value: "coworker", label: "I want to become a coworker" },
      { value: "other", label: "Other / General info" },
    ],
    hearLabel: "How did you hear about us?",
    hearPlaceholder: "Select an option",
    message: "Message",
    messagePlaceholder: "Tell us what you're looking for...",
    submit: "Send Message",
    thankYou: "Thank you! We'll get back to you soon.",
    selectService: "Please select a service.",
  },
  es: {
    sectionLabel: "Contáctanos",
    title: "Reserva Tu Sala de Reuniones",
    subtitle: "Haz una pregunta, consulta disponibilidad o solicita un presupuesto personalizado.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@ejemplo.com",
    company: "Nombre de Empresa",
    companyPlaceholder: "Tu empresa",
    phone: "Teléfono (con código de país)",
    phonePlaceholder: "+34 600 000 000",
    locationLabel: "¿Qué ubicación te interesa?",
    locations: [
      { value: "historic" as const, label: "Centro Histórico" },
      { value: "seaside" as const, label: "Frente al Mar" },
      { value: "both" as const, label: "Ambas" },
    ],
    serviceLabel: "¿Qué estás buscando?",
    servicePlaceholder: "Selecciona un servicio",
    services: [
      { value: "conference", label: "Quiero reservar una sala de conferencias" },
      { value: "terrace", label: "Quiero reservar una terraza privada en la azotea" },
      { value: "office", label: "Quiero alquilar una oficina privada" },
      { value: "coworker", label: "Quiero ser coworker" },
      { value: "other", label: "Otro / Información general" },
    ],
    hearLabel: "¿Cómo nos conociste?",
    hearPlaceholder: "Selecciona una opción",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos qué necesitas...",
    submit: "Enviar Mensaje",
    thankYou: "¡Gracias! Te responderemos pronto.",
    selectService: "Por favor selecciona un servicio.",
  },
  it: {
    sectionLabel: "Contattaci",
    title: "Prenota la Tua Sala Riunioni",
    subtitle: "Fai una domanda, verifica la disponibilità o richiedi un preventivo personalizzato.",
    name: "Nome",
    namePlaceholder: "Il tuo nome",
    email: "Email",
    emailPlaceholder: "tu@esempio.com",
    company: "Nome Azienda",
    companyPlaceholder: "La tua azienda",
    phone: "Telefono (con prefisso internazionale)",
    phonePlaceholder: "+39 333 000 0000",
    locationLabel: "Quale sede ti interessa?",
    locations: [
      { value: "historic" as const, label: "Centro Storico" },
      { value: "seaside" as const, label: "Lungomare" },
      { value: "both" as const, label: "Entrambe" },
    ],
    serviceLabel: "Cosa stai cercando?",
    servicePlaceholder: "Seleziona un servizio",
    services: [
      { value: "conference", label: "Voglio prenotare una sala conferenze" },
      { value: "terrace", label: "Voglio prenotare una terrazza privata sul tetto" },
      { value: "office", label: "Voglio affittare un ufficio privato" },
      { value: "coworker", label: "Voglio diventare coworker" },
      { value: "other", label: "Altro / Informazioni generali" },
    ],
    hearLabel: "Come ci hai conosciuto?",
    hearPlaceholder: "Seleziona un'opzione",
    message: "Messaggio",
    messagePlaceholder: "Raccontaci cosa stai cercando...",
    submit: "Invia Messaggio",
    thankYou: "Grazie! Ti risponderemo presto.",
    selectService: "Per favore seleziona un servizio.",
  },
};

const hearAboutOptions = ["Google", "Instagram", "LinkedIn", "Newsletter", "Referral", "Other"] as const;

interface ConferenceCTAProps {
  titleOverride?: { en: string; es: string; it: string };
  subtitleOverride?: { en: string; es: string; it: string };
}

export default function ConferenceCTA({ titleOverride, subtitleOverride }: ConferenceCTAProps = {}) {
  const [location, setLocation] = useState<"historic" | "seaside" | "both">("both");
  const [service, setService] = useState<string>("");
  const [hearAbout, setHearAbout] = useState<string>("");
  const conferenceRef = useRef<ConferenceBookingFieldsHandle>(null);
  const { ref, isVisible } = useScrollAnimation();
  const routeLocation = useLocation();
  const lang = routeLocation.pathname.startsWith("/es") ? "es" : routeLocation.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];
  const displayTitle = titleOverride ? titleOverride[lang] : t.title;
  const displaySubtitle = subtitleOverride ? subtitleOverride[lang] : t.subtitle;

  const isConference = service === "conference";
  const mutedColor = "text-white/60";
  const inputClass = "mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary";

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-2xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              {t.sectionLabel}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              {displayTitle}
            </h2>
            <p className={`font-body mt-4 ${mutedColor}`}>
              {displaySubtitle}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!service) {
                alert(t.selectService);
                return;
              }
              if (isConference && conferenceRef.current) {
                if (!conferenceRef.current.validate()) return;
              }
              alert(t.thankYou);
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.name}</Label>
                <Input required placeholder={t.namePlaceholder} className={inputClass} />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.email}</Label>
                <Input type="email" required placeholder={t.emailPlaceholder} className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.company}</Label>
                <Input required placeholder={t.companyPlaceholder} className={inputClass} />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.phone}</Label>
                <Input type="tel" required placeholder={t.phonePlaceholder} className={inputClass} />
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.hearLabel}</Label>
              <Select value={hearAbout} onValueChange={setHearAbout}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!hearAbout ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t.hearPlaceholder} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {hearAboutOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.locationLabel}</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {t.locations.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLocation(opt.value)}
                    className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-500 ${
                      location === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent border-white/20 text-white/60 hover:border-primary/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.serviceLabel}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!service ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {t.services.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {isConference && <ConferenceBookingFields ref={conferenceRef} lang={lang} />}

            {!isConference && (
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.message}</Label>
                <Textarea placeholder={t.messagePlaceholder} rows={4} className={inputClass} />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2"
              size="lg"
            >
              <Send className="w-4 h-4" />
              {t.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
