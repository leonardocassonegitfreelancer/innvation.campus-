import { useEffect, useState } from "react";
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
  const [destUrl, setDestUrl] = useState(`/api/event-lead?slug=${slug}&lang=${lang}`);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    qs.set("slug", slug);
    qs.set("lang", lang);
    qs.set("lead_page", window.location.href);
    const apiUrl = `/api/event-lead?${qs.toString()}`;
    setDestUrl(apiUrl);

    const timer = setTimeout(() => {
      window.location.href = apiUrl;
    }, 1800);

    return () => clearTimeout(timer);
  }, [slug, lang]);

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
