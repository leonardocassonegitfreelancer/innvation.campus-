import type { APIRoute } from "astro";


export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const { name, email, eventSlug, lang } = body;

  try {
    // Log to Resend (fire + forget — redirect happens client-side regardless)
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: import.meta.env.RESEND_FROM ?? "Innovation Campus <onboarding@resend.dev>",
        to: import.meta.env.CONTACT_EMAIL,
        reply_to: email,
        subject: `[Event Lead] ${eventSlug} — ${name}`,
        html: `
          <h2>New community event registration</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Event</strong></td><td>${eventSlug}</td></tr>
            <tr><td><strong>Language</strong></td><td>${lang ?? "en"}</td></tr>
          </table>
        `,
      }),
    });
  } catch (err) {
    // Don't block the redirect if email fails
    console.error("Event lead email error:", err);
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
