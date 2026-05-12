import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import LeadForm from "@/components/landing/LeadForm";

export default function PrivateOffices({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <OfficesIntroSection lang={lang} />
      <OfficesListings lang={lang} />
      <OfficesAmenities lang={lang} />
      <LeadForm lang={lang} defaultService="office" />
    </>
  );
}
