import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";
import SEOHead from "@/components/SEOHead";

export default function ConferenceRoomES() {
  return (
    <>
      <SEOHead
        title="Salas de Conferencias Privadas"
        description="Espacios de reuniones profesionales con opciones de catering para equipos de todos los tamaños en Málaga."
        path="/es/salas-de-conferencias"
      />
      <ServicePageLayout
        title="Salas de Conferencias Privadas"
        subtitle="Espacios de reuniones profesionales con opciones de catering para equipos de todos los tamaños."
        image={serviceMeeting}
      />
    </>
  );
}
