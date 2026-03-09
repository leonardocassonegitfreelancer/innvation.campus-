import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "¿Puedo probar antes de comprometerme?",
    a: "¡Sí! Ofrecemos un día de prueba gratuito para que puedas experimentar el espacio, la comunidad y el ambiente antes de elegir un plan.",
  },
  {
    q: "¿Cuál es el horario de apertura?",
    a: "Los miembros con escritorio flexible tienen acceso de lunes a viernes, de 7:00 a 23:00. Los miembros ilimitados disfrutan de acceso 24/7, incluidos fines de semana y festivos.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Por supuesto. Puedes subir o bajar tu membresía al final de cada ciclo de facturación, sin penalizaciones.",
  },
  {
    q: "¿Puedo traer invitados?",
    a: "Los miembros pueden traer invitados a reuniones en las áreas comunes. Para visitas más largas, hay pases de día para invitados a un precio reducido.",
  },
  {
    q: "¿Hay aparcamiento cerca?",
    a: "La ubicación junto al mar tiene aparcamiento público cercano. El Centro Histórico es mejor acceder a pie o en transporte público — está a pocos pasos del centro de la ciudad.",
  },
];

export default function CoworkingFAQES() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            Preguntas Frecuentes
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
            Preguntas Comunes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
