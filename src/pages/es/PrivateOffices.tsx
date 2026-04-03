import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";
import SEOHead from "@/components/SEOHead";
import OfficesListings from "@/components/landing/OfficesListings";
import OfficesIntroSection from "@/components/landing/OfficesIntroSection";
import OfficesAmenities from "@/components/landing/OfficesAmenities";
import OfficesQuoteForm from "@/components/landing/OfficesQuoteForm";

export default function PrivateOfficesES() {
  return (
    <>
      <SEOHead
        title="Oficinas Privadas"
        description="Espacios de oficina dedicados en diferentes tamaños para adaptarse a las necesidades de tu equipo en Málaga."
        path="/es/oficinas-privadas"
      />
      <ServicePageLayout
        title="Oficinas Privadas"
        subtitle="Tu oficina ideal está más cerca de lo que crees. Trabaja en entornos inspiradores rodeado de una comunidad empresarial internacional."
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
