import { createContext, useContext } from "react";
import React from "react";

export type Lang = "en" | "es" | "it";

interface RouterCtx {
  lang: Lang;
  pathname: string;
}

const RouterContext = createContext<RouterCtx>({ lang: "en", pathname: "/" });

export function useLang(): Lang {
  return useContext(RouterContext).lang;
}

export function usePathname(): string {
  return useContext(RouterContext).pathname;
}

interface Props {
  lang: Lang;
  path?: string;
  children: React.ReactNode;
}

export function PageWrapper({ lang, path, children }: Props) {
  const pathname =
    path ?? (typeof window !== "undefined" ? window.location.pathname : `/${lang}`);
  return (
    <RouterContext.Provider value={{ lang, pathname }}>
      {children}
    </RouterContext.Provider>
  );
}
