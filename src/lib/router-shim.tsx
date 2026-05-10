import React, { useEffect, forwardRef } from "react";
import { usePathname } from "./lang-context";

// ── useLocation ──────────────────────────────────────────────────────────────
// Reads pathname from LangContext (SSR-safe: provided by PageWrapper via path prop)
export function useLocation() {
  const pathname = usePathname();
  return {
    pathname,
    search: typeof window !== "undefined" ? window.location.search : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
    state: null as unknown,
    key: "default",
  };
}

// ── useNavigate ───────────────────────────────────────────────────────────────
export function useNavigate() {
  return (to: string) => {
    if (typeof window !== "undefined") window.location.href = to;
  };
}

// ── useParams ────────────────────────────────────────────────────────────────
export function useParams(): Record<string, string> {
  return {};
}

// ── Link ─────────────────────────────────────────────────────────────────────
export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, children, ...props },
  ref,
) {
  return (
    <a ref={ref} href={to} {...props}>
      {children}
    </a>
  );
});

// ── NavLink ───────────────────────────────────────────────────────────────────
export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  to: string;
  end?: boolean;
  className?: string | ((args: { isActive: boolean; isPending: boolean }) => string);
  children?: React.ReactNode | ((args: { isActive: boolean; isPending: boolean }) => React.ReactNode);
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, end, className, children, ...props },
  ref,
) {
  const { pathname } = useLocation();
  const isActive = end ? pathname === to : pathname.startsWith(to);
  const resolvedClass =
    typeof className === "function" ? className({ isActive, isPending: false }) : className;
  const resolvedChildren =
    typeof children === "function" ? children({ isActive, isPending: false }) : children;
  return (
    <a ref={ref} href={to} className={resolvedClass} {...props}>
      {resolvedChildren}
    </a>
  );
});

// ── Navigate ──────────────────────────────────────────────────────────────────
export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (replace) window.location.replace(to);
      else window.location.href = to;
    }
  }, [to, replace]);
  return null;
}

// ── BrowserRouter / Routes / Route ───────────────────────────────────────────
export function BrowserRouter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Routes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}
