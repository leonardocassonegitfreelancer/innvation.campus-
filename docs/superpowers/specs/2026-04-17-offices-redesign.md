# Offices Section Redesign — Spec

## Goal

Replace the current availability-based office listings with a clean S/M/L size-based showcase. No availability, no pricing. The goal is to generate leads via a contact CTA, not to act as a booking catalog.

## Structure

- **Two tabs:** Málaga Palace | Málaga Terrace (same tab pattern as ConferenceRooms)
- **Three cards per tab:** Small · Medium · Large
- Each card follows the existing `ConferenceRooms` card pattern

## Card Content (per size)

| Field | Content |
|-------|---------|
| Photo | One hero image (same height/style as conference room cards) |
| Size label | "Small" / "Medium" / "Large" |
| Capacity | e.g. "1–3 people" / "4–8 people" / "9–15 people" |
| Features | 3–4 key selling points (natural light, private entrance, AC, etc.) |
| CTA | "Request info" → opens contact form or WhatsApp |

No "Available Now" badge. No pricing. No "Coming Soon".

## Images

Reuse existing WebP assets from `src/assets/`:
- Palace: `palace-entrance.webp`, `palace-coworking.webp`, `palace-second-floor.webp`
- Terrace: `service-terrace.webp`, `terrace-events.webp`, `terrace-community.webp`

One image per card (Small/Medium/Large mapped to existing photos).

## Component

Rework `src/components/landing/OfficesListings.tsx`:
- Remove `Office` interface fields: availability, price, badge
- Add `size: "small" | "medium" | "large"` field
- Remove tab logic for occupied/coming-soon
- Keep EN/ES/IT translations inline (same pattern as ConferenceRooms)
- Keep tab toggle (Palace | Terrace)

## Languages

EN, ES, IT — all three updated inline in the same component.

## CTA behaviour

"Request info" scrolls to or links to the existing contact section (`#contact`). No new form needed.
