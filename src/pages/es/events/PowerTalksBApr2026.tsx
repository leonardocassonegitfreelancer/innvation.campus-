import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksBApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga — Segundo Meetup Abril 2026",
        description: "Charlas breves y de alto impacto de fundadores y profesionales en Innovation Campus Málaga Palace. 29 de Abril de 2026.",
        path: "/es/eventos/powertalks-malaga-apr-2026-b",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Charla",
        title: "PowerTalks Málaga — Segundo Meetup",
      }}
      details={{
        date: "29 de Abril de 2026",
        time: "18:30 - 20:30",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="PowerTalks vuelve con su segundo meetup de abril — charlas breves y directas de fundadores, profesionales y makers de Málaga. Ven a escuchar, compartir ideas y conocer a personas que están construyendo cosas. Sin pitches, sin paneles. Solo conversaciones reales."
      bullets={[
        "3–4 ponentes de 10 minutos cada uno",
        "Temas que van desde negocios y tecnología hasta creatividad y lifestyle",
        "Networking abierto antes y después de las charlas",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in y networking" },
        { time: "19:00", description: "PowerTalks — sesiones de ponentes" },
        { time: "20:00", description: "Preguntas y networking libre" },
        { time: "20:30", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/powertalks-malaga-apr-2026-b/gracias",
        label: "Reserva tu plaza",
      }}
      backLink={{
        href: "/es/eventos",
        label: "Volver a todos los eventos",
      }}
      detailsLabel={{
        eventDetails: "Detalles del Evento",
        date: "Fecha",
        time: "Horario",
        location: "Lugar",
        organizer: "Organizador",
        schedule: "Programa",
      }}
    />
  );
}
