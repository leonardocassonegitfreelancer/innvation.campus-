import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga Meetup Aprile 2026",
        description: "Unisciti a PowerTalks Málaga per un meetup Toastmasters di public speaking in inglese. Pratica, miglioramento e ispirazione. 15 Aprile 2026.",
        path: "/it/eventi/powertalks-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Talk",
        title: "PowerTalks Málaga Meetup Aprile 2026",
      }}
      details={{
        date: "15 Aprile 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "PowerTalks Málaga",
      }}
      description="PowerTalks Málaga è un club Toastmasters dedicato al miglioramento del public speaking in inglese. Unisciti a noi per una serata di discorsi preparati, improvvisazione e feedback costruttivo in un ambiente accogliente e di supporto."
      bullets={[
        "Discorsi preparati dai membri del club",
        "Table Topics — discorsi improvvisati di 1-2 minuti",
        "Sessione di valutazioni e feedback costruttivo",
      ]}
      schedule={[
        { time: "19:00", description: "Apertura porte e benvenuto" },
        { time: "19:30", description: "Discorsi preparati" },
        { time: "20:15", description: "Round Table Topics" },
        { time: "20:45", description: "Valutazioni e feedback" },
        { time: "21:00", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/powertalks-malaga-apr-2026/grazie",
        label: "Prenota il tuo posto",
      }}
      backLink={{
        href: "/it/eventi",
        label: "Torna a tutti gli eventi",
      }}
      detailsLabel={{
        eventDetails: "Dettagli Evento",
        date: "Data",
        time: "Orario",
        location: "Sede",
        organizer: "Organizzatore",
        schedule: "Programma",
      }}
    />
  );
}
