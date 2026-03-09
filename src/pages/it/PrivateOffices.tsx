import ServicePageLayout from "@/components/landing/ServicePageLayout";
import servicePrivate from "@/assets/service-private.jpg";
import SEOHead from "@/components/SEOHead";

export default function PrivateOfficesIT() {
  return (
    <>
      <SEOHead title="Uffici Privati" description="Spazi ufficio dedicati in diverse dimensioni per adattarsi alle esigenze del tuo team a Málaga." path="/it/uffici-privati" />
      <ServicePageLayout title="Uffici Privati" subtitle="Spazi ufficio dedicati in diverse dimensioni per adattarsi alle esigenze del tuo team." image={servicePrivate} />
    </>
  );
}
