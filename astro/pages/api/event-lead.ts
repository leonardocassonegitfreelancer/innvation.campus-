import type { APIRoute } from "astro";
import { eventsDataset } from "@/data/events";

export const GET: APIRoute = async ({ url, locals }) => {
  const slug = url.searchParams.get("slug") ?? "";
  const lang = url.searchParams.get("lang") ?? "en";

  const event = eventsDataset.find(e => e.slug === slug);
  if (!event?.externalUrl) {
    return new Response(null, { status: 302, headers: { Location: "/" } });
  }

  // On Cloudflare, secrets live in locals.runtime.env (not import.meta.env, which is build-time only).
  // Fall back to import.meta.env for local dev (reads from .env).
  const env = (locals as any)?.runtime?.env ?? import.meta.env;
  const appsScriptUrl = env.PUBLIC_APPS_SCRIPT_URL as string | undefined;
  if (appsScriptUrl) {
    try {
      const ping = new URL(appsScriptUrl);
      ping.searchParams.set("slug", slug);
      ping.searchParams.set("lang", lang);
      ping.searchParams.set("redirect_url", event.externalUrl);
      const leadPage = url.searchParams.get("lead_page");
      if (leadPage) ping.searchParams.set("lead_page", leadPage);
      const eventPage = url.searchParams.get("event_page");
      if (eventPage) ping.searchParams.set("event_page", eventPage);
      for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
        const v = url.searchParams.get(key);
        if (v) ping.searchParams.set(key, v);
      }
      // fire and forget — don't block the redirect
      fetch(ping.toString()).catch(() => {});
    } catch {
      // malformed env var — skip silently
    }
  }

  return new Response(null, {
    status: 302,
    headers: { Location: event.externalUrl },
  });
};
