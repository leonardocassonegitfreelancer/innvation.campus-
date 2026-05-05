import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.webp";
import SEOHead from "@/components/SEOHead";
import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import OfficesQuoteForm from "@/components/landing/OfficesQuoteForm";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function PrivateOfficesIT() {
  return (
    <>
      <SEOHead
        title="Uffici Privati"
        description="Spazi ufficio dedicati in diverse dimensioni per soddisfare le esigenze del tuo team a Málaga."
        path="/it/uffici-privati"
      />
      <ServicePageLayout
        title="Uffici Privati"
        subtitle="Il tuo ufficio ideale è più vicino di quanto pensi. Lavora in ambienti ispiranti circondato da una comunità imprenditoriale internazionale."
        image={servicePrivate}
      >
        <OfficesIntroSection />
        <OfficesListings />
        <OfficesAmenities />
        <OfficesQuoteForm />
      </ServicePageLayout>
    </>
  );
}
