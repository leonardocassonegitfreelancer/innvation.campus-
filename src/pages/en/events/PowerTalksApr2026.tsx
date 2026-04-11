import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga Meetup April 2026",
        description: "Join PowerTalks Málaga for a Toastmasters English public speaking meetup. Practice, improve and inspire. April 15, 2026.",
        path: "/en/events/powertalks-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Talk",
        title: "PowerTalks Málaga Meetup April 2026",
      }}
      details={{
        date: "April 15, 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "PowerTalks Málaga",
      }}
      description="PowerTalks Málaga is a Toastmasters club dedicated to improving English public speaking skills. Join us for a night of prepared speeches, impromptu speaking rounds, and constructive feedback in a supportive, welcoming environment."
      bullets={[
        "Prepared speeches by club members",
        "Table Topics — impromptu 1-2 min speeches",
        "Evaluations and constructive feedback session",
      ]}
      schedule={[
        { time: "19:00", description: "Doors open & welcome" },
        { time: "19:30", description: "Prepared speeches" },
        { time: "20:15", description: "Table Topics round" },
        { time: "20:45", description: "Evaluations & feedback" },
        { time: "21:00", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/powertalks-malaga-apr-2026/thank-you",
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
        organizer: "Organizer",
        schedule: "Schedule",
      }}
    />
  );
}
