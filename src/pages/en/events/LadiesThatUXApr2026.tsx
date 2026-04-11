import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
        description: "Join Ladies That UX Málaga for an evening dedicated to inclusive digital design and accessibility with speaker Irene Puertas. April 7, 2026.",
        path: "/en/events/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "Ladies That UX Málaga: Inclusive Digital Design & Accessibility",
      }}
      details={{
        date: "April 7, 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Join Ladies That UX Málaga for an inspiring evening dedicated to inclusive digital design and accessibility. Speaker Irene Puertas will guide us through principles and practices that make digital experiences welcoming to everyone — from visual impairments to motor difficulties and cognitive differences."
      bullets={[
        "Understanding WCAG accessibility guidelines in practice",
        "Inclusive design patterns for real-world products",
        "Case studies and hands-on examples",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in & welcome networking" },
        { time: "19:30", description: "Talk: Inclusive Digital Design & Accessibility" },
        { time: "20:30", description: "Q&A session with Irene Puertas" },
        { time: "21:00", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/ladies-that-ux-malaga-apr-2026/thank-you",
        label: "Reserve Your Spot",
      }}
      backLink={{
        href: "/en/events",
        label: "Back to all events",
      }}
      detailsLabel={{
        eventDetails: "Event Details",
        date: "Date",
        time: "Time",
        location: "Location",
        organizer: "Speaker",
        schedule: "Schedule",
      }}
    />
  );
}
