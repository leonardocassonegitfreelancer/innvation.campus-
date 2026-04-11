import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function SheWinsApr2026EN() {
  return (
    <EventPageTemplate
      seo={{
        title: "SheWins Málaga: The Simple Rules of Money",
        description: "Personal finance workshop with Alice Dickinson, Chartered Accountant. Learn the simple rules of money at Innovation Campus Málaga Palace. April 16, 2026.",
        path: "/en/events/shewins-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "SheWins Málaga: The Simple Rules of Money",
      }}
      details={{
        date: "April 16, 2026",
        time: "18:30 - 20:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Alice Dickinson — Chartered Accountant",
      }}
      description="SheWins Málaga presents The Simple Rules of Money — a personal finance workshop with Alice Dickinson, Chartered Accountant with over 10 years of experience. Walk away with clear, actionable rules for managing your finances with confidence."
      bullets={[
        "How to build a personal budget that actually works",
        "The basics of saving and investing for beginners",
        "Understanding your relationship with money",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in & networking" },
        { time: "19:00", description: "Workshop: The Simple Rules of Money" },
        { time: "20:00", description: "Q&A and open networking" },
        { time: "20:30", description: "End of event" },
      ]}
      cta={{
        href: "/en/events/shewins-malaga-apr-2026/thank-you",
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
