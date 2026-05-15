import AcademyIntro from "@/components/landing/AcademyIntro";
import AcademyCourses from "@/components/landing/AcademyCourses";

export default function Academy({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <AcademyIntro lang={lang} />
      <AcademyCourses lang={lang} />
    </>
  );
}
