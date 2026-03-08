import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceMeeting from "@/assets/service-meeting.jpg";

export default function ConferenceRoom() {
  return (
    <ServicePageLayout
      title="Private Conference Rooms"
      subtitle="Professional meeting spaces with catering options for teams of all sizes."
      image={serviceMeeting}
    />
  );
}
