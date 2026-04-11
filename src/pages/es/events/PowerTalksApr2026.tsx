import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function PowerTalksApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "PowerTalks Málaga Meetup Abril 2026",
        description: "Únete a PowerTalks Málaga para un meetup Toastmasters de oratoria en inglés. Practica, mejora e inspira. 15 de Abril de 2026.",
        path: "/es/eventos/powertalks-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Charla",
        title: "PowerTalks Málaga Meetup Abril 2026",
      }}
      details={{
        date: "15 de Abril de 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "PowerTalks Málaga",
      }}
      description="PowerTalks Málaga es un club Toastmasters dedicado a mejorar las habilidades de oratoria en inglés. Únete a nosotros para una noche de discursos preparados, improvisación y retroalimentación constructiva en un entorno de apoyo."
      bullets={[
        "Discursos preparados por los miembros del club",
        "Table Topics — discursos improvisados de 1-2 minutos",
        "Sesión de evaluaciones y retroalimentación constructiva",
      ]}
      schedule={[
        { time: "19:00", description: "Apertura de puertas y bienvenida" },
        { time: "19:30", description: "Discursos preparados" },
        { time: "20:15", description: "Ronda de Table Topics" },
        { time: "20:45", description: "Evaluaciones y retroalimentación" },
        { time: "21:00", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/powertalks-malaga-apr-2026/gracias",
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
