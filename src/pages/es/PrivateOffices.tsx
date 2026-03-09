import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";
import SEOHead from "@/components/SEOHead";
import OfficesIntro from "@/components/landing/OfficesIntro";
import OfficesIncludes from "@/components/landing/OfficesIncludes";
import OfficesGallery from "@/components/landing/OfficesGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

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
        subtitle="Espacios de oficina dedicados en diferentes tamaños para adaptarse a las necesidades de tu equipo."
        image={servicePrivate}
      >
        <OfficesIntro />
        <OfficesIncludes />
        <OfficesGallery />
        <OfficesCTA />
      </ServicePageLayout>
    </>
  );
}
