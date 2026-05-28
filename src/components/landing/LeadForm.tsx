import { useState } from "react";
import { Mail, Clock, Send, CheckCircle2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    "Training room 5th floor 30pp (terrace)",
    "Training room 4th floor 30pp (terrace)",
  ],
  es: [
    "Sala conferencias completa 80pp (palace)",
    "Sala conferencias grande 50pp (palace)",
    "Sala conferencias pequeña 30pp (palace)",
    "Sala reuniones entrada 25pp (palace)",
    "Sala formación 5ª planta 30pp (terraza)",
    "Sala formación 4ª planta 30pp (terraza)",
  ],
  it: [
    "Sala conferenze completa 80pp (palace)",
    "Sala conferenze grande 50pp (palace)",
    "Sala conferenze piccola 30pp (palace)",
    "Sala riunioni ingresso 25pp (palace)",
    "Sala formazione 5° piano 30pp (terrazza)",
    "Sala formazione 4° piano 30pp (terrazza)",
  ],
};

const translations = {
  en: {
    title: "Get in touch",
    subtitle: "Ask a question, check availability or request a personalised quote.",
    form: {
      name: "Your Name",
      email: "Work Email",
      company: "Company (Optional)",
      phone: "Phone Number",
      service: "What are you looking for?",
      servicePlaceholder: "Select a service",
      serviceOptions: [
        { value: "conference", label: "Book a conference / meeting room" },
        { value: "terrace", label: "Book a private rooftop terrace" },
        { value: "office", label: "Rent a private office" },
        { value: "coworking", label: "Become a coworker" },
        { value: "bizreg", label: "Business registration" },
        { value: "other", label: "Other / General info" },
      ],
      rooms: "Room Selection",
      date: "Preferred Date",
      guests: "Number of Attendees",
      type: "Event Type",
      typeOptions: ["Workshop / Training", "Conference / Presentation", "Networking / Party", "Offsite / Retreat", "Other"],
      duration: "Duration",
      durationOptions: [
        { value: "1h", label: "1 h" },
        { value: "2h", label: "2 h" },
        { value: "3h", label: "3 h" },
        { value: "4h", label: "4 h" },
        { value: "half", label: "Half day" },
        { value: "full", label: "Full day" },
      ],
      startingTime: "Starting Time",
      projector: "Projector / TV",
      microphone: "Microphone",
      yes: "Yes",
      no: "No",
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
      message: "Message",
      messagePlaceholder: "Tell us about your needs, preferred setup or any specific requirements...",
      submit: "Send Request",
      submitting: "Sending...",
      successTitle: "Request Received!",
      successDesc: "Our team will get back to you within 24 hours with a tailored proposal.",
    },
  },
  es: {
    title: "Contáctanos",
    subtitle: "Haz una pregunta, consulta disponibilidad o solicita un presupuesto personalizado.",
    form: {
      name: "Tu Nombre",
      email: "Email de Trabajo",
      company: "Empresa (Opcional)",
      phone: "Teléfono",
      service: "¿Qué estás buscando?",
      servicePlaceholder: "Selecciona un servicio",
      serviceOptions: [
        { value: "conference", label: "Reservar una sala de conferencias" },
        { value: "terrace", label: "Reservar una terraza privada" },
        { value: "office", label: "Alquilar una oficina privada" },
        { value: "coworking", label: "Convertirme en coworker" },
        { value: "bizreg", label: "Domiciliación de empresa" },
        { value: "other", label: "Otro / Información general" },
      ],
      rooms: "Selección de Sala",
      date: "Fecha Preferida",
      guests: "Número de Asistentes",
      type: "Tipo de Evento",
      typeOptions: ["Taller / Formación", "Conferencia / Presentación", "Networking / Fiesta", "Retiro de Empresa", "Otro"],
      duration: "Duración",
      durationOptions: [
        { value: "1h", label: "1 h" },
        { value: "2h", label: "2 h" },
        { value: "3h", label: "3 h" },
        { value: "4h", label: "4 h" },
        { value: "half", label: "Medio día" },
        { value: "full", label: "Día completo" },
      ],
      startingTime: "Hora de Inicio",
      projector: "Proyector / TV",
      microphone: "Micrófono",
      yes: "Sí",
      no: "No",
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
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos tus necesidades, disposición preferida o cualquier requisito específico...",
      submit: "Enviar Solicitud",
      submitting: "Enviando...",
      successTitle: "¡Solicitud Recibida!",
      successDesc: "Nuestro equipo te responderá en 24 horas con una propuesta a medida.",
    },
  },
  it: {
    title: "Contattaci",
    subtitle: "Fai una domanda, verifica la disponibilità o richiedi un preventivo personalizzato.",
    form: {
      name: "Il tuo Nome",
      email: "Email Lavorativa",
      company: "Azienda (Opzionale)",
      phone: "Numero di Telefono",
      service: "Cosa stai cercando?",
      servicePlaceholder: "Seleziona un servizio",
      serviceOptions: [
        { value: "conference", label: "Prenotare una sala conferenze / riunioni" },
        { value: "terrace", label: "Prenotare una terrazza privata" },
        { value: "office", label: "Affittare un ufficio privato" },
        { value: "coworking", label: "Diventare coworker" },
        { value: "bizreg", label: "Domiciliazione aziendale" },
        { value: "other", label: "Altro / Informazioni generali" },
      ],
      rooms: "Selezione Sala",
      date: "Data Preferita",
      guests: "Numero di Partecipanti",
      type: "Tipo di Evento",
      typeOptions: ["Workshop / Formazione", "Conferenza / Presentazione", "Networking / Festa", "Ritiro Aziendale", "Altro"],
      duration: "Durata",
      durationOptions: [
        { value: "1h", label: "1 h" },
        { value: "2h", label: "2 h" },
        { value: "3h", label: "3 h" },
        { value: "4h", label: "4 h" },
        { value: "half", label: "Mezza giornata" },
        { value: "full", label: "Giornata intera" },
      ],
      startingTime: "Orario di Inizio",
      projector: "Proiettore / TV",
      microphone: "Microfono",
      yes: "Sì",
      no: "No",
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
      message: "Messaggio",
      messagePlaceholder: "Raccontaci le tue esigenze, preferenze di allestimento o requisiti specifici...",
      submit: "Invia Richiesta",
      submitting: "Invio in corso...",
      successTitle: "Richiesta Ricevuta!",
      successDesc: "Il nostro team ti risponderà entro 24 ore con una proposta su misura.",
    },
  },
};

const inputCls =
  "w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors";
const labelCls = "font-body text-sm font-semibold text-foreground";

const pillCls = (active: boolean) =>
  `px-4 py-2 rounded-full border font-body text-sm transition-all cursor-pointer select-none ${
    active
      ? "bg-primary text-primary-foreground border-primary"
      : "bg-muted border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
  }`;

interface LeadFormProps {
  lang?: "en" | "es" | "it";
  embedded?: boolean;
  defaultService?: string;
}

export default function LeadForm({
  lang = "en",
  embedded = false,
  defaultService = "",
}: LeadFormProps) {
  const t = translations[lang];
  const rooms = roomOptions[lang];

  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const spaceSlug = params.get("space") ?? "";

  const urlServiceMap: Record<string, string> = {
    "meeting-rooms": "conference",
    "private-terrace": "terrace",
    "private-office": "office",
    "coworking": "coworking",
    "business-registration": "bizreg",
    "general": "other",
  };
  const urlService = urlServiceMap[params.get("service") ?? ""] ?? "";

  const [service, setService] = useState(defaultService || urlService || (spaceSlug ? "conference" : ""));
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [projector, setProjector] = useState<"yes" | "no" | "">("");
  const [microphone, setMicrophone] = useState<"yes" | "no" | "">("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isConference = service === "conference";
  const isTerrace = service === "terrace";
  const showBookingFields = isConference || isTerrace;

  const toggleItem = (value: string, list: string[], setList: (v: string[]) => void) => {
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
          phone: fd.get("phone"),
          service,
          date: fd.get("date"),
          guests: fd.get("guests"),
          eventType: fd.get("eventType"),
          duration,
          startingTime: fd.get("startingTime"),
          howHeard: fd.get("howHeard"),
          message: fd.get("message"),
          rooms: selectedRooms,
          extras: selectedExtras,
          projector,
          microphone,
          spaceSlug,
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
    <section id="contact" className={embedded ? "" : "py-24 bg-card border-t border-border"}>
      <div className={embedded ? "" : "max-w-4xl mx-auto px-6"}>
        {!embedded && (
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">{t.title}</h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
          </div>
        )}

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
                  <label className={labelCls}>
                    <UserIcon className="inline w-4 h-4 text-primary mr-2" />
                    {t.form.name} <span className="text-destructive">*</span>
                  </label>
                  <input name="name" required type="text" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>
                    <Mail className="inline w-4 h-4 text-primary mr-2" />
                    {t.form.email} <span className="text-destructive">*</span>
                  </label>
                  <input name="email" required type="email" className={inputCls} />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelCls}>
                    <BriefcaseIcon className="inline w-4 h-4 text-primary mr-2" />
                    {t.form.company}
                  </label>
                  <input name="company" type="text" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>
                    <Phone className="inline w-4 h-4 text-primary mr-2" />
                    {t.form.phone}
                  </label>
                  <input name="phone" type="tel" className={inputCls} placeholder="+34 600 000 000" />
                </div>
              </div>

              {/* Service selector */}
              <div className="space-y-2">
                <label className={labelCls}>
                  {t.form.service} <span className="text-destructive">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setSelectedRooms([]);
                    setDuration("");
                    setProjector("");
                    setMicrophone("");
                    setSelectedExtras([]);
                  }}
                  className={inputCls + " appearance-none cursor-pointer"}
                >
                  <option value="" disabled>{t.form.servicePlaceholder}</option>
                  {t.form.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Cascading booking fields */}
              <AnimatePresence>
                {showBookingFields && (
                  <motion.div
                    key="booking-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 overflow-hidden"
                  >
                    {/* Room selection — conference only */}
                    {isConference && (
                      <div className="space-y-3">
                        <label className={labelCls}>{t.form.rooms}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {rooms.map((room) => (
                            <label key={room} className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedRooms.includes(room)}
                                onChange={() => toggleItem(room, selectedRooms, setSelectedRooms)}
                                className="w-4 h-4 rounded accent-primary cursor-pointer"
                              />
                              <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                                {room}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Date + Starting time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={labelCls}>{t.form.date}</label>
                        <input name="date" type="date" className={inputCls} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelCls}>
                          <Clock className="inline w-4 h-4 text-primary mr-2" />
                          {t.form.startingTime}
                        </label>
                        <input name="startingTime" type="time" className={inputCls} />
                      </div>
                    </div>

                    {/* Guests + Event type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={labelCls}>
                          <UsersIcon className="inline w-4 h-4 text-primary mr-2" />
                          {t.form.guests} <span className="text-destructive">*</span>
                        </label>
                        <input
                          name="guests"
                          required
                          type="number"
                          min="1"
                          placeholder="e.g. 30"
                          className={inputCls}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelCls}>{t.form.type}</label>
                        <select name="eventType" className={inputCls + " appearance-none cursor-pointer"}>
                          <option value="">--</option>
                          {t.form.typeOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Duration — pills */}
                    <div className="space-y-3">
                      <label className={labelCls}>{t.form.duration}</label>
                      <div className="flex flex-wrap gap-2">
                        {t.form.durationOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setDuration(opt.value === duration ? "" : opt.value)}
                            className={pillCls(duration === opt.value)}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Projector + Microphone — pills (conference only) */}
                    {isConference && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className={labelCls}>{t.form.projector}</label>
                          <div className="flex gap-2">
                            {(["yes", "no"] as const).map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => setProjector(val === projector ? "" : val)}
                                className={pillCls(projector === val)}
                              >
                                {val === "yes" ? t.form.yes : t.form.no}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className={labelCls}>{t.form.microphone}</label>
                          <div className="flex gap-2">
                            {(["yes", "no"] as const).map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => setMicrophone(val === microphone ? "" : val)}
                                className={pillCls(microphone === val)}
                              >
                                {val === "yes" ? t.form.yes : t.form.no}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Extras — pills (conference only) */}
                    {isConference && (
                      <div className="space-y-3">
                        <label className={labelCls}>{t.form.extras}</label>
                        <div className="flex flex-wrap gap-2">
                          {t.form.extraOptions.map((extra) => (
                            <button
                              key={extra.value}
                              type="button"
                              onClick={() => toggleItem(extra.value, selectedExtras, setSelectedExtras)}
                              className={pillCls(selectedExtras.includes(extra.value))}
                            >
                              {extra.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* How did you hear */}
              <div className="space-y-2">
                <label className={labelCls}>
                  {t.form.howHeard} <span className="text-destructive">*</span>
                </label>
                <select name="howHeard" required defaultValue="" className={inputCls + " appearance-none cursor-pointer"}>
                  <option value="" disabled>{t.form.howHeardPlaceholder}</option>
                  {t.form.howHeardOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className={labelCls}>{t.form.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className={inputCls + " resize-y"}
                />
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

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
