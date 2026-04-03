import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.jpg";
import SEOHead from "@/components/SEOHead";
import AcademyIntro from "@/components/landing/AcademyIntro";
import AcademyCourses from "@/components/landing/AcademyCourses";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function AcademyES() {
  return (
    <>
      <SEOHead
        title="Academia"
        description="Talleres, cursos y formación para ayudarte a crecer en Innovation Campus."
        path="/es/academia"
      />
      <ServicePageLayout
        title="Academia"
        subtitle="Talleres, cursos y formación para ayudarte a mejorar día a día."
        image={serviceAcademy}
      >
        <AcademyIntro />
        <AcademyCourses />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
