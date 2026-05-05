import { ExternalLink, Calendar, Users, MapPin } from "lucide-react";
import serviceAcademy from "@/assets/service-academy.webp"; // Re-using general academy image for now
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const translations = {
  en: {
    tagline: "Our Offerings",
    title: "Upcoming Courses & Workshops",
    learnMore: "View Details",
    courses: [
      {
        id: "ai-masterclass",
        name: "AI Masterclass for Professionals",
        description: "Learn how to use Artificial Intelligence to save 6-8 hours a week, scale your marketing, and automate your daily business tasks in just one day.",
        date: "Multiple Dates Available",
        location: "Málaga, Milano, Roma",
        audience: "Entrepreneurs & Freelancers",
        url: "https://masterclass-ai-professio-0ooyh79.gamma.site/ai-masterclass",
        highlight: true,
      }
    ]
  },
  es: {
    tagline: "Nuestra Oferta",
    title: "Próximos Cursos y Talleres",
    learnMore: "Ver Detalles",
    courses: [
      {
        id: "ai-masterclass",
        name: "Masterclass de IA para Profesionales",
        description: "Aprende a utilizar la IA para ahorrar 6-8 horas a la semana, escalar tu marketing y automatizar tus tareas empresariales diarias en un solo día.",
        date: "Múltiples fechas disponibles",
        location: "Málaga, Milán, Roma",
        audience: "Emprendedores y Freelancers",
        url: "https://masterclass-ai-professio-0ooyh79.gamma.site/ai-masterclass",
        highlight: true,
      }
    ]
  },
  it: {
    tagline: "La Nostra Offerta",
    title: "Prossimi Corsi e Workshop",
    learnMore: "Vedi Dettagli",
    courses: [
      {
        id: "ai-masterclass",
        name: "Masterclass AI per Professionisti",
        description: "Impara come utilizzare l'AI per risparmiare 6-8 ore a settimana, scalare il tuo marketing e automatizzare il tuo lavoro in un solo giorno.",
        date: "Varie date disponibili",
        location: "Málaga, Milano, Roma",
        audience: "Imprenditori e Freelance",
        url: "https://masterclass-ai-professio-0ooyh79.gamma.site/ai-masterclass",
        highlight: true,
      }
    ]
  }
};

export default function AcademyCourses({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.courses.map((course) => (
            <Card
              key={course.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col ${
                course.highlight
                  ? "border-2 border-primary bg-primary/5 shadow-md"
                  : "border-border"
              }`}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={_s(serviceAcademy)}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <CardHeader className="flex-none">
                <CardTitle className="font-display text-2xl">
                  {course.name}
                </CardTitle>
                <p className="font-body text-sm text-foreground/70 mt-3 leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-body">{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body">{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-body">{course.audience}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-none border-t pt-6 pb-6">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest gap-2"
                >
                  <a href={course.url} target="_blank" rel="noopener noreferrer">
                    {t.learnMore} <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
