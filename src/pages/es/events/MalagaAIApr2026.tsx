import EventPageTemplate from "@/components/landing/EventPageTemplate";

export default function MalagaAIApr2026ES() {
  return (
    <EventPageTemplate
      seo={{
        title: "Malaga AI Networking Night — Abril 2026",
        description: "Una noche de conversaciones, demos y networking dedicada a la inteligencia artificial en Innovation Campus Málaga Palace. 23 de Abril de 2026.",
        path: "/es/eventos/malaga-ai-networking-apr-2026",
      }}
      hero={{
        image: "/placeholder.svg",
        tag: "Networking",
        title: "Malaga AI Networking Night",
      }}
      details={{
        date: "23 de Abril de 2026",
        time: "18:30 - 21:00",
        location: "Innovation Campus Málaga Palace",
        address: "Calle Alamos 7, 29012 Málaga",
        organizer: "Innovation Campus",
      }}
      description="Únete a nosotros para una noche informal dedicada a la inteligencia artificial — demos, conversaciones y conexiones con las personas que están dando forma a la IA en Málaga. Tanto si estás construyendo productos de IA, investigando el campo, o simplemente tienes curiosidad por lo que viene, este es tu espacio."
      bullets={[
        "Demos en vivo de builders y startups locales de IA",
        "Conversaciones abiertas sobre aplicaciones prácticas de IA",
        "Conoce a investigadores, desarrolladores y fundadores del sector IA",
      ]}
      schedule={[
        { time: "18:30", description: "Puertas abiertas — walk-in y bienvenida" },
        { time: "19:00", description: "Lightning demos (5 min cada una)" },
        { time: "19:45", description: "Networking abierto" },
        { time: "21:00", description: "Fin del evento" },
      ]}
      cta={{
        href: "/es/eventos/malaga-ai-networking-apr-2026/gracias",
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
