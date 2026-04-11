import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function MalagaAIApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "Malaga AI Networking Night — April 2026",
        description: "An evening of AI conversations, demos, and networking at Innovation Campus Málaga Palace. Meet builders, researchers, and AI enthusiasts. April 23, 2026.",
        path: "/en/events/malaga-ai-networking-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Networking",
        title: "Malaga AI Networking Night",
      }}
      details={{
        date: "April 23, 2026",
        time: "18:30 - 21:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="Join us for an informal evening dedicated to artificial intelligence — demos, conversations, and connections with the people shaping AI in Málaga. Whether you're building AI products, researching the field, or just curious about what's coming next, this is your space."
      bullets={[
        "Live demos from local AI builders and startups",
        "Open conversations on practical AI applications",
        "Meet researchers, developers, and founders in the AI space",
      ]}
      schedule={[
        { time: "18:30", description: "Doors open — walk-in and welcome drinks" },
        { time: "19:00", description: "Lightning demos (5 min each)" },
        { time: "19:45", description: "Open networking" },
        { time: "21:00", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/malaga-ai-networking-apr-2026/thank-you",
        label: "Reserve your spot",
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
        organizer: "Organiser",
        schedule: "Schedule",
      }}
    />
  );
}
