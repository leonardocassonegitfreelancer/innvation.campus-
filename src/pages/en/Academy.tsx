import ServicePageLayout from "@/components/landing/ServicePageLayout";
import serviceAcademy from "@/assets/service-academy.jpg";
import SEOHead from "@/components/SEOHead";
import AcademyIntro from "@/components/landing/AcademyIntro";
import AcademyCourses from "@/components/landing/AcademyCourses";
import ConferenceCTA from "@/components/landing/ConferenceCTA";

export default function Academy() {
  return (
    <>
      <SEOHead
        title="Academy"
        description="Workshops, courses, and training to help you grow at Innovation Campus."
        path="/en/academy"
      />
      <ServicePageLayout
        title="Academy"
        subtitle="Workshops, courses, and training to help you get better day by day."
        image={serviceAcademy}
      >
        <AcademyIntro />
        <AcademyCourses />
        <ConferenceCTA />
      </ServicePageLayout>
    </>
  );
}
