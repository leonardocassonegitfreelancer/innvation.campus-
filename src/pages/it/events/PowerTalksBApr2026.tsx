import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksBApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga — Secondo Meetup Aprile 2026",
        description: "Talk brevi e ad alto impatto di founder e professionisti a Innovation Campus Málaga Palace. 29 Aprile 2026.",
        path: "/it/eventi/powertalks-malaga-apr-2026-b",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Talk",
        title: "PowerTalks Málaga — Secondo Meetup",
      }}
      details={{
        date: "29 Aprile 2026",
        time: "18:30 - 20:30",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="PowerTalks torna con il suo secondo meetup di aprile — talk brevi e diretti di founder, professionisti e maker di Málaga. Vieni ad ascoltare, condividere idee e incontrare persone che stanno costruendo cose. Niente pitch, niente panel. Solo conversazioni vere."
      bullets={[
        "3–4 slot da 10 minuti ciascuno",
        "Temi che spaziano da business e tech a creatività e lifestyle",
        "Networking aperto prima e dopo i talk",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in e networking" },
        { time: "19:00", description: "PowerTalks — sessioni speaker" },
        { time: "20:00", description: "Q&A e networking libero" },
        { time: "20:30", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/powertalks-malaga-apr-2026-b/grazie",
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
