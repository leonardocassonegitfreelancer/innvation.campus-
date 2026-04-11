import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026IT() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
        description: "Unisciti a Ladies That UX Málaga per una serata dedicata al design digitale inclusivo e all'accessibilità con la speaker Irene Puertas. 7 Aprile 2026.",
        path: "/it/eventi/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Workshop",
        title: "Ladies That UX Málaga: Design Digitale Inclusivo & Accessibilità",
      }}
      details={{
        date: "7 Aprile 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Unisciti a Ladies That UX Málaga per una serata dedicata al design digitale inclusivo e all'accessibilità. La speaker Irene Puertas ci guiderà attraverso i principi e le pratiche che rendono le esperienze digitali accessibili a tutti — dalle disabilità visive alle difficoltà motorie e cognitive."
      bullets={[
        "Le linee guida WCAG applicate nella pratica",
        "Pattern di design inclusivo per prodotti reali",
        "Case study ed esempi pratici",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in e networking di benvenuto" },
        { time: "19:30", description: "Talk: Design Digitale Inclusivo & Accessibilità" },
        { time: "20:30", description: "Q&A con Irene Puertas" },
        { time: "21:00", description: "Fine evento" },
      ]}
      cta={{
        href: "/it/eventi/ladies-that-ux-malaga-apr-2026/grazie",
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
