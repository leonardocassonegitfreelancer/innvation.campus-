import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.webp";
import SEOHead from "@/components/SEOHead";
import ConferenceRooms from "@/components/landing/ConferenceRooms";
import ConferenceIncludes from "@/components/landing/ConferenceIncludes";
import ConferenceGallery from "@/components/landing/ConferenceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function MeetingRoomsIT() {
  return (
    <>
      <SEOHead
        title="Sale Conferenze Private"
        description="Spazi per riunioni professionali con opzioni di catering per team di tutte le dimensioni a Málaga."
        path="/it/sale-riunioni"
      />
      <ServicePageLayout
        title="Sale Conferenze Private"
        subtitle="Spazi per riunioni professionali con opzioni di catering per team di tutte le dimensioni."
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
