import ConferenceRooms from "@/components/landing/ConferenceRooms";
import ConferenceIncludes from "@/components/landing/ConferenceIncludes";
import ConferenceGallery from "@/components/landing/ConferenceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function MeetingRooms({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <ConferenceRooms lang={lang} />
      <ConferenceIncludes lang={lang} />
      <ConferenceGallery lang={lang} />
      <ConferenceCTA lang={lang} />
    </>
  );
}
