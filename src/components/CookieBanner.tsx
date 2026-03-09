import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cookie } from "lucide-react";

const texts = {
  en: {
    message: "We use technical cookies to ensure the website functions properly, analytics cookies to understand how you interact with it, and marketing cookies to show you relevant content. You can choose which cookies to accept.",
    acceptAll: "Accept All",
    rejectAll: "Only Essential",
    technical: "Technical",
    analytics: "Analytics",
    marketing: "Marketing",
    technicalDesc: "Required for the site to work",
    analyticsDesc: "Help us improve the site",
    marketingDesc: "Personalized content & ads",
  },
  es: {
    message: "Utilizamos cookies técnicas para el correcto funcionamiento del sitio, cookies analíticas para comprender cómo interactúas con él, y cookies de marketing para mostrarte contenido relevante. Puedes elegir qué cookies aceptar.",
    acceptAll: "Aceptar Todo",
    rejectAll: "Solo Esenciales",
    technical: "Técnicas",
    analytics: "Analíticas",
    marketing: "Marketing",
    technicalDesc: "Necesarias para el funcionamiento",
    analyticsDesc: "Nos ayudan a mejorar el sitio",
    marketingDesc: "Contenido y anuncios personalizados",
  },
  it: {
    message: "Utilizziamo cookie tecnici per il corretto funzionamento del sito, cookie analitici per capire come interagisci con esso e cookie di marketing per mostrarti contenuti pertinenti. Puoi scegliere quali cookie accettare.",
    acceptAll: "Accetta Tutto",
    rejectAll: "Solo Essenziali",
    technical: "Tecnici",
    analytics: "Analitici",
    marketing: "Marketing",
    technicalDesc: "Necessari per il funzionamento",
    analyticsDesc: "Ci aiutano a migliorare il sito",
    marketingDesc: "Contenuti e annunci personalizzati",
  },
};

function getLang(pathname: string): "en" | "es" | "it" {
  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/it")) return "it";
  return "en";
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const location = useLocation();
  const lang = getLang(location.pathname);
  const t = texts[lang];

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ technical: true, analytics: true, marketing: true }));
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ technical: true, analytics: false, marketing: false }));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ technical: true, analytics, marketing }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <p className="font-body text-sm text-white/80 leading-relaxed">
            {t.message}
          </p>
        </div>

        {showSettings && (
          <div className="mb-5 space-y-3 pl-8">
            {/* Technical - always on */}
            <label className="flex items-center gap-3 cursor-default">
              <input type="checkbox" checked disabled className="accent-primary w-4 h-4 rounded opacity-60" />
              <span className="font-body text-sm text-white font-semibold">{t.technical}</span>
              <span className="font-body text-xs text-white/50">— {t.technicalDesc}</span>
            </label>
            {/* Analytics */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} className="accent-primary w-4 h-4 rounded" />
              <span className="font-body text-sm text-white font-semibold">{t.analytics}</span>
              <span className="font-body text-xs text-white/50">— {t.analyticsDesc}</span>
            </label>
            {/* Marketing */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} className="accent-primary w-4 h-4 rounded" />
              <span className="font-body text-sm text-white font-semibold">{t.marketing}</span>
              <span className="font-body text-xs text-white/50">— {t.marketingDesc}</span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 pl-8">
          <button
            onClick={handleEssentialOnly}
            className="py-2 px-4 rounded-md font-body text-xs font-semibold uppercase tracking-wider border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
          >
            {t.rejectAll}
          </button>
          {showSettings ? (
            <button
              onClick={handleSavePreferences}
              className="py-2 px-5 rounded-md font-body text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {lang === "en" ? "Save Preferences" : lang === "es" ? "Guardar" : "Salva"}
            </button>
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              className="py-2 px-4 rounded-md font-body text-xs font-semibold uppercase tracking-wider border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              {lang === "en" ? "Customize" : lang === "es" ? "Personalizar" : "Personalizza"}
            </button>
          )}
          <button
            onClick={handleAcceptAll}
            className="py-2 px-5 rounded-md font-body text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
