import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function SheWinsApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "SheWins Málaga: Le Semplici Regole del Denaro",
        description: "Workshop di finanza personale con Alice Dickinson, Dottore Commercialista. Impara le semplici regole del denaro a Innovation Campus Málaga Palace. 16 Aprile 2026.",
        path: "/it/eventi/shewins-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "SheWins Málaga: Le Semplici Regole del Denaro",
      }}
      details={{
        date: "16 Aprile 2026",
        time: "18:30 - 20:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Alice Dickinson — Dottore Commercialista",
      }}
      description="SheWins Málaga presenta Le Semplici Regole del Denaro — un workshop di finanza personale con Alice Dickinson, Dottore Commercialista con oltre 10 anni di esperienza. Porta a casa regole chiare e pratiche per gestire le tue finanze con sicurezza."
      bullets={[
        "Come costruire un budget personale che funzioni davvero",
        "Le basi del risparmio e degli investimenti per principianti",
        "Capire il tuo rapporto con il denaro",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in e networking" },
        { time: "19:00", description: "Workshop: Le Semplici Regole del Denaro" },
        { time: "20:00", description: "Q&A e networking libero" },
        { time: "20:30", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/shewins-malaga-apr-2026/grazie",
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
        organizer: "Speaker",
        schedule: "Programma",
      }}
    />
  );
}
