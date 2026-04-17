import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle2, Send, Building2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import palaceEntrance from "@/assets/palace-entrance.webp";
import palaceSecondFloor from "@/assets/palace-second-floor.webp";
import palaceCourtyard from "@/assets/palace-courtyard.webp";
import terrace1 from "@/assets/service-terrace.webp";
import terrace2 from "@/assets/terrace-events.webp";
import terraceCommunity from "@/assets/terrace-community.webp";

type Size = "small" | "medium" | "large";
type Location = "palace" | "terrace";
type Lang = "en" | "es" | "it";

const officeData: Record<Location, Record<Size, { image: string; features: Record<Lang, string[]> }>> = {
  palace: {
    small:  { image: palaceCourtyard,   features: { en: ["Historic building", "Natural light", "Air conditioning", "Private entrance"], es: ["Edificio histórico", "Luz natural", "Aire acondicionado", "Entrada privada"], it: ["Edificio storico", "Luce naturale", "Aria condizionata", "Ingresso privato"] } },
    medium: { image: palaceSecondFloor, features: { en: ["High ceilings", "Courtyard view", "Air conditioning", "Private"], es: ["Techos altos", "Vista al patio", "Aire acondicionado", "Privada"], it: ["Soffitti alti", "Vista cortile", "Aria condizionata", "Privato"] } },
    large:  { image: palaceEntrance,    features: { en: ["Fully accessible", "Catering option", "Air conditioning", "Event-ready"], es: ["Totalmente accesible", "Servicio de catering", "Aire acondicionado", "Lista para eventos"], it: ["Completamente accessibile", "Servizio catering", "Aria condizionata", "Pronto per eventi"] } },
  },
  terrace: {
    small:  { image: terrace1,          features: { en: ["Ocean view", "Air conditioning", "Modern fit-out", "Private"], es: ["Vista al mar", "Aire acondicionado", "Acabados modernos", "Privada"], it: ["Vista oceano", "Aria condizionata", "Finitura moderna", "Privato"] } },
    medium: { image: terrace2,          features: { en: ["Partial sea view", "Air conditioning", "Open layout", "4th floor"], es: ["Vista parcial al mar", "Aire acondicionado", "Planta abierta", "4ª planta"], it: ["Vista parziale mare", "Aria condizionata", "Layout aperto", "4° piano"] } },
    large:  { image: terraceCommunity,  features: { en: ["5th floor", "Panoramic views", "Air conditioning", "Fully isolated"], es: ["5ª planta", "Vistas panorámicas", "Aire acondicionado", "Totalmente aislada"], it: ["5° piano", "Vista panoramica", "Aria condizionata", "Completamente isolato"] } },
  },
};

const capacity: Record<Location, Record<Size, Record<Lang, string>>> = {
  palace:  { small: { en: "1–3 people", es: "1–3 personas", it: "1–3 persone" }, medium: { en: "4–8 people", es: "4–8 personas", it: "4–8 persone" }, large: { en: "9–15 people", es: "9–15 personas", it: "9–15 persone" } },
  terrace: { small: { en: "1–3 people", es: "1–3 personas", it: "1–3 persone" }, medium: { en: "4–8 people", es: "4–8 personas", it: "4–8 persone" }, large: { en: "9–20 people", es: "9–20 personas", it: "9–20 persone" } },
};

const sizeLabel: Record<Size, Record<Lang, string>> = {
  small:  { en: "Small Office",  es: "Oficina Small",  it: "Ufficio Small"  },
  medium: { en: "Medium Office", es: "Oficina Medium", it: "Ufficio Medium" },
  large:  { en: "Large Office",  es: "Oficina Large",  it: "Ufficio Large"  },
};

const locationLabel: Record<Location, Record<Lang, string>> = {
  palace:  { en: "Málaga Palace — Historic Center", es: "Málaga Palace — Centro Histórico", it: "Málaga Palace — Centro Storico" },
  terrace: { en: "Málaga Terrace — Seaside",        es: "Málaga Terrace — Frente al Mar",   it: "Málaga Terrace — Lungomare"      },
};

const backPaths: Record<Lang, string> = {
  en: "/en/private-offices",
  es: "/es/oficinas-privadas",
  it: "/it/uffici-privati",
};

const tr = {
  en: {
    back: "Back to Private Offices",
    title: "Request Information",
    subtitle: "Tell us a bit about yourself and we'll get back to you within 24 hours.",
    name: "Full Name",
    email: "Work Email",
    phone: "Phone Number",
    company: "Company Name",
    companyOptional: "Company Name (optional)",
    message: "Anything you'd like us to know?",
    messagePlaceholder: "Team size, preferred start date, specific requirements...",
    submit: "Send Request",
    submitting: "Sending...",
    successTitle: "Request sent!",
    successBody: "We'll be in touch within 24 hours.",
  },
  es: {
    back: "Volver a Oficinas Privadas",
    title: "Solicitar Información",
    subtitle: "Cuéntanos un poco sobre ti y te responderemos en menos de 24 horas.",
    name: "Nombre Completo",
    email: "Email de Trabajo",
    phone: "Teléfono",
    company: "Nombre de la Empresa",
    companyOptional: "Nombre de la Empresa (opcional)",
    message: "¿Algo que debamos saber?",
    messagePlaceholder: "Tamaño del equipo, fecha de inicio preferida, requisitos específicos...",
    submit: "Enviar Solicitud",
    submitting: "Enviando...",
    successTitle: "¡Solicitud enviada!",
    successBody: "Nos pondremos en contacto en menos de 24 horas.",
  },
  it: {
    back: "Torna agli Uffici Privati",
    title: "Richiedi Informazioni",
    subtitle: "Raccontaci un po' di te e ti risponderemo entro 24 ore.",
    name: "Nome e Cognome",
    email: "Email Lavorativa",
    phone: "Numero di Telefono",
    company: "Nome Azienda",
    companyOptional: "Nome Azienda (opzionale)",
    message: "Qualcosa che dovremmo sapere?",
    messagePlaceholder: "Dimensione del team, data di inizio preferita, requisiti specifici...",
    submit: "Invia Richiesta",
    submitting: "Invio in corso...",
    successTitle: "Richiesta inviata!",
    successBody: "Ti risponderemo entro 24 ore.",
  },
};

const inputCls = "w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition";
const labelCls = "block font-body text-sm font-medium text-foreground mb-1.5";

export default function OfficesLeadPage() {
  const location = useLocation();
  const lang: Lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const params = new URLSearchParams(location.search);
  const size = params.get("size") as Size | null;
  const loc = params.get("location") as Location | null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!size || !loc || !officeData[loc]?.[size]) {
    return <Navigate to={backPaths[lang]} replace />;
  }

  const t = tr[lang];
  const office = officeData[loc][size];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  return (
    <>
      <SEOHead
        title={`${sizeLabel[size][lang]} — ${locationLabel[loc][lang]}`}
        description={`Request information about a ${sizeLabel[size][lang]} at ${locationLabel[loc][lang]}.`}
        path={location.pathname + location.search}
      />
      <Navbar />

      <main className="pt-24 bg-muted/30 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">

          {/* Back link */}
          <a href={backPaths[lang]} className="inline-flex items-center gap-2 font-body text-sm text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </a>

          {/* Office summary card */}
          <div className="bg-card border border-border shadow-md rounded-3xl overflow-hidden flex flex-col md:flex-row mb-10">
            <div className="md:w-2/5 aspect-video md:aspect-auto">
              <img src={office.image} alt={sizeLabel[size][lang]} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center gap-4">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-1 font-semibold">{locationLabel[loc][lang]}</p>
                <h1 className="font-bebas text-3xl md:text-4xl text-foreground">{sizeLabel[size][lang]}</h1>
                <span className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground mt-1">
                  <Users className="w-4 h-4" /> {capacity[loc][size][lang]}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {office.features[lang].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">{t.successTitle}</h2>
                <p className="font-body text-muted-foreground">{t.successBody}</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">{t.title}</h2>
                  <p className="font-body text-sm text-muted-foreground">{t.subtitle}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>{t.name} *</label>
                      <input required type="text" className={inputCls} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className={labelCls}>{t.email} *</label>
                      <input required type="email" className={inputCls} placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>{t.phone} *</label>
                      <input required type="tel" className={inputCls} placeholder="+34 600 000 000" />
                    </div>
                    <div>
                      <label className={labelCls}>{t.companyOptional}</label>
                      <input type="text" className={inputCls} placeholder="Acme Inc." />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>{t.message}</label>
                    <textarea rows={4} className={inputCls + " resize-none"} placeholder={t.messagePlaceholder} />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest py-3"
                  >
                    {isSubmitting ? t.submitting : <><Send className="w-4 h-4 mr-2" />{t.submit}</>}
                  </Button>
                </form>
              </>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
