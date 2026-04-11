import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function SheWinsApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "SheWins Málaga: Las Reglas Simples del Dinero",
        description: "Taller de finanzas personales con Alice Dickinson, Contable Colegiada. Aprende las reglas simples del dinero en Innovation Campus Málaga Palace. 16 de Abril de 2026.",
        path: "/es/eventos/shewins-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Taller",
        title: "SheWins Málaga: Las Reglas Simples del Dinero",
      }}
      details={{
        date: "16 de Abril de 2026",
        time: "18:30 - 20:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Alice Dickinson — Contable Colegiada",
      }}
      description="SheWins Málaga presenta Las Reglas Simples del Dinero — un taller de finanzas personales con Alice Dickinson, Contable Colegiada con más de 10 años de experiencia. Llévate reglas claras y prácticas para gestionar tus finanzas con confianza."
      bullets={[
        "Cómo construir un presupuesto personal que realmente funcione",
        "Los fundamentos del ahorro e inversión para principiantes",
        "Entender tu relación con el dinero",
      ]}
      schedule={[
        { time: "18:30", description: "Walk-in y networking" },
        { time: "19:00", description: "Taller: Las Reglas Simples del Dinero" },
        { time: "20:00", description: "Preguntas y networking libre" },
        { time: "20:30", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/shewins-malaga-apr-2026/gracias",
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
        organizer: "Ponente",
        schedule: "Programa",
      }}
    />
  );
}
