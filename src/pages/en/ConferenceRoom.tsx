import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";
import SEOHead from "@/components/SEOHead";

export default function ConferenceRoom() {
  return (
    <>
      <SEOHead
        title="Private Conference Rooms"
        description="Professional meeting spaces with catering options for teams of all sizes in Málaga."
        path="/en/conference-rooms"
      />
      <ServicePageLayout
        title="Private Conference Rooms"
        subtitle="Professional meeting spaces with catering options for teams of all sizes."
        image={serviceMeeting}
      />
    </>
  );
}
