import { Lightbulb, Code, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const translations = {
  en: {
    tagline: "Learning Skills for the Future",
    title: "Innovation Campus Academy",
    subtitle: "We offer courses and workshops specifically designed to provide entrepreneurs, small business owners, and professionals with the knowledge needed to thrive in the modern market.",
    highlights: [
      { icon: Lightbulb, title: "Expert Instructors", desc: "Learn straight from industry leaders and experienced entrepreneurs." },
      { icon: Code, title: "Practical Skills", desc: "Hands-on workshops focused on actionable takeaways." },
      { icon: TrendingUp, title: "Business Growth", desc: "Master the tools needed to scale and automate your business." },
    ],
  },
  es: {
    tagline: "Aprendiendo Habilidades para el Futuro",
    title: "Innovation Campus Academy",
    subtitle: "Ofrecemos cursos y talleres diseñados específicamente para proporcionar a emprendedores, propietarios de pequeñas empresas y profesionales los conocimientos necesarios para prosperar en el mercado moderno.",
    highlights: [
      { icon: Lightbulb, title: "Instructores Expertos", desc: "Aprende directamente de líderes de la industria y emprendedores." },
      { icon: Code, title: "Habilidades Prácticas", desc: "Talleres prácticos centrados en resultados tangibles." },
      { icon: TrendingUp, title: "Crecimiento Empresarial", desc: "Domina las herramientas necesarias para escalar y automatizar tu negocio." },
    ],
  },
  it: {
    tagline: "Imparare le Competenze del Futuro",
    title: "Innovation Campus Academy",
    subtitle: "Offriamo corsi e workshop progettati specificamente per fornire a imprenditori, titolari di piccole imprese e professionisti le conoscenze necessarie per prosperare nel mercato moderno.",
    highlights: [
      { icon: Lightbulb, title: "Istruttori Esperti", desc: "Impara direttamente da leader del settore e imprenditori esperti." },
      { icon: Code, title: "Competenze Pratiche", desc: "Workshop pratici focalizzati su risultati tangibili." },
      { icon: TrendingUp, title: "Crescita Aziendale", desc: "Padroneggia gli strumenti necessari per scalare e automatizzare il tuo business." },
    ],
  },
};

export default function AcademyIntro() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} relative max-w-6xl mx-auto px-6`}>
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">{t.tagline}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t.title}</h2>
          <p className="font-body text-lg text-primary-foreground/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.highlights.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="font-body text-primary-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
