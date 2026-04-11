import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksBApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga — Second Meetup April 2026",
        description: "Short, high-impact talks by founders and professionals at Innovation Campus Málaga Palace. Grow your network and your thinking. April 29, 2026.",
        path: "/en/events/powertalks-malaga-apr-2026-b",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Talk",
        title: "PowerTalks Málaga — Second Meetup",
      }}
      details={{
        date: "April 29, 2026",
        time: "18:30 - 20:30",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="PowerTalks is back for its second meetup of April — short, punchy talks by founders, professionals, and makers based in Málaga. Come to listen, share ideas, and meet people who are building things. No pitches, no panels. Just real conversations."
      bullets={[
        "3–4 speaker slots of 10 minutes each",
        "Topics range from business and tech to creativity and lifestyle",
        "Open networking before and after the talks",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in and networking" },
        { time: "19:00", description: "PowerTalks — speaker sessions" },
        { time: "20:00", description: "Q&A and open networking" },
        { time: "20:30", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/powertalks-malaga-apr-2026-b/thank-you",
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
