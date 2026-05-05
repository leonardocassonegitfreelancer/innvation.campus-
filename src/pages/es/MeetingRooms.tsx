import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.webp";
import SEOHead from "@/components/SEOHead";
import ConferenceRooms from "@/components/landing/ConferenceRooms";
import ConferenceIncludes from "@/components/landing/ConferenceIncludes";
import ConferenceGallery from "@/components/landing/ConferenceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function MeetingRoomsES() {
  return (
    <>
      <SEOHead
        title="Salas de Conferencias Privadas"
        description="Espacios de reuniones profesionales con opciones de catering para equipos de todos los tamaños en Málaga."
        path="/es/salas-de-reuniones"
      />
      <ServicePageLayout
        title="Salas de Conferencias Privadas"
        subtitle="Espacios de reuniones profesionales con opciones de catering para equipos de todos los tamaños."
        image={serviceMeeting}
      >
        <ConferenceRooms />
        <ConferenceIncludes />
        <ConferenceGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
