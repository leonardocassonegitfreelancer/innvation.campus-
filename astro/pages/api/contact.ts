import type { APIRoute } from "astro";


export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const { name, email, company, phone, location, service, space, hearAbout, message } = body;

  // On Cloudflare, secrets live in locals.runtime.env (not import.meta.env, which is build-time only).
  // Fall back to import.meta.env for local dev (reads from .env).
  const env = (locals as any)?.runtime?.env ?? import.meta.env;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: env.RESEND_FROM ?? "Innovation Campus <onboarding@resend.dev>",
        to: env.CONTACT_EMAIL,
        reply_to: email,
        subject: `[Contact] ${service ?? "General enquiry"} — ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Company</strong></td><td>${company ?? "—"}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone ?? "—"}</td></tr>
            <tr><td><strong>Location</strong></td><td>${location ?? "—"}</td></tr>
            <tr><td><strong>Service</strong></td><td>${service ?? "—"}</td></tr>
            <tr><td><strong>Space</strong></td><td>${space ?? "—"}</td></tr>
            <tr><td><strong>How heard</strong></td><td>${hearAbout ?? "—"}</td></tr>
            <tr><td><strong>Message</strong></td><td>${message ?? "—"}</td></tr>
          </table>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    // Fire-and-forget ping to Google Apps Script for CRM logging
    const appsScriptUrl = env.PUBLIC_APPS_SCRIPT_URL as string | undefined;
    if (appsScriptUrl) {
      try {
        const ping = new URL(appsScriptUrl);
        ping.searchParams.set("name", name ?? "");
        ping.searchParams.set("email", email ?? "");
        ping.searchParams.set("company", company ?? "");
        ping.searchParams.set("phone", phone ?? "");
        ping.searchParams.set("location", location ?? "");
        ping.searchParams.set("service", service ?? "");
        ping.searchParams.set("space", space ?? "");
        ping.searchParams.set("hearAbout", hearAbout ?? "");
        ping.searchParams.set("message", message ?? "");
        fetch(ping.toString()).catch(() => {});
      } catch {
        // malformed env var — skip silently
      }
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
