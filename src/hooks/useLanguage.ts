import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useLanguageFromPath() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    let lang = "en";
    if (location.pathname.startsWith("/es")) lang = "es";
    else if (location.pathname.startsWith("/it")) lang = "it";
    
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location.pathname, i18n]);
}

export function useCurrentLanguage() {
  const location = useLocation();
  
  if (location.pathname.startsWith("/es")) return "es";
  if (location.pathname.startsWith("/it")) return "it";
  return "en";
}

export function useLocalizedPath(basePath: string) {
  const lang = useCurrentLanguage();
  
  if (lang === "en") {
    return basePath.startsWith("/") ? basePath : `/${basePath}`;
  }
  return `/${lang}${basePath.startsWith("/") ? basePath : `/${basePath}`}`;
}
