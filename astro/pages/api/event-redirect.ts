import type { APIRoute } from "astro";
import { eventsDataset } from "@/data/events";

export const GET: APIRoute = ({ url }) => {
  const slug = url.searchParams.get("slug") ?? "";
  const source = url.searchParams.get("utm_source") ?? "innovation_campus";
  const medium = url.searchParams.get("utm_medium") ?? "website";

  const event = eventsDataset.find(e => e.slug === slug);

  if (!event?.externalUrl) {
    return new Response(null, { status: 302, headers: { Location: "/" } });
  }

  const dest = new URL(event.externalUrl);
  dest.searchParams.set("utm_source", source);
  dest.searchParams.set("utm_medium", medium);
  dest.searchParams.set("utm_campaign", slug);
  dest.searchParams.set("utm_content", "event_calendar");

  return new Response(null, {
    status: 302,
    headers: { Location: dest.toString() },
  });
};
