import type { APIRoute } from "astro";
import { eventsDataset } from "@/data/events";

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get("slug") ?? "";
  const lang = url.searchParams.get("lang") ?? "en";

  const event = eventsDataset.find(e => e.slug === slug);
  if (!event?.externalUrl) {
    return new Response(null, { status: 302, headers: { Location: "/" } });
  }

  const appsScriptUrl = import.meta.env.PUBLIC_APPS_SCRIPT_URL as string | undefined;
  if (appsScriptUrl) {
    try {
      const ping = new URL(appsScriptUrl);
      ping.searchParams.set("slug", slug);
      ping.searchParams.set("lang", lang);
      ping.searchParams.set("page_url", url.toString());
      ping.searchParams.set("redirect_url", event.externalUrl);
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
