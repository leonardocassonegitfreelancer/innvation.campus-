import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";
import SEOHead from "@/components/SEOHead";

export default function ConferenceRoomIT() {
  return (
    <>
      <SEOHead title="Sale Conferenze Private" description="Spazi per riunioni professionali con opzioni di catering per team di tutte le dimensioni a Málaga." path="/it/sale-conferenze" />
      <ServicePageLayout title="Sale Conferenze Private" subtitle="Spazi per riunioni professionali con opzioni di catering per team di tutte le dimensioni." image={serviceMeeting} />
    </>
  );
}
