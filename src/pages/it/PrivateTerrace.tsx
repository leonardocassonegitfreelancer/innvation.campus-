import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.webp";
import SEOHead from "@/components/SEOHead";
import TerraceIntro from "@/components/landing/TerraceIntro";
import TerraceSpaces from "@/components/landing/TerraceSpaces";
import TerraceIncludes from "@/components/landing/TerraceIncludes";
import TerraceGallery from "@/components/landing/TerraceGallery";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function PrivateTerraceIT() {
  return (
    <>
      <SEOHead title="Terrazza Privata" description="Uno spazio esterno esclusivo con opzioni di catering per i tuoi eventi e riunioni a Málaga." path="/it/terrazza-privata" />
      <ServicePageLayout title="Terrazza Privata" subtitle="Uno spazio esterno esclusivo con opzioni di catering per i tuoi eventi e riunioni." image={serviceTerrace}>
        <TerraceIntro />
        <TerraceSpaces />
        <TerraceIncludes />
        <TerraceGallery />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
