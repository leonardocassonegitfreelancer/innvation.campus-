import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const { name, email, company, phone, location, service, space, hearAbout, message } = body;

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: import.meta.env.RESEND_FROM ?? "Innovation Campus <onboarding@resend.dev>",
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
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
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
