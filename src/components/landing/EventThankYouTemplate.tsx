import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

export interface EventThankYouProps {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  lang: "en" | "it" | "es";
  event: {
    title: string;
    date: string;
    location: string;
    externalUrl: string;
  };
}

const ui = {
  en: {
    heading: "You're almost there!",
    subtitle: "We've registered your interest.",
    message: "Complete your registration on the event page to secure your spot.",
    cta: "Complete Registration →",
    newsletterHeading: "Stay updated",
    newsletterSubtitle: "Be the first to know about upcoming events.",
  },
  it: {
    heading: "Ci siamo quasi!",
    subtitle: "Abbiamo registrato il tuo interesse.",
    message: "Completa la registrazione sulla pagina dell'evento per assicurarti il posto.",
    cta: "Completa la registrazione →",
    newsletterHeading: "Resta aggiornato",
    newsletterSubtitle: "Sii il primo a sapere dei prossimi eventi.",
  },
  es: {
    heading: "¡Ya casi está!",
    subtitle: "Hemos registrado tu interés.",
    message: "Completa tu registro en la página del evento para asegurar tu lugar.",
    cta: "Completar registro →",
    newsletterHeading: "Mantente informado",
    newsletterSubtitle: "Sé el primero en conocer los próximos eventos.",
  },
};

export default function EventThankYouTemplate({ seo, lang, event }: EventThankYouProps) {
  const t = ui[lang];
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        noIndex
      />
      <main className="overflow-x-hidden">
        <Navbar />

        <section className="min-h-[75vh] flex items-center justify-center py-24 bg-background">
          <div className="max-w-lg mx-auto px-6 text-center">

            {/* Check icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              {t.heading}
            </h1>
            <p className="font-body text-muted-foreground text-lg mb-8">{t.subtitle}</p>

            {/* Event summary card */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-8 text-left">
              <h2 className="font-display font-bold text-lg text-foreground mb-4 leading-tight">
                {event.title}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  {event.date}
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  {event.location}
                </div>
              </div>
            </div>

            <p className="font-body text-muted-foreground text-sm mb-6">{t.message}</p>

            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors duration-300"
            >
              {t.cta}
            </a>

            {/* Newsletter placeholder */}
            <div className="mt-16 pt-10 border-t border-border">
              <p className="font-body font-bold text-foreground mb-1">{t.newsletterHeading}</p>
              <p className="font-body text-sm text-muted-foreground">{t.newsletterSubtitle}</p>
              {/* TODO: integrate Mailchimp/Brevo newsletter embed here */}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
