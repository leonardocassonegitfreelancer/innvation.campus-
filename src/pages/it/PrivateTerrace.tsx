import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceTerrace from "@/assets/service-terrace.jpg";
import SEOHead from "@/components/SEOHead";

export default function PrivateTerraceIT() {
  return (
    <>
      <SEOHead title="Terrazza Privata" description="Uno spazio esterno esclusivo con opzioni di catering per i tuoi eventi e riunioni a Málaga." path="/it/terrazza-privata" />
      <ServicePageLayout title="Terrazza Privata" subtitle="Uno spazio esterno esclusivo con opzioni di catering per i tuoi eventi e riunioni." image={serviceTerrace} />
    </>
  );
}
