import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LANG_PREFERENCE_KEY = "ic_lang_detected";

// Supported languages and their base paths
const SUPPORTED_LANGS = {
  es: "/es",
  en: "/",
} as const;

export function useLanguageDetection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only run detection on the root path
    if (location.pathname !== "/") return;

    // Check if we've already detected/redirected
    const hasDetected = localStorage.getItem(LANG_PREFERENCE_KEY);
    if (hasDetected) return;

    // Get browser language
    const browserLang = navigator.language || (navigator as any).userLanguage || "en";
    const langCode = browserLang.split("-")[0].toLowerCase();

    // Mark as detected to prevent future redirects
    localStorage.setItem(LANG_PREFERENCE_KEY, "true");

    // Redirect if Spanish is detected
    if (langCode === "es") {
      navigate("/es", { replace: true });
    }
  }, [location.pathname, navigate]);
}

export function LanguageDetector() {
  useLanguageDetection();
  return null;
}
