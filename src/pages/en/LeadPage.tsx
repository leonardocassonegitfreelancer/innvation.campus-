import { useState } from "react";
import { Check, ArrowLeft, Clock, Send, Users } from "lucide-react";
import LeadForm from "@/components/landing/LeadForm";
import EventLeadCapture from "@/pages/en/EventLeadCapture";
import { rooms, roomPaths } from "@/components/landing/MeetingRoomPage";

const thankYouBase: Record<"en" | "es" | "it", string> = {
  en: "/en/thank-you",
  es: "/es/gracias",
  it: "/it/grazie",
};

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

const checkoutI18n = {
  en: {
    tagline: "Meeting Rooms",
    title: "Request Availability",
    subtitle: "Select your room and fill in the details — we'll confirm within 24h.",
    selectRooms: "Choose Room(s)",
    yourDetails: "Your Details",
    name: "Your Name", email: "Work Email", phone: "Phone Number", company: "Company (Optional)",
    date: "Preferred Date", time: "Starting Time", guests: "Number of Attendees",
    duration: "Duration",
    durationOptions: [
      { value: "1h", label: "1 h" }, { value: "2h", label: "2 h" }, { value: "3h", label: "3 h" },
      { value: "4h", label: "4 h" }, { value: "half", label: "Half day" }, { value: "full", label: "Full day" },
    ],
    extras: "Extras",
    extraOptions: [
      { value: "after-hours", label: "Outside business hours / Weekend" },
      { value: "coffee", label: "Coffee machine" },
      { value: "catering-coffee", label: "Catering: Coffee break" },
      { value: "catering-snacks", label: "Catering: Snacks & Drinks" },
      { value: "catering-lunch", label: "Catering: Lunch / Dinner" },
    ],
    howHeard: "How did you hear about us?",
    howHeardPlaceholder: "Select an option",
    howHeardOptions: ["Social Media", "Google Search", "Word of mouth", "Event / Conference", "Other"],
    message: "Additional Notes",
    messagePlaceholder: "Preferred setup, specific requirements or any questions...",
    submit: "Request Availability", submitting: "Sending...",
    noCommitment: "Free · No commitment · Reply within 24h",
    back: "All Meeting Rooms",
    selectAtLeastOne: "Please select at least one room",
  },
  es: {
    tagline: "Salas de Reuniones",
    title: "Consultar Disponibilidad",
    subtitle: "Elige tu sala y rellena los datos — confirmamos en 24h.",
    selectRooms: "Elige Sala(s)",
    yourDetails: "Tus Datos",
    name: "Tu Nombre", email: "Email de Trabajo", phone: "Teléfono", company: "Empresa (Opcional)",
    date: "Fecha Preferida", time: "Hora de Inicio", guests: "Número de Asistentes",
    duration: "Duración",
    durationOptions: [
      { value: "1h", label: "1 h" }, { value: "2h", label: "2 h" }, { value: "3h", label: "3 h" },
      { value: "4h", label: "4 h" }, { value: "half", label: "Medio día" }, { value: "full", label: "Día completo" },
    ],
    extras: "Extras",
    extraOptions: [
      { value: "after-hours", label: "Fuera de horario / Fin de semana" },
      { value: "coffee", label: "Máquina de café" },
      { value: "catering-coffee", label: "Catering: Café" },
      { value: "catering-snacks", label: "Catering: Snacks & Bebidas" },
      { value: "catering-lunch", label: "Catering: Almuerzo / Cena" },
    ],
    howHeard: "¿Cómo nos conociste?",
    howHeardPlaceholder: "Selecciona una opción",
    howHeardOptions: ["Redes Sociales", "Búsqueda en Google", "Boca a boca", "Evento / Conferencia", "Otro"],
    message: "Notas Adicionales",
    messagePlaceholder: "Disposición preferida, requisitos específicos o preguntas...",
    submit: "Consultar Disponibilidad", submitting: "Enviando...",
    noCommitment: "Gratis · Sin compromiso · Respuesta en 24h",
    back: "Todas las Salas",
    selectAtLeastOne: "Por favor selecciona al menos una sala",
  },
  it: {
    tagline: "Sale Riunioni",
    title: "Verifica Disponibilità",
    subtitle: "Scegli la sala e inserisci i dettagli — confermiamo entro 24h.",
    selectRooms: "Scegli Sala/e",
    yourDetails: "I Tuoi Dati",
    name: "Il tuo Nome", email: "Email Lavorativa", phone: "Numero di Telefono", company: "Azienda (Opzionale)",
    date: "Data Preferita", time: "Orario di Inizio", guests: "Numero di Partecipanti",
    duration: "Durata",
    durationOptions: [
      { value: "1h", label: "1 h" }, { value: "2h", label: "2 h" }, { value: "3h", label: "3 h" },
      { value: "4h", label: "4 h" }, { value: "half", label: "Mezza giornata" }, { value: "full", label: "Giornata intera" },
    ],
    extras: "Extra",
    extraOptions: [
      { value: "after-hours", label: "Fuori orario / Weekend" },
      { value: "coffee", label: "Macchina del caffè" },
      { value: "catering-coffee", label: "Catering: Coffee break" },
      { value: "catering-snacks", label: "Catering: Snack & Bevande" },
      { value: "catering-lunch", label: "Catering: Pranzo / Cena" },
    ],
    howHeard: "Come ci hai conosciuto?",
    howHeardPlaceholder: "Seleziona un'opzione",
    howHeardOptions: ["Social Media", "Ricerca Google", "Passaparola", "Evento / Conferenza", "Altro"],
    message: "Note Aggiuntive",
    messagePlaceholder: "Preferenze di allestimento, requisiti specifici o domande...",
    submit: "Verifica Disponibilità", submitting: "Invio in corso...",
    noCommitment: "Gratuito · Senza impegno · Risposta entro 24h",
    back: "Tutte le Sale",
    selectAtLeastOne: "Seleziona almeno una sala",
  },
};

const meetingRoomBackPaths: Record<string, string> = {
  en: "/en/meeting-rooms#rooms",
  es: "/es/salas-de-reuniones#rooms",
  it: "/it/sale-riunioni#rooms",
};

function MeetingRoomCheckout({ lang, preSelectedSlug }: { lang: "en" | "es" | "it"; preSelectedSlug: string }) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(preSelectedSlug ? [preSelectedSlug] : []);
  const [duration, setDuration] = useState("");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = checkoutI18n[lang];

  const inputCls = "w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors";
  const labelCls = "font-body text-sm font-semibold text-foreground";
  const pillCls = (active: boolean) =>
    `px-4 py-2 rounded-full border font-body text-sm transition-all cursor-pointer select-none ${
      active ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
    }`;

  const toggleRoom = (slug: string) =>
    setSelectedSlugs(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);

  const toggleExtra = (val: string) =>
    setSelectedExtras(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedSlugs.length === 0) return;
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const selectedRoomNames = selectedSlugs.map(slug => rooms.find(r => r.slug === slug)?.name ?? slug);
    try {
      const res = await fetch("/api/event-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          company: fd.get("company"),
          phone: fd.get("phone"),
          service: "conference",
          date: fd.get("date"),
          guests: fd.get("guests"),
          duration,
          startingTime: fd.get("startingTime"),
          howHeard: fd.get("howHeard"),
          message: fd.get("message"),
          rooms: selectedRoomNames,
          extras: selectedExtras,
          spaceSlug: preSelectedSlug,
        }),
      });
      if (res.ok) {
        window.location.href = `${thankYouBase[lang]}/event`;
      } else {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-12">
          <Check className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-2">Request received!</h2>
          <p className="font-body text-muted-foreground">Our team will get back to you within 24h.</p>
        </div>
      </main>
    );
  }

  return (
    <div>
      {/* Hero — matches MeetingRoomPage mobile hero style */}
      <section className="relative bg-neutral-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-8">
          <a
            href={meetingRoomBackPaths[lang]}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </a>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">{t.tagline}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{t.title}</h1>
          <p className="font-body text-white/60 mt-2 max-w-2xl">{t.subtitle}</p>
        </div>
      </section>

      {/* Content — exact same container + grid as MeetingRoomPage */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left col — room selector (same style as "Explore Other Rooms") */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-5">{t.selectRooms}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {rooms.map(room => {
                  const isSelected = selectedSlugs.includes(room.slug);
                  return (
                    <button
                      key={room.slug}
                      type="button"
                      onClick={() => toggleRoom(room.slug)}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all group text-left w-full ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50 hover:shadow-sm"
                      }`}
                    >
                      <img src={room.heroImage} alt={room.name} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-display text-sm font-bold transition-colors ${
                          isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}>{room.name}</h3>
                        <p className="font-body text-xs text-muted-foreground mt-0.5">{room.capacity[lang]}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                        isSelected ? "border-primary bg-primary" : "border-muted-foreground/30"
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right col — sticky form card (same style as MeetingRoomPage sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="p-6 space-y-5">

                  <div className="space-y-1.5">
                    <label className={labelCls}>{t.name} <span className="text-destructive">*</span></label>
                    <input name="name" required type="text" className={inputCls} />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelCls}>{t.email} <span className="text-destructive">*</span></label>
                    <input name="email" required type="email" className={inputCls} />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelCls}>{t.phone}</label>
                    <input name="phone" type="tel" className={inputCls} placeholder="+34 600 000 000" />
                  </div>

                  <div className="border-t border-border pt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className={`${labelCls} text-xs`}>{t.date}</label>
                        <input name="date" type="date" className={inputCls + " py-2"} />
                      </div>
                      <div className="space-y-1.5">
                        <label className={`${labelCls} text-xs`}>{t.time}</label>
                        <input name="startingTime" type="time" className={inputCls + " py-2"} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`${labelCls} text-xs flex items-center gap-1`}>
                        <Users className="w-3.5 h-3.5" />{t.guests} <span className="text-destructive">*</span>
                      </label>
                      <input name="guests" required type="number" min="1" placeholder="e.g. 20" className={inputCls + " py-2"} />
                    </div>

                    <div className="space-y-2">
                      <label className={`${labelCls} text-xs`}>{t.duration}</label>
                      <div className="flex flex-wrap gap-1.5">
                        {t.durationOptions.map(opt => (
                          <button key={opt.value} type="button" onClick={() => setDuration(opt.value === duration ? "" : opt.value)}
                            className={`px-3 py-1.5 rounded-full border font-body text-xs transition-all cursor-pointer ${
                              duration === opt.value ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border text-muted-foreground hover:border-primary/60"
                            }`}>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className={`${labelCls} text-xs`}>{t.extras}</label>
                      <div className="flex flex-wrap gap-1.5">
                        {t.extraOptions.map(opt => (
                          <button key={opt.value} type="button" onClick={() => toggleExtra(opt.value)}
                            className={`px-3 py-1.5 rounded-full border font-body text-xs transition-all cursor-pointer ${
                              selectedExtras.includes(opt.value) ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border text-muted-foreground hover:border-primary/60"
                            }`}>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`${labelCls} text-xs`}>{t.howHeard} <span className="text-destructive">*</span></label>
                      <select name="howHeard" required defaultValue="" className={inputCls + " py-2 appearance-none cursor-pointer"}>
                        <option value="" disabled>{t.howHeardPlaceholder}</option>
                        {t.howHeardOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`${labelCls} text-xs`}>{t.message}</label>
                      <textarea name="message" rows={2} placeholder={t.messagePlaceholder} className={inputCls + " resize-none py-2"} />
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || selectedSlugs.length === 0}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t.submitting : <><Send className="w-4 h-4" /> {t.submit}</>}
                    </button>
                    <p className="text-center font-body text-xs text-muted-foreground mt-2">
                      {selectedSlugs.length === 0 ? t.selectAtLeastOne : t.noCommitment}
                    </p>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

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
      <div className="max-w-4xl mx-auto px-6 py-16">
        <LeadForm lang={lang} embedded defaultService={defaultService} />
      </div>
    </main>
  );
}
