import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false }), { status: 400 });

  const {
    name, email, company, date, guests, eventType,
    rooms, duration, startingTime, projector, microphone,
    extras, howHeard, message, spaceSlug,
  } = body;

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const roomsList = Array.isArray(rooms) ? rooms.join(", ") : rooms ?? "—";
  const extrasList = Array.isArray(extras) ? extras.join(", ") : extras ?? "—";

  try {
    await resend.emails.send({
      from: import.meta.env.RESEND_FROM ?? "Innovation Campus <onboarding@resend.dev>",
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Event Lead] ${eventType ?? "Event"} — ${name} (${guests} pax)`,
      html: `
        <h2>New event enquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company ?? "—"}</td></tr>
          <tr><td><strong>Space</strong></td><td>${spaceSlug ?? "—"}</td></tr>
          <tr><td><strong>Rooms</strong></td><td>${roomsList}</td></tr>
          <tr><td><strong>Event type</strong></td><td>${eventType ?? "—"}</td></tr>
          <tr><td><strong>Date</strong></td><td>${date ?? "—"}</td></tr>
          <tr><td><strong>Guests</strong></td><td>${guests ?? "—"}</td></tr>
          <tr><td><strong>Duration</strong></td><td>${duration ?? "—"}</td></tr>
          <tr><td><strong>Starting time</strong></td><td>${startingTime ?? "—"}</td></tr>
          <tr><td><strong>Projector</strong></td><td>${projector ?? "—"}</td></tr>
          <tr><td><strong>Microphone</strong></td><td>${microphone ?? "—"}</td></tr>
          <tr><td><strong>Extras</strong></td><td>${extrasList}</td></tr>
          <tr><td><strong>How heard</strong></td><td>${howHeard ?? "—"}</td></tr>
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
