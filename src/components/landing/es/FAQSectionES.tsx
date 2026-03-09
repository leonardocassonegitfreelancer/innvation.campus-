import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Puedo usar ambas ubicaciones con una membresía?",
    a: "¡Sí! Todas las membresías te dan acceso tanto al Centro Histórico como al espacio Junto al Mar. Trabaja desde el mundo que mejor se adapte a tu estado de ánimo.",
  },
  {
    q: "¿Ofrecen pases de día o días de prueba?",
    a: "Absolutamente. Ofrecemos pases de un día y un día de prueba gratuito para que puedas experimentar el espacio antes de comprometerte. Solo reserva a través de nuestro formulario de contacto.",
  },
  {
    q: "¿Qué planes de membresía están disponibles?",
    a: "Ofrecemos opciones flexibles: pases de escritorio compartido (diario/semanal/mensual), escritorios dedicados y oficinas privadas. También hay planes personalizados para equipos de 5+ personas.",
  },
  {
    q: "¿Hay acceso 24/7?",
    a: "Los miembros con escritorio dedicado y oficina privada disfrutan de acceso 24/7 en ambas ubicaciones. Los pases de escritorio compartido están disponibles durante el horario regular.",
  },
  {
    q: "¿Organizan eventos?",
    a: "Sí — organizamos eventos comunitarios semanales incluyendo charlas, talleres, noches de networking y demo days mensuales. Ambas ubicaciones organizan eventos, a menudo con diferentes temáticas.",
  },
  {
    q: "¿Puedo reservar salas de reuniones por separado?",
    a: "Las salas de reuniones pueden ser reservadas tanto por miembros como por no miembros. Nuestras salas del Centro Histórico son especialmente populares para reuniones con clientes.",
  },
  {
    q: "¿Hay estacionamiento disponible?",
    a: "La ubicación Junto al Mar tiene estacionamiento público cercano. El Centro Histórico es mejor accesible a pie o en transporte público — está a pasos del centro de la ciudad.",
  },
];

export default function FAQSectionES() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Preguntas y Respuestas</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-colors">{faq.q}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
