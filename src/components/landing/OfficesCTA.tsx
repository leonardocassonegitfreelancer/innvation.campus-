import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const translations = {
  en: {
    sectionLabel: "Get in Touch",
    title: "Enquire About an Office",
    subtitle: "Tell us about your team and we'll find the perfect space for you.",
    name: "Name", namePlaceholder: "Your name",
    email: "Email", emailPlaceholder: "you@example.com",
    company: "Company Name", companyPlaceholder: "Your company",
    phone: "Phone Number (with country code)", phonePlaceholder: "+34 600 000 000",
    hearLabel: "How did you hear about us?", hearPlaceholder: "Select an option",
    teamSize: "Team Size", teamPlaceholder: "Select team size",
    teams: [
      { value: "1-2", label: "1–2 people" },
      { value: "3-5", label: "3–5 people" },
      { value: "6-10", label: "6–10 people" },
      { value: "11-20", label: "11–20 people" },
      { value: "20+", label: "20+ people" },
    ],
    message: "Message", messagePlaceholder: "Tell us what you're looking for...",
    submit: "Send Message",
    thankYou: "Thank you! We'll get back to you soon.",
  },
  es: {
    sectionLabel: "Contáctanos",
    title: "Consulta Sobre una Oficina",
    subtitle: "Cuéntanos sobre tu equipo y encontraremos el espacio perfecto para ti.",
    name: "Nombre", namePlaceholder: "Tu nombre",
    email: "Email", emailPlaceholder: "tu@ejemplo.com",
    company: "Nombre de Empresa", companyPlaceholder: "Tu empresa",
    phone: "Teléfono (con código de país)", phonePlaceholder: "+34 600 000 000",
    hearLabel: "¿Cómo nos conociste?", hearPlaceholder: "Selecciona una opción",
    teamSize: "Tamaño del Equipo", teamPlaceholder: "Selecciona tamaño",
    teams: [
      { value: "1-2", label: "1–2 personas" },
      { value: "3-5", label: "3–5 personas" },
      { value: "6-10", label: "6–10 personas" },
      { value: "11-20", label: "11–20 personas" },
      { value: "20+", label: "20+ personas" },
    ],
    message: "Mensaje", messagePlaceholder: "Cuéntanos qué necesitas...",
    submit: "Enviar Mensaje",
    thankYou: "¡Gracias! Te responderemos pronto.",
  },
  it: {
    sectionLabel: "Contattaci",
    title: "Richiedi Info su un Ufficio",
    subtitle: "Raccontaci del tuo team e troveremo lo spazio perfetto per te.",
    name: "Nome", namePlaceholder: "Il tuo nome",
    email: "Email", emailPlaceholder: "tu@esempio.com",
    company: "Nome Azienda", companyPlaceholder: "La tua azienda",
    phone: "Telefono (con prefisso internazionale)", phonePlaceholder: "+39 333 000 0000",
    hearLabel: "Come ci hai conosciuto?", hearPlaceholder: "Seleziona un'opzione",
    teamSize: "Dimensione del Team", teamPlaceholder: "Seleziona dimensione",
    teams: [
      { value: "1-2", label: "1–2 persone" },
      { value: "3-5", label: "3–5 persone" },
      { value: "6-10", label: "6–10 persone" },
      { value: "11-20", label: "11–20 persone" },
      { value: "20+", label: "20+ persone" },
    ],
    message: "Messaggio", messagePlaceholder: "Raccontaci cosa stai cercando...",
    submit: "Invia Messaggio",
    thankYou: "Grazie! Ti risponderemo presto.",
  },
};

const hearAboutOptions = ["Google", "Instagram", "LinkedIn", "Newsletter", "Referral", "Other"] as const;

export default function OfficesCTA() {
  const [hearAbout, setHearAbout] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const { ref, isVisible } = useScrollAnimation();
  const routeLocation = useLocation();
  const lang = routeLocation.pathname.startsWith("/es") ? "es" : routeLocation.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  const mutedColor = "text-white/60";
  const inputClass = "mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary";

  return (
    <section className="relative py-24 md:py-36 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-2xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">{t.sectionLabel}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.title}</h2>
            <p className={`font-body mt-4 ${mutedColor}`}>{t.subtitle}</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert(t.thankYou); }} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label className={`font-body text-sm ${mutedColor}`}>{t.name}</Label><Input required placeholder={t.namePlaceholder} className={inputClass} /></div>
              <div><Label className={`font-body text-sm ${mutedColor}`}>{t.email}</Label><Input type="email" required placeholder={t.emailPlaceholder} className={inputClass} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label className={`font-body text-sm ${mutedColor}`}>{t.company}</Label><Input required placeholder={t.companyPlaceholder} className={inputClass} /></div>
              <div><Label className={`font-body text-sm ${mutedColor}`}>{t.phone}</Label><Input type="tel" required placeholder={t.phonePlaceholder} className={inputClass} /></div>
            </div>
            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.hearLabel}</Label>
              <Select value={hearAbout} onValueChange={setHearAbout}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!hearAbout ? "text-white/30" : ""}`}><SelectValue placeholder={t.hearPlaceholder} /></SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">{hearAboutOptions.map((opt) => (<SelectItem key={opt} value={opt}>{opt}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t.teamSize}</Label>
              <Select value={teamSize} onValueChange={setTeamSize}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!teamSize ? "text-white/30" : ""}`}><SelectValue placeholder={t.teamPlaceholder} /></SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">{t.teams.map((opt) => (<SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div><Label className={`font-body text-sm ${mutedColor}`}>{t.message}</Label><Textarea placeholder={t.messagePlaceholder} rows={4} className={inputClass} /></div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2" size="lg"><Send className="w-4 h-4" />{t.submit}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
