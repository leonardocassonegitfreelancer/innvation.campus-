import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function LadiesThatUXApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
        description: "Únete a Ladies That UX Málaga para una velada dedicada al diseño digital inclusivo y la accesibilidad con la ponente Irene Puertas. 7 de Abril de 2026.",
        path: "/es/eventos/ladies-that-ux-malaga-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Taller",
        title: "Ladies That UX Málaga: Diseño Digital Inclusivo & Accesibilidad",
      }}
      details={{
        date: "7 de Abril de 2026",
        time: "19:00 - 21:00",
        location: "Innovation Campus La Malagueta",
        address: "Calle Puerto 14, 29016 Málaga",
        organizer: "Irene Puertas",
      }}
      description="Únete a Ladies That UX Málaga para una inspiradora velada dedicada al diseño digital inclusivo y la accesibilidad. La ponente Irene Puertas nos guiará a través de los principios y prácticas que hacen que las experiencias digitales sean accesibles para todos."
      bullets={[
        "Pautas de accesibilidad WCAG aplicadas en la práctica",
        "Patrones de diseño inclusivo para productos reales",
        "Casos de estudio y ejemplos prácticos",
      ]}
      schedule={[
        { time: "19:00", description: "Walk-in y networking de bienvenida" },
        { time: "19:30", description: "Charla: Diseño Digital Inclusivo & Accesibilidad" },
        { time: "20:30", description: "Preguntas y respuestas con Irene Puertas" },
        { time: "21:00", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/ladies-that-ux-malaga-apr-2026/gracias",
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
