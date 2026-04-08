import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";
import SEOHead from "@/components/SEOHead";
import ConferenceIntro from "@/components/landing/ConferenceIntro";
import ConferenceRooms from "@/components/landing/ConferenceRooms";
import ConferenceIncludes from "@/components/landing/ConferenceIncludes";
import ConferenceGallery from "@/components/landing/ConferenceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function MeetingRooms() {
  return (
    <>
      <SEOHead
        title="Meeting Rooms"
        description="Professional meeting spaces with catering options for teams of all sizes in Málaga."
        path="/en/meeting-rooms"
      />
      <ServicePageLayout
        title="Meeting Rooms"
        subtitle="Professional meeting spaces with catering options for teams of all sizes."
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
