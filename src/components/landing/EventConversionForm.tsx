import { useState, useMemo } from "react";
import { Calendar, Users, Briefcase, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const thankYouBase: Record<"en" | "es" | "it", string> = {
  en: "/en/thank-you",
  es: "/es/gracias",
  it: "/it/grazie",
};

const roomOptions = {
  en: [
    "Conference room full 80pp (palace)",
    "Conference room big 50pp (palace)",
    "Conference room small 30pp (palace)",
    "Entrance meeting room 25pp (palace)",
    "Malaga terrace full 100pp",
    "Malaga terrace half 40pp",
    "Training room 40ppl (terrace)",
    "First floor training room (terrace)",
  ],
  es: [
    "Sala conferencias completa 80pp (palace)",
    "Sala conferencias grande 50pp (palace)",
    "Sala conferencias pequeña 30pp (palace)",
    "Sala reuniones entrada 25pp (palace)",
    "Terraza Málaga completa 100pp",
    "Terraza Málaga media 40pp",
    "Sala formación 40pp (terraza)",
    "Sala formación primera planta (terraza)",
  ],
  it: [
    "Sala conferenze completa 80pp (palace)",
    "Sala conferenze grande 50pp (palace)",
    "Sala conferenze piccola 30pp (palace)",
    "Sala riunioni ingresso 25pp (palace)",
    "Terrazza Málaga completa 100pp",
    "Terrazza Málaga metà 40pp",
    "Sala formazione 40pp (terrazza)",
    "Sala formazione primo piano (terrazza)",
  ],
};

const translations = {
  en: {
    title: "Ready to host your event?",
    subtitle: "Tell us about your needs and we'll get back to you with a tailored proposal within 24 hours.",
    form: {
      name: "Your Name",
      email: "Work Email",
      company: "Company (Optional)",
      date: "Preferred Date",
      guests: "Number of Attendees",
      type: "Event Type",
      typeOptions: ["Workshop/Training", "Conference/Presentation", "Networking/Party", "Offsite/Retreat", "Other"],
      rooms: "Room Selection",
      duration: "Duration",
      durationOptions: ["1 h", "2 h", "3 h", "4 h", "Half day", "Full day"],
      startingTime: "Starting time",
      projector: "Projector / TV",
      microphone: "Microphone",
      yes: "Yes",
      no: "No",
      extras: "Extras",
      extraOptions: [
        "Outside business hours / Weekend",
        "Coffee machine",
        "Catering: Coffee break",
        "Catering: Snacks & Drinks",
        "Catering: Lunch / Dinner",
      ],
      howHeard: "How did you hear about us?",
      howHeardOptions: ["Social Media", "Google Search", "Word of mouth", "Event / Conference", "Other"],
      message: "Please provide any additional useful info",
      messagePlaceholder: "Tell us about the vibe, layout preferences, or any specific requirements...",
      submit: "Request a Proposal",
      submitting: "Sending...",
      successTitle: "Request Received!",
      successDesc: "Our events team will contact you shortly to finalize the details.",
    },
  },
  es: {
    title: "¿Listo para organizar tu evento?",
    subtitle: "Cuéntanos tus necesidades y te responderemos con una propuesta a medida en 24 horas.",
    form: {
      name: "Tu Nombre",
      email: "Email de Trabajo",
      company: "Empresa (Opcional)",
      date: "Fecha Preferida",
      guests: "Número de Asistentes",
      type: "Tipo de Evento",
      typeOptions: ["Taller/Formación", "Conferencia", "Networking/Fiesta", "Retiro de Empresa", "Otro"],
      rooms: "Selección de Sala",
      duration: "Duración",
      durationOptions: ["1 h", "2 h", "3 h", "4 h", "Medio día", "Día completo"],
      startingTime: "Hora de inicio",
      projector: "Proyector / TV",
      microphone: "Micrófono",
      yes: "Sí",
      no: "No",
      extras: "Extras",
      extraOptions: [
        "Fuera de horario / Fin de semana",
        "Máquina de café",
        "Catering: Café",
        "Catering: Snacks & Bebidas",
        "Catering: Almuerzo / Cena",
      ],
      howHeard: "¿Cómo nos conociste?",
      howHeardOptions: ["Redes Sociales", "Búsqueda en Google", "Boca a boca", "Evento / Conferencia", "Otro"],
      message: "Información adicional útil",
      messagePlaceholder: "Cuéntanos sobre el ambiente, disposición preferida o requisitos específicos...",
      submit: "Solicitar Presupuesto",
      submitting: "Enviando...",
      successTitle: "¡Solicitud Recibida!",
      successDesc: "Nuestro equipo de eventos te contactará pronto para finalizar los detalles.",
    },
  },
  it: {
    title: "Pronto a organizzare il tuo evento?",
    subtitle: "Raccontaci le tue esigenze e ti risponderemo con una proposta su misura entro 24 ore.",
    form: {
      name: "Il tuo Nome",
      email: "Email Lavorativa",
      company: "Azienda (Opzionale)",
      date: "Data Preferita",
      guests: "Numero di Partecipanti",
      type: "Tipo di Evento",
      typeOptions: ["Workshop/Formazione", "Conferenza", "Networking/Festa", "Ritiro Aziendale", "Altro"],
      rooms: "Selezione Sala",
      duration: "Durata",
      durationOptions: ["1 h", "2 h", "3 h", "4 h", "Mezza giornata", "Giornata intera"],
      startingTime: "Orario di inizio",
      projector: "Proiettore / TV",
      microphone: "Microfono",
      yes: "Sì",
      no: "No",
      extras: "Extra",
      extraOptions: [
        "Fuori orario / Weekend",
        "Macchina del caffè",
        "Catering: Pausa caffè",
        "Catering: Snack & Bevande",
        "Catering: Pranzo / Cena",
      ],
      howHeard: "Come ci hai conosciuto?",
      howHeardOptions: ["Social Media", "Ricerca Google", "Passaparola", "Evento / Conferenza", "Altro"],
      message: "Informazioni aggiuntive utili",
      messagePlaceholder: "Raccontaci dell'atmosfera, preferenze di layout o requisiti specifici...",
      submit: "Richiedi un Preventivo",
      submitting: "Invio in corso...",
      successTitle: "Richiesta Ricevuta!",
      successDesc: "Il nostro team eventi ti contatterà a breve per definire i dettagli.",
    },
  },
};

// Maps space slug → room option index (0-based) per lang
const slugToRoomIndex: Record<string, number> = {
  "big-conference-room": 0,
  "large-conference-room": 1,
  "quarter-conference-room": 2,
  "training-room": 6,
  "phone-booth": 3,
  "malaga-palace": 4,
  "seaside-terrace": 4,
  "private-terrace": 5,
  "sea-view-lounge": 6,
  "beachfront-events": 4,
};

const inputCls = "w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors";
const labelCls = "font-body text-sm font-semibold text-foreground";

export default function EventConversionForm({ lang = "en", embedded = false }: { lang?: "en" | "es" | "it"; embedded?: boolean }) {
  const t = translations[lang];
  const rooms = roomOptions[lang];

  // For preselected room, we might still need search params if accessed via link
  // but we can pass it as a prop too. Let's keep it checking URL for now as it doesn't break SSR as much as useLocation
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const spaceSlug = params.get("space") ?? "";
  const serviceParam = params.get("service") ?? "";
  const preselectedRoom = useMemo(() => {
    const idx = slugToRoomIndex[spaceSlug];
    return idx !== undefined ? rooms[idx] : null;
  }, [spaceSlug, rooms]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState<string[]>(preselectedRoom ? [preselectedRoom] : []);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [projector, setProjector] = useState<"yes" | "no" | "">("");
  const [microphone, setMicrophone] = useState<"yes" | "no" | "">("");

  const toggleCheckbox = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/event-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          company: fd.get("company"),
          date: fd.get("date"),
          guests: fd.get("guests"),
          eventType: fd.get("eventType"),
          duration: fd.get("duration"),
          startingTime: fd.get("startingTime"),
          howHeard: fd.get("howHeard"),
          message: fd.get("message"),
          rooms: selectedRooms,
          extras: selectedExtras,
          projector,
          microphone,
          spaceSlug: spaceSlug || serviceParam,
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

  return (
    <section id="event-contact" className={embedded ? "" : "py-24 bg-card border-t border-border"}>
      <div className={embedded ? "" : "max-w-4xl mx-auto px-6"}>

        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">{t.title}</h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}><UserIcon className="inline w-4 h-4 text-primary mr-2" />{t.form.name}</label>
                  <input name="name" required type="text" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}><Mail className="inline w-4 h-4 text-primary mr-2" />{t.form.email}</label>
                  <input name="email" required type="email" className={inputCls} />
                </div>
              </div>

              {/* Company + Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}><Briefcase className="inline w-4 h-4 text-primary mr-2" />{t.form.company}</label>
                  <input name="company" type="text" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>{t.form.type}</label>
                  <select name="eventType" required className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="" disabled>-- Select --</option>
                    {t.form.typeOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              {/* Date + Attendees */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}><Calendar className="inline w-4 h-4 text-primary mr-2" />{t.form.date}</label>
                  <input name="date" type="date" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}><Users className="inline w-4 h-4 text-primary mr-2" />{t.form.guests}</label>
                  <input name="guests" required type="number" min="1" placeholder="e.g. 50" className={inputCls} />
                </div>
              </div>

              {/* Room selection */}
              <div className="space-y-3">
                <label className={labelCls}>{t.form.rooms}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {rooms.map((room) => (
                    <label key={room} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedRooms.includes(room)}
                        onChange={() => toggleCheckbox(room, selectedRooms, setSelectedRooms)}
                        className="w-4 h-4 rounded accent-primary cursor-pointer"
                      />
                      <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{room}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration + Starting time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}>{t.form.duration} <span className="text-destructive">*</span></label>
                  <select name="duration" required className={inputCls + " appearance-none cursor-pointer"}>
                    <option value="" disabled>--</option>
                    {t.form.durationOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={labelCls}><Clock className="inline w-4 h-4 text-primary mr-2" />{t.form.startingTime} <span className="text-destructive">*</span></label>
                  <input name="startingTime" required type="time" className={inputCls} />
                </div>
              </div>

              {/* Projector + Microphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}>{t.form.projector}</label>
                  <div className="flex gap-6">
                    {(["yes", "no"] as const).map((val) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="projector" value={val} checked={projector === val} onChange={() => setProjector(val)} className="accent-primary" />
                        <span className="font-body text-sm">{val === "yes" ? t.form.yes : t.form.no}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>{t.form.microphone}</label>
                  <div className="flex gap-6">
                    {(["yes", "no"] as const).map((val) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="microphone" value={val} checked={microphone === val} onChange={() => setMicrophone(val)} className="accent-primary" />
                        <span className="font-body text-sm">{val === "yes" ? t.form.yes : t.form.no}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Extras */}
              <div className="space-y-3">
                <label className={labelCls}>{t.form.extras}</label>
                <div className="flex flex-col gap-2">
                  {t.form.extraOptions.map((extra) => (
                    <label key={extra} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(extra)}
                        onChange={() => toggleCheckbox(extra, selectedExtras, setSelectedExtras)}
                        className="w-4 h-4 rounded accent-primary cursor-pointer"
                      />
                      <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{extra}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="space-y-2">
                <label className={labelCls}>{t.form.howHeard} <span className="text-destructive">*</span></label>
                <select name="howHeard" required className={inputCls + " appearance-none cursor-pointer"}>
                  <option value="" disabled>--</option>
                  {t.form.howHeardOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Additional info */}
              <div className="space-y-2">
                <label className={labelCls}>{t.form.message}</label>
                <textarea name="message" rows={4} placeholder={t.form.messagePlaceholder} className={inputCls + " resize-y"} />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.form.submitting : <><Send className="w-4 h-4" /> {t.form.submit}</>}
                </button>
              </div>

            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary/10 border border-primary/20 p-12 rounded-3xl flex flex-col items-center justify-center text-center"
          >
            <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">{t.form.successTitle}</h3>
            <p className="font-body text-muted-foreground">{t.form.successDesc}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
