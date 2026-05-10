import { useState } from "react";
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

const translations = {
  en: {
    tagline: "Get in Touch",
    title: "Start your journey",
    subtitle: "Ask a question, check availability or become a member.",
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
      { value: "historic", label: "Historic Center" },
      { value: "seaside", label: "Seaside" },
      { value: "both", label: "Both" },
    ],
    serviceLabel: "What are you looking for?",
    servicePlaceholder: "Select a service",
    services: [
      "I want to host my event at Innovation Campus",
      "I want to rent a private office",
      "I want to become a coworker",
      "I want to register my business",
      "Other / General info",
    ],
    hearLabel: "How did you hear about us?",
    hearPlaceholder: "Select an option",
    hearOptions: ["Google", "Instagram", "LinkedIn", "Newsletter", "Referral", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us what you're looking for...",
    send: "Send Message",
    alertService: "Please select a service.",
    alertSuccess: "Thank you! We'll get back to you soon.",
  },
  es: {
    tagline: "Contáctanos",
    title: "Empieza tu camino",
    subtitle: "Haz una pregunta, consulta disponibilidad o hazte miembro.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    company: "Nombre de la empresa",
    companyPlaceholder: "Tu empresa",
    phone: "Teléfono (con código de país)",
    phonePlaceholder: "+34 600 000 000",
    locationLabel: "¿Qué sede te interesa?",
    locations: [
      { value: "historic", label: "Centro Histórico" },
      { value: "seaside", label: "Frente al Mar" },
      { value: "both", label: "Ambas" },
    ],
    serviceLabel: "¿Qué estás buscando?",
    servicePlaceholder: "Selecciona un servicio",
    services: [
      "Quiero organizar mi evento en Innovation Campus",
      "Quiero alquilar una oficina privada",
      "Quiero ser coworker",
      "Quiero registrar mi empresa",
      "Otro / Información general",
    ],
    hearLabel: "¿Cómo nos conociste?",
    hearPlaceholder: "Selecciona una opción",
    hearOptions: ["Google", "Instagram", "LinkedIn", "Newsletter", "Referido", "Otro"],
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos qué buscas...",
    send: "Enviar mensaje",
    alertService: "Por favor selecciona un servicio.",
    alertSuccess: "¡Gracias! Nos pondremos en contacto pronto.",
  },
  it: {
    tagline: "Contattaci",
    title: "Inizia il tuo percorso",
    subtitle: "Fai una domanda, verifica la disponibilità o diventa membro.",
    name: "Nome",
    namePlaceholder: "Il tuo nome",
    email: "Email",
    emailPlaceholder: "tu@esempio.com",
    company: "Nome azienda",
    companyPlaceholder: "La tua azienda",
    phone: "Telefono (con prefisso internazionale)",
    phonePlaceholder: "+39 000 000 0000",
    locationLabel: "Quale sede ti interessa?",
    locations: [
      { value: "historic", label: "Centro Storico" },
      { value: "seaside", label: "Lungomare" },
      { value: "both", label: "Entrambe" },
    ],
    serviceLabel: "Cosa stai cercando?",
    servicePlaceholder: "Seleziona un servizio",
    services: [
      "Voglio organizzare il mio evento a Innovation Campus",
      "Voglio affittare un ufficio privato",
      "Voglio diventare un coworker",
      "Voglio registrare la mia azienda",
      "Altro / Informazioni generali",
    ],
    hearLabel: "Come ci hai conosciuto?",
    hearPlaceholder: "Seleziona un'opzione",
    hearOptions: ["Google", "Instagram", "LinkedIn", "Newsletter", "Referral", "Altro"],
    message: "Messaggio",
    messagePlaceholder: "Dicci cosa stai cercando...",
    send: "Invia messaggio",
    alertService: "Seleziona un servizio.",
    alertSuccess: "Grazie! Ti risponderemo presto.",
  },
} as const;

export default function ContactSection({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];
  const [location, setLocation] = useState<"historic" | "seaside" | "both">("both");
  const [service, setService] = useState<string>("");
  const [hearAbout, setHearAbout] = useState<string>("");
  const bgStyle = "bg-neutral-dark";
  const textColor = "text-white";
  const mutedColor = "text-white/60";
  const inputClass = "mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary";

  return (
    <section id="contact" className={`relative py-24 md:py-36 transition-all duration-1000 ${bgStyle} overflow-hidden`}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-2xl mx-auto px-6">
        <div>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              {t.tagline}
            </p>
            <h2 className={`font-display text-3xl md:text-5xl font-bold ${textColor}`}>
              {t.title}
            </h2>
            <p className={`font-body mt-4 ${mutedColor}`}>
              {t.subtitle}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!service) {
                alert(t.alertService);
                return;
              }
              alert(t.alertSuccess);
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.name}</Label>
                <Input
                  required
                  placeholder={t.namePlaceholder}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.email}</Label>
                <Input
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.company}</Label>
                <Input
                  required
                  placeholder={t.companyPlaceholder}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t.phone}</Label>
                <Input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t.locationLabel}
              </Label>
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
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t.serviceLabel}
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!service ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {t.services.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t.hearLabel}
              </Label>
              <Select value={hearAbout} onValueChange={setHearAbout}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!hearAbout ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t.hearPlaceholder} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {t.hearOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.message}</Label>
              <Textarea
                placeholder={t.messagePlaceholder}
                rows={4}
                className={inputClass}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2"
              size="lg"
            >
              <Send className="w-4 h-4" />
              {t.send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
