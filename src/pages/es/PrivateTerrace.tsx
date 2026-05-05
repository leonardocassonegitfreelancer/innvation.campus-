import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.webp";
import SEOHead from "@/components/SEOHead";
import TerraceIntro from "@/components/landing/TerraceIntro";
import TerraceSpaces from "@/components/landing/TerraceSpaces";
import TerraceIncludes from "@/components/landing/TerraceIncludes";
import TerraceGallery from "@/components/landing/TerraceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function PrivateTerraceES() {
  return (
    <>
      <SEOHead
        title="Terraza Privada"
        description="Un espacio exterior exclusivo con opciones de catering para tus eventos y reuniones en Málaga."
        path="/es/terraza-privada"
      />
      <ServicePageLayout
        title="Terraza Privada"
        subtitle="Un espacio exterior exclusivo con opciones de catering para tus eventos y reuniones."
        image={serviceTerrace}
      >
        <TerraceIntro />
        <TerraceSpaces />
        <TerraceIncludes />
        <TerraceGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
