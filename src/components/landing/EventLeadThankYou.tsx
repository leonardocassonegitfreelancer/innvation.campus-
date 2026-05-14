import { useEffect, useState } from "react";
import { eventsDataset } from "@/data/events";
import { ArrowRight, CheckCircle } from "lucide-react";

const ui = {
  en: {
    heading: "You're all set!",
    body: "Redirecting you to the event page to complete your registration…",
    cta: "Click here if not redirected",
  },
  es: {
    heading: "¡Todo listo!",
    body: "Te estamos redirigiendo a la página del evento para completar tu registro…",
    cta: "Haz clic aquí si no eres redirigido",
  },
  it: {
    heading: "Ci siamo!",
    body: "Ti stiamo reindirizzando alla pagina dell'evento per completare la registrazione…",
    cta: "Clicca qui se non vieni reindirizzato",
  },
};

interface Props {
  slug: string;
  lang?: "en" | "es" | "it";
}

export default function EventLeadThankYou({ slug, lang = "en" }: Props) {
  const t = ui[lang];
  const event = eventsDataset.find(e => e.slug === slug);
  const [destUrl, setDestUrl] = useState(event?.externalUrl ?? "/");

  useEffect(() => {
    if (!event?.externalUrl) return;

    const params = new URLSearchParams(window.location.search);
    const appsScriptUrl = import.meta.env.PUBLIC_APPS_SCRIPT_URL as string | undefined;

    if (appsScriptUrl) {
      try {
        const ping = new URL(appsScriptUrl);
        ping.searchParams.set("slug", slug);
        ping.searchParams.set("lang", lang);
        ping.searchParams.set("page_url", window.location.href);
        for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
          const v = params.get(key);
          if (v) ping.searchParams.set(key, v);
        }
        navigator.sendBeacon(ping.toString());
      } catch {
        // malformed env var — skip silently
      }
    }

    const dest = event.externalUrl;
    setDestUrl(dest);

    const timer = setTimeout(() => {
      window.location.href = dest;
    }, 1800);

    return () => clearTimeout(timer);
  }, [slug, lang, event]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          {t.heading}
        </h1>
        <p className="font-body text-foreground/60 leading-relaxed mb-8">
          {t.body}
        </p>
        <a
          href={destUrl}
          className="inline-flex items-center gap-2 font-body text-sm text-primary underline underline-offset-4 hover:opacity-75 transition-opacity"
        >
          {t.cta} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
}
