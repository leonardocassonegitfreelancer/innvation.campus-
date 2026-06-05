import type { APIRoute } from "astro";
import { eventsDataset } from "@/data/events";

// On Cloudflare, secrets live in locals.runtime.env (import.meta.env is build-time only).
// Fall back to import.meta.env for local dev (reads from .env).
function getEnv(locals: any) {
  return (locals as any)?.runtime?.env ?? import.meta.env;
}

// On Cloudflare Workers a fetch that isn't awaited is cancelled once the response
// is returned. ctx.waitUntil keeps the worker alive until the ping completes.
// In local dev there's no runtime ctx, so the promise just resolves in-process.
function keepAlive(locals: any, promise: Promise<unknown>) {
  const ctx = (locals as any)?.runtime?.ctx;
  if (ctx && typeof ctx.waitUntil === "function") {
    ctx.waitUntil(promise.catch(() => {}));
  } else {
    promise.catch(() => {});
  }
}

export const GET: APIRoute = async ({ url, locals }) => {
  const slug = url.searchParams.get("slug") ?? "";
  const lang = url.searchParams.get("lang") ?? "en";

  const event = eventsDataset.find(e => e.slug === slug);
  if (!event?.externalUrl) {
    return new Response(null, { status: 302, headers: { Location: "/" } });
  }

  const appsScriptUrl = getEnv(locals).PUBLIC_APPS_SCRIPT_URL as string | undefined;
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
      keepAlive(locals, fetch(ping.toString()));
    } catch {
      // malformed env var — skip silently
    }
  }

  return new Response(null, {
    status: 302,
    headers: { Location: event.externalUrl },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const appsScriptUrl = getEnv(locals).PUBLIC_APPS_SCRIPT_URL as string | undefined;
  if (appsScriptUrl) {
    try {
      const ping = new URL(appsScriptUrl);
      for (const [key, value] of Object.entries(body)) {
        if (value == null) continue;
        ping.searchParams.set(key, Array.isArray(value) ? value.join(", ") : String(value));
      }
      keepAlive(locals, fetch(ping.toString()));
    } catch {
      // malformed env var — skip silently
    }
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
