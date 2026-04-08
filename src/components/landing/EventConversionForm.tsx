import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Users, Briefcase, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "Ready to host your event?",
    subtitle: "Tell us about your needs and we'll get back to you with a tailored proposal within 24 hours.",
    form: {
      name: "Your Name",
      email: "Work Email",
      company: "Company (Optional)",
      date: "Preferred Date",
      guests: "Number of Guests",
      type: "Event Type",
      typeOptions: ["Workshop/Training", "Conference/Presentation", "Networking/Party", "Offsite/Retreat", "Other"],
      message: "Additional Details",
      messagePlaceholder: "Tell us a bit about the vibe, catering needs, or specific requirements...",
      submit: "Request a Proposal",
      submitting: "Sending...",
      successTitle: "Request Received!",
      successDesc: "Our events team will contact you shortly to finalize the details.",
    }
  },
  es: {
    title: "¿Listo para organizar tu evento?",
    subtitle: "Cuéntanos tus necesidades y te responderemos con una propuesta a medida en 24 horas.",
    form: {
      name: "Tu Nombre",
      email: "Email de Trabajo",
      company: "Empresa (Opcional)",
      date: "Fecha Preferida",
      guests: "Número de Invitados",
      type: "Tipo de Evento",
      typeOptions: ["Taller/Formación", "Conferencia", "Networking/Fiesta", "Retiro de Empresa", "Otro"],
      message: "Detalles Adicionales",
      messagePlaceholder: "Cuéntanos sobre el ambiente, necesidades de catering...",
      submit: "Solicitar Presupuesto",
      submitting: "Enviando...",
      successTitle: "¡Solicitud Recibida!",
      successDesc: "Nuestro equipo de eventos te contactará pronto para finalizar los detalles.",
    }
  },
  it: {
    title: "Pronto a organizzare il tuo evento?",
    subtitle: "Raccontaci le tue esigenze e ti risponderemo con una proposta su misura entro 24 ore.",
    form: {
      name: "Il tuo Nome",
      email: "Email Lavorativa",
      company: "Azienda (Opzionale)",
      date: "Data Preferita",
      guests: "Numero di Ospiti",
      type: "Tipo di Evento",
      typeOptions: ["Workshop/Formazione", "Conferenza", "Networking/Festa", "Ritiro Aziendale", "Altro"],
      message: "Dettagli Aggiuntivi",
      messagePlaceholder: "Raccontaci un po' dell'atmosfera, esigenze di catering...",
      submit: "Richiedi un Preventivo",
      submitting: "Invio in corso...",
      successTitle: "Richiesta Ricevuta!",
      successDesc: "Il nostro team eventi ti contatterà a breve per definire i dettagli.",
    }
  }
};

export default function EventConversionForm() {
  const location = useLocation();
  const lang = (location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en") as "en"|"es"|"it";
  const t = translations[lang];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="event-contact" className="py-24 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 dropdown-shadow">
            {t.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground w-full max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {!isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-primary" /> {t.form.name}
                  </label>
                  <input required type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> {t.form.email}
                  </label>
                  <input required type="email" className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              {/* Row 2: Company & Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" /> {t.form.company}
                  </label>
                  <input type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> {t.form.type}
                  </label>
                  <select required className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>-- Select --</option>
                    {t.form.typeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

               {/* Row 3: Date & Guests */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> {t.form.date}
                  </label>
                  <input type="date" className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> {t.form.guests}
                  </label>
                  <input required type="number" min="1" placeholder="e.g. 50" className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2 pt-2">
                <label className="font-body text-sm font-semibold text-foreground flex items-center gap-2">
                  {t.form.message}
                </label>
                <textarea rows={4} placeholder={t.form.messagePlaceholder} className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-y" />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.form.submitting : (
                    <><Send className="w-4 h-4" /> {t.form.submit}</>
                  )}
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

// Quick inline icon component to avoid adding more specific lucide icons if not imported
function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
