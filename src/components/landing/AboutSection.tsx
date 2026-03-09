import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";
import aboutImage from "@/assets/about-campus.jpg";

export default function AboutSection() {
  const { ref: r1, isVisible: v1 } = useScrollAnimation();
  const { ref: r2, isVisible: v2 } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div
            ref={r2}
            className={`scroll-animate ${v2 ? "visible" : ""} w-full md:w-1/2`}>
            
            <img
              src={aboutImage}
              alt="Innovation Campus — coworking space in Málaga"
              className="w-full h-auto rounded-lg" />
            
          </div>

          <div
            ref={r1}
            className={`scroll-animate ${v1 ? "visible" : ""} w-full md:w-1/2`}
            style={{ transitionDelay: "0.15s" }}>
            
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              {t("about.label")}
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6 uppercase text-secondary bg-inherit font-medium"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {t("about.title")}
            </h2>

            <div className="w-12 h-[3px] bg-primary mb-6" />

            <div className="space-y-4 font-body text-base leading-relaxed text-historic-muted">
              <p className="text-secondary">{t("about.p1")}</p>

              <p className="text-secondary">{t("about.p2")}</p>

              <p className="text-secondary">
                <strong className="bg-inherit text-primary">{t("about.p3_palace")}</strong>
                {t("about.p3_text")}
              </p>

              <p className="text-secondary">
                <strong className="text-primary">{t("about.p4_terrace")}</strong>
                {t("about.p4_text")}
              </p>

              <p className="font-display text-xl text-primary font-semibold pt-2">
                {t("about.tagline")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
