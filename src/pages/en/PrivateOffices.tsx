import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import EventConversionForm from "@/components/landing/EventConversionForm";

export default function PrivateOffices({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <OfficesIntroSection lang={lang} />
      <OfficesListings lang={lang} />
      <OfficesAmenities lang={lang} />
      <EventConversionForm lang={lang} defaultService="office" />
    </>
  );
}
