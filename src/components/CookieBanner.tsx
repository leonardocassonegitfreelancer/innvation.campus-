import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const texts = {
  en: {
    message: "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
    accept: "Accept All",
    reject: "Reject",
    settings: "Cookie Settings",
  },
  es: {
    message: "Utilizamos cookies para mejorar tu experiencia. Al continuar visitando este sitio, aceptas el uso de cookies.",
    accept: "Aceptar Todo",
    reject: "Rechazar",
    settings: "Configuración",
  },
  it: {
    message: "Utilizziamo i cookie per migliorare la tua esperienza. Continuando a visitare questo sito accetti l'uso dei cookie.",
    accept: "Accetta Tutto",
    reject: "Rifiuta",
    settings: "Impostazioni",
  },
};

function getLang(pathname: string): "en" | "es" | "it" {
  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/it")) return "it";
  return "en";
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const lang = getLang(location.pathname);
  const t = texts[lang];

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="font-body text-sm text-white/80 leading-relaxed">
              {t.message}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleReject}
              className="py-2 px-4 rounded-md font-body text-xs font-semibold uppercase tracking-wider border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              {t.reject}
            </button>
            <button
              onClick={handleAccept}
              className="py-2 px-5 rounded-md font-body text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
