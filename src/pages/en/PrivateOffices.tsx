import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import OfficesQuoteForm from "@/components/landing/OfficesQuoteForm";

export default function PrivateOffices({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <OfficesIntroSection lang={lang} />
      <OfficesListings lang={lang} />
      <OfficesAmenities lang={lang} />
      <OfficesQuoteForm lang={lang} />
    </>
  );
}
