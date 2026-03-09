import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LANG_PREFERENCE_KEY = "ic_lang_detected";

export function useLanguageDetection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const hasDetected = localStorage.getItem(LANG_PREFERENCE_KEY);
    if (hasDetected) return;

    const browserLang = navigator.language || (navigator as any).userLanguage || "en";
    const langCode = browserLang.split("-")[0].toLowerCase();

    localStorage.setItem(LANG_PREFERENCE_KEY, "true");

    if (langCode === "es") {
      navigate("/es", { replace: true });
    } else if (langCode === "it") {
      navigate("/it", { replace: true });
    }
  }, [location.pathname, navigate]);
}

export function LanguageDetector() {
  useLanguageDetection();
  return null;
}
