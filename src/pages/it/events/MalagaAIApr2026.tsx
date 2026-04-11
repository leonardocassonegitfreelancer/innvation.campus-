import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function MalagaAIApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "Malaga AI Networking Night — Aprile 2026",
        description: "Una serata di conversazioni, demo e networking dedicata all'intelligenza artificiale a Innovation Campus Málaga Palace. 23 Aprile 2026.",
        path: "/it/eventi/malaga-ai-networking-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Networking",
        title: "Malaga AI Networking Night",
      }}
      details={{
        date: "23 Aprile 2026",
        time: "18:30 - 21:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="Unisciti a noi per una serata informale dedicata all'intelligenza artificiale — demo, conversazioni e connessioni con le persone che stanno plasmando l'AI a Málaga. Che tu stia costruendo prodotti AI, facendo ricerca nel settore, o semplicemente curioso di sapere cosa ci aspetta, questo è il tuo spazio."
      bullets={[
        "Demo dal vivo da builder e startup AI locali",
        "Conversazioni aperte sulle applicazioni pratiche dell'AI",
        "Incontra ricercatori, sviluppatori e fondatori nel settore AI",
      ]}
      schedule={[
        { time: "18:30", description: "Apertura — walk-in e drink di benvenuto" },
        { time: "19:00", description: "Lightning demo (5 min ciascuna)" },
        { time: "19:45", description: "Networking aperto" },
        { time: "21:00", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/malaga-ai-networking-apr-2026/grazie",
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
