import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";
import SEOHead from "@/components/SEOHead";
import ConferenceIntro from "@/components/landing/ConferenceIntro";
import ConferenceRooms from "@/components/landing/ConferenceRooms";
import ConferenceIncludes from "@/components/landing/ConferenceIncludes";
import ConferenceGallery from "@/components/landing/ConferenceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

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
        <ConferenceIntro />
        <ConferenceRooms />
        <ConferenceIncludes />
        <ConferenceGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
