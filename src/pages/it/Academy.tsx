import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.jpg";
import SEOHead from "@/components/SEOHead";
import AcademyIntro from "@/components/landing/AcademyIntro";
import AcademyCourses from "@/components/landing/AcademyCourses";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function AcademyIT() {
  return (
    <>
      <SEOHead title="Academy" description="Workshop, corsi e formazione per aiutarti a crescere a Innovation Campus." path="/it/academy" />
      <ServicePageLayout title="Academy" subtitle="Workshop, corsi e formazione per aiutarti a migliorare giorno dopo giorno." image={serviceAcademy}>
        <AcademyIntro />
        <AcademyCourses />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
