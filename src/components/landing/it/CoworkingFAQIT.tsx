import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Posso provare prima di impegnarmi?",
    a: "Sì! Offriamo un giorno di prova gratuito per farti conoscere lo spazio, la comunità e l'atmosfera prima di scegliere un piano.",
  },
  {
    q: "Quali sono gli orari di apertura?",
    a: "I membri con scrivania flessibile hanno accesso dal lunedì al venerdì, dalle 7 alle 23. I membri illimitati godono di accesso 24/7, inclusi weekend e festivi.",
  },
  {
    q: "Posso cambiare piano?",
    a: "Assolutamente. Puoi fare upgrade o downgrade del tuo abbonamento alla fine di ogni ciclo di fatturazione, senza penali.",
  },
  {
    q: "Posso portare ospiti?",
    a: "I membri possono portare ospiti per riunioni nelle aree comuni. Per visite prolungate, sono disponibili pass giornalieri per ospiti a tariffa ridotta.",
  },
  {
    q: "C'è parcheggio nelle vicinanze?",
    a: "La sede sul lungomare ha parcheggio pubblico nelle vicinanze. Il Centro Storico è meglio raggiungibile a piedi o con i mezzi pubblici — è a pochi passi dal centro città.",
  },
];

export default function CoworkingFAQIT() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
            Domande Frequenti
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
