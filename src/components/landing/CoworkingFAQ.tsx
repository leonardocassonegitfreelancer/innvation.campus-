import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const translations = {
  en: {
    tagline: "FAQ",
    title: "Common Questions",
    faqs: [
      { q: "Can I try before committing?", a: "Yes! We offer a free trial day so you can experience the space, the community, and the vibe before choosing a plan." },
      { q: "What are the opening hours?", a: "Flex desk members have access Monday to Friday, 7 am – 11 pm. Unlimited members enjoy 24/7 access including weekends and holidays." },
      { q: "Can I switch plans?", a: "Absolutely. You can upgrade or downgrade your membership at the end of each billing cycle — no penalties." },
      { q: "Can I bring guests?", a: "Members can bring guests for meetings in common areas. For extended visits, guest day passes are available at a discounted rate." },
      { q: "Is there parking nearby?", a: "The Seaside location has nearby public parking. The Historic Center is best accessed on foot or by public transport — it's steps from the city center." },
    ]
  },
  es: {
    tagline: "FAQ",
    title: "Preguntas Comunes",
    faqs: [
      { q: "¿Puedo probar antes de comprometerme?", a: "¡Sí! Ofrecemos un día de prueba gratuito para que puedas experimentar el espacio, la comunidad y el ambiente antes de elegir un plan." },
      { q: "¿Cuáles son los horarios de apertura?", a: "Los miembros de escritorio flex tienen acceso de lunes a viernes, de 7 am a 11 pm. Los miembros ilimitados disfrutan di acceso 24/7, incluyendo fines de semana y festivos." },
      { q: "¿Puedo cambiar de plan?", a: "Absolutamente. Puedes mejorar o reducir tu suscripción al final de cada ciclo de facturación, sin penalizaciones." },
      { q: "¿Puedo traer invitados?", a: "Los miembros pueden traer invitados para reuniones en áreas comunes. Para visitas prolongadas, hay pases diarios para invitados disponibles con descuento." },
      { q: "¿Hay parking cerca?", a: "La sede de la playa tiene parking público cercano. Al Centro Histórico se accede mejor a pie o en transporte público, está a pocos pasos del centro de la ciudad." },
    ]
  },
  it: {
    tagline: "FAQ",
    title: "Domande Frequenti",
    faqs: [
      { q: "Posso provare prima di abbonarmi?", a: "Sì! Offriamo una giornata di prova gratuita per permetterti di vivere lo spazio, la comunità e l'atmosfera prima di scegliere un piano." },
      { q: "Quali sono gli orari di apertura?", a: "I membri flex desk hanno accesso dal lunedì al venerdì, dalle 7:00 alle 23:00. I membri unlimited godono di accesso 24/7, inclusi fine settimana e festivi." },
      { q: "Posso cambiare piano?", a: "Assolutamente. Puoi potenziare o ridurre il tuo abbonamento alla fine di ogni ciclo di fatturazione, senza penali." },
      { q: "Posso portare ospiti?", a: "I membri possono portare ospiti per riunioni nelle aree comuni. Per visite prolungate, sono disponibili pass giornalieri per ospiti a tariffa scontata." },
      { q: "C'è parcheggio nelle vicinanze?", a: "La sede vicino al mare ha un parcheggio pubblico nelle vicinanze. Il Centro Storico è meglio raggiungibile a piedi o con i mezzi pubblici, a pochi passi dal centro città." },
    ]
  }
};

export default function CoworkingFAQ({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const { ref, isVisible } = useScrollAnimation();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            {t.tagline}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
            {t.title}
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {t.faqs.map((faq, i) => (
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
